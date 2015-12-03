// Type definitions for ratelimiter 2.1.1
// Project: https://github.com/tj/node-ratelimiter
// Definitions by: Aya Morisawa <https://github.com/AyaMorisawa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../redis/redis.d.ts" />

declare module "ratelimiter" {
	import { RedisClient } from 'redis';

	interface LimiterOption {
		/**
		 * The identifier to limit against (typically a user id)
		 */
		id: string;

		/**
		 * Redis connection instance
		 */
		db: RedisClient;

		/**
		 * Max requests within duration
		 */
		max?: number;

		/**
		 * Duration of limit in milliseconds
		 */
		duration?: number;
	}

	interface LimiterInfo {
		/**
		 * max value
		 */
		total: number;

		/**
		 * Number of calls left in current duration without decreasing current get
		 */
		remaining: number;

		/**
		 * Time in milliseconds until the end of current duration
		 */
		reset: number;
	}

	class Limiter {
		constructor(opts: LimiterOption);

		inspect(): string;

		get(fn: (err: any, info: LimiterInfo) => void): void;
	}

	export = Limiter;
}
