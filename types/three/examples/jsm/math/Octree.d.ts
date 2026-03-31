import { Box3, Layers, Object3D, Ray, Sphere, Triangle, Vector3 } from "three";

import { Capsule } from "./Capsule.js";

interface OctreeTriangleIntersection {
    normal: Vector3;
    point: Vector3;
    depth: number;
}

interface OctreeIntersection {
    normal: Vector3;
    depth: number;
}

interface OctreeRayIntersection {
    distance: number;
    triangle: Triangle;
    position: Vector3;
}

declare class Octree {
    box: Box3 | undefined;
    bounds: Box3;

    layers: Layers;
    trianglesPerLeaf: number;
    maxLevel: number;

    subTrees: Octree[];
    triangles: Triangle[];

    constructor(box?: Box3);

    addTriangle(triangle: Triangle): this;
    calcBox(): this;
    split(level: number): this;
    build(): this;
    getRayTriangles(ray: Ray, triangles: Triangle[]): Triangle[];
    triangleCapsuleIntersect(capsule: Capsule, triangle: Triangle): OctreeTriangleIntersection | false;
    triangleBoxIntersect(box: Box3, triangle: Triangle): OctreeTriangleIntersection | false;
    triangleSphereIntersect(sphere: Sphere, triangle: Triangle): OctreeTriangleIntersection | false;
    getSphereTriangles(sphere: Sphere, triangles: Triangle[]): void;
    getBoxTriangles(box: Box3, triangles: Triangle[]): void;
    getCapsuleTriangles(capsule: Capsule, triangles: Triangle[]): void;
    boxIntersect(box: Box3): OctreeIntersection | false;
    sphereIntersect(sphere: Sphere): OctreeIntersection | false;
    capsuleIntersect(capsule: Capsule): OctreeIntersection | false;
    rayIntersect(ray: Ray): OctreeRayIntersection | false;
    fromGraphNode(group: Object3D): this;
    clear(): this;
}

export { Octree };
