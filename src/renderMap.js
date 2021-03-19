import { select, geoAlbersUsa, geoPath, json, selectAll, csv } from "d3";
import * as _d3 from "d3";
import _d3Tip from "d3-tip";
const d3 = { ..._d3, tip: _d3Tip };

//initialize tip
var tip = d3
  .tip()
  .attr("class", "d3-tip")
  .html(function (d) {
    return `${d.properties.abbreviation}`;
  });

// Helper functions with mouseOver effects
const mouseOver = function (d) {
  selectAll("image").transition().duration(100).style("opacity", 0.5);
  select(this)
    .transition()
    .duration(200)
    .style("opacity", 1)
    .style("stroke", "black");
};

const mouseLeave = function (d) {
  selectAll("image").transition().duration(100).style("opacity", 0.8);
  select(this)
    .transition()
    .duration(100)
    .style("stroke", "transparent")
    // .call(tip);
};

// initialize tip

export const renderMap = (geoData, arenaData) => {
  const width = 900;
  const height = 600;
  const mapSvg = select(".map-container").append("svg").attr("class", "map");
  const projection = geoAlbersUsa();
  const path = geoPath(projection);

  mapSvg
    .selectAll("path")
    .data(geoData)
    .enter()
    .append("path")
    .attr("class", "state")
    .attr("d", path)
    .attr("fill", "#fdb927") // base state color
    .attr("stroke", "white") // white state border
    .attr("stroke-width", 5); // state line width

  mapSvg.call(tip);
  mapSvg
    .selectAll("logo")
    .data(arenaData)
    .enter()
    .append("svg:image")
    .attr("class", "logo-svg")
    .attr("width", width / 10)
    .attr("height", height / 6.67)
    .attr("x", function (d) {
      return projection(d.geometry.coordinates)[0] - width / 10 / 2;
    })
    .attr("y", function (d) {
      return projection(d.geometry.coordinates)[1] - height / 6.67 / 2;
    })
    .attr("xlink:href", (d) => d.properties.logo_url)
    .on("mouseover", tip.show)
    .on("mouseout", tip.hide);
};
