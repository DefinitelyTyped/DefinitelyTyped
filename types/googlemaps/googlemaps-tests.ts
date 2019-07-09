// Test file for Google Maps JavaScript API Definition file

let mapOptions: google.maps.MapOptions = {
    backgroundColor: '#fff',
    center: { lat: -25.363, lng: 131.044 },
    clickableIcons: true,
    controlSize: 30,
    draggable: true,
    fullscreenControl: true,
    fullscreenControlOptions: {
        position: google.maps.ControlPosition.RIGHT_TOP
    },
    gestureHandling: 'cooperative',
    scrollwheel: true,
    styles: [
        {
            elementType: 'geometry',
            featureType: 'water',
            stylers: [
                {
                    color: '#00bdbd'
                }
            ]
        },
        {
            elementType: 'geometry',
            featureType: 'landscape.man_made',
            stylers: [
                {
                    color: '#f7f1df'
                }
            ]
        }
    ],
    zoom: 4
};

/***** Create map *****/
let map: google.maps.Map = new google.maps.Map(document.getElementById('map'), mapOptions);

/***** Fitting map to bounds *****/
map.fitBounds(
    {
        north: 10,
        east: 10,
        west: 10,
        south: 10
    },
    50
);

map.fitBounds(
    {
        east: 10,
        north: 10,
        south: 10,
        west: 10
    },
    {
        bottom: 100,
        left: 150,
        right: 150,
        top: 50
    }
);

/***** Pan map to bounds *****/
map.panToBounds({
    north: 10,
    east: 10,
    west: 10,
    south: 10
});

map.panToBounds(
    {
        north: 10,
        east: 10,
        west: 10,
        south: 10
    },
    50
);

map.panToBounds(
    {
        east: 10,
        north: 10,
        south: 10,
        west: 10
    },
    {
        bottom: 100,
        left: 150,
        right: 150,
        top: 50
    }
);

map.getProjection() // $ExpectType Projection | null

/***** Data *****/

new google.maps.Data();
new google.maps.Data({ map: map });

var latLng = new google.maps.LatLng(52.201203, -1.72437),
    feature = new google.maps.Data.Feature(),
    geometry = new google.maps.Data.Geometry();

var data = map.data;

data.add(feature);

data.add({
    geometry: latLng,
    id: 'Test feature',
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
    cursor: 'pointer',
    fillColor: '#79B55B',
    fillOpacity: 1,
    icon: { url: '//maps.google.com/mapfiles/ms/icons/blue.png' } as google.maps.Icon,
    shape: { coords: [1, 2, 3], type: 'circle' },
    strokeColor: '#79B55B',
    strokeOpacity: 1,
    strokeWeight: 1,
    title: 'string',
    visible: true,
    zIndex: 1
});

data.overrideStyle(feature, { visible: true });
data.revertStyle(feature);

data.addGeoJson({
    type: 'Feature',
    geometry: { type: 'Point', coordinates: [59.32709, 18.103701] }
});
data.addGeoJson(
    {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                properties: { dymmy: '7' },
                geometry: {
                    type: 'Polygon',
                    coordinates: [
                        [
                            [123.61, -22.14],
                            [122.38, -21.73],
                            [121.06, -21.69],
                            [119.66, -22.22],
                            [119.0, -23.4],
                            [123.61, -22.14]
                        ]
                    ]
                }
            }
        ]
    },
    { idPropertyName: 'Test feature' }
);

data.loadGeoJson('http://magicGeoJsonSource.com');

data.loadGeoJson('http://magicGeoJsonSource.com', { idPropertyName: 'test' });

data.loadGeoJson('http://magicGeoJsonSource.com', { idPropertyName: 'test' }, features => {
    for (var i = 0, len = features.length; i < len; i++) {
        console.log(features[i].getId());
    }
});

data.toGeoJson(feature => {});

var dataMouseEvent: google.maps.Data.MouseEvent = {
    feature: feature,
    latLng: latLng,
    stop: (): void => {}
};

