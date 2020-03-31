// Type definitions for graphhopper-js-api-client 0.13
// Project: https://github.com/graphhopper/directions-api-js-client
// Definitions by: Bohdan Stupak <https://github.com/Wkalmar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// tslint:disable-next-line no-unnecessary-class
export class GHInput {
    constructor(lat: number, lon: number);
}

export namespace GraphHopper {
    class RoutingOptions {
        key: string;
        host: string;
        vehicle: 'car' | 'bike' | 'foot' | 'hike' | 'mtb' | 'racingbike' | 'scooter' | 'truck' | 'small_truck';
        elevation: boolean;
    }

    class Routing {
        constructor(options: RoutingOptions);
        addPoint(point: GHInput): void;
        doRequest(): Promise<string>;
    }
}
