import * as itowns from "itowns";

// # Planar view with one single layer of vector tile

// Define geographic extent: CRS, min/max X, min/max Y
const extent = new itowns.Extent(
    "EPSG:3857",
    -20037508.342789244,
    20037508.342789244,
    -20037508.342789255,
    20037508.342789244,
);

// `viewerDiv` will contain iTowns' rendering area (`<canvas>`)
const viewerDiv = document.getElementById("viewerDiv") as HTMLDivElement;

// Instanciate PlanarView
const view = new itowns.PlanarView(viewerDiv, extent, {
    maxSubdivisionLevel: 20,
    controls: {
        // We do not want the user to zoom out too much
        maxAltitude: 40000000,
        // We want to keep the rotation disabled, to only have a view from the top
        enableRotation: false,
        // Don't zoom too much on smart zoom
        smartTravelHeightMax: 100000,
    },
});

// Defines a VectorTilesSource to load Vector Tiles data from the geoportail
const mvtSource = new itowns.VectorTilesSource({
    style: "https://wxs.ign.fr/essentiels/static/vectorTiles/styles/PLAN.IGN/standard.json",
    // We don't display mountains related data to ease visualisation
    filter: (layer) => !layer["source-layer"].includes("oro_") && !layer["source-layer"].includes("parcellaire"),
});

const mvtLayer = new itowns.ColorLayer("MVT", {
    source: mvtSource,
    addLabelLayer: { performance: true },
});

view.addLayer(mvtLayer);

// Request redraw
view.notifyChange(true);
