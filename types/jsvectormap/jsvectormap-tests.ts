import jsVectorMap = require("jsvectormap");

const container = document.getElementById("map")!;

////////////////////////////////////////////////////////////////////////////////////////
// Construction

// The library also registers itself as a browser global.
new window.jsVectorMap({
    selector: container,
});

new jsVectorMap({ selector: "#map" }); // $ExpectType jsVectorMap
new jsVectorMap({ selector: container, map: "world" }); // $ExpectType jsVectorMap
// @ts-expect-error
new jsVectorMap({});
// @ts-expect-error
new jsVectorMap({ selector: "#map", notAnOption: true });
// @ts-expect-error
new jsVectorMap({ selector: 1 });

const map = new jsVectorMap({
    selector: "#map",
    map: "world",
    backgroundColor: "#1f2937",
    draggable: true,
    zoomButtons: true,
    zoomInButton: "#zoom-in",
    zoomOutButton: container,
    zoomOnScroll: true,
    zoomOnScrollSpeed: 3,
    zoomMax: 12,
    zoomMin: 1,
    zoomAnimate: true,
    zoomStep: 1.5,
    showTooltip: true,
    bindTouchEvents: true,
    regionsSelectable: true,
    regionsSelectableOne: false,
    markersSelectable: true,
    markersSelectableOne: false,
    selectedRegions: ["US", "FR"],
    selectedMarkers: ["0"],
    regionStyle: {
        initial: { fill: "#d1d5db", fillOpacity: 1, stroke: "none" },
        hover: { fillOpacity: 0.7, cursor: "pointer" },
        selected: { fill: "#2563eb" },
        selectedHover: { fill: "#1d4ed8" },
    },
    regionLabelStyle: {
        initial: { fontFamily: "Verdana", fontSize: 12, fontWeight: 500, fill: "#35373e" },
    },
    markerStyle: {
        initial: { r: 6, fill: "#374151", stroke: "#fff", strokeWidth: 5, strokeOpacity: 0.5 },
        hover: { fill: "#111827" },
    },
    markerLabelStyle: {
        initial: { fontFamily: "Verdana", fontSize: 13 },
    },
    lineStyle: {
        stroke: "#808080",
        strokeWidth: 1,
        strokeLinecap: "round",
        strokeDasharray: "6 3 6",
        curvature: 0.5,
        // Unknown SVG presentation attributes are allowed.
        animation: true,
    },
    markers: [
        { name: "Egypt", coords: [26.8206, 30.8025] },
        { name: "Russia", coords: [61.524, 105.3188], style: { initial: { fill: "#f97316" } } },
    ],
    lines: [
        { from: "Egypt", to: "Russia" },
        { from: "Russia", to: "Egypt", style: { stroke: "#3b82f6", curvature: 0 } },
    ],
    labels: {
        regions: {
            render: (code: string) => code,
        },
        markers: {
            render: (marker: jsVectorMap.MarkerConfig) => marker.name,
            offsets: (key) => (key === 0 ? [0, -8] : [0, -12]),
        },
    },
    focusOn: {
        regions: ["EG", "RU"],
        animate: true,
    },
    onLoaded(instance) {
        instance; // $ExpectType jsVectorMap
        this.setBackgroundColor("#fff");
    },
    onViewportChange(scale, transX, transY) {
        scale; // $ExpectType number
        transX; // $ExpectType number
        transY; // $ExpectType number
    },
    onRegionClick(event, code) {
        event; // $ExpectType MouseEvent
        code; // $ExpectType string
        this.setSelectedRegions(code);
    },
    onRegionSelected(code, isSelected, selectedRegions) {
        code; // $ExpectType string
        isSelected; // $ExpectType boolean
        selectedRegions; // $ExpectType string[]
    },
    onMarkerClick(event, index) {
        event.preventDefault();
        index; // $ExpectType string
    },
    onMarkerSelected(index, isSelected, selectedMarkers) {
        index; // $ExpectType string
        isSelected; // $ExpectType boolean
        selectedMarkers; // $ExpectType string[]
    },
    onRegionTooltipShow(event, tooltip, code) {
        tooltip; // $ExpectType Tooltip
        tooltip.text(`<b>${code}</b>`, true);
        if (code === "RU") {
            event.preventDefault();
        }
    },
    onMarkerTooltipShow(event, tooltip, index) {
        event; // $ExpectType MouseEvent
        tooltip.css({ backgroundColor: "#fff" }); // $ExpectType Tooltip
        tooltip.text(index);
    },
    onDestroyed() {
        this.container; // $ExpectType HTMLElement
    },
});

