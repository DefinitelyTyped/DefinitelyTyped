// Apple MapKit JS API Tests
// Comprehensive examples of all public classes, methods, and interfaces

// Named imports for interfaces and types
import {
    AbstractLookAround,
    AddressCategory,
    AddressFilter,
    AddressFilterOptions,
    Annotation,
    AnnotationCalloutDelegate,
    AnnotationConstructorOptions,
    BoundingRegion,
    CameraBoundaryDescription,
    CameraZoomRange,
    CameraZoomRangeConstructorOptions,
    CircleOverlay,
    ClusterAnnotation,
    CollisionMode,
    ColorScheme,
    CommonLookAroundOptions,
    Coordinate,
    CoordinateRegion,
    CoordinateSpan,
    Directions,
    DirectionsConstructorOptions,
    DirectionsRequest,
    DirectionsResponse,
    DisplayPriority,
    Distances,
    EtaRequestOptions,
    EtaResponse,
    EtaResult,
    FeatureVisibility,
    Geocoder,
    GeocoderLookupOptions,
    GeocoderResponse,
    GeocoderReverseLookupOptions,
    GeoJSONDelegate,
    GeoJSONImportError,
    ImageAnnotation,
    ImageAnnotationOptions,
    ImageDelegate,
    ImageHashObject,
    ItemCollection,
    LineGradient,
    LoadPriorities,
    LookAround,
    LookAroundBadgePosition,
    LookAroundOptions,
    LookAroundPreview,
    LookAroundPreviewOptions,
    LookAroundReadyState,
    LookAroundScene,
    Map,
    MapConstructorOptions,
    MapFeatureAnnotation,
    MapFeatureAnnotationGlyphImage,
    MapFeatureType,
    MapKit,
    MapKitEvent,
    MapKitEventListener,
    MapKitEventTarget,
    MapKitInitializationOptions,
    MapPoint,
    MapRect,
    MapShowItemsOptions,
    MapSize,
    MapType,
    MarkerAnnotation,
    MarkerAnnotationConstructorOptions,
    Overlay,
    OverlayOptions,
    Padding,
    PaddingConstructorOptions,
    PlaceAnnotation,
    PlaceDetail,
    PlaceDetailOptions,
    PlaceLookup,
    PlaceSelectionAccessory,
    PlaceSelectionAccessoryOptions,
    PlaceSelectionAccessoryStyle,
    PointOfInterestCategory,
    PointOfInterestFilter,
    PointOfInterestFilterOptions,
    PointsOfInterestSearch,
    PointsOfInterestSearchOptions,
    PointsOfInterestSearchResponse,
    PolygonOverlay,
    PolylineOverlay,
    RegionPriority,
    Route,
    Search,
    SearchAutocompleteOptions,
    SearchAutocompleteResponse,
    SearchAutocompleteResult,
    SearchConstructorOptions,
    SearchOptions,
    SearchPlaceResult,
    SearchResponse,
    Service,
    ServiceOptions,
    Size,
    Step,
    Style,
    StyleConstructorOptions,
    TileOverlay,
    TileOverlayConstructorOptions,
    TileOverlayUrlTemplate,
    TransportType,
    UserLocationAnnotation,
} from "apple-mapkit";

// ===== MapKit Initialization =====
const initOptions: MapKitInitializationOptions = {
    authorizationCallback: (done) => {
        done("your-jwt-token-here");
    },
    language: "en-US",
    libraries: ["look-around"],
};

// Initialize MapKit
mapkit.init(initOptions);

// ===== Basic MapKit Properties =====
const version: string = mapkit.version;
const build: string = mapkit.build;
const language: string = mapkit.language;
mapkit.language = "fr-FR";

const libraries: string[] | undefined = mapkit.Libraries;
const loadedLibraries: string[] | undefined = mapkit.loadedLibraries;

// ===== Data Types (Classes) =====

// Coordinate
const coordinate: Coordinate = new mapkit.Coordinate(37.7749, -122.4194);
const coordinateCopy: Coordinate = coordinate.copy();
const isEqual: boolean = coordinate.equals(coordinateCopy);
const mapPoint: MapPoint = coordinate.toMapPoint();
const unwrappedMapPoint: MapPoint = coordinate.toUnwrappedMapPoint();
const coordinateString: string = coordinate.toString();

