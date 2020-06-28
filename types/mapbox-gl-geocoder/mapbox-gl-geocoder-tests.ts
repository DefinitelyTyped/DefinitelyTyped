import mapboxgl = require('mapbox-gl');
import geocode = require('./index');

const accessToken = mapboxgl.accessToken = 'foo';

let searchManager = new geocode.MapboxGeocoder({
    mapboxgl,
    accessToken
});

searchManager.setLimit(5);
searchManager.getLimit();






