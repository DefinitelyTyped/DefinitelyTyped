import * as _ from "../index";
declare module "../index" {
    interface TruncateOptions {
        /** The maximum string length. */
        length?: number;
        /** The string to indicate text is omitted. */
        omission?: string;
        /** The separator pattern to truncate to. */
        separator?: string|RegExp;
    }

    interface LoDashStatic {
        /**
         * Truncates string if it’s longer than the given maximum string length. The last characters of the truncated
         * string are replaced with the omission string which defaults to "…".
         *
         * @param string The string to truncate.
         * @param options The options object or maximum string length.
         * @return Returns the truncated string.
         */
        truncate(
            string?: string,
            options?: TruncateOptions
        ): string;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.truncate
         */
        truncate(options?: TruncateOptions): string;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.truncate
         */
        truncate(options?: TruncateOptions): LoDashExplicitWrapper<string>;
    }
}