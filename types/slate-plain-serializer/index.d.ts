// Type definitions for slate-plain-serializer 0.5
// Project: https://github.com/ianstormtaylor/slate
// Definitions by: Brandon Shelton <https://github.com/YangusKhan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6
import { BlockProperties, MarkProperties, Value } from 'slate';

export interface DeserializeOptions {
    toJson?: boolean;
    defaultBlock?: BlockProperties;
    defaultMarks?: MarkProperties[] | Set<MarkProperties>;
}

export function deserialize(string: string, options?: DeserializeOptions): Value;
export function serialize(value: Value): string;
