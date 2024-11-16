import Node from "../../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../../tsl/TSLCore.js";

declare const Schlick_to_F0: (
    f: NodeRepresentation,
    f90: NodeRepresentation,
    dotVH: NodeRepresentation,
) => ShaderNodeObject<Node>;

export default Schlick_to_F0;
