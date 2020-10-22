import GoogleMapsLoader = require('google-maps');

GoogleMapsLoader.URL = 'https://maps.googleapis.com/maps/api/js';
GoogleMapsLoader.KEY = 'qwertyuiopasdfghjklzxcvbnm';
GoogleMapsLoader.LIBRARIES = ['geometry', 'places'];
GoogleMapsLoader.CLIENT = 'yourclientkey';
GoogleMapsLoader.CHANNEL = 'myChannel';
GoogleMapsLoader.LANGUAGE = 'fr';
GoogleMapsLoader.REGION = 'GB';
GoogleMapsLoader.VERSION = '3.14';
GoogleMapsLoader.WINDOW_CALLBACK_NAME = '__google_maps_api_provider_initializator__';

var callback: GoogleMapsLoader.CallBack = function (google) {
    var uluru = {lat: -25.363, lng: 131.044};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });

    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
};


GoogleMapsLoader.createLoader();

var isLoaded: boolean = GoogleMapsLoader.isLoaded();

GoogleMapsLoader.load(callback);
GoogleMapsLoader.release(callback);

GoogleMapsLoader.onLoad(function () {
    console.log("loaded!")
});

var url: string = GoogleMapsLoader.createUrl();

GoogleMapsLoader.makeMock();
