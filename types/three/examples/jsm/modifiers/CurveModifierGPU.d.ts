import { BufferGeometry, Curve, DataTexture, InstancedMesh, IUniform, Material, Mesh, Vector3 } from "three";

export interface SplineUniform {
    spineTexture: DataTexture;
    pathOffset: number;
    pathSegment: number;
    spineOffset: number;
    spineLength: number;
    flow: number;
}
export function initSplineTexture(numberOfCurves?: number): DataTexture;

export function updateSplineTexture(texture: DataTexture, splineCurve: Curve<Vector3>, offset?: number): void;

export function getUniforms(splineTexture: DataTexture): SplineUniform;

export function modifyShader(material: Material, uniforms: SplineUniform, numberOfCurves: number): void;

export class Flow {
    curveArray: number[];
    curveLengthArray: number[];

    object3D: Mesh;
    splineTexture: DataTexture;
    uniforms: SplineUniform;

    constructor(mesh: Mesh, numberOfCurves?: number);

    updateCurve(index: number, curve: Curve<Vector3>): void;
    moveAlongCurve(amount: number): void;
}
