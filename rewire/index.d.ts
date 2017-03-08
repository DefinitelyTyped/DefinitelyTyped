// Type definitions for rewire v2.5.1
// Project: https://github.com/jhnns/rewire
// Definitions by: Borislav Zhivkov <https://github.com/borislavjivkov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace RewireInterfaces {
    interface Rewire {
        /**
         * Returns a rewired version of the module found at filename. Use rewire() exactly like require().
         */
        (filename: string): RewiredModule;
    }

    interface RewiredModule {
        /**
         * Takes all enumerable keys of obj as variable names and sets the values respectively. Returns a function which can be called to revert the change.
         */
        __set__(obj: Object): Function;
        /**
         * Sets the internal variable name to the given value. Returns a function which can be called to revert the change.
         */
        __set__(name: string, value: any): Function;
        /**
         * Returns the private variable with the given name.
         */
        __get__(name: string): any;
        /**
         * Returns a function which - when being called - sets obj, executes the given callback and reverts obj. If callback returns a promise, obj is only reverted after
         * the promise has been resolved or rejected. For your convenience the returned function passes the received promise through.
         */
        __with__(obj: Object): (callback: Function) => any;
    }
}

declare var rewire: RewireInterfaces.Rewire;
export = rewire;
