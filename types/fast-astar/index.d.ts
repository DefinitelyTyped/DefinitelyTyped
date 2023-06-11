// Type definitions for fast-astar 1.0
// Project: https://github.com/sbfkcel/fast-astar
// Definitions by: Damien Fayol <https://github.com/shezard>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class Grid {
    constructor(grid: { col: number; row: number });
    set(coords: [x: number, y: number], value: 'value', passable: 0 | 1): void;
}

export class Astar {
    constructor(grid: Grid);
    search(
        originCoords: [x: number, y: number],
        destinationCoords: [x: number, y: number],
        options?: { rightAngle: boolean, optimalResult?: boolean }
    ): undefined | Array<[x: number, y: number]>;
}
