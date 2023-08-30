import * as L from "leaflet";
import "leaflet-side-by-side";

const map: L.Map = L.map("map");

const layer1 = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
    attribution: "&copy; <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors",
    minZoom: 1,
    maxZoom: 16,
}).addTo(map);

const layer2 = L.tileLayer("https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png", {
    attribution: "Map tiles by <a href=\"http://stamen.com\">Stamen Design</a>, "
        + "<a href=\"http://creativecommons.org/licenses/by/3.0\">CC BY 3.0</a> &mdash; "
        + "Map data {attribution.OpenStreetMap}",
    minZoom: 1,
    maxZoom: 16,
}).addTo(map);

L.control.sideBySide(layer1, layer2).addTo(map);
