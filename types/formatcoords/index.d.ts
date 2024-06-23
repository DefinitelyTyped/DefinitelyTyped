interface CoordsFormatOptions {
    latLonSeparator?: string;
    decimalPlaces?: number;
}

declare function format(options?: CoordsFormatOptions): string;

declare function format(formatString?: string, options?: CoordsFormatOptions): string;

declare function format(formatString: string, latLonSeparator: string): string;

interface LonLatValues {
    initValue: number;
    degrees: number;
    degreesInt: number;
    degreesFrac: number;
    secondsTotal: number;
    minutes: number;
    minutesInt: number;
    seconds: number;
}

interface CoordsObject {
    format: typeof format;
    north: boolean;
    east: boolean;
    latValues: LonLatValues;
    lonValues: LonLatValues;
}

declare function formatcoords(lat: number, lon?: number, latlonSwapped?: boolean): CoordsObject;

declare function formatcoords([lat, lon]: [number, number], latlonSwapped?: boolean): CoordsObject;

declare function formatcoords(coords: string | { lat: number; lng: number }): CoordsObject;

export = formatcoords;
