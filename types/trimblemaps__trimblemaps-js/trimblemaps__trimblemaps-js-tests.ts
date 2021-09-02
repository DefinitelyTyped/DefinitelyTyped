import TrimbleMaps = require('@trimblemaps/trimblemaps-js');

TrimbleMaps.APIKey = "YOUR_KEY_HERE";

const myMap = new TrimbleMaps.Map({
  container: "myMap",
  center: new TrimbleMaps.LngLat(-96, 35),
  zoom: 3,
});

myMap.on('load', () => {
  // customize your map once loaded
});
