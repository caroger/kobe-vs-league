import { select, csv, scaleLinear, max, scaleBand } from "d3";

const svg = select("svg");
const width = parseFloat(svg.attr("width"));
const height = parseFloat(svg.attr("height"));

const render = (data) => {
  const xValue = (d) => d.population;
  const yValue = (d) => d.country;

  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, width]);

  const yScale = scaleBand().domain(data.map(yValue)).range([0, height]);
  svg
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("y", (d) => yScale(yValue(d)))
    .attr("width", (d) => xScale(xValye(d)))
    .attr("height", yScale.bandwidth());
};

csv("../assets/data/data.csv").then((data) => {
  data.forEach((d) => {
    d.population = +d.population * 1000;
  });
  render(data);
});
