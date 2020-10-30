import MapboxDraw from '@mapbox/mapbox-gl-draw';
import { modes } from '@mapbox/mapbox-gl-draw/src/constants';

const draw = new MapboxDraw({});

// accepts any argument
// $ExpectType void
draw.set({
    type: 'FeatureCollection',
    features: []
});

// accepts no arguments
// $ExpectType { features: any[]; }
draw.getAll();

// accepts string
// $ExpectType void
draw.delete('1');

// accepts no arguments
// $ExpectType modes
draw.getMode();

// accepts no arguments
// $ExpectType (string | number)[]
draw.getSelectedIds();

// accepts modes, {featureId: string}
// $ExpectType void
draw.changeMode(modes.DIRECT_SELECT, {featureId: '1'});
