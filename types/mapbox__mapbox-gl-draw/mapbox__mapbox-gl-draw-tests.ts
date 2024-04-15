import MapboxDraw, {
    constants,
    DrawCustomMode,
    DrawFeature,
    DrawMode,
    DrawUpdateEvent,
    Lib,
    lib,
    MapboxDrawOptions,
} from "@mapbox/mapbox-gl-draw";

const draw = new MapboxDraw({});

// @ts-expect-error
const drawFeature: DrawFeature = {};
// @ts-expect-error
const feature: Feature = {};

// $ExpectType string[]
draw.add({
    type: "FeatureCollection",
    features: [],
});

// accepts string
// $ExpectType MapboxDraw
draw.delete("1");

// accepts string[]
// $ExpectType MapboxDraw
draw.delete(["1", "2"]);

// $ExpectType string[]
draw.getSelectedIds();

// $ExpectType MapboxDraw
draw.changeMode("direct_select", { featureId: "1" });

// @ts-expect-error
draw.changeMode("direct_select");

// $ExpectType MapboxDraw
draw.changeMode("simple_select");

const drawLineSelect: DrawMode = "draw_line_string";
// $ExpectType MapboxDraw
draw.changeMode(drawLineSelect, { featureId: "1", from: [1] });

// $ExpectType MapboxDraw
draw.changeMode("draw_point");

// @ts-expect-error
draw.changeMode("draw_point", {});

// $ExpectType MapboxDraw
draw.changeMode("custom_mode");

// $ExpectType MapboxDraw
draw.changeMode("custom_mode", {});

if (draw.getMode() === "draw_line_string") {
}

if (draw.getMode() === "some_custom_mode") {
}

// $ExpectType "direct_select"
draw.modes.DIRECT_SELECT;

// $ExpectType "simple_select"
constants.modes.SIMPLE_SELECT;

// $ExpectType DrawCustomMode<any, any>
MapboxDraw.modes.direct_select;

function callback(event: DrawUpdateEvent) {
    // $ExpectType "draw.update"
    event.type;
}

interface CustomMode extends DrawCustomMode<{}, {}> {
    customMethod(): number;
}

const customMode: CustomMode = {
    onClick(state, e) {
        // $ExpectType LngLat
        e.lngLat;
        // $ExpectType DrawFeature
        e.featureTarget;

        // $ExpectType Map
        this.map;

        // $ExpectType boolean | undefined
        this.drawConfig.displayControlsDefault;

        this.setSelectedCoordinates([
            {
                coord_path: "0",
                feature_id: "1",
            },
        ]);

        this.setSelected();
        this.setSelected("1");
        this.setSelected(["1", "2"]);

        // $ExpectType DrawFeature
        this.getFeature("1");

        // $ExpectType number
        this.customMethod();

        // $ExpectType void
        this.updateUIClasses({ mouse: constants.cursors.ADD });

        // $ExpectType void
        this.changeMode(constants.modes.SIMPLE_SELECT);

        // $ExpectType (e: MapMouseEvent | MapTouchEvent) => boolean
        lib.CommonSelectors.isOfMetaType("feature");

        // $ExpectType boolean
        lib.CommonSelectors.isVertex(e);

        // $ExpectType { lng: number; lat: number; }
        lib.constrainFeatureMovement([drawFeature], { lng: e.lngLat.lng, lat: e.lngLat.lat });

        // $ExpectType Feature<Point, GeoJsonProperties> | null
        lib.createMidPoint("1", feature, feature);

        // $ExpectType Feature<Point, GeoJsonProperties>[]
        lib.createSupplementaryPoints(feature, { midpoints: false });

        // $ExpectType Feature<Point, GeoJsonProperties>
        lib.createVertex("1", [e.lngLat.lng, e.lngLat.lat], "0", true);

        // $ExpectType number
        lib.euclideanDistance({ x: 10, y: 20 }, { x: 100, y: 200 });

        // lib.doubleClickZoom.disable(this);
        // lib.doubleClickZoom.enable(this);
        // lib.getFeatureAtAndSetCursors(e, this);

        // $ExpectType boolean
        lib.isClick({}, { point: { x: 10, y: 20 }, time: 200 });

        // $ExpectType boolean
        lib.isEventAtCoordinates(e, [[10, 180]]);

        // $ExpectType boolean
        lib.isTap({ point: { x: 5, y: 10 }, time: 50 }, { point: { x: 10, y: 20 }, time: 200 });

        // $ExpectType Position[]
        lib.mapEventToBoundingBox(e);

        // TODO: add tests to ModeHandler

        // $ExpectType void
        lib.moveFeatures([drawFeature], { lng: 12, lat: 13 });

        // $ExpectType DrawFeature[]
        lib.sortFeatures([drawFeature]);

        // $ExpectType boolean
        lib.stringSetsAreEqual([{ id: "Feature1" }, { id: "Feature2" }], [{ id: "Feature1" }, { id: "Feature2" }]);

        // $ExpectType StringSet
        lib.StringSet(["1", 2]);

        const FabricDrawingManagerStyles: Lib["theme"] = [
            {
                id: "gl-draw-polygon-fill-inactive",
                type: "fill",
            },
        ];

        const FabricDrawingManagerStylesError: Lib["theme"] = [
            {
                // @ts-expect-error
                id: "xxx",
                // @ts-expect-error
                type: "any-other-type",
            },
        ];

        // $ExpectType any[]
        lib.toDenseArray(["", undefined, 1]);
    },

    toDisplayFeatures(state, geojson, display) {},

    customMethod(): number {
        return 1;
    },
};

// @ts-expect-error
const CustomModeMissingDisplayFeatures: DrawCustomMode<{}, {}> = {};

const options: MapboxDrawOptions = {
    modes: {
        custom_mode: customMode,
        ...MapboxDraw.modes,
    },
};

const drawWithCustomMode = new MapboxDraw(options);

// $ExpectType void
drawFeature.changed();

// $ExpectType boolean
drawFeature.isValid();

// $ExpectType Position
drawFeature.getCoordinate("");

// $ExpectType void
drawFeature.updateCoordinate("", 0, 0);

// $ExpectType void
drawFeature.setProperty("", 0);

// $ExpectType GeoJSON
drawFeature.toGeoJSON();

if (drawFeature.type === "Point") {
    // $ExpectType Position
    drawFeature.coordinates;

    // $ExpectType Position
    drawFeature.getCoordinate();

    // $ExpectType void
    drawFeature.updateCoordinate(0, 0);
}

if (drawFeature.type === "LineString") {
    // $ExpectType Position[]
    drawFeature.coordinates;

    // $ExpectType void
    drawFeature.addCoordinate("", 0, 0);

    // $ExpectType void
    drawFeature.removeCoordinate("");
}

if (drawFeature.type === "Polygon") {
    // $ExpectType Position[][]
    drawFeature.coordinates;

    // $ExpectType void
    drawFeature.addCoordinate("", 0, 0);

    // $ExpectType void
    drawFeature.removeCoordinate("");
}

if (drawFeature.type === "MultiPoint") {
    // $ExpectType DrawPoint[]
    drawFeature.features;
}

if (drawFeature.type === "MultiLineString") {
    // $ExpectType DrawLineString[]
    drawFeature.features;
}

if (drawFeature.type === "MultiPolygon") {
    // $ExpectType DrawPolygon[]
    drawFeature.features;
}
