// Test file for Google Maps JavaScript API Definition file
/// <reference path="google.maps.d.ts" />

var map = new google.maps.Map(document.querySelector("☺"));

/***** Data *****/
 
new google.maps.Data();
new google.maps.Data({ map: map });
 
var latLng = new google.maps.LatLng(52.201203, -1.724370),
    feature = new google.maps.Data.Feature(),
    geometry = new google.maps.Data.Geometry();

var data = map.data;

data.add(feature);

data.add({
    geometry: latLng,
    id: "Test feature",
    properties: {}
});

var isIn: boolean = map.data.contains(feature);

data.forEach((feature: google.maps.Data.Feature) => {
    console.log(feature.getId());
});

var map: google.maps.Map = data.getMap();
data.setMap(map);

var style = data.getStyle();
data.setStyle(style);

data.setStyle({
    clickable: true,
    cursor: "pointer",
    fillColor: "#79B55B",
    fillOpacity: 1,
    icon: {},
    shape: { coords: [1, 2, 3], type: "circle" },
    strokeColor: "#79B55B",
    strokeOpacity: 1,
    strokeWeight: 1,
    title: "string",
    visible: true,
    zIndex: 1
});

data.overrideStyle(feature, { visible: true });

data.revertStyle(feature);

data.addGeoJson({});
data.addGeoJson({}, { idPropertyName: "Test feature" });

data.loadGeoJson("http://magicGeoJsonSource.com");

data.loadGeoJson(
    "http://magicGeoJsonSource.com",
    { idPropertyName: "test" });
    
data.loadGeoJson(
    "http://magicGeoJsonSource.com",
    { idPropertyName: "test" },
    (features) => {
        for (var i = 0, len = features.length; i < len; i++) {
            console.log(features[i].getId());
        }
    });

data.toGeoJson((feature) => { });

var dataMouseEvent: google.maps.Data.MouseEvent = {
    feature: feature,
    latLng: latLng,
    stop: (): void => {}
};

var addFeatureEvent : google.maps.Data.AddFeatureEvent = {
    feature: feature
};

var removeFeatureEvent: google.maps.Data.RemoveFeatureEvent = {
    feature: feature
};

var setGeometryEvent: google.maps.Data.SetGeometryEvent  = {
    feature: feature,
    newGeometry: geometry,
    oldGeometry: geometry,
};

var setPropertyEvent: google.maps.Data.SetPropertyEvent = {
    feature: feature,
    name: "test",
    newValue: {},
    oldValue: {}
};
 
var removePropertyEvent: google.maps.Data.RemovePropertyEvent = {
    feature: feature,
    name: "test",
    oldValue: {}
};


/***** Overlays *****/

var icon: google.maps.Icon = {
    anchor: new google.maps.Point(16, 16),
    origin: new google.maps.Point(0, 0),
    scaledSize: new google.maps.Size(32, 32),
    size: new google.maps.Size(32, 32),
    url: "dummy"
};

/***** MapTypeStyle *****/

var mapTypeStyle: google.maps.MapTypeStyle ={
    featureType: 'all',
};

var mapTypeStyle: google.maps.MapTypeStyle ={
    featureType: 'administrative.country',
    elementType: 'all',
    stylers: [],
};

var mapTypeStyle: google.maps.MapTypeStyle ={
    featureType: 'landscape.natural',
    elementType: 'geometry',
    stylers: [],
};

var mapTypeStyle: google.maps.MapTypeStyle ={
    featureType: 'poi.school',
    elementType: 'labels',
    stylers: [],
};
