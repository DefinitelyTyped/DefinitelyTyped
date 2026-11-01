import Node from "../../core/Node.js";
import OperatorNode from "../../math/OperatorNode.js";

/**
 * Precomputed DFG LUT for physically based specular lighting, used by both
 * image-based lighting and direct-light multi-scattering energy compensation
 * Resolution: 16x16
 * Samples: 4096 per texel
 * Format: RG16F (2 half floats per texel: scale, bias)
 */
declare const DFGLUT: (args: { roughness: Node; dotNV: Node }) => OperatorNode;

export default DFGLUT;
