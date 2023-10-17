declare class Graph {
    grid: Array<Array<GridNode>>;
    constructor(grid: Array<Array<number>>, options?: { diagonal?: boolean | undefined });
}

declare class GridNode {
    x: number;
    y: number;
}

interface Heuristic {
    (pos0: { x: number; y: number }, pos1: { x: number; y: number }): number;
}

interface Heuristics {
    manhattan: Heuristic;
    diagonal: Heuristic;
}

declare namespace astar {
    function search(
        graph: Graph,
        start: { x: number; y: number },
        end: { x: number; y: number },
        options?: {
            closest?: boolean | undefined;
            heuristic?: Heuristic | undefined;
        },
    ): Array<GridNode>;
    var heuristics: Heuristics;
}
