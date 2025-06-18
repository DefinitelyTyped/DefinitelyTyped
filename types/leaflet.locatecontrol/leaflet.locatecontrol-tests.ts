import * as L from "leaflet";
import { LocateControl, type LocateOptions } from "leaflet.locatecontrol";

const map = L.map("map", {
    center: [51.505, -0.09],
    zoom: 13,
});

// Defaults
L.control.locate().addTo(map);

// Simple
const lc = L.control.locate({
    position: "topright",
    strings: {
        title: "Show me where I am, yo!",
    },
    initialZoomLevel: 10,
    showCompass: false,
}).addTo(map);

// Locate Options
map.addControl(L.control.locate({
    locateOptions: {
        maxZoom: 10,
        enableHighAccuracy: true,
    },
}));

let createButtonCallback:
    | ((container: HTMLDivElement, options: L.Control.LocateOptions) => { link: HTMLAnchorElement; icon: HTMLElement })
    | undefined = undefined;
L.control.locate({
    createButtonCallback,
});

// Explicit definition of LocateOptions
const options: LocateOptions = {
    strings: { title: "Select my location" },
    showPopup: false,
    drawMarker: false,
    clickBehavior: {
        inView: "stop",
        outOfView: "setView",
        inViewNotFollowing: "setView",
    },
};

// Usage with bundler or esm
// https://github.com/domoritz/leaflet-locatecontrol/blob/b20d77e4184fdfc59ff0037f8d95471a49af6f81/README.md#with-npm
const locateControl = new LocateControl(options);
map.addControl(locateControl);
