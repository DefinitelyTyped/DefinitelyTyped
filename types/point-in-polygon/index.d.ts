// Type definitions for point-in-polygon 1.1
// Project: https://github.com/substack/point-in-polygon
// Definitions by: dyst5422 <https://github.com/dyst5422>
//                 kogai <https://github.com/kogai>
//                 Chris-Devine <https://github.com/chris-devine>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = inside;
export as namespace inside;

declare namespace inside {
    function inside(point: ReadonlyArray<number>, polygon: ReadonlyArray<ReadonlyArray<number>>): boolean;
}
