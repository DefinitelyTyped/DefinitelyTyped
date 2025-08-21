import Node from "../../core/Node.js";
import { ShaderNodeObject } from "../../tsl/TSLCore.js";

declare const Schlick_to_F0: (
    f: Node,
    f90: Node,
    dotVH: Node,
) => ShaderNodeObject<Node>;

export default Schlick_to_F0;
