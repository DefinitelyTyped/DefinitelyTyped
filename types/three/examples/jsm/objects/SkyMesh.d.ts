import { BoxGeometry, Mesh, NodeMaterial, UniformNode, Vector3 } from "three/webgpu";

declare class SkyMesh extends Mesh<BoxGeometry, NodeMaterial> {
    turbidity: UniformNode<"float", number>;
    rayleigh: UniformNode<"float", number>;
    mieCoefficient: UniformNode<"float", number>;
    mieDirectionalG: UniformNode<"float", number>;
    sunPosition: UniformNode<"vec3", Vector3>;
    upUniform: UniformNode<"vec3", Vector3>;
    cloudScale: UniformNode<"float", number>;
    cloudSpeed: UniformNode<"float", number>;
    cloudCoverage: UniformNode<"float", number>;
    cloudDensity: UniformNode<"float", number>;
    cloudElevation: UniformNode<"float", number>;

    /**
     * @deprecated
     */
    readonly isSky: true;

    readonly isSkyMesh: true;

    constructor();
}

export { SkyMesh };
