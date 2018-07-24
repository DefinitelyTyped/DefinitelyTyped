import WebMercatorViewport from 'viewport-mercator-project';

const mercator = new WebMercatorViewport();

const xy = mercator.project([0, 1]);
const xyz = mercator.project([0, 1, 2]);

const lngLat = mercator.unproject([0, 1]);
const lngLatZ = mercator.unproject([0, 1, 2]);
