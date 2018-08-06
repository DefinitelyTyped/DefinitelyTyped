// Type definitions for async-retry 1.2
// Project: https://github.com/zeit/async-retry#readme
// Definitions by: Albert Wu <https://github.com/albertywu>
//                 Pablo Rodríguez <https://github.com/MeLlamoPablo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function AsyncRetry<A>(
	fn: AsyncRetry.RetryFunction<A>,
	opts: AsyncRetry.Options
): Promise<A>;

declare namespace AsyncRetry {
	interface Options {
		retries?: number;
		factor?: number;
		minTimeout?: number;
		maxTimeout?: number;
		randomize?: boolean;
		onRetry?: (e: Error) => any;
	}

	type RetryFunction<A> = (bail: (e: Error) => void, attempt: number) => A|Promise<A>;
}

export = AsyncRetry;