var addFeatureEvent: google.maps.Data.AddFeatureEvent = {
    feature: feature
};

var removeFeatureEvent: google.maps.Data.RemoveFeatureEvent = {
    feature: feature
};

var setGeometryEvent: google.maps.Data.SetGeometryEvent = {
    feature: feature,
    newGeometry: geometry,
    oldGeometry: geometry
};

var setPropertyEvent: google.maps.Data.SetPropertyEvent = {
    feature: feature,
    name: 'test',
    newValue: {},
    oldValue: {}
};

var removePropertyEvent: google.maps.Data.RemovePropertyEvent = {
    feature: feature,
    name: 'test',
    oldValue: {}
};

var lineString = new google.maps.Data.LineString([
    { lat: 52.201203, lng: -1.72437 },
    { lat: 52.201203, lng: -2.72437 }
]);
lineString.forEachLatLng(latLng => console.log(`${latLng.lat} ${latLng.lng}`));

data.setDrawingMode('LineString');
data.setDrawingMode(null);

data.setControls(['Point', 'Polygon']);
data.setControls(null);

/***** Overlays *****/

var icon: google.maps.Icon = {
    anchor: new google.maps.Point(16, 16),
    origin: new google.maps.Point(0, 0),
    scaledSize: new google.maps.Size(32, 32),
    size: new google.maps.Size(32, 32),
    url: 'dummy'
};

/***** MapTypeStyle *****/

var mapTypeStyle: google.maps.MapTypeStyle = {
    featureType: 'all'
};

var mapTypeStyle: google.maps.MapTypeStyle = {
    featureType: 'administrative.country',
    elementType: 'all',
    stylers: []
};

var mapTypeStyle: google.maps.MapTypeStyle = {
    featureType: 'landscape.natural',
    elementType: 'geometry',
    stylers: []
};

var mapTypeStyle: google.maps.MapTypeStyle = {
    featureType: 'poi.school',
    elementType: 'labels',
    stylers: []
};

/***** MARKERS *****/

// Marker class

google.maps.Marker.MAX_ZINDEX; // $ExpectType number
google.maps.Marker.MAX_ZINDEX = 10; // $ExpectError

// Marker constructor

const marker = new google.maps.Marker();

const markerWithEmptyOptions = new google.maps.Marker({});
const markerWithEmptyReadonlyOptions = new google.maps.Marker(
    {} as google.maps.ReadonlyMarkerOptions
);

const markerWithAllOptions = new google.maps.Marker({
    anchorPoint: new google.maps.Point(0, 0),
    animation: google.maps.Animation.BOUNCE,
    clickable: true,
    crossOnDrag: true,
    cursor: 'test',
    draggable: true,
    icon: 'test',
    label: 'test',
    map: new google.maps.Map(document.createElement('div')),
    opacity: 0.5,
    optimized: true,
    position: { lat: 0, lng: 0 },
    title: 'test',
    visible: true,
    zIndex: 0
});
const markerWithAllReadonlyOptions = new google.maps.Marker({
    anchorPoint: new google.maps.Point(0, 0),
    animation: google.maps.Animation.BOUNCE,
    clickable: true,
    crossOnDrag: true,
    cursor: 'test',
    draggable: true,
    icon: 'test',
    label: 'test',
    map: new google.maps.Map(document.createElement('div')),
    opacity: 0.5,
    optimized: true,
    position: { lat: 0, lng: 0 },
    title: 'test',
    visible: true,
    zIndex: 0
} as google.maps.ReadonlyMarkerOptions);

// Marker methods

marker.getAnimation(); // $ExpectType Animation | null | undefined

marker.getClickable(); // $ExpectType boolean

marker.getCursor(); // $ExpectType string | null | undefined

marker.getDraggable(); // $ExpectType boolean | null | undefined

marker.getIcon(); // $ExpectType string | ReadonlyIcon | ReadonlySymbol | null | undefined

