import Node from "../../core/Node.js";
import OperatorNode from "../../math/OperatorNode.js";

// https://google.github.io/filament/Filament.md.html#materialsystem/anisotropicmodel/anisotropicspecularbrdf
declare const D_GGX_Anisotropic: (
    args: { alphaT: Node; alphaB: Node; dotNH: Node; dotTH: Node; dotBH: Node },
) => OperatorNode;

export default D_GGX_Anisotropic;
