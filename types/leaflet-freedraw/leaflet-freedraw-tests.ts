import { Map } from "leaflet";
import FreeDraw, { CREATE, EDIT } from "leaflet-freedraw";

const mapNode = document.getElementById("foo")!;
const map = new Map(mapNode);

const freeDraw = new FreeDraw({
    mode: CREATE | EDIT,
});

map.addLayer(freeDraw);

freeDraw.on("markers", event => {
    console.log(event.latLngs);

    if (event.eventType === "create") {
        console.log("this is a create event");
    }

    if (event.eventType === "remove") {
        console.log("this is a remove event");
    }

    if (event.eventType === "clear") {
        console.log("this is a clear event");
    }
});

document.addEventListener("keydown", event => {
    // Cancel the current action when the escape key is pressed.
    event.key === "Escape" && freeDraw.cancel();
});

freeDraw.off("markers");

const windowFreeDraw = window.FreeDraw;
const freeDraw2 = new windowFreeDraw({
    mode: windowFreeDraw.CREATE | windowFreeDraw.DELETE,
});
map.addLayer(freeDraw2);
