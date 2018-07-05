// Type definitions for ng-idle v1.1.1
// Project: http://hackedbychinese.github.io/ng-idle/
// Definitions by: mthamil <https://github.com/mthamil>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="angular" />

import * as angular from 'angular';

declare module 'angular' {
    export namespace idle {

        /**
         * Used to configure the Title service.
         */
        interface ITitleProvider extends IServiceProvider {

            /**
             * Enables or disables the Title functionality.
             *
             * @param enabled Boolean, default is true.
             */
            enabled(enabled: boolean): void;
        }

        interface ITitleService {

            /**
             * Allows the title functionality to be enabled or disabled on the fly.
             */
            setEnabled(enabled: boolean): void;

            /**
             * Returns whether or not the title functionality has been enabled.
             */
            isEnabled(): boolean;

            /**
             * Will store val as the "original" title of the document.
             *
             * Tracking the original title is important when restoring the title after displaying, for example, the idle warning message.
             */
            original(val: string): void;

            /**
             * Returns the "original" title value that has been previously set.
             *
             * Tracking the original title is important when restoring the title after displaying, for example, the idle warning message.
             */
            original(): string;

            /**
             * Changes the actual title of the document.
             */
            value(val: string): void;

            /**
             * Returns the current document title.
             */
            value(): string;

            /**
             * If overwrite is false or unspecified, updates the "original" title with the current document title
             * if it has not already been stored. If overwrite is true, the current document title is stored regardless.
             */
            store(overwrite?: boolean): void;

            /**
             * Sets the title to the original value (if it was stored or set previously).
             */
            restore(): void;

            /**
             * Sets the text to use as the message displayed when the user is idle.
             */
            idleMessage(val: string): void;

            /**
             * Gets the text to use as the message displayed when the user is idle.
             */
            idleMessage(): string;

            /**
             * Sets the text to use as the message displayed when the user is timed out.
             */
            timedOutMessage(val: string): void;

            /**
             * Gets the text to use as the message displayed when the user is timed out.
             */
            timedOutMessage(): string;

            /**
             * Stores the original title if it hasn't been already, determines the number minutes, seconds,
             * and total seconds from countdown, and displays the idleMessage with the aforementioned values interpolated.
             */
            setAsIdle(countdown: number): void;

            /**
             * Stores the original title if it hasn't been already, and displays the timedOutMessage.
             */
            setAsTimedOut(): void;
        }

        /**
         * Used to configure the Keepalive service.
         */
        interface IKeepAliveProvider extends IServiceProvider {

            /**
             * If configured, options will be used to issue a request using $http.
             * If the value is null, no HTTP request will be issued.
             * You can specify a string, which it will assume to be a URL to a simple GET request.
             * Otherwise, you can use the same options $http takes. However, cache will always be false.
             *
             * @param value May be string or IRequestConfig, default is null.
             */
            http(value: string | IRequestConfig): void;

            /**
             * This specifies how often the keepalive event is triggered and the
             * HTTP request is issued.
             *
             * @param seconds Integer, default is 10 minutes. Must be greater than 0.
             */
            interval(seconds: number): void;
        }

        /**
         * Keepalive will use a timeout to periodically wake, broadcast a Keepalive event on the root scope,
         * and optionally make an $http request. By default, the Idle service will stop and start Keepalive
         * when a user becomes idle or returns from idle, respectively. It is also started automatically when
         * Idle.watch() is called. This can be disabled by configuring the IdleProvider.
         */
        interface IKeepAliveService {

            /**
             * Starts pinging periodically until stop() is called.
             */
            start(): void;

            /**
             * Stops pinging.
             */
            stop(): void;

            /**
             * Performs one ping only.
             */
            ping(): void;

            /**
             * Changes the interval value at runtime.
             * You will need to restart the pinging process by calling start() manually for the changes to be reflected.
             */
            setInterval(seconds: number): void;
        }

        /**
         * Used to configure the Idle service.
         */
        interface IIdleProvider extends IServiceProvider {
            /**
             * Specifies the DOM events the service will watch to reset the idle timeout.
             * Multiple events should be separated by a space.
             *
             * @param events string, default 'mousemove keydown DOMMouseScroll mousewheel mousedown'
             */
            interrupt(events: string): void;

            /**
             * The idle timeout duration in seconds. After this amount of time passes without the user
             * performing an action that triggers one of the watched DOM events, the user is considered
             * idle.
             *
             * @param seconds integer, default is 20min
             */
            idle(seconds: number): void;

            /**
             * The amount of time the user has to respond (in seconds) before they have been considered
             * timed out.
             *
             * @param seconds integer, default is 30s
             */
            timeout(seconds: number): void;

            /**
             * When true or idle, user activity will automatically interrupt the warning countdown
             * and reset the idle state. If false or off, you will need to manually call watch()
             * when you want to start watching for idleness again. If notIdle, user activity will
             * only automatically interrupt if the user is not yet idle.
             *
             * @param enabled boolean or string, possible values: off/false, idle/true, or notIdle
             */
            autoResume(enabled: boolean | string): void;

            /**
             * When true, the Keepalive service is automatically stopped and started as needed.
             *
             * @param enabled boolean, default is true
             */
            keepalive(enabled: boolean): void;
        }

        /**
         * Idle, once watch() is called, will start a timeout which if expires, will enter a warning state
         * countdown. Once the countdown reaches zero, idle will broadcast a timeout event indicating the
         * user has timed out (where your app should log them out or whatever you like). If the user performs
         * an action that triggers a watched DOM event that bubbles up to document.body, this will reset the
         * idle/warning state and start the process over again.
         */
        interface IIdleService {
            /**
             * Gets the current idle value
             */
            getIdle(): number;

            /**
             * Gets the current timeout value
             */
            getTimeout(): number;

            /**
             * Updates the idle value (see IdleProvider.idle()) and
             * restarts the watch if its running.
             */
            setIdle(idle: number): void;

            /**
             * Updates the timeout value (see IdleProvider.timeout()) and
             * restarts the watch if its running.
             */
            setTimeout(timeout: number): void;

            /**
             * Whether user has timed out (meaning idleDuration + timeout has passed without any activity)
             */
            isExpired(): boolean;

            /**
             * Whether or not the watch() has been called and it is watching for idleness.
             */
            running(): boolean;

            /**
             * Whether or not the user appears to be idle.
             */
            idling(): boolean;

            /**
             * Starts watching for idleness, or resets the idle/warning state and continues watching.
             */
            watch(): void;

            /**
             * Stops watching for idleness, and resets the idle/warning state.
             */
            unwatch(): void;

            /**
             * Manually trigger the idle interrupt that normally occurs during user activity.
             */
            interrupt(): any;
        }
    }
}
