

function test_create() {
    let graph: Graph = new Graph([]);
}

function test_create_with_diagonals() {
    let graph: Graph = new Graph([], {diagonal: true});
}

function test_get_node() {
    let graph: Graph = new Graph([[5, 1, 0, 9], [0, 8, 7, 1]]);
    let node: GridNode = graph.grid[0][1];
}

function test_search_returns_nodes() {
    let nodes: Array<GridNode> = astar.search(new Graph([]), {x: 1, y: 1}, {x: 2, y: 2});
}

function test_search_alternative_heuristic() {
    let nodes: Array<GridNode> = astar.search(new Graph([]), {x: 1, y: 1}, {x: 2, y: 2}, {heuristic: astar.heuristics.manhatten});
}

function test_search_or_closest() {
    let nodes: Array<GridNode> = astar.search(new Graph([], {diagonal: true}), {x: 1, y: 1}, {x: 2, y: 2}, {closest: true});
}
