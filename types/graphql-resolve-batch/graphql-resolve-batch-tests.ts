import { createBatchResolver, ResolverFunction } from "graphql-resolve-batch";

// Test cases split up in namespaces to test different type inference scenarios.

namespace WithSourceAndResult {
    interface SomeTestSource {
        someSourceProp: string;
    }

    interface SomeTestResult {
        someTestResultProp: string;
    }

    const verify = createBatchResolver<SomeTestSource, SomeTestResult>(
        (sources, _, __) => {
            return sources.map(source => {
                const res: SomeTestResult = {
                    someTestResultProp: ""
                };

                return res;
            });
        }
    );
}

namespace WithSourceAndResultAsPromise {
    interface SomeTestSource {
        someSourceProp: string;
    }

    interface SomeTestResult {
        someTestResultProp: string;
    }

    const verify = createBatchResolver<SomeTestSource, SomeTestResult>(
        (sources, _, __) => {
            // $ExpectType ReadonlyArray<SomeTestSource>
            const verifySources = sources;

            return sources.map(source => {
                return new Promise<SomeTestResult>(resolve => {
                    const res: SomeTestResult = {
                        someTestResultProp: ""
                    };

                    resolve(res);
                });
            });
        }
    );
}

namespace WithSourceAndArgsAndResult {
    interface SomeTestSource {
        someSourceProp: string;
    }

    interface SomeTestArgs {
        someArg: string;
    }

    interface SomeTestResult {
        someTestResultProp: string;
    }

    const verify = createBatchResolver<
        SomeTestSource,
        SomeTestResult,
        SomeTestArgs
    >((sources, args, _) => {
        // $ExpectType ReadonlyArray<SomeTestSource>
        const verifySources = sources;
        // $ExpectType string
        const verifyArgs = args.someArg;

        return sources.map(source => {
            return new Promise<SomeTestResult>(resolve => {
                const res: SomeTestResult = {
                    someTestResultProp: ""
                };

                resolve(res);
            });
        });
    });
}

namespace WithSourceAndArgsAndContextAndResult {
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

    const verify = createBatchResolver<
        SomeTestSource,
        SomeTestResult,
        SomeTestArgs,
        SomeTestContext
    >((sources, args, context) => {
        // $ExpectType ReadonlyArray<SomeTestSource>
        const verifySources = sources;
        // $ExpectType string
        const verifyArgs = args.someArg;
        // $ExpectType string
        const verifyContext = context.someContextProp;

        return sources.map(source => {
            return new Promise<SomeTestResult>(resolve => {
                const res: SomeTestResult = {
                    someTestResultProp: ""
                };

                resolve(res);
            });
        });
    });
}
