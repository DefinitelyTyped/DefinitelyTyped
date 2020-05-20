// Type definitions for point-in-polygon 1.0
// Project: https://github.com/substack/point-in-polygon
// Definitions by: dyst5422 <https://github.com/dyst5422>
//                 kogai <https://github.com/kogai>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function inside(point: ReadonlyArray<number>, polygon: ReadonlyArray<ReadonlyArray<number>>): boolean;
export = inside;
