import MapboxDraw, { DrawMode, DrawUpdateEvent, DrawCustomMode } from '@mapbox/mapbox-gl-draw';

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
draw.changeMode('direct_select', { featureId: '1' });

// @ts-expect-error
draw.changeMode('direct_select');

// $ExpectType MapboxDraw
draw.changeMode('simple_select');

const drawLineSelect: DrawMode = 'draw_line_string';
// $ExpectType MapboxDraw
draw.changeMode(drawLineSelect, { featureId: '1', from: [1] });

function callback(event: DrawUpdateEvent) {
    // $ExpectType "draw.update"
    event.type;
}

const CustomMode: DrawCustomMode<{}, {}> = {
  onClick(state, e) {
    // $ExpectType LngLat
    e.lngLat;
  },

  toDisplayFeatures(state, geojson, display) {}
};

// @ts-expect-error
const CustomModeMissingDisplayFeatures: DrawCustomMode<{}, {}> = {};