marker.getLabel(); // $ExpectType ReadonlyMarkerLabel | null | undefined

marker.getMap(); // $ExpectType Map | StreetViewPanorama | null | undefined

marker.getOpacity(); // $ExpectType number | null | undefined

marker.getPosition(); // $ExpectType LatLng | null | undefined

marker.getShape(); // $ExpectType MarkerShapeCircle | MarkerShapeRect | MarkerShapePoly | null | undefined

marker.getTitle(); // $ExpectType string | null | undefined

marker.getVisible(); // $ExpectType boolean

marker.getZIndex(); // $ExpectType number | null | undefined

marker.setAnimation(google.maps.Animation.BOUNCE);
marker.setAnimation(null);

marker.setClickable(true);

marker.setCursor('test');
marker.setCursor(null);

marker.setDraggable(true);
marker.setDraggable(null);

marker.setIcon({
    anchor: new google.maps.Point(0, 0),
    labelOrigin: new google.maps.Point(0, 0),
    origin: new google.maps.Point(0, 0),
    scaledSize: new google.maps.Size(10, 10),
    size: new google.maps.Size(10, 10),
    url: 'test'
});
marker.setIcon({
    anchor: new google.maps.Point(0, 0),
    labelOrigin: new google.maps.Point(0, 0),
    origin: new google.maps.Point(0, 0),
    scaledSize: new google.maps.Size(10, 10),
    size: new google.maps.Size(10, 10),
    url: 'test'
} as google.maps.ReadonlyIcon);
marker.setIcon({ url: 'test' });
marker.setIcon({
    anchor: new google.maps.Point(0, 0),
    fillColor: 'black',
    fillOpacity: 0,
    labelOrigin: new google.maps.Point(0, 0),
    path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
    rotation: 0,
    scale: 1,
    strokeColor: 'black',
    strokeOpacity: 0,
    strokeWeight: 0
});
marker.setIcon({
    anchor: new google.maps.Point(0, 0),
    fillColor: 'black',
    fillOpacity: 0,
    labelOrigin: new google.maps.Point(0, 0),
    path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
    rotation: 0,
    scale: 1,
    strokeColor: 'black',
    strokeOpacity: 0,
    strokeWeight: 0
} as google.maps.ReadonlySymbol);
marker.setIcon({}); // $ExpectError
marker.setIcon('test');
marker.setIcon(null);

marker.setLabel({
    text: 'test',
    color: 'test',
    fontFamily: 'test',
    fontSize: 'test',
    fontWeight: 'test'
});
marker.setLabel({
    text: 'test',
    color: 'test',
    fontFamily: 'test',
    fontSize: 'test',
    fontWeight: 'test'
} as google.maps.ReadonlyMarkerLabel);
marker.setLabel({ text: 'test' });
marker.setLabel({ text: 'test' } as google.maps.ReadonlyMarkerLabel);
marker.setLabel({}); // $ExpectError
marker.setLabel('test');
marker.setLabel(null);

marker.setMap(new google.maps.Map(document.createElement('div')));
marker.setMap(new google.maps.StreetViewPanorama(document.createElement('div')));
marker.setMap(null);

marker.setOpacity(0.5);
marker.setOpacity(null);

marker.setOptions({
    anchorPoint: new google.maps.Point(0, 0),
    animation: google.maps.Animation.BOUNCE,
    clickable: true,
    crossOnDrag: true,
    cursor: '',
    draggable: true,
    icon: '',
    label: '',
    map: map,
    opacity: 0.5,
    optimized: true,
    position: { lat: 0, lng: 0 },
    title: '',
    visible: true,
    zIndex: 0
});
marker.setOptions({
    anchorPoint: new google.maps.Point(0, 0),
    animation: google.maps.Animation.BOUNCE,
    clickable: true,
    crossOnDrag: true,
    cursor: '',
    draggable: true,
    icon: '',
    label: '',
    map: map,
    opacity: 0.5,
    optimized: true,
    position: { lat: 0, lng: 0 },
    title: '',
    visible: true,
    zIndex: 0
} as google.maps.ReadonlyMarkerOptions);
marker.setOptions({});
marker.setOptions({} as google.maps.ReadonlyMarkerOptions);

