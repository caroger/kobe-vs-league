import { json } from "d3";

export const loadMapData = () => {
  let geoData;
  let arenaData;
  return Promise.all([
    json("./assets/data/gz_2010_us_040_00_20m.json"),
    json("./assets/data/arenas.geojson"),
  ]).then(([d1, d2]) => {
    geoData = d1.features.filter(
      (d) => !["Alaska", "Hawaii"].includes(d.properties.NAME)
    );
    arenaData = d2.features;
    return { geoData, arenaData };
  });
};
