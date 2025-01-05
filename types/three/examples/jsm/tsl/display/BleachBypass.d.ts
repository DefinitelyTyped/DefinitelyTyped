import { NodeRepresentation, ShaderNodeObject } from "three/tsl";
import { Node } from "three/webgpu";

export const bleach: (color: NodeRepresentation, opacity?: number) => ShaderNodeObject<Node>;
