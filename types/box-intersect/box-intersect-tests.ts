import boxIntersect from 'box-intersect';

type Box2D = [number, number, number, number];
type Box3D = [number, number, number, number, number, number];

const red2d: Box2D[] = [
    [1, 1, 2, 2],
    [0, -1, 3, 2],
];

const blue2d: Box2D[] = [
    [2, 1, 4, 5],
    [0.5, 3, 1, 10],
];

boxIntersect(red2d);
boxIntersect(red2d, (r, b) => {});
boxIntersect<Box2D>(red2d, blue2d);
boxIntersect<Box2D>(red2d, blue2d, (r, b) => {});

const red3d: Box3D[] = [
    [0, 0, 0, 8, 1, 1],
    [0, 0, 0, 1, 8, 1],
    [0, 0, 0, 1, 1, 8],
];

const blue3d: Box3D[] = [
    [5, 0, 0, 6, 10, 10],
    [0, 5, 0, 10, 6, 10],
    [0, 0, 5, 10, 10, 10],
];

boxIntersect(red3d);
boxIntersect(red3d, (r, b) => {});
boxIntersect<Box3D>(red3d, blue3d);
boxIntersect<Box3D>(red3d, blue3d, (r, b) => {});
