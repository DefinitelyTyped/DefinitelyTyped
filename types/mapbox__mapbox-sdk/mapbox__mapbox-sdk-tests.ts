import MapiClient, { SdkConfig } from '@mapbox/mapbox-sdk/lib/classes/mapi-client';
import { MapiRequest } from '@mapbox/mapbox-sdk/lib/classes/mapi-request';
import { MapiResponse } from '@mapbox/mapbox-sdk/lib/classes/mapi-response';
import Directions, { DirectionsService, DirectionsResponse } from '@mapbox/mapbox-sdk/services/directions';
import MapMatching, { MapMatchingResponse, MapMatchingService } from '@mapbox/mapbox-sdk/services/map-matching';
import Styles, { StylesService } from '@mapbox/mapbox-sdk/services/styles';
import StaticMap, { StaticMapService } from '@mapbox/mapbox-sdk/services/static';
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
});

mapiRequest.send().then((response: MapiResponse) => {
    const body = response.body as DirectionsResponse;
    const route = body.routes;
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
    file: 'path-to-file.file'
});

const staticMapService: StaticMapService = StaticMap(client);
const geoOverlay: LineString = {
    type: 'LineString',
    coordinates: [[0, 1], [2, 3]]
};
staticMapService.getStaticImage({
    ownerId: 'owner-id',
    styleId: 'some-style',
    width: 16,
    height: 16,
    position: 'auto',
    overlays: [
        {
            geoJson: geoOverlay
        }
    ]
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
                    [11.513671874999998, 11.6522364041154]
                ],
                strokeColor: 'ff0000',
                strokeWidth: 10,
                strokeOpacity: 0.4,
                fillColor: '000',
                fillOpacity: 0.75
            }
        },
        {
            marker: {
                coordinates: [0, 1],
                color: 'yellow',
                size: 'large',
            }
        },
        {
            marker: {
                coordinates: [0, 1],
                url: 'http://example.net'
            }
        },
        {
            geoJson: geoOverlay
        }
    ]
});
