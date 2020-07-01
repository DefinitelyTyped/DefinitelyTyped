import tapePromise = require('./index');

declare const tape: ReturnType<typeof tapePromise.default>;
declare namespace tape {
    type Test = tapePromise.Test;
    type TestCase = tapePromise.TestCase;

    /**
     * Available opts options for the tape function.
     */
    type TestOptions = tapePromise.TestOptions;

    /**
     * Options for the createStream function.
     */
    type StreamOptions = tapePromise.StreamOptions;
}

export = tape;
