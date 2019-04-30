// Type definitions for roarr 2.13
// Project: https://github.com/gajus/roarr#readme
// Definitions by: Philip Saxton <https://github.com/psaxton>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace log;

export default log;

declare let log: Roarr.RoarrType;

declare namespace Roarr {
	interface MessageContextType {
		logLevel?: number;
		[name: string]: any;
	}

	interface SprintfArgumentType { toString(): string; }

	interface RoarrType {
		(
			context: MessageContextType,
			message: string,
			_0?: SprintfArgumentType,
			_1?: SprintfArgumentType,
			_2?: SprintfArgumentType,
			_3?: SprintfArgumentType,
			_4?: SprintfArgumentType,
			_5?: SprintfArgumentType,
			_6?: SprintfArgumentType,
			_7?: SprintfArgumentType
		): void;

		(
			context: MessageContextType,
			message: string,
			_0?: SprintfArgumentType,
			_1?: SprintfArgumentType,
			_2?: SprintfArgumentType,
			_3?: SprintfArgumentType,
			_4?: SprintfArgumentType,
			_5?: SprintfArgumentType,
			_6?: SprintfArgumentType,
			_7?: SprintfArgumentType
		): void;

		/**
		 * Creates a child logger appending the provided context object to the previous logger context.
		 *
		 * @param context
		 * @example
		 * import Roarr from 'roarr';
		 *
		 * const log = Roarr.child({ module: "myModule" });
		 *
		 * log.debug("My Message");
		 * // {"context":{"logLevel":20},"Message":"My Message","sequence":0,"time":1531914529921,"version":"1.0.0"}
		 *
		 * @see https://www.npmjs.com/package/roarr#child
		 */
		child(context: MessageContextType): RoarrType;

		/**
		 * Returns the current context.
		 */
		getContext(): MessageContextType;

		/**
		 * Convenience method for logging a message with logLevel context property value set to 10 (LogLevel.Trace)
		 *
		 * @example
		 * import Roarr from 'roarr';
		 *
		 * const log = Roarr;
		 *
		 * log.trace('foo');
		 * // {"context":{"logLevel":10},"message":"foo","sequence":0,"time":1506776210000,"version":"1.0.0"}
		 *
		 * @see https://www.npmjs.com/package/roarr#trace
		 */
		trace(
			context: MessageContextType,
			message: string,
			_0?: SprintfArgumentType,
			_1?: SprintfArgumentType,
			_2?: SprintfArgumentType,
			_3?: SprintfArgumentType,
			_4?: SprintfArgumentType,
			_5?: SprintfArgumentType,
			_6?: SprintfArgumentType,
			_7?: SprintfArgumentType
		): void;

		trace(
			message: string,
			_0?: SprintfArgumentType,
			_1?: SprintfArgumentType,
			_2?: SprintfArgumentType,
			_3?: SprintfArgumentType,
			_4?: SprintfArgumentType,
			_5?: SprintfArgumentType,
			_6?: SprintfArgumentType,
			_7?: SprintfArgumentType
		): void;

		/**
		 * Convenience method for logging a message with logLevel context property value set to 20 (LogLevel.Debug)
		 *
		 * @example
		 * import Roarr from 'roarr';
		 *
		 * const log = Roarr;
		 *
		 * log.debug('foo');
		 * // {"context":{"logLevel":20},"message":"foo","sequence":0,"time":1506776210000,"version":"1.0.0"}
		 *
		 * @see https://www.npmjs.com/package/roarr#trace
		 */
		debug(
			context: MessageContextType,
			message: string,
			_0?: SprintfArgumentType,
			_1?: SprintfArgumentType,
			_2?: SprintfArgumentType,
			_3?: SprintfArgumentType,
			_4?: SprintfArgumentType,
			_5?: SprintfArgumentType,
			_6?: SprintfArgumentType,
			_7?: SprintfArgumentType
		): void;

		debug(
			message: string,
			_0?: SprintfArgumentType,
			_1?: SprintfArgumentType,
			_2?: SprintfArgumentType,
			_3?: SprintfArgumentType,
			_4?: SprintfArgumentType,
			_5?: SprintfArgumentType,
			_6?: SprintfArgumentType,
			_7?: SprintfArgumentType
		): void;

