import { Node, Value } from "slate";

export function deserialize(string: string, options?: object): Value;
export function deserializeNode(string: string, options?: object): Node;
export function serialize(value: Value, options?: object): string;
export function serializeNode(node: Node, options?: object): string;
