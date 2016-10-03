/// <reference path="google-maps.d.ts" />

import GoogleMapsLoader = require('google-maps');
 
GoogleMapsLoader.load(function(google) {
    var loadedMap = google.maps.Map;
});

GoogleMapsLoader.KEY = 'qwertyuiopasdfghjklzxcvbnm';

GoogleMapsLoader.CLIENT = 'yourclientkey';
GoogleMapsLoader.VERSION = '3.14';

GoogleMapsLoader.SENSOR = true;

GoogleMapsLoader.LIBRARIES = ['geometry', 'places'];

GoogleMapsLoader.LANGUAGE = 'fr';

GoogleMapsLoader.release(function() {
    console.log('No google maps api around');
});

GoogleMapsLoader.onLoad(function(google) {
    var loadedMap = google.maps.Map;
    console.log('I just loaded google maps api');
});
