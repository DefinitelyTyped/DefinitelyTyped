import Node from "../core/Node.js";
import { ShaderNodeObject } from "../tsl/TSLCore.js";

export const sRGBTransferEOTF: (color: Node) => ShaderNodeObject<Node>;

export const sRGBTransferOETF: (color: Node) => ShaderNodeObject<Node>;
