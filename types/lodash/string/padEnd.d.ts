import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Pads string on the right side if it’s shorter than length. Padding characters are truncated if they exceed
         * length.
         *
         * @param string The string to pad.
         * @param length The padding length.
         * @param chars The string used as padding.
         * @return Returns the padded string.
         */
        padEnd(
            string?: string,
            length?: number,
            chars?: string
        ): string;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.padEnd
         */
        padEnd(
            length?: number,
            chars?: string
        ): string;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.padEnd
         */
        padEnd(
            length?: number,
            chars?: string
        ): LoDashExplicitWrapper<string>;
    }
}