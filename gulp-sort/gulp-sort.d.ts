// Type definitions for gulp-sort
// Project: https://github.com/pgilad/gulp-sort
// Definitions by: Joe Skeen <http://github.com/joeskeen>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
/// <reference path="../gulp-util/gulp-util.d.ts" />

/** Sort files in stream by path or any custom sort comparator */
declare module 'gulp-sort' {
	
	import gulpUtil = require('gulp-util');
	
	interface IOptions {
		/** 
		 * A function to compare two files.
		 * Returns:
		 * -1 if file1 should be before file2,
		 * 0 if file1 is equivalent to file2, and
		 * 1 if file1 should be after file2
		 */
		comparator?: IComparatorFunction;
		/** Whether to sort in ascending order, default is true */
		asc?: boolean;
	}
	
	interface IComparatorFunction {
		/** 
		 * A function to compare two files.
		 * Returns:
		 * -1 if file1 should be before file2,
		 * 0 if file1 is equivalent to file2, and
		 * 1 if file1 should be after file2
		 */
		(file1: gulpUtil.File, file2: gulpUtil.File): number;
	}
	
	/** Sort files in stream by path or any custom sort comparator */
	function gulpSort(): NodeJS.ReadWriteStream;
	function gulpSort(comparator: IComparatorFunction): NodeJS.ReadWriteStream;
	function gulpSort(options: IOptions): NodeJS.ReadWriteStream;
	
	export = gulpSort;
}