// CoordinateSpan
const span: CoordinateSpan = new mapkit.CoordinateSpan(0.01, 0.01);
const spanCopy: CoordinateSpan = span.copy();
const spansEqual: boolean = span.equals(spanCopy);
const spanString: string = span.toString();

// CoordinateRegion
const region: CoordinateRegion = new mapkit.CoordinateRegion(coordinate, span);
const regionCopy: CoordinateRegion = region.copy();
const regionsEqual: boolean = region.equals(regionCopy);
const boundingRegion: BoundingRegion = region.toBoundingRegion();
const mapRect: MapRect = region.toMapRect();
const regionRadius: number = region.radius;
const regionString: string = region.toString();

// BoundingRegion
const bounds: BoundingRegion = new mapkit.BoundingRegion(37.8, -122.4, 37.7, -122.5);
const boundsCopy: BoundingRegion = bounds.copy();
const boundsRegion: CoordinateRegion = bounds.toCoordinateRegion();
const boundsString: string = bounds.toString();

// MapPoint
const point: MapPoint = new mapkit.MapPoint(100, 200);
const pointCopy: MapPoint = point.copy();
const pointsEqual: boolean = point.equals(pointCopy);
const pointCoordinate: Coordinate = point.toCoordinate();
const pointString: string = point.toString();

// MapSize
const size: MapSize = new mapkit.MapSize(300, 400);
const sizeCopy: MapSize = size.copy();
const sizesEqual: boolean = size.equals(sizeCopy);
const sizeString: string = size.toString();

// MapRect
const rect: MapRect = new mapkit.MapRect(0, 0, 1000, 1000);
const rectCopy: MapRect = rect.copy();
const rectsEqual: boolean = rect.equals(rectCopy);
const rectMinX: number = rect.minX();
const rectMinY: number = rect.minY();
const rectMidX: number = rect.midX();
const rectMidY: number = rect.midY();
const rectMaxX: number = rect.maxX();
const rectMaxY: number = rect.maxY();
const scaledRect: MapRect = rect.scale(2.0, point);
const rectRegion: CoordinateRegion = rect.toCoordinateRegion();
const rectString: string = rect.toString();

// Padding
const padding: Padding = new mapkit.Padding(10, 20, 30, 40);
const paddingFromOptions: Padding = new mapkit.Padding({ top: 10, right: 20, bottom: 30, left: 40 });
const paddingCopy: Padding = padding.copy();
const paddingsEqual: boolean = padding.equals(paddingCopy);
const paddingString: string = padding.toString();
const zeroPadding: Padding = mapkit.Padding.Zero;

// CameraZoomRange
const zoomRange: CameraZoomRange = new mapkit.CameraZoomRange(100, 10000);
const zoomRangeFromOptions: CameraZoomRange = new mapkit.CameraZoomRange({
    minCameraDistance: 100,
    maxCameraDistance: 10000,
});
const zoomRangeCopy: CameraZoomRange = zoomRange.copy();
const minDistance: number = zoomRange.minCameraDistance;
const maxDistance: number = zoomRange.maxCameraDistance;

// ===== Map Creation and Configuration =====

const mapContainer: HTMLElement | null = document.getElementById("map-container");
const mapOptions: MapConstructorOptions = {
    mapType: mapkit.Map.MapTypes.Standard,
    colorScheme: mapkit.Map.ColorSchemes.Light,
    region: region,
    padding: padding,
    showsZoomControl: true,
    showsMapTypeControl: true,
    showsUserLocationControl: true,
    showsCompass: mapkit.FeatureVisibility.Adaptive,
    showsScale: mapkit.FeatureVisibility.Visible,
    isScrollEnabled: true,
    isZoomEnabled: true,
    isRotationEnabled: true,
    showsPointsOfInterest: true,
    loadPriority: mapkit.Map.LoadPriorities.PointsOfInterest,
};

const map: Map = new mapkit.Map(mapContainer, mapOptions);

