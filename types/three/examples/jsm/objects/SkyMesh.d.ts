import { BoxGeometry, Mesh, NodeMaterial, UniformNode } from "three/webgpu";

declare class SkyMesh extends Mesh<BoxGeometry, NodeMaterial> {
    turbidity: UniformNode<"float">;
    rayleigh: UniformNode<"float">;
    mieCoefficient: UniformNode<"float">;
    mieDirectionalG: UniformNode<"float">;
    sunPosition: UniformNode<"vec3">;
    cloudScale: UniformNode<"float">;
    cloudSpeed: UniformNode<"float">;
    cloudCoverage: UniformNode<"float">;
    cloudDensity: UniformNode<"float">;
    cloudElevation: UniformNode<"float">;
    showSunDisc: UniformNode<"float", number | boolean>;

    /**
     * @deprecated
     */
    readonly isSky: true;

    readonly isSkyMesh: true;

    constructor();
}

export { SkyMesh };
