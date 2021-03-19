import { select, geoAlbersUsa, geoPath, json, selectAll, csv } from "d3";
import * as _d3 from "d3";
import _d3Tip from "d3-tip";
import { loadMapData } from "./loadData";

// load data
// let geoData;
// let arenaData;

loadMapData().then((data) => {
  const { geoData, arenaData } = data;
  console.log(geoData);
  console.log(arenaData);
});

const d3 = { ..._d3, tip: _d3Tip };
// import { loadMapData } from "./loadData";
// import $ from "jquery";

const width = 900;
const height = 600;
const mapSvg = select(".map-container").append("svg").attr("class", "map");
// .attr("width", width)
// .attr("height", height)
// .attr("preserveAspectRatio", "xMinYMin meet")
// .attr("viewBox", "0 0 960 600");

const projection = geoAlbersUsa();
const path = geoPath(projection);

// Helper functions with mouseOver effects
const mouseOver = function (d) {
  selectAll("image").transition().duration(100).style("opacity", 0.5);
  select(this)
    .transition()
    .duration(200)
    .style("opacity", 1)
    .style("stroke", "black");
  console.log(d);
};

const mouseLeave = function (d) {
  selectAll("image").transition().duration(100).style("opacity", 0.8);
  select(this).transition().duration(100).style("stroke", "transparent");
};

// initialize tip

var tip = d3
  .tip()
  .attr("class", "d3-tip")
  .html(function (d) {
    return `${d.properties.abbreviation}`;
  });

Promise.all([
  json("./assets/data/gz_2010_us_040_00_20m.json"),
  json("./assets/data/arenas.geojson"),
  csv("./assets/data/game_stats.csv"),
]).then(([mapData, arenaData, gameData]) => {
  mapSvg
    .selectAll("path")
    .data(
      mapData.features.filter(
        (d) => !["Alaska", "Hawaii"].includes(d.properties.NAME)
      )
    )
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
    .data(arenaData.features)
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
    .on("mouseleave", mouseLeave)
    .on("mouseover", tip.show)
    .on("mouseout", tip.hide);
});

// const renderTable = (team) => {
//   var table = d3.select(".table-container").append("table");
//   var thead = table.append("thead");
//   var tbody = table.append("tbody");

//   // append the header row
//   thead
//     .append("tr")
//     .selectAll("th")
//     .data(columns)
//     .enter()
//     .append("th")
//     .text(function (column) {
//       return column;
//     });

//   // create a row for each object in the data
//   var rows = tbody.selectAll("tr").data(data).enter().append("tr");

//   // create a cell in each row for each column
//   var cells = rows
//     .selectAll("td")
//     .data(function (row) {
//       return columns.map(function (column) {
//         return { column: column, value: row[column] };
//       });
//     })
//     .enter()
//     .append("td")
//     .text(function (d) {
//       return d.value;
//     });

//   return table;
// };

// renderTable("LAL");