marker.setPosition(new google.maps.LatLng(0, 0));
marker.setPosition({ lat: 0, lng: 0 });
marker.setPosition({ lat: 0, lng: 0 } as google.maps.ReadonlyLatLngLiteral);
marker.setPosition(null);

marker.setShape({ type: 'circle' }); // $ExpectError
marker.setShape({ type: 'circle', coords: [] }); // $ExpectError
marker.setShape({ type: 'circle', coords: [0] }); // $ExpectError
marker.setShape({ type: 'circle', coords: [0, 0] }); // $ExpectError
marker.setShape({ type: 'circle', coords: [0, 0, 10] });
marker.setShape({ type: 'circle', coords: [0, 0, 10, 0] }); // $ExpectError
marker.setShape({ type: 'rect' }); // $ExpectError
marker.setShape({ type: 'rect', coords: [0] }); // $ExpectError
marker.setShape({ type: 'rect', coords: [0, 0] }); // $ExpectError
marker.setShape({ type: 'rect', coords: [0, 0, 10] }); // $ExpectError
marker.setShape({ type: 'rect', coords: [0, 0, 10, 10] });
marker.setShape({ type: 'rect', coords: [0, 0, 10, 10, 10] }); // $ExpectError
marker.setShape({ type: 'poly' }); // $ExpectError
marker.setShape({ type: 'poly', coords: [0] }); // $ExpectError
marker.setShape({ type: 'poly', coords: [0, 0] }); // $ExpectError
marker.setShape({ type: 'poly', coords: [0, 0, 10] }); // $ExpectError
marker.setShape({ type: 'poly', coords: [0, 0, 10, 10] });
marker.setShape({ type: 'poly', coords: [0, 0, 10, 10, 10] });
marker.setShape({ type: 'poly', coords: [0, 0, 10, 10, 10, 10] });
marker.setShape({ type: 'test' }); // $ExpectError
marker.setShape({ type: 'test', coords: [0] }); // $ExpectError
marker.setShape({ type: 'test', coords: [0, 0] }); // $ExpectError
marker.setShape({ type: 'test', coords: [0, 0, 0] }); // $ExpectError
marker.setShape({ type: 'test', coords: [0, 0, 0, 0] }); // $ExpectError
marker.setShape({}); // $ExpectError
marker.setShape(null);

marker.setTitle('test');
marker.setTitle(null);

marker.setVisible(true);

marker.setZIndex(0);
marker.setZIndex(null);

// Marker events

marker.addListener('animation_changed', () => {});

marker.addListener('animation_changed', event => {}); // $ExpectError

marker.addListener('click', event => {
    event; // $ExpectType MouseEvent
});

marker.addListener('clickable_changed', () => {});

marker.addListener('clickable_changed', event => {}); // $ExpectError

marker.addListener('cursor_changed', () => {});

marker.addListener('cursor_changed', event => {}); // $ExpectError

marker.addListener('dblclick', event => {
    event; // $ExpectType MouseEvent
});

marker.addListener('drag', event => {
    event; // $ExpectType MouseEvent
});

marker.addListener('dragend', event => {
    event; // $ExpectType MouseEvent
});

marker.addListener('draggable_changed', event => {}); // $ExpectError

marker.addListener('dragstart', event => {
    event; // $ExpectType MouseEvent
});

marker.addListener('flat_changed', () => {});

marker.addListener('flat_changed', event => {}); // $ExpectError

marker.addListener('icon_changed', () => {});

marker.addListener('icon_changed', event => {}); // $ExpectError

marker.addListener('mousedown', event => {
    event; // $ExpectType MouseEvent
});

marker.addListener('mouseout', event => {
    event; // $ExpectType MouseEvent
});

