import { select, selectAll } from "d3";

export const renderTable = (team, arenaData, gameData) => {
  const logoURL = arenaData.filter(
    (d) => d.properties.abbreviation === `${team}`
  )[0].properties.logo_url;

  select(".opponent-logo").style("background-image", `url(../dist/${logoURL})`);
  console.log(logoURL);

  const stats = Object.entries(gameData[`${team}`]);
  const bgColor =
    arenaData.filter((d) => d.properties.abbreviation === team)[0].properties
      .color || "purple";
  const table = select(".table-container").append("table");
  table.exit().remove();
  const thead = table.append("thead");
  const tbody = table.append("tbody");

  thead
    .append("tr")
    .append("th")
    .attr("colspan", 2)
    .text(`Kobe vs ${team}`)
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

  console.log(bgColor);
};
