export interface ToFormats {
    DMS: "DMS";
    DM: "DM";
    DD: "DD";
}

export interface ConvertResponse {
    decimalLatitude: number;
    decimalLongitude: number;
    decimalCoordinates: string;
    verbatimLatitude: string;
    verbatimLongitude: string;
    verbatimCoordinates: string;
    closeEnough: (coordinates: string) => boolean;
    toCoordinateFormat: (format: ToFormats) => string;
}

/**
 * Function for converting coordinates in a variety of formats to decimal coordinates
 * @param {string} coordsString The coordinates string to convert
 * @param {number} decimalPlaces The number of decimal places for converted coordinates; default is 5
 * @returns {ConverterResponse} { verbatimCoordinates, decimalCoordinates, decimalLatitude, decimalLongitude }
 */
export function convert(coordsString: string, decimalPlaces?: number): ConvertResponse;
