const a = earcut([10, 0, 0, 50, 60, 60, 70, 10]);
// @example with a hole:
const b = earcut([0, 0, 100, 0, 100, 100, 0, 100, 20, 20, 80, 20, 80, 80, 20, 80], [4]); // [3,0,4, 5,4,0, 3,4,7, 5,0,1, 2,3,7, 6,5,1, 2,7,6, 6,1,2]
// @example with 3d coords:
const c = earcut([10, 0, 1, 0, 50, 2, 60, 60, 3, 70, 10, 4], undefined, 3); // [1,0,3, 3,2,1]

declare const vertices: number[];
declare const holes: number[];
declare const dimensions: number;
const triangles = earcut(vertices, holes, dimensions);
const deviation = earcut.deviation(vertices, holes, dimensions, triangles);

const data = earcut.flatten([[[0, 0], [100, 0], [0, 100]], [[10, 10], [0, 10], [10, 0]]]);
const triangles2 = earcut(data.vertices, data.holes, data.dimensions);

declare const multiDimData: number[][][];
const triangles3 = earcut(data.vertices, data.holes, data.dimensions);
