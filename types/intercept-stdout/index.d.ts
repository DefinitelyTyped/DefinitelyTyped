// Type definitions for intercept-stdout 0.1
// Project: https://github.com/sfarthin/intercept-stdout
// Definitions by: Paulo Castro <https://github.com/pdcastro>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type hookFunction = (txt: string) => string | void;
type unhookFunction = () => void;

declare function intercept(
    stdoutIntercept: hookFunction,
    stderrIntercept?: hookFunction,
): unhookFunction;

export = intercept;
