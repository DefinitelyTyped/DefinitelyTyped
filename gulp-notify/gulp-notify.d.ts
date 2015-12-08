// Type definitions for gulp-jshint
// Project: https://github.com/mikaelbr/gulp-notify
// Definitions by: Louis Grignon <https://github.com/lgrignon/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts"/>

declare module "gulp-notify" {
    function GulpNotify(param: string | Function | GulpNotifyOptions): NodeJS.ReadWriteStream;

    interface GulpNotifyOptions {
        /**
         * Type: Boolean Default: false
         * If the notification should only happen on the last file of the stream. Per default a notification is triggered on each file.
         */
        onLast?: boolean;

        /**
         * Type: Boolean Default: false
         * If the returned stream should emit an error or not. If emitError is true, you have to handle .on('error') manually in case the notifier (gulp-notify) fails. If the default false is set, the error will not be emitted but simply printed to the console.
         * This means you can run the notifier on a CI system without opting it out but simply letting it fail gracefully.
         */
        emitError?: boolean;

        /**
         * Type: String Default: File path in stream
         * 
         * The message you wish to attach to file. The string can be a lodash template as it is passed through gulp-util.template.
         * 
         * Example: Created <%= file.relative %>.
         * as function
         * 
         * Type: Function(vinylFile)
         * 
         * See notify(Function).
         */
        message?: string | Function;

        /**
         * Type: String Default: "Gulp Notification"
         * 
         * The title of the notification. The string can be a lodash template as it is passed through gulp-util.template.
         * 
         * Example: Created <%= file.relative %>.
         * as function
         * 
         * Type: Function(vinylFile)
         * 
         * See notify(Function).
         */
        title?: string | Function;

        /**
         * Object passed to the lodash template, for additional properties passed to the template.
         */
        templateOptions?: Object;

        /**
         * Type: Function(options, callback) Default: node-notifier module
         * 
         * Swap out the notifier by passing in an function. The function expects two arguments: options and callback.
         * 
         * The callback must be called when the notification is finished. Options will contain both title and message.
         * 
         * See notify.withReporter for syntactic sugar.
         */
        notifier?: (options, callback) => void;

        /**
         * If the wait option is set to true, the notifier will tigger events click or timeout, whether the user clicks the notification or it times out. You listen to these events on the main notify object, not the produces stream.
         */
        wait?: boolean;
    }

    namespace GulpNotify { 
        
        /**
         * If the wait option is set to true, the notifier will tigger events click or timeout, whether the user clicks the notification or it times out. You listen to these events on the main notify object, not the produces stream.
         */
        function on(event: string, callback: (notificationOptions?: Object) => void): void;

        /**
         * Wraps options.notifier to return a new notify-function only using the passed in reporter.
         */
        function withReporter(reporter: (options: GulpNotifyOptions, callback: () => void) => void): (message: string | Function) => NodeJS.ReadWriteStream;


        /**
         * The exact same API as using notify(), but where a vinyl File is passed, the error object is passed instead.
         */
        function onError(param: string | { (error: Error): string } | GulpNotifyOptions): NodeJS.ReadWriteStream;

        /**
         * Type: Integer Default: 2
         * 
         * Set if logger should be used or not. If log level is set to 0, no logging will be used. If no new log level is passed, the current log level is returned.
         * 
         *     0: No logging
         *     1: Log on error
         *     2: Log both on error and regular notification.
         * 
         * If logging is set to > 0, the title and message passed to gulp-notify will be logged like so:
         * ➜  gulp-notify git:(master) ✗ gulp --gulpfile examples/gulpfile.js one
         * [gulp] Using file /Users/example/gulp-notify/examples/gulpfile.js
         * [gulp] Working directory changed to /Users/example/repos/gulp-notify/examples
         * [gulp] Running 'one'...
         * [gulp] Finished 'one' in 4.08 ms
         * [gulp] gulp-notify: [Gulp notification] /Users/example/gulp-notify/test/fixtures/1.txt
         */
        function logLevel(level: number): void;
    }
    export = GulpNotify;
}
