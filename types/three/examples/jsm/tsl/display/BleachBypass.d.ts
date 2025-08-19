import { ShaderNodeObject } from "three/tsl";
import { Node } from "three/webgpu";

export const bleach: (color: Node, opacity?: number) => ShaderNodeObject<Node>;
