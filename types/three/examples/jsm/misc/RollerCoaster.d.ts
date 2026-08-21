import { BufferGeometry, Mesh, Vector3 } from "three";

interface Curve {
    getPointAt(u: number): Vector3;
    getTangentAt(u: number): Vector3;
}

export class RollerCoasterGeometry extends BufferGeometry {
    constructor(curve: Curve, divisions: number);
}

export class RollerCoasterLiftersGeometry extends BufferGeometry {
    constructor(curve: Curve, divisions: number);
}

export class RollerCoasterShadowGeometry extends BufferGeometry {
    constructor(curve: Curve, divisions: number);
}

export class SkyGeometry extends BufferGeometry {
    constructor();
}

export class TreesGeometry extends BufferGeometry {
    constructor(landscape: Mesh);
}
