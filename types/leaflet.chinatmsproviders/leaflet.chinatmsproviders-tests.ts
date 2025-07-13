import * as L from "leaflet";
import "leaflet.chinatmsproviders";

const map: L.Map = L.map("map-container");

L.tileLayer.chinaProvider("GaoDe.Normal.Map").addTo(map);
L.tileLayer.chinaProvider("Google.Normal.Map").addTo(map);

L.tileLayer("http://xxxxx/{z}/{x}/{y}.png", {
    corrdType: "gcj02",
}).addTo(map);
