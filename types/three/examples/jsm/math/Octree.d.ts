import { Box3, Object3D, Ray, Sphere, Triangle } from "../../../src/Three.js";

import { Capsule } from "./Capsule.js";

export class Octree {
    box: Box3 | null | undefined;
    bounds: Box3;

    subTrees: Octree[];
    triangles: Triangle[];

    constructor(box?: Box3 | null);

    addTriangle(triangle: Triangle): this;
    calcBox(): this;
    split(level: number): this;
    build(): this;
    getRayTriangles(ray: Ray, triangles: Triangle[]): Triangle[];
    triangleCapsuleIntersect(capsule: Capsule, triangle: Triangle): any;
    triangleSphereIntersect(sphere: Sphere, triangle: Triangle): any;
    getSphereTriangles(sphere: Sphere, triangles: Triangle[]): Triangle[];
    getCapsuleTriangles(capsule: Capsule, triangles: Triangle[]): Triangle[];
    sphereIntersect(sphere: Sphere): any;
    capsuleIntersect(capsule: Capsule): any;
    rayIntersect(ray: Ray): any;
    fromGraphNode(group: Object3D): this;
    clear(): this;
}
