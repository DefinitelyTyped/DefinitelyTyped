/// <reference path="google-maps.d.ts" />

var GoogleMapsLoader = require('google-maps');
 
GoogleMapsLoader.load(function(google) {
    new google.maps.Map(el, options);
});

GoogleMapsLoader.KEY = 'qwertyuiopasdfghjklzxcvbnm';

GoogleMapsLoader.CLIENT = 'yourclientkey';
GoogleMapsLoader.VERSION = '3.14';

GoogleMapsLoader.SENSOR = true

GoogleMapsLoader.LIBRARIES = ['geometry', 'places'];

GoogleMapsLoader.LANGUAGE = 'fr';

GoogleMapsLoader.release(function() {
    console.log('No google maps api around');
});

GoogleMapsLoader.onLoad(function(google) {
    console.log('I just loaded google maps api');
});
