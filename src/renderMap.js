import { select, geoAlbersUsa, geoPath, json, selectAll, csv } from "d3";
import * as _d3 from "d3";
import _d3Tip from "d3-tip";
const d3 = { ..._d3, tip: _d3Tip };
import { renderTable } from "./renderTable";

//initialize tip
var tip = d3
  .tip()
  .attr("class", "d3-tip")
  .html(function (d) {
    return `${d.properties.city} ${d.properties.team}`;
  });

export const renderMap = (geoData, arenaData, gameData) => {
  const width = 900;
  const height = 600;
  const mapSvg = select(".map-container")
    .append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0 0 900 600")
    .classed("map", true);
  const projection = geoAlbersUsa();
  const path = geoPath(projection);
  const logoSize = width / 16;

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
    .attr("id", (d) => `${d.properties.abbreviation}`)
    .attr("width", logoSize)
    .attr("height", logoSize)
    .attr("x", function (d) {
      return projection(d.geometry.coordinates)[0] - width / 10 / 2;
    })
    .attr("y", function (d) {
      return projection(d.geometry.coordinates)[1] - height / 6.67 / 2;
    })
    .attr("xlink:href", (d) => d.properties.logo_url)
    .on("mouseover", tip.show)
    .on("mouseout", tip.hide)
    .on("click", (d) => {
      selectAll("table").remove();
      renderTable(d.properties.abbreviation, arenaData, gameData);
    });

  //adjust overlapping logos
  select("#SAC").attr("transform", `translate(0,${-logoSize / 3})`);
  select("#BKN").attr("transform", `translate(${logoSize / 4},0)`);
  select("#NYK").attr("transform", `translate(${-logoSize / 4},0)`);
  select("#PHI").attr(
    "transform",
    `translate(${logoSize / 4},${logoSize / 4})`
  );
  select("#WAS").attr("transform", `translate(${-logoSize / 4},0)`);
  select("#CLE").attr("transform", `translate(${logoSize / 8})`);
  select("#DET").attr("transform", `translate(${-logoSize / 8})`);
};
