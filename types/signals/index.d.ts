// Type definitions for JS-Signals
// Project: http://millermedeiros.github.io/js-signals/
// Definitions by: Diullei Gomes <https://github.com/diullei>
//                 Luc <https://github.com/quelu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var signals: signals.SignalWrapper;

export = signals;
export as namespace signals;

declare namespace signals {

    interface SignalWrapper<T = any> {
        Signal: Signal<T>
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
         * @name Signal
         * @author Miller Medeiros
         * @constructor
         */
        new (): Signal<T>;

        /**
         * If Signal is active and should broadcast events.
         * IMPORTANT: Setting this property during a dispatch will only affect the next dispatch, if you want to stop the propagation of a signal use `halt()` instead.
         */
        active: boolean;

        /**
         * If Signal should keep record of previously dispatched parameters and automatically
         * execute listener during add()/addOnce() if Signal was already dispatched before.
         *
         * @type {boolean}
         */
        memorize: boolean;

        /**
         * Signals Version Number
         *
         * @type {string}
         */
        VERSION: string;

        /**
         * Add a listener to the signal.
         *
         * @param {(...params: G[]) => void} listener Signal handler function.
         * @param {*} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
         * @param {Number} [priority] The priority level of the event listener. Listeners with higher priority will be executed before listeners with lower priority. Listeners with same priority level will be executed at the same order as they were added. (default = 0)
         * @returns {SignalBinding<G>} An Object representing the binding between the Signal and listener.
         */
        add<G extends T>(listener: (...params: G[]) => void, listenerContext?: any, priority?: Number): SignalBinding<G>;

        /**
         * Add listener to the signal that should be removed after first execution (will be executed only once).
         *
         * @param {(...params: G[]) => void} listener Signal handler function.
         * @param {*} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
         * @param {Number} [priority] The priority level of the event listener. Listeners with higher priority will be executed before listeners with lower priority. Listeners with same priority level will be executed at the same order as they were added. (default = 0)
         * @returns {SignalBinding<G>} An Object representing the binding between the Signal and listener.
         */
        addOnce<G extends T>(listener: (...params: G[]) => void, listenerContext?: any, priority?: Number): SignalBinding<G>;


        /**
         * Dispatch/Broadcast Signal to all listeners added to the queue.
         *
         * @param {...G[]} params  Parameters that should be passed to each handler.
         */
        dispatch<G extends T>(...params: G[]): void;

        /**
         * Remove all bindings from signal and destroy any reference to external objects (destroy Signal object).
         * IMPORTANT: calling any method on the signal instance after calling dispose will throw errors.
         */
        dispose(): void;

        /**
         * Forget memorized arguments.
         */
        forget(): void;

        /**
         * Returns a number of listeners attached to the Signal.
         *
         * @returns {number} Number of listeners attached to the Signal.

         */
        getNumListeners(): number;

        /**
         * Stop propagation of the event, blocking the dispatch to next listeners on the queue.
         * IMPORTANT: should be called only during signal dispatch, calling it before/after dispatch won't affect signal broadcast.
         */
        halt(): void;

        /**
         * Check if listener was attached to Signal.
         *
         * @param {(...params: G[]) => void} listener Signal handler function.
         * @param {*} [context] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
         * @returns {boolean} If Signal has the specified listener.
         */
        has<G extends T>(listener: (...params: G[]) => void, context?: any): boolean;

        /**
         * Remove a single listener from the dispatch queue.
         *
         * @param {(...params: G[]) => void} listener Signal handler function.
         * @param {*} [context] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
         * @returns {(...params: G[]) => void} Listener handler function.
         */
        remove<G extends T>(listener: (...params: G[]) => void, context?: any): (...params: G[]) => void;

        /**
         * Remove all listeners from the Signal.
         */
        removeAll(): void;
    }
}
