import MapboxDraw from '@mapbox/mapbox-gl-draw';

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

// $ExpectError
draw.changeMode('direct_select');

// $ExpectType MapboxDraw
draw.changeMode('simple_select');
