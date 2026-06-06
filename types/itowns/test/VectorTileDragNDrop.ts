import * as itowns from "itowns";

const placement = {
    coord: new itowns.Coordinates("EPSG:4326", 2.475, 48.807),
    range: 120000,
};

const viewerDiv = document.getElementById("viewerDiv") as HTMLDivElement;
const view = new itowns.GlobeView(viewerDiv, placement);

let currentLayer: itowns.ColorLayer;

// Drag and drop handler
const fileReader = new FileReader();

let id = 0;
fileReader.onload = function onload(e) {
    id++;
    currentLayer.visible = false;
    const style = JSON.parse(e.target?.result as string);
    console.log(style);

    const source = new itowns.VectorTilesSource({ style });

    const layer = new itowns.ColorLayer(`${style.name} ${id}`, {
        source,
        noTextureParentOutsideLimit: true,
        // addLabelLayer: true, // TODO: Error on example
    });

    view.addLayer(layer);
    currentLayer = layer;
};

// Load the file
function loadStyle(event: Event, files?: FileList) {
    event.preventDefault();
    if (!files) return;

    // Take one at a time
    const file = files[0];
    fileReader.readAsText(file);
}

// Listen to drag and drop actions
document.addEventListener("dragenter", function _(e) {
    e.preventDefault();
}, false);
document.addEventListener("dragover", function _(e) {
    e.preventDefault();
}, false);
document.addEventListener("dragleave", function _(e) {
    e.preventDefault();
}, false);
document.addEventListener("drop", function _(e) {
    loadStyle(e, e.dataTransfer?.files);
}, false);
document.addEventListener("paste", function _(e) {
    loadStyle(e, e.clipboardData?.files);
}, false);
