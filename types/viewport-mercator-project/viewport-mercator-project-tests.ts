import WebMercatorViewport, {
    addMetersToLngLat,
    DistanceScalesInput,
    getDistanceScales,
} from 'viewport-mercator-project';

const mercator = new WebMercatorViewport();

const { width, height, scale, latitude, longitude, altitude, zoom, pitch, bearing, center, viewMatrix, projectionMatrix } = mercator;

const xy = mercator.project([0, 1]);
const xyz = mercator.project([0, 1, 2]);

const lngLat = mercator.unproject([0, 1]);
const lngLatZ = mercator.unproject([0, 1, 2]);

const mercatorWithOptions = new WebMercatorViewport({
    width: 10,
    height: 10,
    longitude: 100,
    latitude: 400,
});

const xyFlat = mercatorWithOptions.projectFlat([10, 100], 20);
const lngLatFlat = mercatorWithOptions.unprojectFlat([10, 100], 20);

const equal = mercator.equals(mercatorWithOptions);

const mapCenter = mercatorWithOptions.getMapCenterByLngLatPosition({
    lngLat: [10, 100],
    pos: [100, 200],
});

const fittedMercator = mercatorWithOptions.fitBounds([[10, 20], [30, 40]], {
    padding: 10,
    offset: [10, 20],
});

const equalFitted = fittedMercator.equals(mercatorWithOptions);

const distanceScalesInputZoom = {
    longitude: 1,
    latitude: 2,
    zoom: 1,
};

const { pixelsPerDegree } = getDistanceScales(distanceScalesInputZoom);

const { pixelsPerDegree2 } = getDistanceScales({
    ...distanceScalesInputZoom,
    highPrecision: true,
});

const distanceScalesInputScale = {
    longitude: 1,
    latitude: 2,
    scale: 1,
};

const { metersPerPixel } = getDistanceScales(distanceScalesInputScale);

const { pixelsPerMeter2 } = getDistanceScales({
    ...distanceScalesInputScale,
    highPrecision: true,
});

const [a, b] = addMetersToLngLat([1, 2], [3, 4]);

const [c, d, e] = addMetersToLngLat([1, 2, 3], [4, 5, 6]);
