/// <reference path="gruntjs.d.ts" />

// Official code sample from 
// http://gruntjs.com/getting-started#an-example-gruntfile

interface MyTaskData {
    repeat: number;
}

interface MyOptions {
    sourceRoot: string;
}

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

    grunt.registerMultiTask('mytask', "short description", function() {
        var currenttask: grunt.task.IMultiTask<MyTaskData> = this;
        var options = currenttask.options<MyOptions>({
            sourceRoot: "default"
        });
        var valid = false;
        valid = valid && options.sourceRoot === "default";
        valid = valid && currenttask.data.repeat > 0;

        var done = this.async();
        done();
    });

    grunt.registerMultiTask('task-1', "", function() {
        var done = this.async();
        done(new Error('nope'));
    });

    grunt.registerMultiTask('task-2', "", function() {
        var done = this.async();
        done(false);
    });

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
    var fileMaps = grunt.file.expandMapping([''], '', { ext: '.js' });
    fileMaps.length;
    fileMaps[0].src.length;
    fileMaps[0].dest;
};
