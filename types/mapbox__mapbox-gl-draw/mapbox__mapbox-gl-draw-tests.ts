import MapboxDraw, {
    DrawCustomMode,
    DrawFeature,
    DrawMode,
    DrawUpdateEvent,
    Lib,
    MapboxDrawOptions,
    constants,
    lib,
} from '@mapbox/mapbox-gl-draw';

const draw = new MapboxDraw({});

// @ts-expect-error
const feature: DrawFeature = {};

// $ExpectType string[]
draw.add({
    type: 'FeatureCollection',
    features: [],
});

// accepts string
// $ExpectType MapboxDraw
draw.delete('1');

// accepts string[]
// $ExpectType MapboxDraw
draw.delete(['1', '2']);

// $ExpectType string[]
draw.getSelectedIds();

// $ExpectType MapboxDraw
draw.changeMode('direct_select', { featureId: '1' });

// @ts-expect-error
draw.changeMode('direct_select');

// $ExpectType MapboxDraw
draw.changeMode('simple_select');

const drawLineSelect: DrawMode = 'draw_line_string';
// $ExpectType MapboxDraw
draw.changeMode(drawLineSelect, { featureId: '1', from: [1] });

// $ExpectType MapboxDraw
draw.changeMode('draw_point');

// @ts-expect-error
draw.changeMode('draw_point', {});

// $ExpectType MapboxDraw
draw.changeMode('custom_mode');

// $ExpectType MapboxDraw
draw.changeMode('custom_mode', {});

if (draw.getMode() === 'draw_line_string') {
}

if (draw.getMode() === 'some_custom_mode') {
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
                coord_path: '0',
                feature_id: '1',
            },
        ]);

        this.setSelected();
        this.setSelected('1');
        this.setSelected(['1', '2']);

        // $ExpectType DrawFeature
        this.getFeature('1');

        // $ExpectType number
        this.customMethod();

        // $ExpectType void
        this.updateUIClasses({ mouse: constants.cursors.ADD });

        // $ExpectType void
        this.changeMode(constants.modes.SIMPLE_SELECT);

        // $ExpectType boolean
        lib.CommonSelectors.isVertex(e);

        // $ExpectType number
        lib.constrainFeatureMovement([feature], { lng: e.lngLat.lng, lat: e.lngLat.lat });

        // $ExpectType GeoJSON
        lib.createMidPoint('1', feature, feature);

        // $ExpectType GeoJSON[]
        lib.createSupplementaryPoints(feature, { midpoints: false });

        // $ExpectType GeoJSON
        lib.createVertex('1', [e.lngLat.lng, e.lngLat.lat], '0', true);

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
        lib.moveFeatures([feature], { lng: 12, lat: 13 });

        // $ExpectType DrawFeature[]
        lib.sortFeatures([feature]);

        // $ExpectType boolean
        lib.stringSetsAreEqual([{ id: 'Feature1' }, { id: 'Feature2' }], [{ id: 'Feature1' }, { id: 'Feature2' }]);

        // $ExpectType StringSet
        lib.StringSet(['1', 2]);

        const FabricDrawingManagerStyles: Lib['theme'] = [
            {
                id: 'gl-draw-polygon-fill-inactive',
                type: 'fill',
            },
        ];

        const FabricDrawingManagerStylesError: Lib['theme'] = [
            {
                // @ts-expect-error
                id: 'xxx',
                // @ts-expect-error
                type: 'any-other-type',
            },
        ];

        // $ExpectType any[]
        lib.toDenseArray(['', undefined, 1]);
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
feature.changed();

// $ExpectType boolean
feature.isValid();

// $ExpectType Position
feature.getCoordinate('');

// $ExpectType void
feature.updateCoordinate('', 0, 0);

// $ExpectType void
feature.setProperty('', 0);

// $ExpectType GeoJSON
feature.toGeoJSON();

if (feature.type === 'Point') {
    // $ExpectType Position
    feature.coordinates;

    // $ExpectType Position
    feature.getCoordinate();

    // $ExpectType void
    feature.updateCoordinate(0, 0);
}

if (feature.type === 'LineString') {
    // $ExpectType Position[]
    feature.coordinates;

    // $ExpectType void
    feature.addCoordinate('', 0, 0);

    // $ExpectType void
    feature.removeCoordinate('');
}

if (feature.type === 'Polygon') {
    // $ExpectType Position[][]
    feature.coordinates;

    // $ExpectType void
    feature.addCoordinate('', 0, 0);

    // $ExpectType void
    feature.removeCoordinate('');
}

if (feature.type === 'MultiPoint') {
    // $ExpectType DrawPoint[]
    feature.features;
}

if (feature.type === 'MultiLineString') {
    // $ExpectType DrawLineString[]
    feature.features;
}

if (feature.type === 'MultiPolygon') {
    // $ExpectType DrawPolygon[]
    feature.features;
}
