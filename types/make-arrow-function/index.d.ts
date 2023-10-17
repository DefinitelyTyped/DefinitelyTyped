type ArrowFunction = (...args: unknown[]) => unknown;

interface MakeArrowFunction {
    (): ArrowFunction | undefined;
    list: () => readonly ArrowFunction[];
}

declare const makeArrowFunction: MakeArrowFunction;

export = makeArrowFunction;
