import { select, selectAll } from "d3";

export const renderTable = (data, team) => {
  //convert data to array of objects for d3
  const teamData = Object.entries(data[`${team}`]);
  const table = select(".table-container").append("table");
  table.exit().remove();
  const thead = table.append("thead");
  const tbody = table.append("tbody");

  thead.append("tr").append("th").text(`Kobe vs ${team}`);

  tbody
    .selectAll("tr")
    .data(teamData)
    .enter()
    .append("tr")
    .selectAll("td")
    .data((d) => d)
    .enter()
    .append("td")
    .text((d) => d);

  console.log(teamData);
};
