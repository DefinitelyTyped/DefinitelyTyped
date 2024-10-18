import * as THREE from "three";
import Camera from "../Renderer/Camera";

export function $3dTilesCulling(
    layer: /*C3DTilesLayer*/ any, // TODO
    camera: Camera,
    node: THREE.Object3D,
    tileMatrixWorld: THREE.Matrix4,
): boolean;

export function $3dTilesSubdivisionControl(
    context: { camera: Camera },
    layer: /* C3DTilesLayer */ any, // TODO
    node: THREE.Object3D,
): boolean;

export function process3dTilesNode(
    cullingTest?: typeof $3dTilesCulling,
    subdivisionTest?: typeof $3dTilesSubdivisionControl,
): (context: any, layer: any, node: any) => void; // TODO
