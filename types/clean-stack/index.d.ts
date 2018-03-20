// Type definitions for clean-stack 1.3
// Project: https://github.com/sindresorhus/clean-stack#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = cleanStack;

declare function cleanStack(stack: string, options?: cleanStack.Options): string;

declare namespace cleanStack {
    interface Options {
        pretty?: boolean;
    }
}
