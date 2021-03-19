import { loadMapData } from "./loadData";
import { renderMap } from "./renderMap";

loadMapData().then((data) => {
  const { geoData, arenaData } = data;
  renderMap(geoData, arenaData);
});
