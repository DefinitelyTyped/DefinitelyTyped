// Test file for HERE Maps API for JavaScript Definition file

/**
 * EXAMPLE from the HERE Maps API
 * Takes a snapshot of the map.
 *
 * @param {Element} resultContainer Reference to DOM Element to show the captured map area
 * @param {H.Map} map Reference to initialized map object
 * @param {H.ui.UI} ui Reference to UI component
 */
function capture(resultContainer: HTMLElement, map: H.Map, ui: H.ui.UI) {
    // Capturing area of the map is asynchronous, callback function receives HTML5 canvas
    // element with desired map area rendered on it.
    // We also pass an H.ui.UI reference in order to see the ScaleBar in the output.
    // If dimensions are omitted, whole veiw port will be captured
    map.capture(
        (canvas: HTMLCanvasElement) => {
            if (canvas) {
                resultContainer.innerHTML = '';
                resultContainer.appendChild(canvas);
            } else {
                // For example when map is in Panorama mode
                resultContainer.innerHTML = 'Capturing is not supported';
            }
        },
        [ui],
        50,
        50,
        500,
        200,
    );
}

/**
 * Boilerplate map initialization code starts below:
 */
// Step 1: initialize communication with the platform
let platform = new H.service.Platform({
    apikey: '{YOUR_APIKEY}',
    useHTTPS: true,
    useCIT: true,
});

let defaultLayers = platform.createDefaultLayers();

let mapContainer = document.getElementById('map');

// Step 2: initialize a map
let map = new H.Map(mapContainer, defaultLayers.vector.normal.map, {
    // initial center and zoom level of the map
    zoom: 16,
    // Champs-Elysees
    center: { lat: 48.869145, lng: 2.314298 },
});

// Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
let behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Step 4: Create the default UI
let ui = H.ui.UI.createDefault(map, defaultLayers, 'en-US');

// Step 6: Create "Capture" button and place for showing the captured area
let resultContainer = document.getElementById('panel');

// Create container for the "Capture" button
let containerNode = document.createElement('div');
containerNode.setAttribute('style', 'position:absolute;top:0;left:0;background-color:#fff; padding:10px;');
containerNode.className = 'btn-group';

// Create the "Capture" button
let captureBtn = document.createElement('input');
captureBtn.value = 'Capture';
captureBtn.type = 'button';
captureBtn.className = 'btn btn-sm btn-default';

// Add both button and container to the DOM
containerNode.appendChild(captureBtn);
mapContainer.appendChild(containerNode);

// Step 7: Handle capture button click event
captureBtn.onclick = () => {
    capture(resultContainer, map, ui);
};

let icon = new H.map.Icon('svg', { size: 5, crossOrigin: false });

let polyline = new H.map.Polyline(new H.geo.LineString());
// tslint:disable-next-line:array-type
let clipArr: Array<Array<number>>;
clipArr = polyline.clip(new H.geo.Rect(5, 5, 5, 5));

let lineString = new H.geo.LineString();
lineString.pushPoint({ lat: 53.3477, lng: -6.2597 });
lineString.pushPoint({ lat: 51.5008, lng: -0.1224 });
lineString.pushPoint({ lat: 48.8567, lng: 2.3508 });
lineString.pushPoint({ lat: 52.5166, lng: 13.3833 });
lineString.eachLatLngAlt((lat: number, lng: number, alt: number, i: number) => {
    console.log(lat, lng, alt, i);
});
lineString.getBounds();
lineString.getPointCount();
lineString.insertPoint(2, { lat: 53.3477, lng: -6.2597 });
lineString.removePoint(2);

let polyline2 = new H.map.Polyline(lineString);

let router = platform.getRoutingService();
let calculateRouteParams = {
    waypoint0: 'geo!52.5,13.4',
    waypoint1: 'geo!52.5,13.45',
    mode: 'fastest;car;traffic:disabled',
};
router.calculateRoute(
    calculateRouteParams,
    result => {
        console.log(result.response.route[0]);
    },
    error => {
        console.log(error);
    },
);

