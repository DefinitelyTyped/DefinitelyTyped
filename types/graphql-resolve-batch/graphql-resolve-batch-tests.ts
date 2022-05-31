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

const batchFunction = (sources: ReadonlyArray<SomeTestSource>) => {
    const someTestResult: SomeTestResult = {
        someTestResultProp: "Hello"
    };

    return sources.map(source => someTestResult);
};

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

const asyncBatchFunctionWhenTReturnIsArray = async (
    sources: ReadonlyArray<SomeTestSource>
) => {
    const sourceBatches = sources.map(() => {
        return new Promise<SomeTestResult[]>(resolve => {
            const res = [
                {
                    someTestResultProp: ""
                }
            ];
            resolve(res);
        });
    });

    return Promise.all(sourceBatches);
};

// $ExpectType ResolverFunction<SomeTestSource, any, any, SomeTestResult>
const withSourceAndResultTyped = createBatchResolver<
    SomeTestSource,
    SomeTestResult
>((sources, _, __) => {
    // $ExpectType ReadonlyArray<SomeTestSource>
    const verifySources = sources;

    return batchFunction(sources);
});

// $ExpectType ResolverFunction<SomeTestSource, any, any, SomeTestResult>
const withSourceAndResultTypedAsPromise = createBatchResolver<
    SomeTestSource,
    SomeTestResult
>(async (sources, _, __) => {
    // $ExpectType ReadonlyArray<SomeTestSource>
    const verifySources = sources;
    const result = await asyncBatchFunction(sources);
    return result;
});

// $ExpectType ResolverFunction<SomeTestSource, SomeTestArgs, any, SomeTestResult>
const withSourceAndArgsAndResultTyped = createBatchResolver<
    SomeTestSource,
    SomeTestResult,
    SomeTestArgs
>(async (sources, args, _, info) => {
    // $ExpectType GraphQLResolveInfo
    const verifyInfo = info;
    // $ExpectType ReadonlyArray<SomeTestSource>
    const verifySources = sources;
    // $ExpectType string
    const verifyArgs = args.someArg;

    const result = await asyncBatchFunction(sources);
    return result;
});

// $ExpectType ResolverFunction<SomeTestSource, SomeTestArgs, SomeTestContext, SomeTestResult>
const withSourceAndArgsAndContextTyped = createBatchResolver<
    SomeTestSource,
    SomeTestResult,
    SomeTestArgs,
    SomeTestContext
>(async (sources, args, context, info) => {
    // $ExpectType ReadonlyArray<SomeTestSource>
    const verifySources = sources;
    // $ExpectType string
    const verifyArgs = args.someArg;
    // $ExpectType string
    const verifyContext = context.someContextProp;
    // $ExpectType GraphQLResolveInfo
    const verifyInfo = info;

    const result = await asyncBatchFunction(sources);
    return result;
});

// $ExpectType ResolverFunction<SomeTestSource, any, any, SomeTestResult[]>
const withResultIsArray = createBatchResolver<SomeTestSource, SomeTestResult[]>(
    (sources, _, __) => {
        // $ExpectType ReadonlyArray<SomeTestSource>
        const verifySources = sources;

        return asyncBatchFunctionWhenTReturnIsArray(sources);
    }
);
