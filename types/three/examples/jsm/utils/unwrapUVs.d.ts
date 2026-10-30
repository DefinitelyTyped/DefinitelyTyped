import { Object3D } from "../../../src/core/Object3D.js";
import { Mesh } from "../../../src/objects/Mesh.js";

export interface UnwrapUVsOptions {
    attribute?: "uv" | "uv1" | "uv2" | "uv3" | undefined;
    mode?: "lightmap" | "normal" | undefined;
    resolution?: number | undefined;
    padding?: number | undefined;
    texelsPerUnit?: number | undefined;
    respectUVSeams?: boolean | undefined;
    useInputUVs?: boolean | undefined;
}

export interface UnwrapUVsChart {
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface UnwrapUVsMeshResult {
    mesh: Mesh;
    sourceVertices: Uint32Array;
    faceCharts: Int32Array;
}

export interface UnwrapUVsResult {
    attribute: "uv" | "uv1" | "uv2" | "uv3";
    resolution: number;
    padding: number;
    texelsPerUnit: number;
    charts: UnwrapUVsChart[];
    meshes: UnwrapUVsMeshResult[];
    warnings: {
        excludedFaces: number;
        tinyFaces: number;
        singleTriangleCharts: number;
    };
}

/**
 * Generates a unique UV atlas for the meshes in a hierarchy, measured in world space.
 * Each mesh receives a new geometry. Skinned and morphed meshes are unwrapped in
 * their current pose. InstancedMesh and BatchedMesh are skipped with a warning.
 * Excluded faces collapse onto the UV of a neighboring chart vertex, or (0, 0) if
 * isolated, and get a faceCharts entry of -1.
 *
 * @three_import import { unwrapUVs } from 'three/addons/utils/unwrapUVs.js';
 *
 * @param {Object3D} root - A mesh or hierarchy to unwrap.
 * @param {Object} [options] - Atlas and chart options.
 * @param {string} [options.attribute='uv1'] - Output attribute: uv, uv1, uv2, uv3.
 * @param {string} [options.mode='lightmap'] - 'lightmap' or 'normal'. Normal tries LSCM.
 * @param {number} [options.resolution=1024] - Square atlas size in pixels, integer >= 4.
 * @param {number} [options.padding=4] - Nonnegative gutter in pixels; 2 * padding + 1 must be less than resolution.
 * @param {number} [options.texelsPerUnit=0] - Common world density; zero fits the atlas. Must be nonnegative.
 * @param {boolean} [options.respectUVSeams] - Cut discontinuities in existing uv (normal default).
 * @param {boolean} [options.useInputUVs=false] - Preserve valid authored UV charts before trying LSCM.
 * @return {?Object} Atlas size, density, chart bounds, mesh vertex/face mappings and warning
 * counts (excluded faces, tiny faces under 0.01 atlas pixels squared and single-triangle
 * charts, which signal fragmentation), or null if the charts do not fit. Meshes are left
 * unchanged in that case. Charts that fail Float32 validation are split and repacked;
 * single faces that still fail are excluded.
 */
export function unwrapUVs(root: Object3D, options?: UnwrapUVsOptions): UnwrapUVsResult | null;
