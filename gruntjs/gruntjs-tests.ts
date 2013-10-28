/// <reference path="gruntjs.d.ts" />

// Official code sample from 
// http://gruntjs.com/getting-started#an-example-gruntfile

// exports should work same as module.exports 
exports = (grunt: IGrunt) => {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);


    // util methods
    var testOneArg = (a: number) => a * 2;
    var asyncedOneArg = grunt.util.callbackify(testOneArg);
    asyncedOneArg(1, (result: number) => {
        console.log(result);
    });
    var testTwoArgs = (a: number, b: string) => "it works with " + a + " " + b;
    var asyncedTwoArgs = grunt.util.callbackify(testTwoArgs);
    asyncedTwoArgs(2, "values", (result: string) => {
        console.log(result);
    });
};