// Type definitions for Google Geolocation 0.4.8
// Project: https://code.google.com/p/geo-location-javascript/
// Definitions by: Vincent Bortone <https://github.com/vbortone>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.1

interface GeolocationStatic {
    init(): boolean;
    getCurrentPosition(success: (position: GeolocationPosition) => void, error?: (positionError: GeolocationPositionError) => void, opts?: PositionOptions): void;
    showMap(latitude: number, longitude: number): void;
}

declare var geo_position_js: GeolocationStatic;
