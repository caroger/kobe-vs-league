import { select, geoAlbersUsa, geoPath, json, selectAll } from "d3";
import { topojson } from "topojson";

const width = 900;
const height = 600;
const svg = select(".visual")
  .append("svg")
  .attr("class", "map")
  .attr("preserveAspectRatio", "xMinYMin meet")
  .attr("viewBox", "0 0 960 500");

const projection = geoAlbersUsa();
const path = geoPath(projection);
var tooltip = select("image").append("div").attr("class", "hidden tooltip");

json("./assets/data/us.json").then((data) => {
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

  //map team logo
  json("./assets/data/arenas.geojson").then((data) => {
    let mouseOver = function (d) {
      selectAll("image").transition().duration(200).style("opacity", 0.5);
      select(this)
        .transition()
        .duration(200)
        .style("opacity", 1)
        .style("stroke", "black");
    };

    let mouseLeave = function (d) {
      selectAll("image").transition().duration(200).style("opacity", 0.8);
      select(this).transition().duration(200).style("stroke", "transparent");
    };

    svg
      .selectAll("logo")
      .data(data.features)
      .enter()
      .append("svg:image")
      .attr("width", width / 10)
      .attr("height", height / 6.67)
      .attr("x", function (d) {
        return projection(d.geometry.coordinates)[0] - width / 10 / 2;
      })
      .attr("y", function (d) {
        return projection(d.geometry.coordinates)[1] - height / 6.67 / 2;
      })
      .attr("xlink:href", (d) => d.properties.logo_url)
      .on("mouseover", mouseOver)
      .on("mouseleave", mouseLeave);
  });
});
