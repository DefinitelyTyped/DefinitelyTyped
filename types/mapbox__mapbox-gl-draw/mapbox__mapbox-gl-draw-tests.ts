import MapboxDraw, { DrawCustomMode, DrawFeature, DrawMode, DrawUpdateEvent } from '@mapbox/mapbox-gl-draw';

const draw = new MapboxDraw({});

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
draw.changeMode('simple_select');

// $ExpectType MapboxDraw
draw.changeMode('direct_select', { featureId: '1' });

// $ExpectType MapboxDraw
draw.changeMode('some_custom_mode');

// $ExpectType MapboxDraw
draw.changeMode('some_custom_mode', { withSome: 'options' });

const drawLineSelect: DrawMode = 'draw_line_string';
// $ExpectType MapboxDraw
draw.changeMode(drawLineSelect, { featureId: '1', from: [1] });

if (draw.getMode() === 'draw_line_string') {
}

if (draw.getMode() === 'some_custom_mode') {
}

// $ExpectType "direct_select"
draw.modes.DIRECT_SELECT;

// $ExpectType DrawCustomMode<any, any>
MapboxDraw.modes.direct_select;

function callback(event: DrawUpdateEvent) {
    // $ExpectType "draw.update"
    event.type;
}

const CustomMode: DrawCustomMode<{}, {}> = {
    onClick(state, e) {
        // $ExpectType LngLat
        e.lngLat;

        // $ExpectType Map
        this.map;

        // $ExpectType void
        this.changeMode('simple_select');

        // $ExpectType void
        this.changeMode('some_custom_mode');
    },

    toDisplayFeatures(state, geojson, display) {},
};

// @ts-expect-error
const CustomModeMissingDisplayFeatures: DrawCustomMode<{}, {}> = {};

// @ts-expect-error
const feature: DrawFeature = {};

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
