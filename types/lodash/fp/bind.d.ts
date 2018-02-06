import _ = require("../index");

declare namespace Lodash {
    interface Bind {
        /**
         * Creates a function that invokes func with the this binding of thisArg and prepends any additional _.bind
         * arguments to those provided to the bound function.
         *
         * The _.bind.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder for
         * partially applied arguments.
         *
         * Note: Unlike native Function#bind this method does not set the "length" property of bound functions.
         *
         * @param func The function to bind.
         * @param thisArg The this binding of func.
         * @param partials The arguments to be partially applied.
         * @return Returns the new bound function.
         */
        (): Bind;
        /**
         * Creates a function that invokes func with the this binding of thisArg and prepends any additional _.bind
         * arguments to those provided to the bound function.
         *
         * The _.bind.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder for
         * partially applied arguments.
         *
         * Note: Unlike native Function#bind this method does not set the "length" property of bound functions.
         *
         * @param func The function to bind.
         * @param thisArg The this binding of func.
         * @param partials The arguments to be partially applied.
         * @return Returns the new bound function.
         */
        (thisArg: any): Bind1x1;
        /**
         * Creates a function that invokes func with the this binding of thisArg and prepends any additional _.bind
         * arguments to those provided to the bound function.
         *
         * The _.bind.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder for
         * partially applied arguments.
         *
         * Note: Unlike native Function#bind this method does not set the "length" property of bound functions.
         *
         * @param func The function to bind.
         * @param thisArg The this binding of func.
         * @param partials The arguments to be partially applied.
         * @return Returns the new bound function.
         */
        (thisArg: any, mport * as _ from "../index";
        declare module "../index" {
            interface FunctionBind {
                placeholder: any;

                (
                    func: (...args: any[]) => any): (...args: any[]) => any;
            }

            interface _.LoDashStatic {
                /**
                 * Creates a function that invokes func with the this binding of thisArg and prepends any additional _.bind
                 * arguments to those provided to the bound function.
                 *
                 * The _.bind.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder for
                 * partially applied arguments.
                 *
                 * Note: Unlike native Function#bind this method does not set the "length" property of bound functions.
                 *
                 * @param func The function to bind.
                 * @param thisArg The this binding of func.
                 * @param partials The arguments to be partially applied.
                 * @return Returns the new bound function.
                 */
                bind: FunctionBind;
            }

            interface _.LoDashImplicitWrapper<TValue> {
                /**
                 * @see _.bind
                 */
                bind(
                    thisArg: any,
                    ...partials: any[]
                ): _.LoDashImplicitWrapper<(...args: any[]) => any>;
    }
    interface Bind1x1 {
        /**
         * Creates a function that invokes func with the this binding of thisArg and prepends any additional _.bind
         * arguments to those provided to the bound function.
         *
         * The _.bind.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder for
         * partially applied arguments.
         *
         * Note: Unlike native Function#bind this method does not set the "length" property of bound functions.
         *
         * @param func The function to bind.
         * @param thisArg The this binding of func.
         * @param partials The arguments to be partially applied.
         * @return Returns the new bound function.
         */
        (): Bind1x1;
        /**
         * Creates a function that invokes func with the this binding of thisArg and prepends any additional _.bind
         * arguments to those provided to the bound function.
         *
         * The _.bind.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder for
         * partially applied arguments.
         *
         * Note: Unlike native Function#bind this method does not set the "length" property of bound functions.
         *
         * @param func The function to bind.
         * @param thisArg The this binding of func.
         * @param partials The arguments to be partially applied.
         * @return Returns the new bound function.
         */
        (mport * as _ from "../index";
        declare module "../index" {
            interface FunctionBind {
                placeholder: any;

                (
                    func: (...args: any[]) => any): (...args: any[]) => any;
            }

            interface _.LoDashStatic {
                /**
                 * Creates a function that invokes func with the this binding of thisArg and prepends any additional _.bind
                 * arguments to those provided to the bound function.
                 *
                 * The _.bind.placeholder value, which defaults to _ in monolithic builds, may be used as a placeholder for
                 * partially applied arguments.
                 *
                 * Note: Unlike native Function#bind this method does not set the "length" property of bound functions.
                 *
                 * @param func The function to bind.
                 * @param thisArg The this binding of func.
                 * @param partials The arguments to be partially applied.
                 * @return Returns the new bound function.
                 */
                bind: FunctionBind;
            }

            interface _.LoDashImplicitWrapper<TValue> {
                /**
                 * @see _.bind
                 */
                bind(
                    thisArg: any,
                    ...partials: any[]
                ): _.LoDashImplicitWrapper<(...args: any[]) => any>;
    }
}

declare const bind: Lodash.Bind;
export = bind;
