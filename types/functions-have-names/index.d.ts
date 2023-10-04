// Type definitions for functions-have-names 1.2
// Project: https://github.com/inspect-js/functions-have-names#readme
// Definitions by: Jordan Harband <https://github.com/ljharb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface FunctionsHaveNames {
    (): boolean;
    functionsHaveConfigurableNames: () => boolean;
    boundFunctionsHaveNames: () => boolean;
}

declare const functionsHaveNames: FunctionsHaveNames;

export = functionsHaveNames;
