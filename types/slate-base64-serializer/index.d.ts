// Type definitions for slate-base64-serializer 0.2
// Project: https://github.com/ianstormtaylor/slate
// Definitions by: Brandon Shelton <https://github.com/YangusKhan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6
import { Slate } from "slate";

export function deserialize(string: string, options?: object): Slate.Value;
export function deserializeNode(string: string, options?: object): Slate.Node;
export function serialize(value: Slate.Value, options?: object): string;
export function serializeNode(node: Slate.Node, options?: object): string;