let places = platform.getPlacesService();
let entryPoint = H.service.PlacesService.EntryPoint;
places.request(
    entryPoint.SEARCH,
    {
        at: '52.5044,13.3909',
        q: 'pizza',
    },
    response => {
        console.log(response);
        const items = response.results.items;
        places.follow(
            items[0].href,
            resp => {
                console.log(resp);
            },
            resp => {
                console.log('ERROR: ' + resp);
            },
        );
    },
    error => {
        console.log('ERROR: ' + error);
    },
);

let geocoder = platform.getGeocodingService();
let geocodingParams: H.service.ServiceParameters = {
    searchText: '425 W Randolph Street, Chicago',
};
geocoder.geocode(
    geocodingParams,
    result => {
        console.log(result);
        console.log(result.Response.View[0].Result[0].Location.DisplayPosition);
    },
    error => {
        console.log(error);
    },
);

// deprecated but w/e
let enterprieseRouter = platform.getEnterpriseRoutingService();
let calculateIsoline: H.service.ServiceParameters = {
    start: 'geo!52.5,13.4',
    distance: '1000,2000',
    mode: 'fastest;car;traffic:disabled',
};
enterprieseRouter.calculateIsoline(
    calculateIsoline,
    result => {
        console.log(result);
        console.log(result.Response.isolines[0]);
    },
    error => {
        console.log(error);
    },
);

// Create a clustering provider
const clusteredDataProvider = new H.clustering.Provider([], {
    clusteringOptions: {
        // Maximum radius of the neighborhood
        eps: 64,
        // minimum weight of points required to form a cluster
        minWeight: 3,
    },
});

// Create a layer that will consume objects from our clustering provider
const layer = new H.map.layer.ObjectLayer(clusteredDataProvider);

const pixelProjection = new H.geo.PixelProjection();
pixelProjection.rescale(12);

const point = pixelProjection.geoToPixel({ lat: 53, lng: 12 });
pixelProjection.xyToGeo(point.x, point.y);

const engine = map.getEngine();
engine.getAnimationDuration();
engine.setAnimationDuration(1000);

engine.getAnimationEase();
engine.setAnimationEase(H.util.animation.ease.EASE_IN_QUAD);

const engineListener = (e: Event) => {
    console.log(e);
};
engine.addEventListener('tap', engineListener);
engine.removeEventListener('tap', engineListener);

// Get group bounds
const group = new H.map.Group();
const bounds = group.getBoundingBox();

// Create your own LocalObjectProvider and add some hierarchical objects:
const localProvider = new H.map.provider.LocalObjectProvider();
map.addLayer(new H.map.layer.ObjectLayer(localProvider));
const position = { lat: 52.5308, lng: 13.3852 };
group.addObject(new H.map.Circle(position, 35));
localProvider.getRootGroup().addObjects([group, new H.map.Marker(position)]);
map.setCenter(position).setZoom(18);

// Test GeoJSON
const geoJSON = map.screenToGeo(0, 0).toGeoJSON();

// Test H.data.geojson.Reader https://developer.here.com/documentation/examples/maps-js/data/display-geojson-on-map
const reader = new H.data.geojson.Reader('data/berlin.json', {
    style: (mapObject) => {
        if (mapObject instanceof H.map.Polygon) {
            mapObject.setStyle({
                fillColor: 'rgba(255, 0, 0, 0.5)',
                strokeColor: 'rgba(0, 0, 255, 0.2)',
                lineWidth: 3
            });
        }
    }
});

// Test https://developer.here.com/documentation/maps/3.1.3.0/dev_guide/topics_api/h-map-spatialstyle-linecap.html
new H.map.Circle(position, 35)
    .setStyle({ lineCap: 'butt' })
    .setStyle({ lineCap: 'round' })
    .setStyle({ lineCap: 'square' })
    .setStyle({ lineCap: 'arrow-head' })
    .setStyle({ lineCap: 'arrow-tail' });
