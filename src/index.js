import { select, geoAlbersUsa, geoPath, json, selectAll, csv } from "d3";

const width = 900;
const height = 600;
const svg = select(".visual")
  .append("svg")
  .attr("class", "map")
  .attr("preserveAspectRatio", "xMinYMin meet")
  .attr("viewBox", "0 0 960 500");

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
};

const mouseLeave = function (d) {
  selectAll("image").transition().duration(100).style("opacity", 0.8);
  select(this).transition().duration(100).style("stroke", "transparent");
};

Promise.all([
  json("./assets/data/gz_2010_us_040_00_20m.json"),
  json("./assets/data/arenas.geojson"),
  csv("./assets/data/game_stats.csv"),
]).then(([mapData, arenaData, gameData]) => {
  const gamesByOpponents = gameData.reduce((r, a) => {
    r[a.OPPONENTS] = r[a.OPPONENTS] || [];
    r[a.OPPONENTS].push(a);
    return r;
  }, Object.create(null));

  console.log(gameData);
  console.log(gamesByOpponents["ATL"]);

  svg
    .selectAll("path")
    .data(
      mapData.features.filter(
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

  svg
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
    .on("mouseleave", mouseLeave);
});
