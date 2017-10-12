// Type definitions for extract-stack 1.0
// Project: https://github.com/sindresorhus/extract-stack#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = extractStack;

declare function extractStack(input: Error | string | undefined): string;

declare namespace extractStack {
    function lines(input: Error | string | undefined): string[];
}
