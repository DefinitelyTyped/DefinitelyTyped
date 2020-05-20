import { Transform, TransformOptions } from 'stream';
import * as Assembler from '../Assembler';

export = StreamBase;

declare class StreamBase extends Transform {
    constructor(options?: StreamBase.StreamOptions);
}

declare namespace StreamBase {
    type ObjectFilterFunction = (asm: Assembler) => boolean | undefined;

    interface StreamOptions extends TransformOptions {
        objectFilter?: ObjectFilterFunction;
        includeUndecided?: boolean;
    }
}