////////////////////////////////////////////////////////////////////////////////////////
// Instance state

map.container; // $ExpectType HTMLElement
map.canvas; // $ExpectType SVGCanvasElement
map.scale; // $ExpectType number
map.transX; // $ExpectType number
map.transY; // $ExpectType number
map.params.zoomMax.toFixed(1);
map.regions["US"]; // $ExpectType RegionEntry
map.regions["US"].config.name; // $ExpectType string | undefined
map.regions["US"].element.select(true); // $ExpectType void

////////////////////////////////////////////////////////////////////////////////////////
// General

map.setBackgroundColor("#fff"); // $ExpectType void
// $ExpectType void
map.extend("focusOnRegion", function(code: string) {
    this.setFocus({ region: code, animate: true });
});
map.reset(); // $ExpectType void
// @ts-expect-error
map.setBackgroundColor();

////////////////////////////////////////////////////////////////////////////////////////
// Regions

map.getSelectedRegions(); // $ExpectType string[]
map.setSelectedRegions("US"); // $ExpectType void
map.setSelectedRegions(["US", "FR"]); // $ExpectType void
map.clearSelectedRegions(); // $ExpectType void
map.clearSelectedRegions("US"); // $ExpectType void
map.clearSelectedRegions(["US", "FR"]); // $ExpectType void
// @ts-expect-error
map.setSelectedRegions();
// @ts-expect-error
map.setSelectedRegions(1);

////////////////////////////////////////////////////////////////////////////////////////
// Markers

map.getSelectedMarkers(); // $ExpectType string[]
map.setSelectedMarkers("0"); // $ExpectType void
map.setSelectedMarkers(["0", "1"]); // $ExpectType void
map.setSelectedMarkers([0, "1"]); // $ExpectType void
map.clearSelectedMarkers(); // $ExpectType void
map.addMarkers({ name: "Cairo", coords: [30.0444, 31.2357] }); // $ExpectType void
// $ExpectType void
map.addMarkers([
    { coords: [26.8206, 30.8025], offsets: [0, -8] },
    { coords: [61.524, 105.3188], style: { initial: { image: "/pin.png" } } },
    { coords: [51.5074, -0.1278], style: { initial: { image: { url: "/pin.png", offset: [0, -8] } } } },
    // Extra properties are forwarded to the label `render` callback.
    { coords: [48.8566, 2.3522], population: 2_140_000 },
]);
map.removeMarkers(); // $ExpectType void
map.removeMarkers([0, "1"]); // $ExpectType void
// @ts-expect-error
map.addMarkers({ name: "Cairo" });
// @ts-expect-error
map.addMarkers({ coords: [1, 2, 3] });

////////////////////////////////////////////////////////////////////////////////////////
// Lines

map.addLines({ from: "Egypt", to: "Russia" }); // $ExpectType void
// $ExpectType void
map.addLines([
    { from: "Egypt", to: "Russia" },
    { from: "Russia", to: "Egypt", style: { stroke: "#3b82f6", strokeWidth: 2, curvature: 0 } },
]);
map.removeLines([{ from: "Egypt", to: "Russia" }]); // $ExpectType void
map.removeLines(); // $ExpectType void
// @ts-expect-error
map.addLines({ from: "Egypt" });

// Deprecated single-line helpers.
map.addLine("Egypt", "Russia", { stroke: "#000" }); // $ExpectType void
map.removeLine("Egypt", "Russia"); // $ExpectType void

////////////////////////////////////////////////////////////////////////////////////////
// Viewport & geometry

map.setFocus({ region: "US" }); // $ExpectType void
map.setFocus({ regions: ["US", "FR"], animate: true }); // $ExpectType void
map.setFocus({ coords: [26.8206, 30.8025], scale: 5, animate: false }); // $ExpectType void
map.updateSize(); // $ExpectType void
map.coordsToPoint(26.8206, 30.8025); // $ExpectType false | Point
map.getInsetForPoint(120, 240); // $ExpectType MapDataInset | undefined
map.getMarkerPosition({ coords: [26.8206, 30.8025] }); // $ExpectType false | Point
// @ts-expect-error
map.setFocus({ region: ["US"] });

