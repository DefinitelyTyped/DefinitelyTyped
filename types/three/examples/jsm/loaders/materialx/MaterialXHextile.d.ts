import { Node } from "three/webgpu";

export function mxHextileComputeBlendWeights(
    luminanceWeights: Node<"vec3">,
    tileWeights: Node<"vec3">,
    falloff: Node<"float"> | number,
): Node<"vec3">;

export interface MaterialXHextileCoord {
    coords: Node<"vec2">[];
    ddx: Node<"vec2">[];
    ddy: Node<"vec2">[];
    weights: Node<"vec3">;
}

export function mxHextileCoord(
    coord: Node<"vec2">,
    rotation: Node<"float"> | number,
    rotationRange: Node<"vec2">,
    scale: Node<"float"> | number,
    scaleRange: Node<"vec2">,
    offset: Node<"float"> | number,
    offsetRange: Node<"vec2">,
): MaterialXHextileCoord;
