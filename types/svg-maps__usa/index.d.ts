// Type definitions for @svg-maps/usa 1.1
// Project: https://github.com/VictorCazanave/svg-maps/tree/master/packages/usa
// Definitions by: Nick Glazer <https://github.com/nickglazer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// tslint:disable-next-line no-single-declare-module
declare module '@svg-maps/usa' {
    export interface Location {
        path: string;
        id: string;
        name?: string;
    }

    export interface Map {
        viewBox: string;
        locations: Location[];
        label?: string;
    }

    const USA: Map;
    export default USA;
}
