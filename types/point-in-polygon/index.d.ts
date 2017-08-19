// Type definitions for point-in-polygon
// Project: https://github.com/substack/point-in-polygon
// Definitions by: kogai <https://github.com/kogai>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'point-in-polygon' {
    export default function inside(point: number[], polygon: number[][]): boolean;
}
