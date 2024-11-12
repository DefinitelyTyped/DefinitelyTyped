import Node from "../core/Node.js";
import { NodeRepresentation, ShaderNodeObject } from "../tsl/TSLCore.js";

export const sRGBTransferEOTF: (color: NodeRepresentation) => ShaderNodeObject<Node>;

export const sRGBTransferOETF: (color: NodeRepresentation) => ShaderNodeObject<Node>;
