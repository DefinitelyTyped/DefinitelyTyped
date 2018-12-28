// Type definitions for bunny 1.0
// Project: https://github.com/mikolalysenko/bunny
// Definitions by: Giacomo Debidda <https://github.com/jackdbd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type Vec3 = [number, number, number];

declare namespace bunny {
    const positions: Vec3[];
    const cells: Vec3[];
}

export default bunny;