marker.addListener('mouseover', event => {
    event; // $ExpectType MouseEvent
});

marker.addListener('mouseup', event => {
    event; // $ExpectType MouseEvent
});

marker.addListener('position_changed', () => {});

marker.addListener('position_changed', event => {}); // $ExpectError

marker.addListener('rightclick', event => {
    event; // $ExpectType MouseEvent
});

marker.addListener('shape_changed', () => {});

marker.addListener('shape_changed', event => {}); // $ExpectError

marker.addListener('title_changed', () => {});

marker.addListener('title_changed', event => {}); // $ExpectError

marker.addListener('visible_changed', () => {});

marker.addListener('visible_changed', event => {}); // $ExpectError

marker.addListener('zindex_changed', () => {});

marker.addListener('zindex_changed', event => {}); // $ExpectError

/***** OverlayView *****/
// https://developers.google.com/maps/documentation/javascript/customoverlays
var div = document.createElement('div');
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
    }
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
    center: { lat: 59.327, lng: 18.067 },
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
var panorama = new google.maps.StreetViewPanorama(document.createElement('div'), panoramaOptions);

// MVCObject method on StreetViewPanorama
var panoramaEvent = panorama.addListener('pano_changed', () => {});

/***** StreetViewService *****/
var street_view_service = new google.maps.StreetViewService();
street_view_service.getPanorama({
    location: new google.maps.LatLng(37.782551, -122.445368),
    radius: 50
}, (data, status) => {
    if (status === google.maps.StreetViewStatus.OK) {
        const location_pano = (data == null || data.location == null) ? null : data.location.pano
        if (location_pano == null) {
            // Not good
            return;
        }

        const new_panorama = new google.maps.StreetViewPanorama(document.createElement('div'), panoramaOptions);
        new_panorama.setPano(location_pano);
        new_panorama.setPov({
            heading:  0,
            pitch:    0
        });
    }
    else {
        // Not good
        return;
    }
})

/***** MVCArray *****/

// MVCArray should be generic
let mvcArrayStr = new google.maps.MVCArray<string>(['a', 'b', 'c']);
mvcArrayStr.forEach(
    (elem: string, i: number): void => {
        elem.toUpperCase();
    }
);
mvcArrayStr.getArray()[0].toUpperCase();
mvcArrayStr.getAt(0).toUpperCase();
mvcArrayStr.insertAt(2, 'x');
mvcArrayStr.pop().toUpperCase();
mvcArrayStr.push('y');
mvcArrayStr.removeAt(0).toUpperCase();
mvcArrayStr.setAt(0, 'z');

/***** HeatMaps *****/

let heatmap = new google.maps.visualization.HeatmapLayer({
    data: [
        new google.maps.LatLng(37.782551, -122.445368),
        new google.maps.LatLng(37.782745, -122.444586),
        new google.maps.LatLng({ lat: 37.782842, lng: -122.443688 })
    ],
    map: map
});

// setData Should Accept MVCArray<LatLng>
heatmap.setData(
    new google.maps.MVCArray<google.maps.LatLng>([
        new google.maps.LatLng(37.782551, -122.445368),
        new google.maps.LatLng(37.782745, -122.444586),
        new google.maps.LatLng({ lat: 37.782842, lng: -122.443688 })
    ])
);

// getData Should return MVCArray<LatLng>
let heatmapDataMvcLL = heatmap.getData<google.maps.LatLng>();
console.log(heatmapDataMvcLL.getAt(0).lat()); // should not throw

// setData Should Accept MVCArray<WeightedLocation>
heatmap.setData(
    new google.maps.MVCArray<google.maps.visualization.WeightedLocation>([
        { weight: 1, location: new google.maps.LatLng(37.782551, -122.445368) },
        { weight: 2, location: new google.maps.LatLng(37.782745, -122.444586) },
        { weight: 3, location: new google.maps.LatLng({ lat: 37.782842, lng: -122.443688 }) }
    ])
);

