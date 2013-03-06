// Type definitions for Google Geolocation 0.4.8
// Project: https://code.google.com/p/geo-location-javascript/
// Definitions by: Vincent Bortone <https://github.com/vbortone/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped 

interface GeolocationStatic {
	init(): bool;
	getCurrentPosition(success: (position: Position) => void, error?: (positionError: PositionError) => void, opts?: PositionOptions): void;
	showMap(latitude: number, longitude: number): void;
}

declare var geo_position_js: GeolocationStatic;