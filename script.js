const width = 900;
const height = 600;
const svg = d3
  .select(".visual")
  .append("svg")
  .attr("class", "map")
  .attr("width", width)
  .attr("height", height);

const projection = d3.geoAlbersUsa();
const path = d3.geoPath(projection);

d3.json("/data/us.json").then((data) => {
  svg
    .selectAll("path")
    .data(
      data.features.filter(
        (d) => !["Alaska", "Hawaii"].includes(d.properties.NAME)
      )
    )
    .enter()
    .append("path")
    .attr("class", "states")
    .attr("d", path)
    .attr("fill", "#fdb927") // base state color
    .attr("stroke", "white") // white state border
    .attr("stroke-width", 5); // state line width
});
