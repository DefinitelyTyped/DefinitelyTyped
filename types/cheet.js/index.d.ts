/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace cheet;

/**
 * A callback to execute each time the corresponding event is fired.
 *
 * @param str - The string representation of the sequence that completed.
 * @param seq - An array of key names representing the sequence that completed.
 */
export type Handler = (str: string, seq: string[]) => void;

/**
 * A callback to execute each time a correct key in the sequence is pressed in order.
 *
 * @param str - The string representation of the sequence that is in progress.
 * @param key - The name of the key that was just pressed.
 * @param num - A number representing the current progress of the sequence. (starts at 0)
 * @param seq - An array of key names representing the sequence that is in progress.
 */
export type NextHandler = (str: string, key: string, num: number, seq: string[]) => void;

/**
 * Map a sequence of keypresses to a callback. This can be called multiple times.
 * @param sequence - A string representation of a sequence of key names. Each keyname must be separated by a single space.
 */
export function cheet(sequence: string): void;

/**
 * Map a sequence of keypresses to a callback. This can be called multiple times.
 * @param sequence - A string representation of a sequence of key names. Each keyname must be separated by a single space.
 * @param done - A callback to execute each time the sequence is correctly pressed.
 */
export function cheet(
    sequence: string,
    /**
     * A callback to execute each time the sequence is correctly pressed.
     *
     * @param str - The string representation of the sequence that completed.
     * @param seq - An array of key names representing the sequence that completed.
     */
    /* tslint:disable-next-line unified-signatures */
    done: (str: string, seq: string[]) => void,
): void;

/**
 * Map a sequence of keypresses to a callback. This can be called multiple times.
 * @param sequence - A string representation of a sequence of key names. Each keyname must be separated by a single space.
 * @param handlers - A callback to execute each time the sequence is correctly pressed.
 */
export function cheet(
    sequence: string,
    /* tslint:disable-next-line unified-signatures */
    handlers: {
        /**
         * A callback to execute each time the sequence is correctly pressed.
         *
         * @param str - The string representation of the sequence that completed.
         * @param seq - An array of key names representing the sequence that completed.
         */
        done?(str: string, seq: string[]): void;
        /**
         * A callback to execute each time a sequence's progress is broken.
         *
         * @param str - The string representation of the sequence that completed.
         * @param seq - An array of key names representing the sequence that completed.
         */
        fail?(str: string, seq: string[]): void;
        /**
         * A callback to execute each time a correct key in the sequence is pressed in order.
         *
         * @param str - The string representation of the sequence that is in progress.
         * @param key - The name of the key that was just pressed.
         * @param num - A number representing the current progress of the sequence. (starts at 0)
         * @param seq - An array of key names representing the sequence that is in progress.
         */
        next?(str: string, key: string, num: number, seq: string[]): void;
    },
): void;

export namespace cheet {
    /**
     * Set a global callback that executes whenever any mapped sequence is completed successfully.
     *
     * @param cb - A callback to execute each time any sequence is correctly pressed.
     */
    function done(
        /**
         * A callback to execute each time the sequence is correctly pressed.
         *
         * @param str - The string representation of the sequence that completed.
         * @param seq - An array of key names representing the sequence that completed.
         */
        cb: (str: string, seq: string[]) => void,
    ): void;

    /**
     * Set a global callback that executes whenever any in-progress sequence is broken.
     *
     * @param cb - A callback to execute each time any sequence's progress is broken.
     */
    function fail(
        /**
         * A callback to execute each time a sequence's progress is broken.
         *
         * @param str - The string representation of the sequence that completed.
         * @param seq - An array of key names representing the sequence that completed.
         */
        cb: (str: string, seq: string[]) => void,
    ): void;

    /**
     * Set a global callback that executes whenever any mapped sequence progresses.
     *
     * @param cb - A callback to execute each time any correct key in the sequence is pressed in order.
     */
    function next(
        /**
         * A callback to execute each time a correct key in the sequence is pressed in order.
         *
         * @param str - The string representation of the sequence that is in progress.
         * @param key - The name of the key that was just pressed.
         * @param num - A number representing the current progress of the sequence. (starts at 0)
         * @param seq - An array of key names representing the sequence that is in progress.
         */
        cb: (str: string, key: string, num: number, seq: string[]) => void,
    ): void;

    /**
     * Disable a previously-mapped sequence.
     *
     * @param seq The same string you used to map the callback when using cheet(seq, ...).
     */
    function disable(sequence: string): void;

    /**
     * Resets a sequence that may or may not be in progress.
     * This will not cause fail callbacks to fire, but will effectively cancel the sequence.
     *
     * @param seq The same string you used to map the callback when using cheet(seq, ...).
     */
    function reset(sequence: string): void;
}
