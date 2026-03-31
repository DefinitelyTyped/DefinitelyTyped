import Node from "../../core/Node.js";

declare const Schlick_to_F0: (
    f: Node,
    f90: Node,
    dotVH: Node,
) => Node;

export default Schlick_to_F0;
