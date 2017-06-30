// Type definitions for gulp-task-listing
// Project: https://github.com/OverZealous/gulp-task-listing
// Definitions by: Joe Skeen <http://github.com/joeskeen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/** 
 * Provides an easy way to get a listing of your tasks from your gulpfile. By default, the 
 * output groups tasks based on whether or not they contain a hyphen (-), underscore (_), 
 * or colon (:) in their name.
 * 
 * You can optionally override the Regexp used to determine whether a task is a primary or 
 * subtask, as well as filter out tasks you don't want to see in the output.
 */


/** 
 * Provides an easy way to get a listing of your tasks from your gulpfile. By default, the 
 * output groups tasks based on whether or not they contain a hyphen (-), underscore (_), 
 * or colon (:) in their name.
 * 
 * You can optionally override the Regexp used to determine whether a task is a primary or 
 * subtask, as well as filter out tasks you don't want to see in the output.
 */
interface GulpTaskListing {
    (cb: Function): void;
    /**
     * Allows for custom filtering of Gulp tasks in the listing
     * 
     * @param subTaskFilter a RegExp or Function returning whether the given task is a subtask
     * @param excludeFilter a RegExp or Function returning whether the given task should be excluded from the listing
     */
    withFilters(subTaskFilter: RegExp | FilterFunction, excludeFilter?: RegExp | FilterFunction): (cb: Function) => void;
}

type FilterFunction = (task: string) => boolean;

declare var gulpTaskListing: GulpTaskListing;

export = gulpTaskListing;
