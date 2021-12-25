// Type definitions for slate-plain-serializer 0.7
// Project: https://github.com/ianstormtaylor/slate
// Definitions by: Brandon Shelton <https://github.com/YangusKhan>
//                 Martin Kiefel <https://github.com/mkiefel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
import { BlockProperties, MarkProperties, Value } from 'slate';

export interface DeserializeOptions {
    toJson?: boolean | undefined;
    defaultBlock?: BlockProperties | undefined;
    defaultMarks?: MarkProperties[] | Set<MarkProperties> | undefined;
    delimiter?: string | undefined;
}

export interface SerializeOptions {
    delimiter?: string | undefined;
}

declare namespace Plain {
    function deserialize(string: string, options?: DeserializeOptions): Value;
    function serialize(value: Value, options?: SerializeOptions): string;
}

export default Plain;
