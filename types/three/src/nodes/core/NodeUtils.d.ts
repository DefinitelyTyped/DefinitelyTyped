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

export const hashString: (str: string) => number;
export const hashArray: (array: number[]) => number;
export const hash: (...params: number[]) => number;

export function getCacheKey(object: Node, force?: boolean): number;

export function getNodeChildren(object: Node): Generator<NodeChild, void>;

export function getTypeFromLength(length: number): string | undefined;

export function getLengthFromType(type: string): number | undefined;

export function getMemoryLengthFromType(type: string): number | undefined;

export function getByteBoundaryFromType(type: string): number | undefined;

export function getValueType(value: unknown): string | null;

export function getValueFromType(
    type: string,
    ...params: number[]
): Color | Vector2 | Vector3 | Vector4 | Matrix3 | Matrix4 | boolean | number | string | ArrayBufferLike | null;
