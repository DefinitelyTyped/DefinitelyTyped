import { ShaderNodeObject } from "three/tsl";
import { BoxGeometry, Mesh, NodeMaterial, UniformNode, Vector3 } from "three/webgpu";

declare class SkyMesh extends Mesh<BoxGeometry, NodeMaterial> {
    turbidity: ShaderNodeObject<UniformNode<number>>;
    rayleigh: ShaderNodeObject<UniformNode<number>>;
    mieCoefficient: ShaderNodeObject<UniformNode<number>>;
    mieDirectionalG: ShaderNodeObject<UniformNode<number>>;
    sunPosition: ShaderNodeObject<UniformNode<Vector3>>;
    upUniform: ShaderNodeObject<UniformNode<Vector3>>;

    readonly isSky: true;

    constructor();
}

export { SkyMesh };
