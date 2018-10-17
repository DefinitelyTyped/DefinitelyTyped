// Type definitions for test-console 1.1
// Project: https://github.com/jamesshore/test-console
// Definitions by:  Roberto Soares <https://github.com/roberto>
//                  Pedro Guidoux <https://github.com/guidoux>
//                  Guilherme Moretti <https://github.com/gbmoretti>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export const stdout: TestStream;
export const stderr: TestStream;

type Output = ReadonlyArray<string>;
type OutputCallback = (output: Output) => void;
type NoOutputCallback = () => void;
type Restore = () => void;

interface Options {
    isTTY?: boolean;
}

export interface Inspector {
    output: Output;
    restore: Restore;
}

export interface TestStream {
    inspect(options?: Options): Inspector;
    inspectSync(fn: OutputCallback): Output;
    inspectSync(options: Options, fn: OutputCallback): Output;
    ignore(options?: Options): Restore;
    ignoreSync(fn: NoOutputCallback): void;
    ignoreSync(options: Options, fn: NoOutputCallback): void;
}

export {};
