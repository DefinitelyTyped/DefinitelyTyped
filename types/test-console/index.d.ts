// Type definitions for test-console 2.0
// Project: https://github.com/jamesshore/test-console
// Definitions by:  Roberto Soares <https://github.com/roberto>
//                  Pedro Guidoux <https://github.com/guidoux>
//                  Guilherme Moretti <https://github.com/gbmoretti>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export const stdout: TestStream;
export const stderr: TestStream;

export type Output = ReadonlyArray<string>;
export type OutputCallback = (output: Output) => void;
export type AsyncOutputCallback = (output: Output) => Promise<void>;
export type NoOutputCallback = () => void;
export type AsyncNoOutputCallback = () => Promise<void>;
export type Restore = () => void;

export interface Options {
    isTTY?: boolean | undefined;
}

export interface Inspector {
    output: Output;
    restore: Restore;
}

export interface TestStream {
    inspect(options?: Options): Inspector;
    inspectSync(fn: OutputCallback): Output;
    inspectSync(options: Options, fn: OutputCallback): Output;
    inspectAsync(fn: AsyncOutputCallback): Promise<Output>;
    inspectAsync(options: Options, fn: AsyncOutputCallback): Promise<Output>;
    ignore(options?: Options): Restore;
    ignoreSync(fn: NoOutputCallback): void;
    ignoreSync(options: Options, fn: NoOutputCallback): void;
    ignoreAsync(fn: AsyncNoOutputCallback): Promise<void>;
    ignoreAsync(options: Options, fn: AsyncNoOutputCallback): Promise<void>;
}
