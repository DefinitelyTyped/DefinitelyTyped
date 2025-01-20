import { NodeRepresentation, ShaderNodeObject } from "three/tsl";
import { Node } from "three/webgpu";

export const sepia: (color: NodeRepresentation) => ShaderNodeObject<Node>;
