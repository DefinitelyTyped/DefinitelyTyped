declare namespace intercom {
    interface Intercom {
        /**
         * Broadcasts a message to all open windows (including the current window).
         * @param name The string event name
         * @param message The event data/message
         */
        emit(name: string, message?: any): void;
        /**
         * Sets up a listener to be invoked when a message with the given name is received.
         * @param name The string event name to listen for.
         * @param fn The listener method to invoke.
         */
        on(name: string, fn: Function): void;
        /**
         * Remove a registered event listener
         * @param name The string event listener name.
         * @param fn The listener method to remove.
         */
        off(name: string, fn: Function): void;
        /**
         * Given a unique key to represent the function, fn will be invoked in only one window. The ttl argument represents the number of seconds before the function can be called again.
         * @param key The unique function identifier key
         * @param fn The function to be called once
         * @param ttl The amount of time in seconds to wait before allowing the function to be invoked again.
         */
        once(key: string, fn: Function, ttl?: number): void;
        /**
         * Bind to a socket.io socket and forward all received messages to all windows and/or back to the socket.
         * @param socket A socket.io socket to bind to.
         * @param options Object with "send" and "receive" keys having values of Boolean or Boolean-producing function to determine whether message(s) should be forwarded to/from the socket.
         */
        bind(socket: any, options?: intercom.SocketBindingOptions): void;
    }
    interface SocketBindingOptions {
        send?: any; /* boolean | (name: string, message: any)=>any */
        receive?: any; /* boolean | (name: string, message: any)=>any */
    }
}

interface IntercomStatic {
    /**
     * Returns an instance of Intercom. If one doesn't exist, it will be instantiated.
     * @return an instance of Intercom.
     */
    getInstance(): intercom.Intercom;
    /**
     * Removes all data associated with intercom from localStorage.
     */
    destroy(): void;
}

declare var Intercom: IntercomStatic;
