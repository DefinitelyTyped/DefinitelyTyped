import { ShaderNodeObject } from "three/tsl";
import { Node } from "three/webgpu";

export const bayer16: (uv: Node) => ShaderNodeObject<Node>;
