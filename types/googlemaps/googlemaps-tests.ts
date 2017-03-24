// Test file for Google Maps JavaScript API Definition file


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

// https://developers.google.com/maps/documentation/javascript/markers
function initMap1() {
    var myLatLng = {lat: -25.363, lng: 131.044};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
    });
}

var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
var mapOptions = {
    zoom: 4,
    center: myLatlng
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);

var marker = new google.maps.Marker({
    position: myLatlng,
    title:"Hello World!"
});

// To add the marker to the map, call setMap();
marker.setMap(map);

marker.setMap(null);

// The following example creates a marker in Stockholm, Sweden using a DROP
// animation. Clicking on the marker will toggle the animation between a BOUNCE
// animation and no animation.

var marker: google.maps.Marker;

function initMap2() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: {lat: 59.325, lng: 18.070}
    });

    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: {lat: 59.327, lng: 18.067}
    });
    marker.addListener('click', toggleBounce);
}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

// In the following example, markers appear when the user clicks on the map.
// Each marker is labeled with a single alphabetical character.
var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;

function initialize() {
    var bangalore = { lat: 12.97, lng: 77.59 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: bangalore
    });

    // This event listener calls addMarker() when the map is clicked.
    google.maps.event.addListener(map, 'click', function(event: any) {
        addMarker(event.latLng, map);
    });

    // Add a marker at the center of the map.
    addMarker(bangalore, map);
}

// Adds a marker to the map.
function addMarker(location: google.maps.LatLngLiteral, map: google.maps.Map) {
    // Add the marker at the clicked location, and add the next-available label
    // from the array of alphabetical characters.
    var marker = new google.maps.Marker({
        position: location,
        label: labels[labelIndex++ % labels.length],
        map: map
    });
}

google.maps.event.addDomListener(window, 'load', initialize);

/***** OverlayView *****/
// https://developers.google.com/maps/documentation/javascript/customoverlays
var div =  document.createElement('div');
var overlay = new google.maps.OverlayView();
var panes = overlay.getPanes();
panes.floatPane.appendChild(div);
panes.floatShadow.appendChild(div);
panes.mapPane.appendChild(div);
panes.markerLayer.appendChild(div);
panes.overlayImage.appendChild(div);
panes.overlayLayer.appendChild(div);
panes.overlayMouseTarget.appendChild(div);
panes.overlayShadow.appendChild(div);

/***** Rectangles *****/
// https://developers.google.com/maps/documentation/javascript/examples/rectangle-simple
var rectangle = new google.maps.Rectangle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    map: map,
    bounds: {
        north: 33.685,
        south: 33.671,
        east: -116.234,
        west: -116.251
    }
});

/***** Circles *****/
// circleOptions with LatLng center
var circle1 = new google.maps.Circle({
    center: new google.maps.LatLng(59.327, 18.067),
    radius: 20,
    fillColor: '#FF0000',
    strokeColor: '#FF0000',
    fillOpacity: 0.35,
    strokeOpacity: 0.5,
    strokeWeight: 1
});

// circleOptions with LatLngLiteral center
var circle2 = new google.maps.Circle({
    center: {lat: 59.327, lng: 18.067},
    radius: 20,
    fillColor: '#FF0000',
    strokeColor: '#FF0000',
    fillOpacity: 0.35,
    strokeOpacity: 0.5,
    strokeWeight: 1
});
