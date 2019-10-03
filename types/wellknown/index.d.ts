// Type definitions for wellknown 0.5
// Project: https://github.com/mapbox/wellknown#readme
// Definitions by: Yair Tawil <https://github.com/yairtawil>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function parse(input: string): {
    type: string,
    coordinates: [ [ [number, number] ] ]
};
export function stringify(gj: {}): string;
