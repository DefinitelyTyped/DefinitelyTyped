import MapiClient, { SdkConfig } from '@mapbox/mapbox-sdk/lib/classes/mapi-client';
import { MapiRequest } from '@mapbox/mapbox-sdk/lib/classes/mapi-request';
import { MapiResponse } from '@mapbox/mapbox-sdk/lib/classes/mapi-response';
import Directions, { DirectionsService, DirectionsResponse } from '@mapbox/mapbox-sdk/services/directions';
import MapMatching, { MapMatchingResponse, MapMatchingService } from '@mapbox/mapbox-sdk/services/map-matching';
import Styles, { StylesService } from '@mapbox/mapbox-sdk/services/styles';
import StaticMap, { StaticMapService } from '@mapbox/mapbox-sdk/services/static';
import Geocoding, { GeocodeService } from '@mapbox/mapbox-sdk/services/geocoding';
import Optimization, { OptimizationService } from '@mapbox/mapbox-sdk/services/optimization';
import { LineString } from 'geojson';

const config: SdkConfig = {
    accessToken: 'access-token',
};
const client = new MapiClient(config);

const directionsService: DirectionsService = Directions(client);

const mapiRequest: MapiRequest = directionsService.getDirections({
    profile: 'walking',
    waypoints: [
        {
            coordinates: [1, 3],
        },
        {
            coordinates: [2, 4],
        },
    ],
    exclude: [],
});

mapiRequest.send().then((response: MapiResponse) => {
    const body = response.body;
    const routes = body.routes;
    const polyline = routes[0].geometry;
});

const mapiRequestGeoJSON: MapiRequest = directionsService.getDirections({
    profile: 'walking',
    geometries: "geojson",
    waypoints: [
        {
            coordinates: [1, 3],
        },
        {
            coordinates: [2, 4],
        },
    ],
    exclude: [],
});

mapiRequestGeoJSON.send().then((response: MapiResponse) => {
    const body = response.body;
    const routes = body.routes;
    const coordinates = routes[0].geometry.coordinates;
});

const mapMatchingService: MapMatchingService = MapMatching(client);

const mapMatchingRequest: MapiRequest = mapMatchingService.getMatch({
    profile: 'walking',
    points: [
        {
            coordinates: [1, 3],
        },
        {
            coordinates: [2, 4],
        },
    ],
});

mapMatchingRequest.send().then((response: MapiResponse) => {
    const body = response.body as MapMatchingResponse;
    const matchings = body.matchings;
});

const stylesService: StylesService = Styles(config);
stylesService.putStyleIcon({
    styleId: 'style-id',
    iconId: 'icon-id',
    file: 'path-to-file.file',
});

const staticMapService: StaticMapService = StaticMap(client);
const geoOverlay: LineString = {
    type: 'LineString',
    coordinates: [
        [0, 1],
        [2, 3],
    ],
};
staticMapService.getStaticImage({
    ownerId: 'owner-id',
    styleId: 'some-style',
    width: 16,
    height: 16,
    position: 'auto',
    overlays: [
        {
            geoJson: geoOverlay,
        },
    ],
});

staticMapService.getStaticImage({
    ownerId: 'owner-id',
    styleId: 'some-style',
    width: 16,
    height: 16,
    position: 'auto',
    overlays: [
        {
            path: {
                coordinates: [
                    [8.1298828125, 10.098670120603392],
                    [9.4921875, 15.792253570362446],
                    [11.77734375, 14.179186142354181],
                    [11.513671874999998, 11.6522364041154],
                ],
                strokeColor: 'ff0000',
                strokeWidth: 10,
                strokeOpacity: 0.4,
                fillColor: '000',
                fillOpacity: 0.75,
            },
        },
        {
            marker: {
                coordinates: [0, 1],
                color: 'yellow',
                size: 'large',
            },
        },
        {
            marker: {
                coordinates: [0, 1],
                url: 'http://example.net',
            },
        },
        {
            geoJson: geoOverlay,
        },
    ],
});

staticMapService.getStaticImage({
    ownerId: 'owner-id',
    styleId: 'some-style',
    width: 16,
    height: 16,
    position: 'auto',
    addlayer: {
        id: 'better-boundary',
        type: 'line',
        source: 'composite',
        'source-layer': 'admin',
        filter: [
            'all',
            ['==', ['get', 'admin_level'], 1],
            ['==', ['get', 'maritime'], 'false'],
            ['match', ['get', 'worldview'], ['all', 'US'], true, false],
        ],
        layout: { 'line-join': 'bevel' },
        paint: { 'line-color': '%236898B3', 'line-width': 1.5, 'line-dasharray': [1.5, 1] },
    },
    before_layer: 'road-label',
});

staticMapService.getStaticImage({
    ownerId: 'owner-id',
    styleId: 'some-style',
    width: 16,
    height: 16,
    position: 'auto',
    setfilter: ['>', 'height', 300],
    layer_id: 'building',
});

const geocodeService: GeocodeService = Geocoding(config);
geocodeService.forwardGeocode({
    bbox: [1, 2, 3, 4],
    query: 'Paris, France',
    mode: 'mapbox.places',
});

const optimizationService: OptimizationService = Optimization(config);
optimizationService.getOptimization({
    profile: 'driving',
    waypoints: [
        {
            coordinates: [-122.42, 37.78],
            bearing: [45, 90],
            radius: 'unlimited',
            approach: 'unrestricted',
        },
        {
            coordinates: [-122.45, 37.91],
            bearing: [90, 1],
            radius: 'unlimited',
            approach: 'curb',
        },
        {
            coordinates: [-122.48, 37.73],
            bearing: [340, 45],
            radius: 1234,
            approach: 'unrestricted',
        },
    ],
    destination: 'last',
    distributions: [
        {
            pickup: 0,
            dropoff: 1,
        },
    ],
    geometries: 'geojson',
    language: 'en',
    overview: 'full',
    source: 'first',
    roundtrip: true,
    steps: true,
});
