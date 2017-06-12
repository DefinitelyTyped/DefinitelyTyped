// Test file for Google Maps JavaScript API Definition file

/***** Create map *****/
let map = new google.maps.Map(
    document.getElementById('map'), {
    backgroundColor: "#fff",
    center: { lat: -25.363, lng: 131.044 },
    clickableIcons: true,
    draggable: true,
    fullscreenControl: true,
    fullscreenControlOptions: {
        position: google.maps.ControlPosition.RIGHT_TOP
    },
    gestureHandling: "cooperative",
    scrollwheel: true,
    zoom: 4
});


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

map = data.getMap();
data.setMap(map);

var style = data.getStyle();
data.setStyle(style);

data.setStyle({
    clickable: true,
    cursor: "pointer",
    fillColor: "#79B55B",
    fillOpacity: 1,
    icon: <google.maps.Icon>{ url: "//maps.google.com/mapfiles/ms/icons/blue.png" },
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

data.addGeoJson({ "type": "Feature", "geometry": { "type": "Point", "coordinates": [59.327090, 18.103701] } });
data.addGeoJson({
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "properties": { "dymmy": "7", },
        "geometry": {
                "type": "Polygon",
                "coordinates": [[[123.61, -22.14], [122.38, -21.73], [121.06, -21.69], [119.66, -22.22], [119.00, -23.40], [123.61, -22.14]]]
            }
        }],
}, { idPropertyName: "Test feature" });

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



/***** MARKERS *****/
// https://developers.google.com/maps/documentation/javascript/markers
map.setCenter({ lat: 59.332457, lng: 18.064790 });
// Marker with map and LatLngLiteral position
let markerSimple = new google.maps.Marker({
    label: "A",
    position: { lat: 59.33555, lng: 18.029851 },
    map: map,
    title: 'Hello World!'
});

// Marker without map and LatLng position
let markerRemovable = new google.maps.Marker({
    position: new google.maps.LatLng(59.337647,18.089950),
    title:"Hello World!"
});
markerRemovable.setMap(map);   // Add marker
markerRemovable.setMap(null);  // Remove marker, should accept null

// Marker with animation
// The following example creates a marker in Stockholm, Sweden using a DROP
// animation. Clicking on the marker will toggle the animation between a BOUNCE
// animation and no animation.
let markerBounce = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: { lat: 59.327, lng: 18.067 }
});
markerBounce.addListener("click", toggleBounce);

function toggleBounce() {
    if (markerBounce.getAnimation() !== null) {
        markerBounce.setAnimation(null);
    } else {
        markerBounce.setAnimation(google.maps.Animation.BOUNCE);
    }
}



/***** OverlayView *****/
// https://developers.google.com/maps/documentation/javascript/customoverlays
var div =  document.createElement('div');
class Overlay extends google.maps.OverlayView {
    public draw(): void {
        var panes = this.getPanes();
        panes.floatPane.appendChild(div);
        panes.floatShadow.appendChild(div);
        panes.mapPane.appendChild(div);
        panes.markerLayer.appendChild(div);
        panes.overlayImage.appendChild(div);
        panes.overlayLayer.appendChild(div);
        panes.overlayMouseTarget.appendChild(div);
        panes.overlayShadow.appendChild(div);
    };
}
var overlay = new Overlay();
overlay.setMap(map);

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


/***** StreetViewPanorama *****/
var panoramaOptions: google.maps.StreetViewPanoramaOptions = {
    zoom: 0,
    pano: 'reception',
    scrollwheel: false,
    mode: 'webgl',
    disableDefaultUI: true,
    linksControl: true,
    visible: true,
    motionTracking: true,
    motionTrackingControl: true
};
var panorama = new google.maps.StreetViewPanorama(document.createElement("div"), panoramaOptions);


/***** MVCArray *****/

// MVCArray should be generic
let mvcArrayStr = new google.maps.MVCArray<string>(["a", "b", "c"]);
mvcArrayStr.forEach((elem: string, i: number): void => { elem.toUpperCase(); });
mvcArrayStr.getArray()[0].toUpperCase();
mvcArrayStr.getAt(0).toUpperCase();
mvcArrayStr.insertAt(2, "x");
mvcArrayStr.pop().toUpperCase();
mvcArrayStr.push("y");
mvcArrayStr.removeAt(0).toUpperCase();
mvcArrayStr.setAt(0, "z");

/***** HeatMaps *****/

let heatmap = new google.maps.visualization.HeatmapLayer({
    data: [new google.maps.LatLng(37.782551, -122.445368), new google.maps.LatLng(37.782745, -122.444586), new google.maps.LatLng(37.782842, -122.443688)],
    map: map
});

// setData Should Accept MVCArray<LatLng>
heatmap.setData(new google.maps.MVCArray<google.maps.LatLng>(
    [new google.maps.LatLng(37.782551, -122.445368), new google.maps.LatLng(37.782745, -122.444586), new google.maps.LatLng(37.782842, -122.443688)]
));

// getData Should return MVCArray<LatLng>
let heatmapDataMvcLL = heatmap.getData<google.maps.LatLng>();
console.log(heatmapDataMvcLL.getAt(0).lat()); // should not throw

// setData Should Accept MVCArray<WeightedLocation>
heatmap.setData(new google.maps.MVCArray<google.maps.visualization.WeightedLocation>([
    { weight: 1, location: new google.maps.LatLng(37.782551, -122.445368) },
    { weight: 2, location: new google.maps.LatLng(37.782745, -122.444586) },
    { weight: 3, location: new google.maps.LatLng(37.782842, -122.443688) }
]));

// getData Should return MVCArray<LatLng>
let heatmapDataWL = heatmap.getData<google.maps.visualization.WeightedLocation>();
console.log(heatmapDataWL.getAt(0).weight); // should not throw

// setData Should Accept LatLng[]
heatmap.setData([new google.maps.LatLng(37.782551, -122.445368), new google.maps.LatLng(37.782745, -122.444586), new google.maps.LatLng(37.782842, -122.443688)]);

// setData Should Accept WeightedLocation[]
heatmap.setData([
    { weight: 1, location: new google.maps.LatLng(37.782551, -122.445368) },
    { weight: 2, location: new google.maps.LatLng(37.782745, -122.444586) }
]);