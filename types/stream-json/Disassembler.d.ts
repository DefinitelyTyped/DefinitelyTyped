import { Transform, TransformOptions } from 'stream';

export = Disassembler;

declare class Disassembler extends Transform {
    constructor(options?: Disassembler.DisassemblerOptions);
}

declare namespace Disassembler {
    type ReplacerFunction = (val1: any, val2: any) => any;

    type ReplaceArray = Array<string | number>;

    interface DisassemblerOptions extends TransformOptions {
        packValues?: boolean;
        packKeys?: boolean;
        packStrings?: boolean;
        packNumbers?: boolean;
        streamValues?: boolean;
        streamKeys?: boolean;
        streamStrings?: boolean;
        streamNumbers?: boolean;
        jsonStreaming?: boolean;
        replacer?: ReplacerFunction | ReplaceArray;
    }

    function make(options?: DisassemblerOptions): Disassembler;

    namespace make {
        type Constructor = Disassembler;
        const Constructor: typeof Disassembler;
    }

    function disassembler(options?: DisassemblerOptions): Disassembler;

    namespace disassembler {
        type Constructor = Disassembler;
        const Constructor: typeof Disassembler;
    }
}