// Map properties and methods
map.region = region;
map.center = coordinate;
map.rotation = 45;
map.cameraDistance = 5000;
map.cameraZoomRange = zoomRange;
map.cameraBoundary = region;
map.tintColor = "#007AFF";
map.showsUserLocation = true;
map.tracksUserLocation = true;

// Animated map changes
map.setRegionAnimated(region, true);
map.setCenterAnimated(coordinate, true);
map.setRotationAnimated(90, true);
map.setCameraDistanceAnimated(3000, true);
map.setCameraZoomRangeAnimated(zoomRange, true);
map.setCameraBoundaryAnimated(region, true);

// Coordinate conversion
const pagePoint: DOMPoint = map.convertCoordinateToPointOnPage(coordinate);
const mapCoordinate: Coordinate = map.convertPointOnPageToCoordinate(pagePoint);

// ===== Annotations =====

// Basic Annotation
const customAnnotation: Annotation = new mapkit.Annotation(
    coordinate,
    (coord, options) => {
        const element = document.createElement("div");
        element.className = "custom-annotation";
        return element;
    },
    {
        title: "Custom Annotation",
        subtitle: "A custom annotation example",
        calloutEnabled: true,
        draggable: true,
        animates: true,
    },
);

// MarkerAnnotation
const markerOptions: MarkerAnnotationConstructorOptions = {
    color: "#FF3B30",
    glyphColor: "#FFFFFF",
    glyphText: "<�",
    title: "Marker Annotation",
    subtitle: "A marker annotation example",
    titleVisibility: true,
    subtitleVisibility: true,
};

const marker: MarkerAnnotation = new mapkit.MarkerAnnotation(coordinate, markerOptions);

// ImageAnnotation
const imageOptions: ImageAnnotationOptions = {
    url: {
        1: "https://example.com/icon.png",
        2: "https://example.com/icon@2x.png",
    },
    title: "Image Annotation",
    subtitle: "An image annotation example",
};

const imageAnnotation: ImageAnnotation = new mapkit.ImageAnnotation(coordinate, imageOptions);

// PlaceAnnotation
const placeAnnotation: PlaceAnnotation = new mapkit.PlaceAnnotation(coordinate, {
    title: "Place Annotation",
    subtitle: "A place annotation example",
});

// UserLocationAnnotation (read-only, accessed via map)
const userLocationAnnotation: UserLocationAnnotation | null = map.userLocationAnnotation;

// Add annotations to map
map.addAnnotation(marker);
map.addAnnotations([customAnnotation, imageAnnotation, placeAnnotation]);

// Annotation management
map.selectedAnnotation = marker;
const annotationsInRect: Annotation[] = map.annotationsInMapRect(rect);
map.removeAnnotation(marker);
map.removeAnnotations([customAnnotation, imageAnnotation]);

// ===== Overlays =====

// Style for overlays
const style: Style = new mapkit.Style({
    strokeColor: "#FF3B30",
    strokeOpacity: 0.8,
    lineWidth: 3,
    lineCap: "round",
    lineJoin: "round",
    lineDash: [5, 10],
    lineDashOffset: 2,
    fillColor: "#007AFF",
    fillOpacity: 0.3,
    fillRule: "evenodd",
});

// LineGradient
const gradient: LineGradient = new mapkit.LineGradient({
    0: "#FF3B30",
    0.5: "#FF9500",
    1: "#FFCC00",
});
gradient.addColorStop(0.25, "#FF6B35");
gradient.addColorStopAtIndex(5, "#34C759");

// CircleOverlay
const circle: CircleOverlay = new mapkit.CircleOverlay(coordinate, 1000, {
    style: style,
    visible: true,
    enabled: true,
});

// PolygonOverlay
const polygonPoints = [
    [
        new mapkit.Coordinate(37.7749, -122.4194),
        new mapkit.Coordinate(37.7849, -122.4194),
        new mapkit.Coordinate(37.7849, -122.4094),
        new mapkit.Coordinate(37.7749, -122.4094),
    ],
];
const polygon: PolygonOverlay = new mapkit.PolygonOverlay(polygonPoints, { style: style });

