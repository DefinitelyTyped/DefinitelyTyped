/// <reference types="node" />

import gulp = require("gulp");
import undertaker = require("undertaker");

declare namespace r {
    type Task = string | string[] | null | undefined;

    interface RunSequence {
        /**
         * Runs a sequence of gulp tasks in the specified order.
         * This function is designed to solve the situation where
         * you have defined run-order, but choose not to or cannot use dependencies.
         *
         * Each argument to run-sequence is run in order.
         * This works by listening to the `task_stop` and `task_err` events,
         * and keeping track of which tasks have been completed.
         * You can still run some of the tasks in parallel,
         * by providing an array of task names for one or more of the arguments.
         *
         * If the final argument is a function, it will be used as a callback
         * after all the functions are either finished or an error has occurred.
         */
        (...tasks: [...r.Task[], undertaker.TaskCallback]): NodeJS.ReadWriteStream;
        (...tasks: r.Task[]): NodeJS.ReadWriteStream;

        /**
         * If you have a complex gulp setup with your tasks split up across different files,
         * you may get the error that run-sequence is unable to find your tasks.
         * In this case, you can configure run-sequence to look at the gulp within the submodule.
         */
        use(gulp: gulp.Gulp): RunSequence;

        /**
         * There are a few global options you can configure on the `runSequence` function.
         *
         * Please note these are **global to the module**,
         * and once set will affect every use of `runSequence`.
         */
        options: {
            /**
             * When set to `false`, this suppresses the full stack trace from errors captured
             * during a sequence.
             *
             * @default true
             */
            showErrorStackTrace: boolean;

            /**
             * When set to `true`, this enables you to pass falsey values
             * in which will be stripped from the task set before validation and sequencing.
             *
             * @default false
             */
            ignoreUndefinedTasks: boolean;
        };
    }
}

declare const r: r.RunSequence;
export = r;
