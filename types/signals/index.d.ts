declare var signals: signals.SignalWrapper;

export = signals;
export as namespace signals;

declare namespace signals {
    interface SignalWrapper<T = any> {
        Signal: Signal<T>;
    }

    interface SignalBinding<T = any> {
        active: boolean;
        context: any;
        params: any;
        detach(): Function;
        execute(paramsArr?: any[]): any;
        getListener(): (...params: T[]) => void;
        getSignal(): Signal<T>;
        isBound(): boolean;
        isOnce(): boolean;
    }

    interface Signal<T = any> {
        /**
         * Custom event broadcaster
         * <br />- inspired by Robert Penner's AS3 Signals.
         * @author Miller Medeiros
         */
        new(): Signal<T>;

        /**
         * If Signal is active and should broadcast events.
         */
        active: boolean;

        /**
         * If Signal should keep record of previously dispatched parameters and automatically
         * execute listener during add()/addOnce() if Signal was already dispatched before.
         */
        memorize: boolean;

        /**
         * Signals Version Number
         */
        VERSION: string;

        /**
         * Add a listener to the signal.
         *
         * @param listener Signal handler function.
         * @param listenercontext Context on which listener will be executed (object that should represent the `this` variable inside listener function).
         * @param priority The priority level of the event listener.
         *        Listeners with higher priority will be executed before listeners with lower priority.
         *        Listeners with same priority level will be executed at the same order as they were added. (default = 0)
         */
        add(listener: (...params: T[]) => void, listenerContext?: any, priority?: Number): SignalBinding<T>;

        /**
         * Add listener to the signal that should be removed after first execution (will be executed only once).
         *
         * @param listener Signal handler function.
         * @param listenercontext Context on which listener will be executed (object that should represent the `this` variable inside listener function).
         * @param priority The priority level of the event listener.
         *                 Listeners with higher priority will be executed before listeners with lower priority.
         *                 Listeners with same priority level will be executed at the same order as they were added. (default = 0)
         */
        addOnce(listener: (...params: T[]) => void, listenerContext?: any, priority?: Number): SignalBinding<T>;

        /**
         * Dispatch/Broadcast Signal to all listeners added to the queue.
         *
         * @param params Parameters that should be passed to each handler.
         */
        dispatch(...params: T[]): void;

        /**
         * Remove all bindings from signal and destroy any reference to external objects (destroy Signal object).
         */
        dispose(): void;

        /**
         * Forget memorized arguments.
         */
        forget(): void;

        /**
         * Returns a number of listeners attached to the Signal.
         */
        getNumListeners(): number;

        /**
         * Stop propagation of the event, blocking the dispatch to next listeners on the queue.
         */
        halt(): void;

        /**
         * Check if listener was attached to Signal.
         */
        has(listener: (...params: T[]) => void, context?: any): boolean;

        /**
         * Remove a single listener from the dispatch queue.
         */
        remove(listener: (...params: T[]) => void, context?: any): Function;

        removeAll(): void;
    }
}
