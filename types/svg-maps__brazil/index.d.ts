// Type definitions for @svg-maps/brazil 1.0
// Project: https://github.com/VictorCazanave/svg-maps/tree/master/packages/brazil
// Definitions by: Joao Sutel <https://github.com/joaosutel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace brazil {
    interface Location {
        path: string;
        id: string;
        name?: string;
    }
    interface Map {
        viewBox: string;
        locations: Location[];
        label?: string;
    }
}

declare const brazil: brazil.Map;
export = brazil;
