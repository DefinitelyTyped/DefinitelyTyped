import { Node, NodeRepresentation, ShaderNodeObject } from "three/tsl";

export const bleach: (color: NodeRepresentation, opacity?: number) => ShaderNodeObject<Node>;
