// Type definitions for wellknown 0.5
// Project: https://github.com/mapbox/wellknown#readme
// Definitions by: Yair Tawil <https://github.com/yairtawil>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = wellknown;

declare namespace wellknown {
    function parse(input: string): object;
    function stringify(gj: {}): string;
}

