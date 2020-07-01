

// Official code sample from
// http://gruntjs.com/getting-started#an-example-gruntfile

interface MyTaskData {
    repeat: number;
}

interface MyOptions {
    sourceRoot: string;
    repeat: number;
}

// exports should work same as module.exports
// assigning exports is an error in node, hence the cast
(global as any).exports = (grunt: IGrunt) => {

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
        var currenttask = this;
        var options = currenttask.options({
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

    // tests for module grunt.file
    var expandedFilesConfig: grunt.file.IExpandedFilesConfig = {
        expand: true,
        cwd: 'src',
        src: ['**/*.ts'],
        dest: 'build',
        ext: '.js',
        flatten: false
    };
    var fileMaps = grunt.file.expandMapping([''], '', expandedFilesConfig);
    fileMaps.length;
    fileMaps[0].src.length;
    fileMaps[0].dest;
};

// Official grunt task template from
// https://github.com/gruntjs/grunt-init-gruntplugin/blob/master/root/tasks/name.js
exports.exports = function(grunt: IGrunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('taskName', 'task description', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            punctuation: '.',
            separator: ', '
        });

        // Iterate over all specified file groups.
        this.files.forEach(function(f: grunt.file.IFilesConfig) {
            // Concat specified files.
            var src = f.src.filter(function(filepath: string) {
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            }).map(function(filepath) {
                // Read file source.
                return grunt.file.read(filepath);
            }).join(grunt.util.normalizelf(options.separator));

            // Handle options.
            src += options.punctuation;

            // Write the destination file.
            grunt.file.write(f.dest, src);

            // Print a success message.
            grunt.log.writeln('File "' + f.dest + '" created.');
        });
    });

};


let myTest = function (grunt: IGrunt) {
    grunt.file.expand(['*.ts']);
    grunt.file.expand('*.ts');

    // 'cwd' in options, and string pattern
    grunt.file.expand({
        cwd: '.'
    }, '*.ts');
}
// test to check process function assignment.
let mytest = function(grunt: IGrunt) {
    const opt:grunt.file.IFileWriteStringOption = {
        encoding: grunt.file.defaultEncoding,
        process: (contents: string, srcPath: string, destPath: string): string | boolean => {
            grunt.log.writeln('"file source path"' + srcPath);
            grunt.log.writeln('"file destination path"' + destPath);
            // return false so no actual copying takes place
            return false;
        }
    }
    grunt.file.copy('./test.file',"./testcopy.file", opt);
}
