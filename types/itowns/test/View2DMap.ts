import * as itowns from "itowns";

// # Orthographic viewer

// Define geographic extent: CRS, min/max X, min/max Y
const extent = new itowns.Extent(
    "EPSG:3857",
    -20026376.39,
    20026376.39,
    -20048966.10,
    20048966.10,
);

// `viewerDiv` will contain iTowns' rendering area (`<canvas>`)
const viewerDiv = document.getElementById("viewerDiv") as HTMLDivElement;

// Instanciate PlanarView
// By default itowns' tiles geometry have a "skirt" (ie they have a height),
// but in case of orthographic we don't need this feature, so disable it
const view = new itowns.PlanarView(viewerDiv, extent, {
    disableSkirt: true,
    maxSubdivisionLevel: 10,
    camera: { type: itowns.CAMERA_TYPE.ORTHOGRAPHIC },
    placement: new itowns.Extent("EPSG:3857", -20000000, 20000000, -8000000, 20000000),
    controls: {
        // Faster zoom in/out speed
        zoomFactor: 3,
        // prevent from zooming in too much
        maxResolution: 0.005, // a pixel shall not represent a metric size smaller than 5 mm
    },
});

// Add a TMS imagery source
const opensmSource = new itowns.TMSSource({
    isInverted: true,
    // tslint:disable-next-line: no-invalid-template-strings
    url: "http://c.tile.stamen.com/watercolor/${z}/${x}/${y}.jpg",
    networkOptions: { crossOrigin: "anonymous" },
    extent,
    crs: "EPSG:3857",
    attribution: {
        name: "OpenStreetMap",
        url: "http://www.openstreetmap.org/",
    },
});

// Add a TMS imagery layer
const opensmLayer = new itowns.ColorLayer("OPENSM", {
    updateStrategy: {
        type: itowns.STRATEGY_DICHOTOMY,
    },
    source: opensmSource,
});

view.addLayer(opensmLayer);

// Request redraw
view.notifyChange();
