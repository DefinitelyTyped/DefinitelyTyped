import { BufferGeometry, Curve, DataTexture, InstancedMesh, IUniform, Material, Mesh, Vector3 } from "three";

export interface SplineUniform {
    spineTexture: IUniform;
    pathOffset: IUniform;
    pathSegment: IUniform;
    spineOffset: IUniform;
    flow: IUniform;
}
export function initSplineTexture(numberOfCurves?: number): DataTexture;

export function updateSplineTexture(texture: DataTexture, splineCurve: Curve<Vector3>, offset?: number): void;

export function getUniforms(splineTexture: DataTexture): SplineUniform;

export function modifyShader(material: Material, uniforms: SplineUniform, numberOfCurves?: number): void;

export class Flow {
    curveArray: number[];
    curveLengthArray: number[];

    object3D: Mesh;
    splineTexure: DataTexture;
    uniforms: SplineUniform;

    constructor(mesh: Mesh, numberOfCurves?: number);
    updateCurve(index: number, curve: Curve<Vector3>): void;
    moveAlongCurve(amount: number): void;
}

export class InstancedFlow extends Flow {
    object3D: InstancedMesh;

    offsets: number[];
    whichCurve: number[];

    constructor(count: number, curveCount: number, geometry: BufferGeometry, material: Material);

    moveIndividualAlongCurve(index: number, offset: number): void;
    setCurve(index: number, curveNo: number): void;
}
