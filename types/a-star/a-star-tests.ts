import aStar = require("a-star");

aStar({
    start: { x: 0, y: 0 },
    isEnd: (node) => node.x === 10 && node.y === 10,
    neighbor: (node) => {
        const neighbors = [];
        if (node.x < 10) {
            neighbors.push({ x: node.x + 1, y: node.y });
        }
        if (node.y < 10) {
            neighbors.push({ x: node.x, y: node.y + 1 });
        }
        return neighbors;
    },
    distance: (from, to) => Math.abs(from.x - to.x) + Math.abs(from.y - to.y),
    heuristic: (node) => Math.abs(node.x - 10) + Math.abs(node.y - 10),
    hash: (node) => `${node.x},${node.y}`,
});
