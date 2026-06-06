import Node from "../../core/Node.js";
import OperatorNode from "../../math/OperatorNode.js";

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney’s reparameterization
declare const D_GGX: (args: { alpha: Node; dotNH: Node }) => OperatorNode;

export default D_GGX;
