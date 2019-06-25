import loadGoogleMapsApi = require('load-google-maps-api');

// Example from README.md https://github.com/yuanqing/load-google-maps-api#usage
loadGoogleMapsApi().then((googleMaps) => {
    new googleMaps.Map(document.querySelector('.map'), {
        center: {
            lat: 40.7484405,
            lng: -73.9944191
        },
        zoom: 12
    });
}).catch((error) => {
    console.error(error);
});

loadGoogleMapsApi({ libraries: 'drawing' }); // $ExpectError
loadGoogleMapsApi({ v: 3 }); // $ExpectError
loadGoogleMapsApi({ timeout: '1000' }); // $ExpectError

loadGoogleMapsApi({
    channel: 'customer',
    client: '12345',
    key: 'abcde',
    language: 'se',
    libraries: [
        'drawing',
        'geometry',
        'places',
        'visualization',
    ],
    region: 'SE',
    timeout: 500,
    v: '3.33',
}).then(gm => {
    gm; // $ExpectType typeof maps
    const map = new gm.Map(document.querySelector('.map')); // $ExpectType Map
    const polygon = new gm.Polygon(); // $ExpectType Polygon
});
