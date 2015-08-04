/// <reference path="../node/node" />
/// <reference path="../gulp/gulp" />
/// <reference path="../gulp-concat/gulp-concat" />
/// <reference path="gulp-load-plugins" />

import gulp = require('gulp');
import gulpConcat = require('gulp-concat');
import gulpLoadPlugins = require('gulp-load-plugins');

interface GulpPlugins extends IGulpPlugins {
	concat: typeof gulpConcat;
}

var plugins = <GulpPlugins>gulpLoadPlugins({
    pattern: ['gulp-*', 'gulp.*'],
    config: 'package.json',
    scope: ['dependencies', 'devDependencies', 'peerDependencies'],
    replaceString: /^gulp(-|\.)/,
    camelize: true,
    lazy: true,
    rename: {}
});
plugins = <GulpPlugins>gulpLoadPlugins();

gulp.task('taskName', () => {
	gulp.src('*.*')
		.pipe(plugins.concat('concatenated.js'))
		.pipe(gulp.dest('output'));
});

/*
 * From 0.8.0, you can pass in an object of mappings for renaming plugins. For example, 
 * imagine you want to load the  gulp-ruby-sass  plugin, but want to refer to it as just 
 *  sass :
 */
plugins = <GulpPlugins>gulpLoadPlugins({
	rename: {
		'gulp-ruby-sass': 'sass'
	}
});
/*
 * gulp-load-plugins  comes with npm scope support. The major difference is that scoped 
 * plugins are accessible through an object on  plugins  that represents the scope. For 
 * example, if the plugin is  @myco/gulp-test-plugin  then you can access the plugin as 
 * shown in the following example:
 */
interface GulpPlugins {
	myco: {
		testPlugin(): NodeJS.ReadWriteStream;
	}
}
 
plugins.myco.testPlugin();
