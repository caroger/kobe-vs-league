import { json } from "d3";

export const loadMapData = () => {
  let geoData;
  let arenaData;
  let gameData;
  return Promise.all([
    json("./assets/data/gz_2010_us_040_00_20m.json"),
    json("./assets/data/arenas.geojson"),
    json("./assets/data/game_stats.json"),
  ]).then(([d1, d2, d3]) => {
    geoData = d1.features.filter(
      (d) => !["Alaska", "Hawaii"].includes(d.properties.NAME)
    );
    arenaData = d2.features;
    gameData = d3;
    return { geoData, arenaData, gameData };
  });
};
