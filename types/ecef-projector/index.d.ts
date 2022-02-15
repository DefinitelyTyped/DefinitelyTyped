// Type definitions for ecef-projector 1.0.1
// Project: https://github.com/lakowske/ecef-projector/blob/master/README.md
// Definitions by: Takao Funami <https://github.com/funami>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function project(latitude: number, longitude: number, altitude: number): number[];
export function unproject(x: number, y: number, z: number): number[];
