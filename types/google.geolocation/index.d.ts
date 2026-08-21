interface GeolocationStatic {
    init(): boolean;
    getCurrentPosition(
        success: (position: GeolocationPosition) => void,
        error?: (positionError: GeolocationPositionError) => void,
        opts?: PositionOptions,
    ): void;
    showMap(latitude: number, longitude: number): void;
}

declare var geo_position_js: GeolocationStatic;
