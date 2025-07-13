/**
 * MeshGouraudMaterial
 *
 * Lambert illumination model with Gouraud (per-vertex) shading
 */

import { ShaderMaterial, ShaderMaterialParameters } from "three";

/**
 * @deprecated Use THREE.MeshLambertMaterial instead.
 */
export class MeshGouraudMaterial extends ShaderMaterial {
    isMeshGouraudMaterial: true;

    constructor(parameters?: ShaderMaterialParameters);

    copy(source: MeshGouraudMaterial): this;
}
