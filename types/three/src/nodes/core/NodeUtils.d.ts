import { Color } from "../../math/Color.js";
import { Matrix3 } from "../../math/Matrix3.js";
import { Matrix4 } from "../../math/Matrix4.js";
import { Vector2 } from "../../math/Vector2.js";
import { Vector3 } from "../../math/Vector3.js";
import { Vector4 } from "../../math/Vector4.js";
import Node from "./Node.js";

export interface NodeChild {
    property: string;
    index?: number | string;
    childNode: Node;
}

export function getCacheKey(object: Node, force?: boolean): string;
export function getNodeChildren(object: Node): Generator<NodeChild, void>;
export function getValueType(value: unknown): string | null;
export function getValueFromType(
    type: string,
    ...params: number[]
): Color | Vector2 | Vector3 | Vector4 | Matrix3 | Matrix4 | boolean | number | string | ArrayBufferLike | null;
