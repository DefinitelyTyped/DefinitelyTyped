import Node from "../../core/Node.js";

declare const LTC_Uv: (args: { N: Node; V: Node; roughness: Node }) => Node;

declare const LTC_Evaluate: (
    args: { N: Node; V: Node; P: Node; mInv: Node; p0: Node; p1: Node; p2: Node; p3: Node },
) => Node;

declare const LTC_Evaluate_Volume: (
    args: { P: Node; p0: Node; p1: Node; p2: Node; p3: Node },
) => Node;

export { LTC_Evaluate, LTC_Evaluate_Volume, LTC_Uv };