////////////////////////////////////////////////////////////////////////////////////////
// SVG canvas

const group = map.canvas.createGroup("markers-group"); // $ExpectType SVGGroupElement
const circle = map.canvas.createCircle({ cx: 10, cy: 20, r: 5 }, { initial: { fill: "#f00" } }, group);
circle; // $ExpectType SVGShapeElement
circle.isHovered; // $ExpectType boolean
circle.isSelected; // $ExpectType boolean
circle.setStyle("fill", "#00f"); // $ExpectType void
circle.setStyle({ fill: "#00f", strokeWidth: 2 }); // $ExpectType void
circle.updateStyle(); // $ExpectType void
circle.getBBox(); // $ExpectType DOMRect
circle.remove(); // $ExpectType void

map.canvas.createPath({ d: "M0,0L10,10Z" }); // $ExpectType SVGShapeElement
map.canvas.createText({ x: 0, y: 0 }); // $ExpectType SVGTextElement
map.canvas.createImage({ x: 0, y: 0 }); // $ExpectType SVGImageElement
map.canvas.setSize(600, 400); // $ExpectType void
map.canvas.applyTransformParams(2, 10, 10); // $ExpectType void
map.canvas.node; // $ExpectType SVGSVGElement

////////////////////////////////////////////////////////////////////////////////////////
// Series, legends & data visualization

const seriesMap = new jsVectorMap({
    selector: "#series-map",
    series: {
        regions: [{
            attribute: "fill",
            values: { US: 100, FR: "50" },
            scale: { 100: "#4f46e5", 50: "#a5b4fc" },
            legend: {
                vertical: true,
                title: "GDP",
                cssClass: "jvm-legend",
                labelRender: (label) => label.toUpperCase(),
            },
        }],
        markers: [{
            attribute: "fill",
            values: { 0: 25 },
            attributes: { fill: "#111827" },
        }],
    },
    visualizeData: {
        scale: ["#c8eeff", "#0071a4"],
        values: { US: 100, FR: 50 },
    },
});

seriesMap.series?.regions[0].setValues({ US: 20 }); // $ExpectType void | undefined
seriesMap.series?.markers[0].clear(); // $ExpectType void | undefined
seriesMap.series?.regions[0].scale.getValue(20); // $ExpectType string | ImageStyle | undefined
seriesMap.legendHorizontal; // $ExpectType HTMLElement | null | undefined
seriesMap.legendVertical; // $ExpectType HTMLElement | null | undefined
seriesMap.dataVisualization?.getValue(50); // $ExpectType string | undefined
seriesMap.dataVisualization?.hexToRgb("#0071a4"); // $ExpectType [number, number, number] | undefined

////////////////////////////////////////////////////////////////////////////////////////
// Statics

jsVectorMap.maps["world"]; // $ExpectType MapData
jsVectorMap.defaults.zoomMax; // $ExpectType number | undefined
// $ExpectType void
jsVectorMap.addMap("egypt", {
    width: 900,
    height: 440,
    paths: {
        EG: { path: "M0,0L10,10Z", name: "Egypt" },
    },
    insets: [{
        width: 900,
        height: 440,
        top: 0,
        left: 0,
        bbox: [{ x: 0, y: 0 }, { x: 900, y: 440 }],
    }],
    projection: { type: "merc", centralMeridian: 11.5 },
});
// @ts-expect-error
jsVectorMap.addMap("egypt", { width: 900, height: 440, paths: {}, projection: { type: "utm", centralMeridian: 0 } });

////////////////////////////////////////////////////////////////////////////////////////
// Standalone type usage

const markers: jsVectorMap.MarkerConfig[] = [{ name: "Cairo", coords: [30.0444, 31.2357] }];
const lineStyle: jsVectorMap.LineStyle = { stroke: "#000", strokeWidth: 1, curvature: 0.3 };
const focus: jsVectorMap.FocusConfig = { coords: [30.0444, 31.2357], scale: 4 };
const projection: jsVectorMap.MapProjection = { type: "mill", centralMeridian: 0 };

map.addMarkers(markers);
map.addLine("Cairo", "Cairo", lineStyle);
map.setFocus(focus);
projection.type; // $ExpectType ProjectionType

////////////////////////////////////////////////////////////////////////////////////////
// Teardown

map.destroy(); // $ExpectType void
map.destroy(false); // $ExpectType void
seriesMap.destroy(true); // $ExpectType void
