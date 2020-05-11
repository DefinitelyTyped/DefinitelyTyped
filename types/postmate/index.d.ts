// Type definitions for postmate 1.5
// Project: https://github.com/dollarshaveclub/postmate
// Definitions by: Wayne Carson <https://github.com/wcarson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * This is written in the parent page. Creates an iFrame at the specified url. Initiates a connection with the
 * child. Returns a Promise that signals when the handshake is complete and communication is ready to begin.
 */
declare class Postmate extends Promise<Postmate.ParentAPI> {
    /**
     * Set to true to enable logging of additional information. Default: false
     */
    static debug: boolean;

    /**
     * Replace the Promise API that Postmate uses. Default: window.Promise
     */
    static Promise: Promise<any>;

    /**
     * Initializes a new instance of Postmate
     *
     * @param options configuration options
     */
    constructor(options: Postmate.PostmateOptions);
}

declare namespace Postmate {
    /**
     * Options passed to the Postmate constructor
     */
    interface PostmateOptions {
        /**
         * An element to append the iFrame to. Default: document.body
         */
        container?: HTMLElement|null;

        /**
         * An object literal to represent the default values of the child's model
         */
        model?: any;

        /**
         * A URL to load in the iFrame. The origin of this URL will also be used for securing message transport
         */
        url: string;

        /**
         * An Array to add classes to the iFrame. Useful for styling
         */
        classListArray?: string[];
    }

    /**
     * Composes an API to be used by the parent
     */
    interface ParentAPI {
        /**
         * The iFrame Element that the parent is communicating with
         */
        frame: HTMLIFrameElement;

        /**
         * Retrieves a value by property name from the child's model object.
         *
         * @param key The string property to lookup in the child's model
         * @returns child model property value
         */
        get(key: string): Promise<any>;

        /**
         * Calls a function on the child's model
         *
         * @param key The string property to lookup in the child's model
         * @param data The optional data to send to the child function
         */
        call(key: string, data?: any): void;

        /**
         * Listen to a particular event from the child
         *
         * @param eventName the name of the event
         * @param callback the event handler function
         */
        on(eventName: string, callback: (data?: any) => void): void;

        /**
         * Removes the iFrame element and destroys any message event listeners
         */
        destroy(): void;
    }

    /**
     * Composes an API to be used by the child
     */
    interface ChildAPI {
        /**
         * Emits an event to the parent
         *
         * @param name the name of the event
         * @param data event data
         */
        emit(name: string, data?: any): void;
    }

    /**
     * This is written in the child page. Calling Postmate.Model initiates a handshake request listener from the
     * Child. Once the handshake is complete, an event listener is bound to receive requests from the Parent. The
     * Child model is extended from the model provided by the Parent.
     */
    class Model extends Promise<ChildAPI> {
        /**
         * Initializes a new instance of Model
         *
         * @param model An object of gettable properties to expose to the parent. Value types may be anything
         * accepted in postMessage. Promises may also be set as values or returned from functions. Default: {}
         */
        constructor(model: any);
    }
}

/**
 * Module export
 */
export = Postmate;
