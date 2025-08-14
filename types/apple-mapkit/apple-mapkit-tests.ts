import { Annotation, CameraZoomRange, CircleOverlay, Coordinate, CoordinateRegion, Map, MapPoint, MarkerAnnotation, PointOfInterestFilter, PolygonOverlay } from "./mapkit";

mapkit.init({
    language: "en",
    authorizationCallback: done => {
        done("my-map-token");
    },
});

const map: Map = new mapkit.Map(document.querySelector<HTMLElement>(".test"), {
    isZoomEnabled: true,
    isRotationEnabled: false,
    tintColor: "green",
    loadPriority: "LandCover",
});

const colorDark = mapkit.Map.ColorSchemes.Dark;
const colorLight = mapkit.Map.ColorSchemes.Light;
const colorAdaptive = mapkit.Map.ColorSchemes.Adaptive;

const coordinate = new mapkit.Coordinate(1000, 1000);
const factory = (coordinate: Coordinate) => {
    const el = document.createElement("div");

    el.textContent = `${coordinate.longitude}, ${coordinate.latitude}`;

    return el;
};

map.addAnnotation(new mapkit.Annotation(coordinate, factory));

const mapPoint: MapPoint = coordinate.toMapPoint();

const cameraBoundary: CameraBoundaryDescription = map.cameraBoundary;
map.setCameraBoundaryAnimated(new mapkit.MapRect(0, 0, 0, 0));

const cameraDistance: number = map.cameraDistance;
map.setCameraDistanceAnimated(0);

const cameraZoomRange: CameraZoomRange = map.cameraZoomRange;
map.setCameraZoomRangeAnimated(cameraZoomRange);

const mapPointsOfInteresetFilter: PointOfInterestFilter = map.pointOfInterestFilter;

let markerAnnotation: MarkerAnnotation;
let circleOverlay: CircleOverlay;
let itemCollection: ItemCollection;
map.addItems([markerAnnotation, circleOverlay, itemCollection]);
const addResult: Array<Annotation | Overlay | ItemCollection> | ItemCollection = map
    .addItems(itemCollection);
map.removeItems([markerAnnotation, circleOverlay, itemCollection]);
const removeResult: Array<Annotation | Overlay | ItemCollection> | ItemCollection = map
    .removeItems(itemCollection);

const cameraBoundaryDescription: CameraBoundaryDescription = {
    mapRect: new mapkit.MapRect(0, 0, 0, 0),
    region: new mapkit.CoordinateRegion(new mapkit.Coordinate(0, 0), new mapkit.CoordinateSpan(0, 0)),
};

let coordinateRegion: CoordinateRegion;
const coordinateRegionRadius: number = coordinateRegion.radius;

let annotation: Annotation;
annotation.padding = new mapkit.Padding(0, 0, 0, 0);

let lineGradient = new mapkit.LineGradient({});
lineGradient.addColorStop(0, "");
lineGradient.addColorStopAtIndex(0, "");

const searchAutocompleteOptions: SearchAutocompleteOptions = {
    language: "",
    coordinate: new mapkit.Coordinate(0, 0),
    region: new mapkit.CoordinateRegion(new mapkit.Coordinate(0, 0), new mapkit.CoordinateSpan(0, 0)),
    includeAddresses: false,
    includePointsOfInterest: false,
    includeQueries: false,
    pointOfInterestFilter: mapkit.filterIncludingAllCategories,
    limitToCountries: "",
};

let filter: PointOfInterestFilter;
filter = mapkit.PointOfInterestFilter.including([mapkit.PointOfInterestCategory.Airport]);
filter = mapkit.PointOfInterestFilter.excluding([mapkit.PointOfInterestCategory.Airport]);
filter = mapkit.filterIncludingAllCategories;
filter = mapkit.filterExcludingAllCategories;
const filterIncludes: boolean = filter.includesCategory(mapkit.PointOfInterestCategory.Airport);
const filterExcludes: boolean = filter.excludesCategory(mapkit.PointOfInterestCategory.Airport);

const poiSearch = new mapkit.PointsOfInterestSearch();
const searchRegion: CoordinateRegion = poiSearch.region;
const searchCenter: Coordinate = poiSearch.center;
const searchPointOfInterestFilter: PointOfInterestFilter = poiSearch.pointOfInterestFilter;
const searchLanguage: string = poiSearch.language;
const searchMaxRadius: number = mapkit.PointsOfInterestSearch.MaxRadius;
const searchResult: number = poiSearch.search({});
const searchCancel: boolean = poiSearch.cancel(0);

const pointOfInterestSearchOptions: PointsOfInterestSearchOptions = {
    language: "",
    center: new mapkit.Coordinate(0, 0),
    radius: 0,
    region: new mapkit.CoordinateRegion(new mapkit.Coordinate(0, 0), new mapkit.CoordinateSpan(0, 0)),
    pointOfInterestFilter: mapkit.filterIncludingAllCategories,
};

let pointsOfInterestSearchDelegate: PointsOfInterestSearchDelegate;
pointsOfInterestSearchDelegate.searchDidComplete({ places: [] });
pointsOfInterestSearchDelegate.searchDidError(new Error());

const pointsOfInterestSearchResponse: PointsOfInterestSearchResponse = {
    places: [],
};

const etaRequestOptions: EtaRequestOptions = {
    origin: new mapkit.Coordinate(0, 0),
    destinations: [],
    transportType: mapkit.Directions.Transport.Automobile,
    departureDate: new Date(),
};

const directions = new mapkit.Directions();
const directionsResult: number = directions.eta(etaRequestOptions, (error: Error, data: EtaResponse) => {});

const etaResponse: EtaResponse = {
    request: etaRequestOptions,
    etas: [],
};

const etaResult: EtaResult = {
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
const search = new mapkit.Search({ limitToCountries: "us,mx" });

// Check that autocomplete accepts SearchAutocompleteOptions
search.autocomplete("Apple", (error, data) => {}, {
    limitToCountries: "us,mx",
});

// Check that all StyleConstructorOptions are optional
const style = new mapkit.Style({});

let pointList = [
    new mapkit.Coordinate(41, -109.05),
    new mapkit.Coordinate(41, -102.05),
    new mapkit.Coordinate(37, -102.05),
    new mapkit.Coordinate(37, -109.05),
];
let pointListList = [pointList, pointList];

// PolygonOverlay
{
    // ctor
    {
        let rectangle: PolygonOverlay;

        rectangle = new mapkit.PolygonOverlay(pointList);

        rectangle = new mapkit.PolygonOverlay(pointListList);
    }

    // get points
    {
        let rectangle: PolygonOverlay;
        let points: Coordinate[][];

        rectangle = new mapkit.PolygonOverlay(pointList);
        points = rectangle.points;

        rectangle = new mapkit.PolygonOverlay(pointListList);
        points = rectangle.points;
    }

    // set points
    {
        const rectangle = new mapkit.PolygonOverlay(pointList);

        rectangle.points = pointListList;

        rectangle.points = [pointList, pointList];
    }
}
