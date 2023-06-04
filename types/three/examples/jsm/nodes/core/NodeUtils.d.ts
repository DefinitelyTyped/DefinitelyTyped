import { NodeValueOption } from './constants';
import Node from './Node';

export interface NodeChild {
    property: string;
    index?: number | string;
    childNode: Node;
}

export function getCacheKey(object: Node): string;
export function getNodeChildren(object: Node): Generator<NodeChild, void>;
export function getValueType(value: NodeValueOption): string | null;
export function getValueFromType(type: string, ...params: number[]): NodeValueOption | null;
