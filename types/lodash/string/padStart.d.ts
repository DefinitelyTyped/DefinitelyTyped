import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Pads string on the left side if it’s shorter than length. Padding characters are truncated if they exceed
         * length.
         *
         * @param string The string to pad.
         * @param length The padding length.
         * @param chars The string used as padding.
         * @return Returns the padded string.
         */
        padStart(
            string?: string,
            length?: number,
            chars?: string
        ): string;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.padStart
         */
        padStart(
            length?: number,
            chars?: string
        ): string;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.padStart
         */
        padStart(
            length?: number,
            chars?: string
        ): LoDashExplicitWrapper<string>;
    }
}