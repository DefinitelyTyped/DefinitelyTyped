import Directions, { DirectionsService, DirectionsResponse } from '@mapbox/mapbox-sdk/services/directions';
import MapiClient, { SdkConfig } from '@mapbox/mapbox-sdk/lib/classes/mapi-client';
import { MapiRequest } from '@mapbox/mapbox-sdk/lib/classes/mapi-request';
import { MapiResponse } from '@mapbox/mapbox-sdk/lib/classes/mapi-response';

const config: SdkConfig = {
    accessToken: 'access-token',
};
const client = new MapiClient(config);

const ds: DirectionsService = Directions(client);

const mapiRequest: MapiRequest = ds.getDirections({
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

const response = mapiRequest.send().then((response: MapiResponse) => {
    const body = response.body as DirectionsResponse;
    const route = body.routes;
});
