import * as L from "leaflet";
import * as PIXI from "pixi.js";
import "leaflet-pixi-overlay";

const COORDINATES = [51.505, -0.09] as L.LatLngTuple;

// Create mock DOM elements
const mapContainer = document.createElement("div");
document.body.appendChild(mapContainer);
const map = L.map(mapContainer).setView(COORDINATES, 13);

// Basic test
const minimalTest = () => {
    const container = new PIXI.Container();
    const draw = (utils: L.PixiOverlayUtils) => {
        const point = utils.latLngToLayerPoint(COORDINATES);
        const graphics = new PIXI.Graphics();
        graphics.beginFill(0xff0000);
        graphics.drawCircle(point.x, point.y, 10);
        graphics.endFill();
        utils.getContainer().addChild(graphics);
    };

    const overlay = L.pixiOverlay(draw, container);
    map.addLayer(overlay);
    overlay.redraw();
    overlay.destroy();
};

// Options test
const optionsTest = () => {
    const container = new PIXI.Container();
    const overlay = new L.PixiOverlay(
        (utils: L.PixiOverlayUtils) => utils.getScale(),
        container,
        {
            padding: 0.2,
            forceCanvas: true,
            projectionZoom: (m: L.Map) => m.getZoom(),
            shouldRedrawOnMove: (e: L.LeafletEvent) => e.type === "zoomend",
        },
    );
    map.addLayer(overlay);
};

// Utils test
const utilsTest = () => {
    const container = new PIXI.Container();
    const overlay = L.pixiOverlay((utils: L.PixiOverlayUtils) => {
        const point = utils.latLngToLayerPoint(COORDINATES, 10);
        const latLng = utils.layerPointToLatLng(point, 10);
        const scale = utils.getScale(10);
        const renderer = utils.getRenderer();
        const container = utils.getContainer();
        const mapInstance = utils.getMap();
    }, container);
};

// Run tests
minimalTest();
optionsTest();
utilsTest();
