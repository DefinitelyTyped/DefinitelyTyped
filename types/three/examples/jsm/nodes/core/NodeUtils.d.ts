import { NodeValueOption } from './constants';
import Node from './Node';

export function getNodesKeys(object: Node): string[];
export function getValueType(value: NodeValueOption): string | null;
export function getValueFromType(type: string, ...params: number[]): NodeValueOption | null;
export function getCacheKey(object: Node): string;
