import { PageFunction } from '.';
import { ElementHandle } from './element_handle';

/**
 * JSHandle represents an in-page JavaScript object.
 */
export class JSHandle<T = any> {
    /**
     * Returns either `null` or the object handle itself, if the object handle is
     * an instance of `ElementHandle`.
     * @returns The ElementHandle if available.
     */
    asElement(): ElementHandle | null;

    /**
     * Stops referencing the element handle.
     */
    dispose(): void;

    /**
     * Evaluates the page function and returns its return value.
     * This method passes this handle as the first argument to the page function.
     * @param pageFunction The function to be evaluated.
     * @param args The arguments to pass to the page function.
     * @returns The return value of `pageFunction`.
     */
    evaluate<R, Arg>(pageFunction: PageFunction<R, Arg>, ...args: any): any;

    /**
     * Evaluates the page function and returns a `JSHandle`.
     * This method passes this handle as the first argument to the page function.
     * Unlike `evaluate`, `evaluateHandle` returns the value as a `JSHandle`
     * @param pageFunction The function to be evaluated.
     * @param args The arguments to pass to the page function.
     * @returns A JSHandle of the return value of `pageFunction`.
     */
    evaluateHandle<R, Arg>(pageFunction: PageFunction<R, Arg>, ...args: any): JSHandle<R>;

    /**
     * Fethes a map with own property names of of the `JSHandle` with their values as
     * `JSHandle` instances.
     * @returns A map with property names as keys and `JSHandle` instances for the property values.
     */
    getProperties(): Map<string, JSHandle>;

    /**
     * Fetches a JSON representation of the object.
     * @returns A JSON representation of the object.
     */
    jsonValue(): any;
}
