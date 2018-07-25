// Type definitions for Combokeys v2.4.6
// Project: https://github.com/PolicyStat/combokeys
// Definitions by: Ian Clanton-Thuon <https://github.com/iclanton>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Combokeys {
    interface CombokeysStatic {
        new (element: Element): Combokeys;

        /**
         * all instances of Combokeys
         */
        instances: Combokeys[];

        /**
         * reset all instances
         */
        reset(): void;
    }

    interface Combokeys {
        element: Element;

        /**
         * binds an event to Combokeys
         *
         * can be a single key, a combination of keys separated with +,
         * an array of keys, or a sequence of keys separated by spaces
         *
         * be sure to list the modifier keys first to make sure that the
         * correct key ends up getting bound (the last key in the pattern)
         *
         * @param {keys} key combination or combinations
         * @param {callback} callback function
         * @param {handler} optional - one of "keypress", "keydown", or "keyup"
         * @returns void
         */
        bind(keys: string | string[], callback: (event: KeyboardEvent) => void, action?: string): void;


        /**
         * binds multiple combinations to the same callback
         *
         * @param {keys} key combinations
         * @param {callback} callback function
         * @param {handler} optional - one of "keypress", "keydown", or "keyup"
         * @returns void
         */
        bindMultiple(keys: string[], callback: () => void, action?: string): void;

        /**
         * unbinds an event to Combokeys
         *
         * the unbinding sets the callback function of the specified key combo
         * to an empty function and deletes the corresponding key in the
         * directMap dict.
         *
         * the keycombo+action has to be exactly the same as
         * it was defined in the bind method
         *
         * @param {keys} key combination or combinations
         * @param {action} optional - one of "keypress", "keydown", or "keyup"
         * @returns void
         */
        unbind(keys: string | string[], action?: string): void;

        /**
         * triggers an event that has already been bound
         *
         * @param {keys} key combination
         * @param {action} optional - one of "keypress", "keydown", or "keyup"
         * @returns void
         */
        trigger(keys: string, action?: string): void;

        /**
         * resets the library back to its initial state. This is useful
         * if you want to clear out the current keyboard shortcuts and bind
         * new ones - for example if you switch to another page
         *
         * @returns void
         */
        reset(): void;

        /**
         * should we stop this event before firing off callbacks
         *
         * @param {e} event
         * @param {element} bound element
         * @return {boolean}
         */
        stopCallback(e: Event, element: Element): boolean;

        /**
         * detach all listners from the bound element
         *
         * @return {void}
         */
        detach(): void;
    }
}

declare var combokeys: Combokeys.CombokeysStatic;

declare module "combokeys" {
    export = combokeys;
}
