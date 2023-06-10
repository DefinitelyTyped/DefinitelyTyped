// Type definitions for fast-astar 1.0
// Project: https://github.com/sbfkcel/fast-astar
// Definitions by: Damien Fayol <https://github.com/shezard>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class Grid {
    constructor(grid: { col: number; row: number });
    set(coords: [number, number], value: 'value', passable: 0 | 1): void;
}

export class Astar {
    constructor(grid: Grid);
    search(
        originCoords: [number, number],
        destinationCoords: [number, number],
        options: { rightAngle: boolean }
    ): undefined | Array<[number, number]>;
}
