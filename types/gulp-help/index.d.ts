/// <reference types="node" />
/// <reference types="gulp" />
/// <reference types="orchestrator" />

import Orchestrator = require("orchestrator");
import gulp = require("gulp");
type HelpOption = string | boolean;

declare namespace gulpHelp {
    interface TaskMethod {
        /**
         * Define a task.
         *
         * @param name the name of the task. Tasks that you want to run from the command line should not have spaces in them.
         * @param help Custom help message as a string. If you want to hide the task from the help menu, supply false
         * @param deps an array of tasks to be executed and completed before your task will run.
         * @param fn the function that performs the task's operations. Generally this takes the form of gulp.src().pipe(someplugin()).
         * @param option task options
         */
        (name: string, help: HelpOption, deps: string[], fn?: gulp.TaskCallback, option?: TaskOptions): any;
        /**
         * Define a task.
         *
         * @param name the name of the task. Tasks that you want to run from the command line should not have spaces in them.
         * @param help Custom help message as a string. If you want to hide the task from the help menu, supply false
         * @param deps an array of tasks to be executed and completed before your task will run.
         */
        (name: string, help: HelpOption, deps: string[]): any;
        /**
         * Define a task.
         *
         * @param name the name of the task. Tasks that you want to run from the command line should not have spaces in them.
         * @param help Custom help message as a string. If you want to hide the task from the help menu, supply false
         * @param fn the function that performs the task's operations. Generally this takes the form of gulp.src().pipe(someplugin()).
         * @param option task options
         */
        (name: string, help: HelpOption, fn?: gulp.TaskCallback, option?: TaskOptions): any;
        /**
         * Define a task.
         *
         * @param name the name of the task. Tasks that you want to run from the command line should not have spaces in them.
         * @param help Custom help message as a string. If you want to hide the task from the help menu, supply false
         */
        (name: string, help: HelpOption): any;
        /**
         * Define a task.
         *
         * @param name the name of the task. Tasks that you want to run from the command line should not have spaces in them.
         * @param deps an array of tasks to be executed and completed before your task will run.
         * @param fn the function that performs the task's operations. Generally this takes the form of gulp.src().pipe(someplugin()).
         * @param option task options
         */
        (name: string, deps: string[], fn?: gulp.TaskCallback, option?: TaskOptions): any;
        /**
         * Define a task.
         *
         * @param name the name of the task. Tasks that you want to run from the command line should not have spaces in them.
         * @param fn the function that performs the task's operations. Generally this takes the form of gulp.src().pipe(someplugin()).
         * @param option task options
         */
        (name: string, fn?: gulp.TaskCallback, option?: TaskOptions): any;
    }

    interface GulpHelp extends Orchestrator {
        task: TaskMethod;
        src: gulp.SrcMethod;
        dest: gulp.DestMethod;
        watch: gulp.WatchMethod;
    }

    interface TaskOptions {
        /**
         * List of aliases for this task
         */
        aliases?: string[] | undefined;
        /**
         * Object documenting options which can be passed to your task
         */
        options?: { [key: string]: string } | undefined;
    }

    interface GulpHelpOptions {
        /**
         * Modifies the default help message
         */
        description?: string | undefined;
        /**
         * Adds aliases to the default help task
         */
        aliases?: string[] | undefined;
        /**
         * Hide all tasks with no help message defined. Useful when including 3rd party tasks
         */
        hideEmpty?: boolean | undefined;
        /**
         * Hide all task dependencies
         */
        hideDepsMessage?: boolean | undefined;
        /**
         * A function to run after the default help task runs
         */
        afterPrintCallback?: Function | undefined;
        /**
         * Object documenting options which can be passed to your task
         */
        options?: { [key: string]: string } | undefined;
    }
}

declare function gulpHelp(gulp: gulp.Gulp, options?: gulpHelp.GulpHelpOptions): gulpHelp.GulpHelp;

export = gulpHelp;
