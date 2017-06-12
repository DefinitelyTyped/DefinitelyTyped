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
    center: {lat: 48.869145, lng: 2.314298}
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
let clipArr: Array<Array<number>>;
clipArr = polyline.clip(new H.geo.Rect(5, 5, 5, 5));
