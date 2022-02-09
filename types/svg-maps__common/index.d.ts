// Type definitions for @svg-maps
// Project: https://github.com/VictorCazanave/svg-maps
// Definitions by: Nick Glazer <https://github.com/nickglazer>
//                 Piotr Blażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