// PolylineOverlay
const polylinePoints = [
    new mapkit.Coordinate(37.7749, -122.4194),
    new mapkit.Coordinate(37.7849, -122.4194),
    new mapkit.Coordinate(37.7849, -122.4094),
];
const polyline: PolylineOverlay = new mapkit.PolylineOverlay(polylinePoints, { style: style });

// Add overlays to map
map.addOverlay(circle);
map.addOverlays([polygon, polyline]);

// Overlay management
map.selectedOverlay = circle;
const topOverlay: Overlay | undefined = map.topOverlayAtPoint(pagePoint);
const overlaysAtPoint: Overlay[] = map.overlaysAtPoint(pagePoint);
map.removeOverlay(circle);
map.removeOverlays([polygon, polyline]);

// ===== Tile Overlays =====

const tileOverlay: TileOverlay = new mapkit.TileOverlay(
    "https://tile.server.com/{z}/{x}/{y}.png",
    {
        minimumZ: 5,
        maximumZ: 15,
        opacity: 0.7,
        data: { apiKey: "your-api-key" },
    },
);

// Add tile overlay
map.addTileOverlay(tileOverlay);
map.addTileOverlays([tileOverlay]);

// Tile overlay management
tileOverlay.reload();
map.removeTileOverlay(tileOverlay);
map.removeTileOverlays([tileOverlay]);

// ===== Services =====

// Geocoder
const geocoder: Geocoder = new mapkit.Geocoder({ language: "en-US" });

const geocodeLookupOptions: GeocoderLookupOptions = {
    language: "en-US",
    region: region,
    coordinate: coordinate,
    limitToCountries: "US,CA",
};

geocoder.lookup("Apple Park", (error, response) => {
    if (error) {
        console.error("Geocoder error:", error);
        return;
    }
    console.log("Geocoder results:", response?.results);
}, geocodeLookupOptions);

geocoder.reverseLookup(coordinate, (error, response) => {
    if (error) {
        console.error("Reverse geocoder error:", error);
        return;
    }
    console.log("Reverse geocoder results:", response?.results);
});

// Search
const search: Search = new mapkit.Search({
    language: "en-US",
    region: region,
    includeAddresses: true,
    includePointsOfInterest: true,
    includePhysicalFeatures: true,
    includeQueries: true,
});

const searchOptions: SearchOptions = {
    coordinate: coordinate,
    region: region,
    regionPriority: mapkit.Search.RegionPriority.Required,
    includeAddresses: true,
    includePointsOfInterest: true,
};

search.search("coffee shops", (error, response) => {
    if (error) {
        console.error("Search error:", error);
        return;
    }
    console.log("Search results:", response?.places);
}, searchOptions);

search.autocomplete("coff", (error, response) => {
    if (error) {
        console.error("Autocomplete error:", error);
        return;
    }
    console.log("Autocomplete results:", response?.results);
});

// Directions
const directions: Directions = new mapkit.Directions({ language: "en-US" });

const directionsRequest: DirectionsRequest = {
    origin: "Apple Park",
    destination: coordinate,
    transportType: mapkit.Directions.Transport.Automobile,
    requestsAlternateRoutes: true,
    avoidTolls: false,
};

directions.route(directionsRequest, (error, response) => {
    if (error) {
        console.error("Directions error:", error);
        return;
    }
    console.log("Route results:", response?.routes);
});

const etaRequest: EtaRequestOptions = {
    origin: coordinate,
    destinations: [new mapkit.Coordinate(37.7849, -122.4194)],
    transportType: mapkit.Directions.Transport.Walking,
};

directions.eta(etaRequest, (error, response) => {
    if (error) {
        console.error("ETA error:", error);
        return;
    }
    console.log("ETA results:", response?.etas);
});

// PlaceLookup
const placeLookup: PlaceLookup = new mapkit.PlaceLookup({ language: "en-US" });
placeLookup.getPlace("place-id-here", (error, place) => {
    if (error) {
        console.error("Place lookup error:", error);
        return;
    }
    console.log("Place details:", place);
});

