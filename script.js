const width = 900;
const height = 600;
const svg = d3
  .select(".visual")
  .append("svg")
  .attr("class", "map")
  // .attr("width", width)
  // .attr("height", height);
  .attr("preserveAspectRatio", "xMinYMin meet")
  .attr("viewBox", "0 0 960 500");

const projection = d3.geoAlbersUsa();
const path = d3.geoPath(projection);
var tooltip = d3.select("image").append("div").attr("class", "hidden tooltip");

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

  //map team logo
  d3.json("/data/arenas.geojson").then((data) => {
    // console.log(topojson.feature(data, data));
    let mouseOver = function (d) {
      d3.selectAll("image").transition().duration(200).style("opacity", 0.5);
      d3.select(this)
        .transition()
        .duration(200)
        .style("opacity", 1)
        .style("stroke", "black");
    };

    let mouseLeave = function (d) {
      d3.selectAll("image").transition().duration(200).style("opacity", 0.8);
      d3.select(this).transition().duration(200).style("stroke", "transparent");
    };

    console.log(data.features);
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
