// Type definitions for gulp-notify
// Project: https://github.com/mikaelbr/gulp-notify
// Definitions by: Qubo <https://github.com/tkQubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
/// <reference path="../vinyl/vinyl.d.ts" />

declare module "gulp-notify" {
	import Vinyl = require('vinyl');

	namespace notify {
		/**
		 * If the wait option is set to true, the notifier will trigger events click or timeout,
		 * whether the user clicks the notification or it times out.
		 * You listen to these events on the main notify object, not the produces stream.
		 * @param event
		 * @param callback
		 */
		function on(event: string, callback: Function): any;
		/**
		 * Wraps options.notifier to return a new notify-function only using the passed in reporter.
		 * @param func
		 */
		function withReporter(func: notify.Notifier): any;
		/**
		 * @param message
		 */
		function onError(message: string): Function;
		/**
		 * @param callback
		 */
		function onError(callback: notify.ErrorCallback): Function
		/**
		 * @param options
		 */
		function onError(options: notify.Notification): Function;
		/**
		 * Set if logger should be used or not. If log level is set to 0, no logging will be used.
		 * If no new log level is passed, the current log level is returned.
		 * <ul>
		 *     <li>0: No logging</li>
		 *     <li>1: Log on error</li>
		 *     <li>2: Log both on error and regular notification.</li>
		 * </ul>
		 * @param level Default: 2
		 */
		function logLevel(level: number): void;

		interface VinylCallback {
			(file: Vinyl): string|Notification;
		}

		interface ErrorCallback {
			(error: any): string|Notification;
		}

		interface Notification {
			/**
			 * The message you wish to attach to file. The string can be a lodash template as it is passed through
			 * <a href='https://github.com/gulpjs/gulp-util#templatestring-data'>gulp-util.template</a>.
			 * Default: File path in stream
			 */
			message?: string|VinylCallback;
			/**
			 * The title of the notification. The string can be a lodash template as it is passed through
			 * <a href='https://github.com/gulpjs/gulp-util#templatestring-data'>gulp-util.template</a>.
			 * Default: "Gulp Notification"
			 */
			title?: string|VinylCallback;
			/**
			 * Object passed to the lodash template, for additional properties passed to the template.
			 * Default: {}
			 */
			templateOptions?: { [name: string]: any; };
			/**
			 * If the notification should only happen on the last file of the stream.
			 * Per default a notification is triggered on each file. Default is false
			 */
			onLast?: boolean;
			/**
			 * If the returned stream should emit an error or not.
			 * If emitError is true, you have to handle .on('error') manually in case the notifier (gulp-notify) fails.
			 * If the default false is set, the error will not be emitted but simply printed to the console.
			 * Default is false
			 */
			emitError?: boolean;
			/**
			 * Swap out the notifier by passing in an function. The function expects two arguments: options and callback.
			 * The callback must be called when the notification is finished. Options will contain both title and message.
			 * Default: node-notifier module
			 */
			notifier?: Notifier;
			/**
			 * If the wait option is set to true, the notifier will trigger events click or timeout,
			 * whether the user clicks the notification or it times out.
			 */
			wait?: boolean;
		}

		interface Notifier {
			(options: NotifierOption, callback: ()=>any): any;
		}

		interface NotifierOption {
			title: string;
			message: string;
		}
	}

	function notify(message: string): NodeJS.ReadWriteStream;
	function notify(callback: notify.VinylCallback): NodeJS.ReadWriteStream;
	function notify(options: notify.Notification): NodeJS.ReadWriteStream;

	export = notify;
}

