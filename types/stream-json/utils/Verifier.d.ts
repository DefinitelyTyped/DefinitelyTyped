import { Writable, WritableOptions } from 'stream';

export = Verifier;

declare class Verifier extends Writable {
    constructor(options?: Verifier.VerifierOptions);
}

declare namespace Verifier {
    interface VerifierOptions extends WritableOptions {
        jsonStreaming?: boolean;
    }

    function make(options?: VerifierOptions): Verifier;

    namespace make {
        type Constructor = Verifier;
        const Constructor: typeof Verifier;
    }

    function parser(options?: VerifierOptions): Verifier;

    namespace parser {
        type Constructor = Verifier;
        const Constructor: typeof Verifier;
    }
}
