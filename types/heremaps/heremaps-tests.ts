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
    map.capture((canvas: HTMLCanvasElement) => {
        if (canvas) {
            resultContainer.innerHTML = '';
            resultContainer.appendChild(canvas);
        } else {
            // For example when map is in Panorama mode
            resultContainer.innerHTML = 'Capturing is not supported';
        }
    }, [ui], 50, 50, 500, 200);
}

/**
 * Boilerplate map initialization code starts below:
 */
// Step 1: initialize communication with the platform
let platform = new H.service.Platform({
    app_id: 'DemoAppId01082013GAL',
    app_code: 'AJKnXv84fjrb0KIHawS0Tg',
    useHTTPS: true,
    useCIT: true
});

let defaultLayers = platform.createDefaultLayers();

let mapContainer = document.getElementById('map');

// Step 2: initialize a map
let map = new H.Map(mapContainer, defaultLayers.normal.map, {
    // initial center and zoom level of the map
    zoom: 16,
    // Champs-Elysees
    center: { lat: 48.869145, lng: 2.314298 }
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
containerNode.setAttribute('style',
    'position:absolute;top:0;left:0;background-color:#fff; padding:10px;');
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

let polyline = new H.map.Polyline(new H.geo.Strip());
// tslint:disable-next-line:array-type
let clipArr: Array<Array<number>>;
clipArr = polyline.clip(new H.geo.Rect(5, 5, 5, 5));

let router = platform.getRoutingService();
let calculateRouteParams = {
    waypoint0: 'geo!52.5,13.4',
    waypoint1: 'geo!52.5,13.45',
    mode: 'fastest;car;traffic:disabled'
};
router.calculateRoute(
    calculateRouteParams,
    (result) => {
        console.log(result.response.route[0]);
    },
    (error) => {
        console.log(error);
    }
);

let places = platform.getPlacesService();
let entryPoint = H.service.PlacesService.EntryPoint;
places.request(
    entryPoint.SEARCH,
    {
        at: '52.5044,13.3909',
        q: 'pizza'
    },
    (response) => {
        console.log(response);
        const items = response.results.items;
        places.follow(
            items[0].href,
            (resp) => {
                console.log(resp);
            },
            (resp) => {
                console.log('ERROR: ' + resp);
            }
        );
    },
    (error) => {
        console.log('ERROR: ' + error);
    }
);

let geocoder = platform.getGeocodingService();
let geocodingParams: H.service.ServiceParameters = {
    searchText: '425 W Randolph Street, Chicago'
};
geocoder.geocode(
    geocodingParams,
    (result) => {
        console.log(result);
        console.log(result.Response.View[0].Result[0].Location.DisplayPosition);
    },
    (error) => {
        console.log(error);
    }
);

// deprecated but w/e
let enterprieseRouter = platform.getEnterpriseRoutingService();
let calculateIsoline: H.service.ServiceParameters = {
    start: 'geo!52.5,13.4',
    distance: '1000,2000',
    mode: 'fastest;car;traffic:disabled'
};
enterprieseRouter.calculateIsoline(
    calculateIsoline,
    (result) => {
        console.log(result);
        console.log(result.Response.isolines[0]);
    },
    (error) => {
        console.log(error);
    }
);

// Create a clustering provider
const clusteredDataProvider = new H.clustering.Provider([], {
clusteringOptions: {
  // Maximum radius of the neighborhood
  eps: 64,
  // minimum weight of points required to form a cluster
  minWeight: 3
}
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
