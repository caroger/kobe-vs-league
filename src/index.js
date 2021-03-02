import { select } from "d3";

const svg = select("svg");
const circle = svg.append("circle");

const width = parseFloat(svg.attr("width"));
const height = parseFloat(svg.attr("height"));

circle.attr("r", height / 2);
circle.attr("cx", width / 2);
circle.attr("cy", height / 2);