// PointsOfInterestSearch
const poiSearch: PointsOfInterestSearch = new mapkit.PointsOfInterestSearch({
    center: coordinate,
    radius: 5000,
    pointOfInterestFilter: mapkit.PointOfInterestFilter.including([
        mapkit.PointOfInterestCategory.Restaurant,
        mapkit.PointOfInterestCategory.Cafe,
    ]),
});

poiSearch.search((error, response) => {
    if (error) {
        console.error("POI search error:", error);
        return;
    }
    console.log("POI results:", response?.places);
});

// ===== Filters =====

// AddressFilter
const addressFilter: AddressFilter = new mapkit.AddressFilter({
    includes: [mapkit.AddressCategory.Locality, mapkit.AddressCategory.PostalCode],
    excludes: [mapkit.AddressCategory.Country],
});

const includesLocality: boolean = addressFilter.includesCategory(mapkit.AddressCategory.Locality);
const excludesCountry: boolean = addressFilter.excludesCategory(mapkit.AddressCategory.Country);

// PointOfInterestFilter
const poiFilter: PointOfInterestFilter = new mapkit.PointOfInterestFilter({
    includes: [mapkit.PointOfInterestCategory.Restaurant],
    excludes: [mapkit.PointOfInterestCategory.Store],
});

const includesRestaurant: boolean | undefined = poiFilter.includesCategory(mapkit.PointOfInterestCategory.Restaurant);
const excludesStore: boolean | undefined = poiFilter.excludesCategory(mapkit.PointOfInterestCategory.Store);

// Static filter methods
const allCategoriesFilter: PointOfInterestFilter = mapkit.PointOfInterestFilter.includingAllCategories();
const noCategoriesFilter: PointOfInterestFilter = mapkit.PointOfInterestFilter.excludingAllCategories();
const specificIncludeFilter: PointOfInterestFilter = mapkit.PointOfInterestFilter.including([
    mapkit.PointOfInterestCategory.Hospital,
    mapkit.PointOfInterestCategory.School,
]);
const specificExcludeFilter: PointOfInterestFilter = mapkit.PointOfInterestFilter.excluding([
    mapkit.PointOfInterestCategory.Nightlife,
]);

// ===== Look Around =====

const lookAroundContainer = document.getElementById("look-around")!;
const lookAround: LookAround = new mapkit.LookAround(lookAroundContainer, coordinate, {
    showsDialogControl: true,
    showsCloseControl: true,
    isNavigationEnabled: true,
    isZoomEnabled: true,
    isScrollEnabled: true,
    showsRoadLabels: true,
    showsPointsOfInterest: true,
    padding: padding,
});

// Look Around Preview
const previewContainer = document.getElementById("look-around-preview")!;
const lookAroundPreview: LookAroundPreview = new mapkit.LookAroundPreview(previewContainer, coordinate, {
    badgePosition: mapkit.LookAroundPreview.BadgePositions.TopTrailing,
    isNavigationEnabled: false,
    openDialog: false,
});

// ===== Place Detail =====

const placeDetailContainer = document.getElementById("place-detail")!;
const placeDetail: PlaceDetail = new mapkit.PlaceDetail(placeDetailContainer, null, {
    colorScheme: mapkit.PlaceDetail.ColorSchemes.Light,
    displaysMap: true,
});

// ===== Place Selection Accessory =====

const selectionAccessory: PlaceSelectionAccessory = new mapkit.PlaceSelectionAccessory({
    style: mapkit.PlaceSelectionAccessory.Styles.Callout,
});

// ===== Map Items and Collections =====

const allItems: (Annotation | Overlay)[] = [marker, circle, polygon];
map.showItems(allItems, {
    animate: true,
    padding: padding,
    minimumSpan: span,
    cameraDistance: 5000,
});

map.addItems(allItems);
map.removeItems(allItems);

// ===== Event Handling =====

// Map events
map.addEventListener("select", (event) => {
    console.log("Map selected:", event);
});

map.addEventListener("deselect", (event) => {
    console.log("Map deselected:", event);
});

map.addEventListener("user-location-change", (event) => {
    console.log("User location changed:", event);
});

// Annotation events
marker.addEventListener("select", (event) => {
    console.log("Marker selected:", event);
});

