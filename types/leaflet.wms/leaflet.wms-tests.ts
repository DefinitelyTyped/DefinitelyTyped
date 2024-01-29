import { Map } from "leaflet";
import * as WMS from "leaflet.wms";

const baseUrl = "http://localhost:8080/geoserver/wms";

const map: Map = new Map("map", {
    center: [37.1259000, -4.7510700],
    zoom: 3,
    minZoom: 8,
});

const source = WMS.source(baseUrl, {
    opacity: 1,
    format: "image/png",
    transparent: true,
    version: "1.1.1",
    layers: "layer1, layer2, layer3",
});

source.getLayer("layer1").addTo(map);
