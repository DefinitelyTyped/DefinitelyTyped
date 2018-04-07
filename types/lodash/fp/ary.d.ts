// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

interface Ary {
    /**
     * Creates a function that accepts up to n arguments ignoring any additional arguments.
     *
     * @param func The function to cap arguments for.
     * @param n The arity cap.
     * @returns Returns the new function.
     */
    (): Ary;
    /**
     * Creates a function that accepts up to n arguments ignoring any additional arguments.
     *
     * @param func The function to cap arguments for.
     * @param n The arity cap.
     * @returns Returns the new function.
     */
    (n: number): Ary1x1;
    /**
     * Creates a function that accepts up to n arguments ignoring any additional arguments.
     *
     * @param func The function to cap arguments for.
     * @param n The arity cap.
     * @returns Returns the new function.
     */
    (n: number, func: (...args: any[]) => any): (...args: any[]) => any;
}
interface Ary1x1 {
    /**
     * Creates a function that accepts up to n arguments ignoring any additional arguments.
     *
     * @param func The function to cap arguments for.
     * @param n The arity cap.
     * @returns Returns the new function.
     */
    (): Ary1x1;
    /**
     * Creates a function that accepts up to n arguments ignoring any additional arguments.
     *
     * @param func The function to cap arguments for.
     * @param n The arity cap.
     * @returns Returns the new function.
     */
    (func: (...args: any[]) => any): (...args: any[]) => any;
}

declare const ary: Ary;
export = ary;
