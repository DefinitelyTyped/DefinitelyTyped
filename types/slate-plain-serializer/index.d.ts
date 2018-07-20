// Type definitions for slate-plain-serializer 0.5
// Project: https://github.com/ianstormtaylor/slate
// Definitions by: Brandon Shelton <https://github.com/YangusKhan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6
import { Slate } from 'slate';

export interface DeserializeOptions {
    toJson?: boolean;
    defaultBlock?: Slate.BlockProperties;
    defaultMarks?: Slate.MarkProperties[] | Set<Slate.MarkProperties>;
}

export function deserialize(string: string, options?: DeserializeOptions): Slate.Value;
export function serialize(value: Slate.Value): string;
