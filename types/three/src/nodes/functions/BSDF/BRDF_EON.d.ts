import Node from "../../core/Node.js";

declare const BRDF_EON: (args: {
    lightDirection: Node;
    diffuseColor: Node;
    roughness: Node;
    normalView?: Node | undefined;
    viewDirection?: Node | undefined;
}) => Node<"vec3">;

export const EON_DirectionalAlbedo: (args: {
    diffuseColor: Node;
    roughness: Node;
    dotNV: Node;
}) => Node<"vec3">;

export default BRDF_EON;
