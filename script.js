const svg = d3.select(".canvas");
const path = d3.geoPath();


d3.json("./data/counties-albers-10m.json").then((us, error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(us);
    svg
      .append("g")
      .attr("class", "states")
      .selectAll("path")
      .data(
        topojson
          .feature(us, us.objects.states)
          .features.filter((d) => d.id !== "02" && d.id !== "15") //only display main 48 states
      )
      .enter()
      .append("path")
      .attr("d", path)
      .attr("fill", "#fdb927")
      .attr("stroke", "white")
      .attr("stroke-width", 5);
    console.log(topojson.feature(us, us.objects.states).features);

    // svg
    //   .append("path")
    //   .attr("class", "state-borders")
    //   .attr("stroke-width", 10)
    //   .attr(
    //     "d",
    //     path(
    //       topojson.mesh(us, us.objects.states, function (a, b) {
    //         return a !== b;
    //       })
    //     )
    //   );
  }
});