// getData Should return MVCArray<LatLng>
let heatmapDataWL = heatmap.getData<google.maps.visualization.WeightedLocation>();
console.log(heatmapDataWL.getAt(0).weight); // should not throw

// setData Should Accept LatLng[]
heatmap.setData([
    new google.maps.LatLng(37.782551, -122.445368),
    new google.maps.LatLng(37.782745, -122.444586),
    new google.maps.LatLng({ lat: 37.782842, lng: -122.443688 })
]);

// setData Should Accept WeightedLocation[]
heatmap.setData([
    { weight: 1, location: new google.maps.LatLng(37.782551, -122.445368) },
    { weight: 2, location: new google.maps.LatLng({ lat: 37.782745, lng: -122.444586 }) }
]);

// setOptions should required data and accepted any HeatmapLayerOptions
heatmap.setOptions({
    data: [
        new google.maps.LatLng(37.782551, -122.445368),
        new google.maps.LatLng(37.782745, -122.444586),
        new google.maps.LatLng({ lat: 37.782842, lng: -122.443688 })
    ],
    dissipating: true,
    map: map,
    opacity: 8
});

/***** google.maps.places.PlacesService *****/
let service = new google.maps.places.PlacesService(new HTMLDivElement());

service.getDetails(
    {
        placeId: '-a1',
        fields: ['name'],
        sessionToken: new google.maps.places.AutocompleteSessionToken()
    },
    (result, status) => {
        if (status === google.maps.places.PlacesServiceStatus.NOT_FOUND) {
            return;
        }

        result.name; // $ExpectType string
    }
);

service.findPlaceFromQuery(
    {
        query: 'Big Ben London',
        fields: ['name']
    },
    (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.ERROR) {
            return;
        }

        results[0].name; // $ExpectType string
    }
);

service.findPlaceFromPhoneNumber(
    {
        phoneNumber: '123456',
        fields: ['name']
    },
    (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.ERROR) {
            return;
        }

        results[0].name; // $ExpectType string
    }
);

/***** google.maps.places.Autocomplete *****/
const autocomplete = new google.maps.places.Autocomplete(document.createElement('input'));
const placeResult = autocomplete.getPlace();
placeResult.name; // $ExpectType string

/***** google.maps.ImageMapType *****/
const imageMapType = new google.maps.ImageMapType({
    alt: 'alt',
    getTileUrl: (tileCoord: google.maps.Point, zoom: number) => 'string',
    maxZoom: 20,
    minZoom: 10,
    name: 'name',
    opacity: 0.5,
    tileSize: new google.maps.Size(256, 256)
});
imageMapType.alt; // $ExpectType string
imageMapType.maxZoom; // $ExpectType number
imageMapType.minZoom; // $ExpectType number
imageMapType.name; // $ExpectType string
imageMapType.projection; // $ExpectType Projection
imageMapType.radius; // $ExpectType number
imageMapType.tileSize; // $ExpectType Size

/***** google.maps.StyledMapType *****/
const styledMapType = new google.maps.StyledMapType([], {
    alt: 'alt',
    maxZoom: 20,
    minZoom: 10,
    name: 'name'
});
styledMapType.alt; // $ExpectType string
styledMapType.maxZoom; // $ExpectType number
styledMapType.minZoom; // $ExpectType number
styledMapType.name; // $ExpectType string
styledMapType.projection; // $ExpectType Projection
styledMapType.radius; // $ExpectType number
styledMapType.tileSize; // $ExpectType Size

const directionsWaypointEmpty: google.maps.DirectionsWaypoint = {};
const directionsWaypointLocationString: google.maps.DirectionsWaypoint = {
    location: ''
};
const directionsWaypointLocationLatLng: google.maps.DirectionsWaypoint = {
    location: new google.maps.LatLng(0, 0)
};
const directionsWaypointLocationPlace: google.maps.DirectionsWaypoint = {
    location: { query: '' }
};
const directionsWaypointStopover: google.maps.DirectionsWaypoint = {
    stopover: true
};