		/**
		 * Convenience method for logging a message with logLevel context property value set to 30 (LogLevel.Info)
		 *
		 * @example
		 * import Roarr from 'roarr';
		 *
		 * const log = Roarr;
		 *
		 * log.info('foo');
		 * // {"context":{"logLevel":30},"message":"foo","sequence":0,"time":1506776210000,"version":"1.0.0"}
		 *
		 * @see https://www.npmjs.com/package/roarr#trace
		 */
		info(
			context: MessageContextType,
			message: string,
			_0?: SprintfArgumentType,
			_1?: SprintfArgumentType,
			_2?: SprintfArgumentType,
			_3?: SprintfArgumentType,
			_4?: SprintfArgumentType,
			_5?: SprintfArgumentType,
			_6?: SprintfArgumentType,
			_7?: SprintfArgumentType
		): void;

		info(
			message: string,
			_0?: SprintfArgumentType,
			_1?: SprintfArgumentType,
			_2?: SprintfArgumentType,
			_3?: SprintfArgumentType,
			_4?: SprintfArgumentType,
			_5?: SprintfArgumentType,
			_6?: SprintfArgumentType,
			_7?: SprintfArgumentType
		): void;

		/**
		 * Convenience method for logging a message with logLevel context property value set to 40 (LogLevel.Warn)
		 *
		 * @example
		 * import Roarr from 'roarr';
		 *
		 * const log = Roarr;
		 *
		 * log.warn('foo');
		 * // {"context":{"logLevel":40},"message":"foo","sequence":0,"time":1506776210000,"version":"1.0.0"}
		 *
		 * @see https://www.npmjs.com/package/roarr#trace
		 */
		warn(
			context: MessageContextType,
			message: string,
			_0?: SprintfArgumentType,
			_1?: SprintfArgumentType,
			_2?: SprintfArgumentType,
			_3?: SprintfArgumentType,
			_4?: SprintfArgumentType,
			_5?: SprintfArgumentType,
			_6?: SprintfArgumentType,
			_7?: SprintfArgumentType
		): void;

		warn(
			message: string,
			_0?: SprintfArgumentType,
			_1?: SprintfArgumentType,
			_2?: SprintfArgumentType,
			_3?: SprintfArgumentType,
			_4?: SprintfArgumentType,
			_5?: SprintfArgumentType,
			_6?: SprintfArgumentType,
			_7?: SprintfArgumentType
		): void;

		/**
		 * Convenience method for logging a message with logLevel context property value set to 50 (LogLevel.Error)
		 *
		 * @example
		 * import Roarr from 'roarr';
		 *
		 * const log = Roarr;
		 *
		 * log.error('foo');
		 * // {"context":{"logLevel":50},"message":"foo","sequence":0,"time":1506776210000,"version":"1.0.0"}
		 *
		 * @see https://www.npmjs.com/package/roarr#trace
		 */
		error(
			context: MessageContextType,
			message: string,
			_0?: SprintfArgumentType,
			_1?: SprintfArgumentType,
			_2?: SprintfArgumentType,
			_3?: SprintfArgumentType,
			_4?: SprintfArgumentType,
			_5?: SprintfArgumentType,
			_6?: SprintfArgumentType,
			_7?: SprintfArgumentType
		): void;

		error(
			message: string,
			_0?: SprintfArgumentType,
			_1?: SprintfArgumentType,
			_2?: SprintfArgumentType,
			_3?: SprintfArgumentType,
			_4?: SprintfArgumentType,
			_5?: SprintfArgumentType,
			_6?: SprintfArgumentType,
			_7?: SprintfArgumentType
		): void;

		/**
		 * Convenience method for logging a message with logLevel context property value set to 60 (LogLevel.Fatal)
		 *
		 * @example
		 * import Roarr from 'roarr';
		 *
		 * const log = Roarr;
		 *
		 * log.fatal('foo');
		 * // {"context":{"logLevel":60},"message":"foo","sequence":0,"time":1506776210000,"version":"1.0.0"}
		 *
		 * @see https://www.npmjs.com/package/roarr#trace
		 */
		fatal(
			context: MessageContextType,
			message: string,
			_0?: SprintfArgumentType,
			_1?: SprintfArgumentType,
			_2?: SprintfArgumentType,
			_3?: SprintfArgumentType,
			_4?: SprintfArgumentType,
			_5?: SprintfArgumentType,
			_6?: SprintfArgumentType,
			_7?: SprintfArgumentType
		): void;

		fatal(
			message: string,
			_0?: SprintfArgumentType,
			_1?: SprintfArgumentType,
			_2?: SprintfArgumentType,
			_3?: SprintfArgumentType,
			_4?: SprintfArgumentType,
			_5?: SprintfArgumentType,
			_6?: SprintfArgumentType,
			_7?: SprintfArgumentType
		): void;
	}
}
