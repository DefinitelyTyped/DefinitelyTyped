mapkit.init({
    language: 'en',
    authorizationCallback: done => {
        done('my-map-token');
    },
});

const map: mapkit.Map = new mapkit.Map(document.querySelector<HTMLElement>('.test'), {
    isZoomEnabled: true,
    isRotationEnabled: false,
    tintColor: 'green',
});

const colors = mapkit.Map.ColorSchemes.Dark;

const coordinate = new mapkit.Coordinate(1000, 1000);
const factory = (coordinate: mapkit.Coordinate) => {
    const el = document.createElement('div');

    el.textContent = `${coordinate.longitude}, ${coordinate.latitude}`;

    return el;
};

map.addAnnotation(new mapkit.Annotation(coordinate, factory));

const mapPoint: mapkit.MapPoint = coordinate.toMapPoint();

const cameraBoundary: mapkit.CameraBoundaryDescription = map.cameraBoundary;
map.setCameraBoundaryAnimated(new mapkit.MapRect(0, 0, 0, 0));

const cameraDistance: number = map.cameraDistance;
map.setCameraDistanceAnimated(0);

const cameraZoomRange: mapkit.CameraZoomRange = map.cameraZoomRange;
map.setCameraZoomRangeAnimated(cameraZoomRange);

const mapPointsOfInteresetFilter: mapkit.PointOfInterestFilter = map.pointOfInterestFilter;

let markerAnnotation: mapkit.MarkerAnnotation;
let circleOverlay: mapkit.CircleOverlay;
let itemCollection: mapkit.ItemCollection;
map.addItems([markerAnnotation, circleOverlay, itemCollection]);
const addResult: Array<mapkit.Annotation | mapkit.Overlay | mapkit.ItemCollection> | mapkit.ItemCollection =
    map.addItems(itemCollection);
map.removeItems([markerAnnotation, circleOverlay, itemCollection]);
const removeResult: Array<mapkit.Annotation | mapkit.Overlay | mapkit.ItemCollection> | mapkit.ItemCollection =
    map.removeItems(itemCollection);

const cameraBoundaryDescription: mapkit.CameraBoundaryDescription = {
    mapRect: new mapkit.MapRect(0, 0, 0, 0),
    region: new mapkit.CoordinateRegion(new mapkit.Coordinate(0, 0), new mapkit.CoordinateSpan(0, 0)),
};

let coordinateRegion: mapkit.CoordinateRegion;
const coordinateRegionRadius: number = coordinateRegion.radius;

let annotation: mapkit.Annotation;
annotation.padding = new mapkit.Padding(0, 0, 0, 0);

let lineGradient = new mapkit.LineGradient({});
lineGradient.addColorStop(0, '');
lineGradient.addColorStopAtIndex(0, '');

const searchAutocompleteOptions: mapkit.SearchAutocompleteOptions = {
    language: '',
    coordinate: new mapkit.Coordinate(0, 0),
    region: new mapkit.CoordinateRegion(new mapkit.Coordinate(0, 0), new mapkit.CoordinateSpan(0, 0)),
    includeAddresses: false,
    includePointsOfInterest: false,
    includeQueries: false,
    pointOfInterestFilter: mapkit.PointOfInterestFilter.filterIncludingAllCategories,
    limitToCountries: '',
};

let filter: mapkit.PointOfInterestFilter;
filter = mapkit.PointOfInterestFilter.including([mapkit.PointOfInterestCategory.Airport]);
filter = mapkit.PointOfInterestFilter.excluding([mapkit.PointOfInterestCategory.Airport]);
filter = mapkit.PointOfInterestFilter.filterIncludingAllCategories;
filter = mapkit.PointOfInterestFilter.filterExcludingAllCategories;
const filterIncludes: boolean = filter.includesCategory(mapkit.PointOfInterestCategory.Airport);
const filterExcludes: boolean = filter.excludesCategory(mapkit.PointOfInterestCategory.Airport);

const poiSearch = new mapkit.PointsOfInterestSearch();
const searchRegion: mapkit.CoordinateRegion = poiSearch.region;
const searchCenter: mapkit.Coordinate = poiSearch.center;
const searchPointOfInterestFilter: mapkit.PointOfInterestFilter = poiSearch.pointOfInterestFilter;
const searchLanguage: string = poiSearch.language;
const searchMaxRadius: number = poiSearch.MaxRadius;
const searchResult: number = poiSearch.search({});
const searchCancel: boolean = poiSearch.cancel(0);

const pointOfInterestSearchOptions: mapkit.PointsOfInterestSearchOptions = {
    language: '',
    center: new mapkit.Coordinate(0, 0),
    radius: 0,
    region: new mapkit.CoordinateRegion(new mapkit.Coordinate(0, 0), new mapkit.CoordinateSpan(0, 0)),
    pointOfInterestFilter: mapkit.PointOfInterestFilter.filterIncludingAllCategories,
};

let pointsOfInterestSearchDelegate: mapkit.PointsOfInterestSearchDelegate;
pointsOfInterestSearchDelegate.searchDidComplete({ places: [] });
pointsOfInterestSearchDelegate.searchDidError(new Error());

const pointsOfInterestSearchResponse: mapkit.PointsOfInterestSearchResponse = {
    places: [],
};

const etaRequestOptions: mapkit.EtaRequestOptions = {
    origin: new mapkit.Coordinate(0, 0),
    destinations: [],
    transportType: mapkit.Directions.Transport.Automobile,
    departureDate: new Date(),
};

const directions = new mapkit.Directions();
const directionsResult: number = directions.eta(etaRequestOptions, (error: Error, data: mapkit.EtaResponse) => {});

const etaResponse: mapkit.EtaResponse = {
    request: etaRequestOptions,
    etas: [],
};

const etaResult: mapkit.EtaResult = {
    transportType: mapkit.Directions.Transport.Automobile,
    distance: 0,
    expectedTravelTime: 0,
    staticTravelTime: 0,
};

let newCameraZoomRange = new mapkit.CameraZoomRange(0, 0);
newCameraZoomRange = new mapkit.CameraZoomRange({ minCameraDistance: 0, maxCameraDistance: 0 });
const minCameraDistance: number = newCameraZoomRange.minCameraDistance;
const maxCameraDistance: number = newCameraZoomRange.maxCameraDistance;

// Check that limitToCountries accepts a string
const search = new mapkit.Search({ limitToCountries: 'us,mx' });

// Check that autocomplete accepts SearchAutocompleteOptions
search.autocomplete('Apple', (error, data) => {}, {
    limitToCountries: 'us,mx'
});

// Check that all StyleConstructorOptions are optional
const style = new mapkit.Style({});
