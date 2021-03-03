import * as d3 from "d3";

const us = d3
  .json(
    "https://gist.githubusercontent.com/ipeter50/f70acb9dfb5a0285a61278e1e177d489/raw/5223819a98dd722398037822da8548365f6cf470/us.json"
  )
  .then((data) => console.log(data));

const map_svg = d3.select(".map_svg");
map_svg.style("background-color", "red");
