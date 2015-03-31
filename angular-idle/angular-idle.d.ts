// Type definitions for ng-idle v0.3.5
// Project: http://hackedbychinese.github.io/ng-idle/
// Definitions by: mthamil <https://github.com/mthamil>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare module angular.idle {

    /**
     * Used to configure the $keepalive service.
     */
    interface IKeepAliveProvider extends IServiceProvider {

        /**
         * If configured, options will be used to issue a request using $http. 
         * If the value is null, no HTTP request will be issued. 
         * You can specify a string, which it will assume to be a URL to a simple GET request. 
         * Otherwise, you can use the same options $http takes. However, cache will always be false.
         * 
         * @param value May be string or object, default is null.
         */
        http(value: any): void;

        /**
         * This specifies how often the keepalive event is triggered and the 
         * HTTP request is issued.
         * 
         * @param seconds Integer, default is 5 minutes. Must be greater than 0.
         */
        interval(seconds: number): void;
    }

    /**
     * $keepalive will use a timeout to periodically wake, broadcast a $keepalive event on the root scope, 
     * and optionally make an $http request. By default, the $idle service will stop and start $keepalive 
     * when a user becomes idle or returns from idle, respectively. It is also started automatically when 
     * $idle.watch() is called. This can be disabled by configuring the $idleProvider.
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
    }

    /**
     * Used to configure the $idle service.
     */
    interface IIdleProvider extends IServiceProvider {

        /**
         * Specifies the DOM events the service will watch to reset the idle timeout. 
         * Multiple events should be separated by a space.
         * 
         * @param events string, default 'mousemove keydown DOMMouseScroll mousewheel mousedown'
         */
        activeOn(events: string): void;

        /**
         * The idle timeout duration in seconds. After this amount of time passes without the user 
         * performing an action that triggers one of the watched DOM events, the user is considered 
         * idle.
         * 
         * @param seconds integer, default is 20min
         */
        idleDuration(seconds: number): void;

        /**
         * The amount of time the user has to respond (in seconds) before they have been considered 
         * timed out.
         * 
         * @param seconds integer, default is 30s
         */
        warningDuration(seconds: number): void;

        /**
         * When true, user activity will automatically interrupt the warning countdown and reset the 
         * idle state. If false, you will need to manually call watch() when you want to start 
         * watching for idleness again.
         * 
         * @param enabled boolean, default is true
         */
        autoResume(enabled: boolean): void;

        /**
         * When true, the $keepalive service is automatically stopped and started as needed.
         * 
         * @param enabled boolean, default is true
         */
        keepalive(enabled: boolean): void;
    }

    /**
     * $idle, once watch() is called, will start a timeout which if expires, will enter a warning state 
     * countdown. Once the countdown reaches zero, idle will broadcast a timeout event indicating the 
     * user has timed out (where your app should log them out or whatever you like). If the user performs 
     * an action that triggers a watched DOM event that bubbles up to document.body, this will reset the 
     * idle/warning state and start the process over again.
     */
    interface IIdleService {
        
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
    }
}
