import { Line2NodeMaterial, Mesh } from "three/webgpu";

import { WireframeGeometry2 } from "../WireframeGeometry2.js";

declare class Wireframe extends Mesh {
    readonly isWireframe: true;

    constructor(geometry?: WireframeGeometry2, material?: Line2NodeMaterial);

    computeLineDistances(): this;
}

export { Wireframe };
