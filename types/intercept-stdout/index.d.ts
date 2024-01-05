// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
type hookFunction = (txt: string) => string | void;
type unhookFunction = () => void;

declare function intercept(
    stdoutIntercept: hookFunction,
    stderrIntercept?: hookFunction,
): unhookFunction;

export = intercept;
