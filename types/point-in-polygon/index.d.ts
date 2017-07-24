// Type definitions for point-in-polygon
// Project: https://github.com/substack/point-in-polygon
// Definitions by: dyst5422 <https://github.com/dyst5422>
//                 kogai <https://github.com/kogai>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'point-in-polygon' {
    const inside: (point: number[], polygon: number[][]) => boolean;
    export = inside;
}
