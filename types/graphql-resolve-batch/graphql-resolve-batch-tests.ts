import { createBatchResolver, ResolverFunction } from "graphql-resolve-batch";

interface SomeTestSource {
    someSourceProp: string;
}

interface SomeTestArgs {
    someArg: string;
}

interface SomeTestContext {
    someContextProp: string;
}

interface SomeTestResult {
    someTestResultProp: string;
}

const asyncBatchFunction = async (sources: ReadonlyArray<SomeTestSource>) => {
    return new Promise<SomeTestResult[]>(resolve => {
        const res = [
            {
                someTestResultProp: ""
            }
        ];
        resolve(res);
    });
};

const withSourceAndResultTyped = createBatchResolver<
    SomeTestSource,
    SomeTestResult
>((sources, _, __) => {
    return sources.map(source => {
        const res: SomeTestResult = {
            someTestResultProp: ""
        };

        return res;
    });
});

const withSourceAndResultTypedAsPromise = createBatchResolver<
    SomeTestSource,
    SomeTestResult
>(async (sources, _, __) => {
    // $ExpectType ReadonlyArray<SomeTestSource>
    const verifySources = sources;
    const result = await asyncBatchFunction(sources);
    return result;
});

const withSourceAndArgsAndResultTyped = createBatchResolver<
    SomeTestSource,
    SomeTestResult,
    SomeTestArgs
>(async (sources, args, _) => {
    // $ExpectType ReadonlyArray<SomeTestSource>
    const verifySources = sources;
    // $ExpectType string
    const verifyArgs = args.someArg;

    const result = await asyncBatchFunction(sources);
    return result;
});

const withSourceAndArgsAndContextTyped = createBatchResolver<
    SomeTestSource,
    SomeTestResult,
    SomeTestArgs,
    SomeTestContext
>(async (sources, args, context) => {
    // $ExpectType ReadonlyArray<SomeTestSource>
    const verifySources = sources;
    // $ExpectType string
    const verifyArgs = args.someArg;
    // $ExpectType string
    const verifyContext = context.someContextProp;

    const result = await asyncBatchFunction(sources);
    return result;
});
