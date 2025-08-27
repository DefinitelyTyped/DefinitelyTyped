export function fromLatLon(
    latitude: number,
    longitude: number,
    forceZoneNum?: number,
): {
    easting: number;
    northing: number;
    zoneNum: number;
    zoneLetter: string;
};

export function toLatLon(
    easting: number,
    northing: number,
    zoneNum: number,
    zoneLetter: string,
    northern?: undefined,
    strict?: boolean,
): {
    latitude: number;
    longitude: number;
};

export function toLatLon(
    easting: number,
    northing: number,
    zoneNum: number,
    zoneLetter: undefined,
    northern: boolean,
    strict?: boolean,
): {
    latitude: number;
    longitude: number;
};
