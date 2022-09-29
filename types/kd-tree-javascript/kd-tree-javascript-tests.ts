import { kdTree } from 'kd-tree-javascript';

const points = [
    { x: 1, y: 2 },
    { x: 3, y: 4 },
    { x: 5, y: 6 },
    { x: 7, y: 8 },
];

const distance = (a: { x: number; y: number }, b: { x: number; y: number }) => {
    return Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2);
};

const tree = new kdTree(points, distance, ['x', 'y']); // $ExpectType kdTree<{ x: number; y: number; }>

tree.nearest({ x: 5, y: 5 }, 2); // $ExpectType [{ x: number; y: number; }, number][]

tree.balanceFactor(); // $ExpectType number

tree.insert({ x: 1, y: 2 }); // $ExpectType void

tree.remove({ x: 1, y: 2 }); // $ExpectType void

// @ts-expect-error
new kdTree(points, distance, ['x', 'wrongField']);

// @ts-expect-error
tree.nearest({ x: 5, notY: 5 }, 2);

const wrongDistanceComparison = (a: { notX: number; notY: number }, b: { notX: number; notY: number }) => {
    return Math.pow(a.notX - b.notX, 2) + Math.pow(a.notY - b.notY, 2);
};

// @ts-expect-error
new kdTree(points, wrongDistanceComparison, ['x', 'y']);
