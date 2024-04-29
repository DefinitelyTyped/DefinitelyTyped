declare namespace RewireInterfaces {
    interface RewiredModule {
        /**
         * Takes all enumerable keys of obj as variable names and sets the values respectively. Returns a function which can be called to revert the change.
         */
        __set__(obj: { [variable: string]: any }): () => void;
        /**
         * Sets the internal variable name to the given value. Returns a function which can be called to revert the change.
         */
        __set__(name: string, value: any): () => void;
        /**
         * Returns the private variable with the given name.
         */
        __get__<T = any>(name: string): T;
        /**
         * Returns a function which - when being called - sets obj, executes the given callback and reverts obj. If callback returns a promise, obj is only reverted after
         * the promise has been resolved or rejected. For your convenience the returned function passes the received promise through.
         */
        __with__(obj: { [variable: string]: any }): (callback: () => any) => any;
    }
}

/**
 * Returns a rewired version of the module found at filename. Use rewire() exactly like require().
 */
declare function rewire<T = { [key: string]: any }>(filename: string): RewireInterfaces.RewiredModule & T;
export = rewire;
