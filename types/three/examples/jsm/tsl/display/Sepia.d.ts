import { ShaderNodeObject } from "three/tsl";
import { Node } from "three/webgpu";

export const sepia: (color: Node) => ShaderNodeObject<Node>;
