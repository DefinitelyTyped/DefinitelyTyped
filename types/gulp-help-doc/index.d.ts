import gulp = require("gulp");

declare namespace usage {
    interface UsageOptions {
        /**
         * Defines max line width for the printed output lines.
         *
         * @default 80
         */
        lineWidth?: number | undefined;

        /**
         * Defines max width of the column width tasks or args names.
         *
         * @default 20
         */
        keysColumnWidth?: number | undefined;

        /**
         * Defines number of empty characters for left-padding of the output.
         * @default 4
         */
        padding?: number | undefined;

        /**
         * Defines number of empty characters before group name output.
         *
         * @default 1
         */
        groupPadding?: number | undefined;

        /**
         * Undocumented option.
         *
         * @default "magenta"
         */
        groupColor?: string | undefined;

        /**
         * Printing engine. Accepted any device which has log() function defined to do output.
         *
         * @default console
         */
        logger?: { log: (message: string) => void } | undefined;

        /**
         * Undocumented option.
         *
         * @default fs.existsSync('gulpfile.ts')
         */
        isTypescript?: boolean | undefined;

        /**
         * Path to a gulpfile.
         * Normally, there is no need to change this option. It may be used
         * for some special cases, like mocking gulpfile for testing.
         */
        gulpfile?: string | undefined;

        /**
         * if set to true, prints the task dependencies below its help description.
         *
         * @default true
         */
        displayDependencies?: boolean | undefined;

        /**
         * if set to true, prints an empty line between tasks help descriptions.
         *
         * @default true
         */
        emptyLineBetweenTasks?: boolean | undefined;

        /**
         * if group tag is not specified it will use specified group name.
         *
         * @default "Common tasks"
         */
        defaultGroupName?: string | undefined;
    }

    interface Usage {
        (gulp: gulp.Gulp, options?: UsageOptions): Promise<any>;
    }
}

declare const usage: usage.Usage;

export = usage;
