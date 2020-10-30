// Type definitions for slate-plain-serializer 0.7
// Project: https://github.com/ianstormtaylor/slate
// Definitions by: Brandon Shelton <https://github.com/YangusKhan>
//                 Martin Kiefel <https://github.com/mkiefel>
//                 Alex Nault <https://github.com/anault>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
import { BlockProperties, MarkProperties, Value } from 'slate';

export interface DeserializeOptions {
    toJson?: boolean;
    defaultBlock?: BlockProperties;
    defaultMarks?: MarkProperties[] | Set<MarkProperties>;
    delimiter?: string;
}

export interface SerializeOptions {
    delimiter?: string;
}

declare namespace Plain {
    function deserialize(string: string, options?: DeserializeOptions): Value;
    function serialize(value: Value, options?: SerializeOptions): string;
}

export default Plain;
