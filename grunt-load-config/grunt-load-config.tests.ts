// Type definitions for Grunt 0.4.x
// Project: http://firstandthird.github.io/load-grunt-config/
// Definitions by: Thomas Butler <https://github.com/butlersoftware/>
// Definitions: https://github.com/butlersoftware/DefinitelyTyped



// Official code sample from 
// http://firstandthird.github.io/load-grunt-config/#toc3


import loadConfig = require('grunt-load-config');
import path = require("path");


// exports should work same as module.exports 
exports = (grunt: IGrunt) => {
	loadConfig(grunt);
}




exports = (grunt: IGrunt) => {

	loadConfig(grunt, {
		configPath: path.join(process.cwd(), 'grunt'), //path to task.js files, defaults to grunt dir
		init: true, //auto grunt.initConfig
		data: { //data passed into config.  Can use with <%= test %>
			test: false
		},
		loadGruntTasks: { //can optionally pass options to load-grunt-tasks.  If you set to false, it will disable auto loading tasks.
			pattern: 'grunt-*',
			config: require('./package.json'),
			scope: 'devDependencies'
		},
		postProcess: function (config) { } //can post process config object before it gets passed to grunt
	});
}


exports = (grunt: IGrunt) => {
	loadConfig(grunt, {
		// ...
		jitGrunt: {
			//here you can pass options to jit-grunt (or just jitGrunt: true)
		}
	});

}
