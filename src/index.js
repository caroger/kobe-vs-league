import { loadMapData } from "./loadData";
import { renderMap } from "./renderMap";
import { renderTable } from "./renderTable";

loadMapData().then((data) => {
  const { geoData, arenaData, gameData } = data;
  renderMap(geoData, arenaData);
  renderTable(gameData, "POR");
});
