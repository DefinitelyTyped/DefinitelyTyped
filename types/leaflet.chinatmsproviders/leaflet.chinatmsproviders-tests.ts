import * as L from "leaflet";
import "leaflet.chinatmsproviders";

const map: L.Map = L.map("map-container");

L.tileLayer.chinaProvider('GaoDe.Normal.Map').addTo(map)
