const usURL =
  "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-albers-10m.json";

const canvas = d3.select(".canvas");

const projection = d3.geoMercator();
const pathGenerator = d3.geoPath().projection(projection);

d3.json(usURL).then((data, error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
    const states = topojson.feature(data, data.objects.states)

  }
});
