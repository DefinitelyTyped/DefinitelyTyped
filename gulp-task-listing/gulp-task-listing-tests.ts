import gulp = require('gulp');
import gulpTaskListing = require('gulp-task-listing');

gulp.task('help-default', gulpTaskListing);
gulp.task('help-subTaskRegexFilter', gulpTaskListing.withFilters(/\d+/));
gulp.task('help-subTaskFunctionFilter', gulpTaskListing.withFilters(task => task.length > 3));
gulp.task('help-excludeRegexFilter', gulpTaskListing.withFilters(null, /\w+/));
gulp.task('help-excludeFunctionFilter', gulpTaskListing.withFilters(null, task => task.length < 2));
gulp.task('help-bothFilters1', gulpTaskListing.withFilters(/\d+/, /\w+/));
gulp.task('help-bothFilters2', gulpTaskListing.withFilters(/\d+/, task => task.length > 3));
gulp.task('help-bothFilters3', gulpTaskListing.withFilters(task => task.length < 2, /\w+/));
gulp.task('help-bothFilters4', gulpTaskListing.withFilters(task => task.length < 2, task => task.length > 3));