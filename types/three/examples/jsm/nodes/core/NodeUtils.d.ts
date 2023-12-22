import { Color, Vector2, Vector3, Vector4, Matrix3, Matrix4 } from '../../../../src/Three.js';
import Node from './Node.js';

export interface NodeChild {
    property: string;
    index?: number | string;
    childNode: Node;
}

export function getCacheKey(object: Node): string;
export function getNodeChildren(object: Node): Generator<NodeChild, void>;
export function getValueType(value: unknown): string | null;
export function getValueFromType(
    type: string,
    ...params: number[]
): Color | Vector2 | Vector3 | Vector4 | Matrix3 | Matrix4 | boolean | number | string | ArrayBufferLike | null;
