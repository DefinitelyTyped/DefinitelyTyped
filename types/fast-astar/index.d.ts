export class Grid {
    constructor(grid: { col: number; row: number });
    set(coords: [x: number, y: number], value: "value", passable: 0 | 1): void;
}

export class Astar {
    constructor(grid: Grid);
    search(
        originCoords: [x: number, y: number],
        destinationCoords: [x: number, y: number],
        options?: { rightAngle: boolean; optimalResult?: boolean },
    ): undefined | Array<[x: number, y: number]>;
}
