// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

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
    (thisArg: any, func: (...args: any[]) => any): (...args: any[]) => any;
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
    (func: (...args: any[]) => any): (...args: any[]) => any;
}

declare const bind: Bind;
declare namespace bind {}
export = bind;
