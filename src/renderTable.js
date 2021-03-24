import { select, selectAll } from "d3";

export const renderTable = (team, arenaData, gameData) => {
  const logoURL = arenaData.filter(
    (d) => d.properties.abbreviation === `${team}`
  )[0].properties.logo_url;
  // table heading
  select(".opponent-logo").style("background-image", `url(${logoURL})`);
  //stats to render
  let statsType = "total";
  let stats = Object.entries(gameData[`${statsType}`][`${team}`]);
  let headingText = `Career Total vs ${team}`;
  const bgColor =
    arenaData.filter((d) => d.properties.abbreviation === team)[0].properties
      .color || "purple";
  const table = select(".table-container").append("table");
  const thead = table.append("thead");
  const tbody = table.append("tbody");

  thead
    .append("tr")
    .append("th")
    .attr("colspan", 2)
    .text(headingText)
    .style("background-color", bgColor);

  tbody
    .selectAll("tr")
    .data(stats)
    .enter()
    .append("tr")
    .selectAll("td")
    .data((d) => d)
    .enter()
    .append("td")
    .text((d) => d);

  // dynamically change border-bottom
  tbody
    .selectAll("tr")
    .filter((d, i, list) => {
      return i === list.length - 1;
    })
    .attr("style", `border-bottom: 2px solid ${bgColor}`);
  //toggle different stats to display
  table.on("click", () => {
    switch (statsType) {
      case "total":
        statsType = "mean";
        stats = Object.entries(gameData[`${statsType}`][`${team}`]);
        headingText = `Career Average vs ${team}`;
        break;
      case "mean":
        statsType = "highlight";
        stats = Object.entries(gameData[`${statsType}`][`${team}`]);
        headingText = `Highlights vs ${team}`;
        break;
      case "highlight":
        statsType = "total";
        stats = Object.entries(gameData[`${statsType}`][`${team}`]);
        headingText = `Career Total vs ${team}`;
        break;
      default:
        break;
    }
    updateTable(stats, headingText, bgColor);
    console.log(stats);
  });
};

const updateTable = (stats, headingText, bgColor) => {
  selectAll("tbody").remove();
  selectAll("thead").remove();
  const thead = select("table").append("thead");
  const tbody = select("table").append("tbody");
  thead
    .append("tr")
    .append("th")
    .attr("colspan", 2)
    .text(headingText)
    .style("background-color", bgColor);
  tbody
    .selectAll("tr")
    .data(stats)
    .enter()
    .append("tr")
    .selectAll("td")
    .data((d) => d)
    .enter()
    .append("td")
    .text((d) => d);

  tbody
    .selectAll("tr")
    .filter((d, i, list) => {
      return i === list.length - 1;
    })
    .attr("style", `border-bottom: 2px solid ${bgColor}`);
};
