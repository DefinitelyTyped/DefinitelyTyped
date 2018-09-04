// Type definitions for slate-base64-serializer 0.2
// Project: https://github.com/ianstormtaylor/slate
// Definitions by: Brandon Shelton <https://github.com/YangusKhan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6
import { Value, Node } from "slate";

export function deserialize(string: string, options?: object): Value;
export function deserializeNode(string: string, options?: object): Node;
export function serialize(value: Value, options?: object): string;
export function serializeNode(node: Node, options?: object): string;
