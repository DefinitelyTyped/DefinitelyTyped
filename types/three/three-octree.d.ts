import { Vector3 } from "./three-core";

export class Octree {
    constructor(parameters?: any);

    update(): void;

    add(object: any, options?: any): any;

    addDeferred(object: any, options?: any): any;

    addObjectData(object: any, part: any): any;

    remove(object: any): any;

    extend(octree: Octree): any;

    rebuild(): any;

    updateObject(object: any): any;

    search(position: Vector3, radius: number, organizeByObject: boolean, direction: Vector3): any;

    setRoot(root: any): any;

    getDepthEnd(): number;

    getNodeCountEnd(): number;

    getObjectCountEnd(): number;

    toConsole(): any;
}