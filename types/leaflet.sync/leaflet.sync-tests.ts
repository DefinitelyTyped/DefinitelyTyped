import * as L from "leaflet";
import "leaflet.sync";

const map1: L.Map = L.map("map1");
const map2: L.Map = L.map("map2");

const layer1 = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
    attribution: "&copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors",
    minZoom: 1,
    maxZoom: 16,
}).addTo(map1);

const layer2 = L.tileLayer("https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png", {
    attribution: "Map tiles by <a href=\"http://stamen.com\">Stamen Design</a>, "
        + "<a href=\"http://creativecommons.org/licenses/by/3.0\">CC BY 3.0</a> &mdash; "
        + "Map data {attribution.OpenStreetMap}",
    minZoom: 1,
    maxZoom: 16,
}).addTo(map2);

map1.sync(map2);
map2.sync(map1);

console.log(map1.isSynced(map2));
console.log(map2.isSynced(map1));
