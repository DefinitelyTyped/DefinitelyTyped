// Type definitions for point-in-polygon 1.1
// Project: https://github.com/substack/point-in-polygon
// Definitions by: dyst5422 <https://github.com/dyst5422>
//                 kogai <https://github.com/kogai>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function inside(point: ReadonlyArray<number>, polygon: ReadonlyArray<ReadonlyArray<number>> | ReadonlyArray<number>, start?: number, end?: number): boolean;
export = inside;
