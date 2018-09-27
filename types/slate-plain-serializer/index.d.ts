// Type definitions for slate-plain-serializer 0.6
// Project: https://github.com/ianstormtaylor/slate
// Definitions by: Brandon Shelton <https://github.com/YangusKhan>
//                 Martin Kiefel <https://github.com/mkiefel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6
import { BlockProperties, MarkProperties, Value } from 'slate';

export interface DeserializeOptions {
    toJson?: boolean;
    defaultBlock?: BlockProperties;
    defaultMarks?: MarkProperties[] | Set<MarkProperties>;
}

declare namespace Plain {
  function deserialize(string: string, options?: DeserializeOptions): Value;
  function serialize(value: Value): string;
}

export default Plain;
