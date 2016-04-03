declare module goog {
    function require(name: 'goog.dom.animationFrame'): typeof goog.dom.animationFrame;
    function require(name: 'goog.dom.animationFrame.State'): typeof goog.dom.animationFrame.State;
}

declare module goog.dom.animationFrame {

    /**
     * @typedef {{
     *   id: number,
     *   fn: !Function,
     *   context: (!Object|undefined)
     * }}
     * @private
     */
    type Task_ = {id: number; fn: Function; context: Object|void};

    /**
     * @typedef {{
     *   measureTask: goog.dom.animationFrame.Task_,
     *   mutateTask: goog.dom.animationFrame.Task_,
     *   state: (!Object|undefined),
     *   args: (!Array|undefined),
     *   isScheduled: boolean
     * }}
     * @private
     */
    type TaskSet_ = {measureTask: goog.dom.animationFrame.Task_; mutateTask: goog.dom.animationFrame.Task_; state: Object|void; args: Array<any>|void; isScheduled: boolean};

    /**
     * @typedef {{
     *   measure: (!Function|undefined),
     *   mutate: (!Function|undefined)
     * }}
     */
    type Spec = {measure: Function|void; mutate: Function|void};

    /**
     * A type to represent state. Users may add properties as desired.
     * @constructor
     * @final
     */
    class State {
        constructor();
    }

    /**
     * Returns a function that schedules the two passed-in functions to be run upon
     * the next animation frame. Calling the function again during the same
     * animation frame does nothing.
     *
     * The function under the "measure" key will run first and together with all
     * other functions scheduled under this key and the function under "mutate" will
     * run after that.
     *
     * @param {{
     *   measure: (function(this:THIS, !goog.dom.animationFrame.State)|undefined),
     *   mutate: (function(this:THIS, !goog.dom.animationFrame.State)|undefined)
     * }} spec
     * @param {THIS=} opt_context Context in which to run the function.
     * @return {function(...?)}
     * @template THIS
     */
    function createTask<THIS>(spec: {measure: ((arg0: goog.dom.animationFrame.State) => any)|void; mutate: ((arg0: goog.dom.animationFrame.State) => any)|void}, opt_context?: THIS): (...arg0: any[]) => any;

    /**
     * @return {boolean} Whether the animationframe is currently running. For use
     *     by callers who need not to delay tasks scheduled during runTasks_ for an
     *     additional frame.
     */
    function isRunning(): boolean;
}
