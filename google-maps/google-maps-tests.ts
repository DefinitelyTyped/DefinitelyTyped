

import GoogleMapsLoader = require('google-maps');

GoogleMapsLoader.load(function (google) {
    var uluru = {lat: -25.363, lng: 131.044};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });

    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
});

GoogleMapsLoader.KEY = 'qwertyuiopasdfghjklzxcvbnm';

GoogleMapsLoader.CLIENT = 'yourclientkey';
GoogleMapsLoader.VERSION = '3.14';

GoogleMapsLoader.SENSOR = true;

GoogleMapsLoader.LIBRARIES = ['geometry', 'places'];

GoogleMapsLoader.LANGUAGE = 'fr';

GoogleMapsLoader.release(function () {
    console.log('No google maps api around');
});

GoogleMapsLoader.onLoad(function (google) {
    var uluru = {lat: -25.363, lng: 131.044};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });

    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
});