// Overlay events
circle.addEventListener("select", (event) => {
    console.log("Circle selected:", event);
});

// ===== Annotation Callout Delegate =====

const calloutDelegate: AnnotationCalloutDelegate = {
    calloutShouldAppearForAnnotation: (annotation) => true,
    calloutShouldAnimateForAnnotation: (annotation) => true,
    calloutAppearanceAnimationForAnnotation: (annotation) => "fadeIn 0.3s ease",
    calloutContentForAnnotation: (annotation) => {
        const div = document.createElement("div");
        div.innerHTML = `<h3>${annotation.title}</h3><p>${annotation.subtitle}</p>`;
        return div;
    },
    calloutLeftAccessoryForAnnotation: (annotation) => {
        const button = document.createElement("button");
        button.textContent = "Info";
        return button;
    },
    calloutRightAccessoryForAnnotation: (annotation) => {
        const button = document.createElement("button");
        button.textContent = "Details";
        return button;
    },
};

marker.callout = calloutDelegate;

// ===== GeoJSON Import =====

const geoJSONDelegate: GeoJSONDelegate = {
    itemForPoint: (coordinate, geoJSON) => {
        return new mapkit.MarkerAnnotation(coordinate, {
            title: "GeoJSON Point",
            color: "#34C759",
        });
    },
    itemForLineString: (polyline, geoJSON) => {
        polyline.style = new mapkit.Style({ strokeColor: "#007AFF" });
        return polyline;
    },
    itemForPolygon: (polygon, geoJSON) => {
        polygon.style = new mapkit.Style({
            fillColor: "#FF3B30",
            fillOpacity: 0.3,
        });
        return polygon;
    },
    styleForOverlay: (overlay, geoJSON) => {
        return new mapkit.Style({ strokeColor: "#FF9500" });
    },
    geoJSONDidComplete: (items, geoJSON) => {
        console.log("GeoJSON import completed:", items);
    },
    geoJSONDidError: (error, geoJSON) => {
        console.error("GeoJSON import error:", error);
    },
};

const geoJSONData = {
    type: "FeatureCollection" as const,
    features: [
        {
            type: "Feature" as const,
            geometry: {
                type: "Point" as const,
                coordinates: [-122.4194, 37.7749],
            },
            properties: {
                name: "San Francisco",
            },
        },
    ],
};

const importedItems: ItemCollection<any> | undefined = mapkit.importGeoJSON(geoJSONData, geoJSONDelegate);

// ===== Map Feature Annotations =====

map.selectableMapFeatures = [
    mapkit.MapFeatureType.PointOfInterest,
    mapkit.MapFeatureType.Territory,
];

map.annotationForMapFeature = (mapFeatureAnnotation) => {
    return new mapkit.MarkerAnnotation(mapFeatureAnnotation.coordinate, {
        title: mapFeatureAnnotation.title,
        subtitle: mapFeatureAnnotation.subtitle,
        color: "#FF3B30",
    });
};

// ===== Clustering =====

map.annotationForCluster = (clusterAnnotation) => {
    const count = clusterAnnotation.memberAnnotations.length;
    return new mapkit.MarkerAnnotation(clusterAnnotation.coordinate, {
        glyphText: count.toString(),
        color: "#007AFF",
    });
};

// Set clustering identifier on annotations
marker.clusteringIdentifier = "default";
imageAnnotation.clusteringIdentifier = "default";

// ===== Utility Methods =====

// Cancel service requests
const requestId: number = search.search("query", () => { });
if (requestId) {
    search.cancel(requestId);
}

// Map lifecycle
map.destroy();

// Look around lifecycle
lookAround.destroy();
lookAroundPreview.destroy();

// Place detail lifecycle
placeDetail.destroy();

// Access all maps and look around views
const allMaps: Map[] = mapkit.maps;
const allLookAroundViews: AbstractLookAround[] = mapkit.lookAroundViews;

// Global convenience filters
const includeAllPOIs: PointOfInterestFilter = mapkit.filterIncludingAllCategories;
const excludeAllPOIs: PointOfInterestFilter = mapkit.filterExcludingAllCategories;

console.log("Apple MapKit tests completed successfully!");
