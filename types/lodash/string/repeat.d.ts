import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Repeats the given string n times.
         *
         * @param string The string to repeat.
         * @param n The number of times to repeat the string.
         * @return Returns the repeated string.
         */
        repeat(
            string?: string,
            n?: number
        ): string;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.repeat
         */
        repeat(n?: number): string;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.repeat
         */
        repeat(n?: number): LoDashExplicitWrapper<string>;
    }

    type ReplaceFunction = (match: string, ...args: any[]) => string;
}