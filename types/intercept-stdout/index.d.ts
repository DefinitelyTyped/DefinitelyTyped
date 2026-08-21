/// <reference types="node" />

type Chunk = Parameters<NodeJS.Process["stdout"]["write"]>[0];
type hookFunction = (chunk: Chunk) => Chunk;
type unhookFunction = () => void;

declare function intercept(
    stdoutIntercept: hookFunction,
    stderrIntercept?: hookFunction,
): unhookFunction;

export = intercept;
