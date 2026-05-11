// This extracts the common definitions from SVGMaps to allow reusing common interfaces in SVG maps packages.

export interface Location {
    path: string;
    id: string;
    name?: string | undefined;
}

export interface Map {
    viewBox: string;
    locations: Location[];
    label?: string | undefined;
}
