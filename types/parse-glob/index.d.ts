declare namespace parseGlob {
    interface Result {
        /**
         * A copy of the original, unmodified glob pattern.
         */
        orig: string;
        /**
         * An object with boolean information about the glob.
         */
        is: {
            /**
             * True if the pattern actually is a glob pattern.
             */
            glob: boolean;
            /**
             * True if it's a negation pattern (!/foo.js).
             */
            negated: boolean;
            /**
             * True if it has extglobs (@(foo|bar)).
             */
            extglob: boolean;
            /**
             * True if it has braces ({1..2} or .{txt,md}).
             */
            braces: boolean;
            /**
             * True if it has POSIX brackets ([[:alpha:]]).
             */
            brackets: boolean;
            /**
             * True if the pattern has a globstar (double star, **).
             */
            globstar: boolean;
            /**
             * True if the pattern should match dotfiles.
             */
            dotfile: boolean;
            /**
             * True if the pattern should match dot-directories (like .git).
             */
            dotdir: boolean;
        };
        /**
         * The glob pattern part of the string, if any.
         */
        glob: string;
        /**
         * The non-glob part of the string, if any.
         */
        base: string;
        /**
         * File path segments.
         */
        path: {
            /**
             * Directory.
             */
            dirname: string;
            /**
             * File name with extension.
             */
            basename: string;
            /**
             * File name without extension.
             */
            filename: string;
            /**
             * File extension with dot.
             */
            extname: string;
            /**
             * File extension without dot.
             */
            ext: string;
        };
    }
}

interface ParseGlob {
    (glob: string): parseGlob.Result;
}

declare const parseGlob: ParseGlob;
export = parseGlob;
