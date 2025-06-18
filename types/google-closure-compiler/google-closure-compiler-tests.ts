import * as GoogleClosureCompiler from "google-closure-compiler";
import grunt from "grunt";

// See
//   https://github.com/chadkillingsworth/closure-compiler-npm#plugin-authors-and-native-node-usage
// for the API example.  This code tries to do the exact same thing.

let ClosureCompiler = GoogleClosureCompiler.compiler;

console.log(ClosureCompiler.COMPILER_PATH);
console.log(ClosureCompiler.CONTRIB_PATH);

let options: GoogleClosureCompiler.CompileOptions = {
    js: "file-one.js",
    compilation_level: "ADVANCED",
};
let closureCompiler = new ClosureCompiler(options);
let compilerProcess = closureCompiler.run((exitCode, stdout, stderr) => {
    // ...
});

let jsonStream: GoogleClosureCompiler.JSONStreamFile[] = [
    {
        path: "foo.js",
        src: "var x = \"hello, world\";",
    },
];

// Test the various options formats -- see
//   https://github.com/ChadKillingsworth/closure-compiler-npm#specifying-options
let optionsFormats: GoogleClosureCompiler.CompileOptions = {
    js: ["/file-one.js", "/file-two.js"],
    compilation_level: "ADVANCED",
    js_output_file: "out.js",
    debug: true,
};

// Gulp plugin examples from
//   https://github.com/google/closure-compiler-npm/blob/master/packages/google-closure-compiler/docs/gulp.md

const gulpCompiler = GoogleClosureCompiler.gulp({
    extraArguments: ["-Xms2048m"],
});

// $ExpectType CompilationStream
gulpCompiler({
    compilation_level: "SIMPLE",
    warning_level: "VERBOSE",
    language_in: "ECMASCRIPT6_STRICT",
    language_out: "ECMASCRIPT5_STRICT",
    output_wrapper: "(function(){\n%output%\n}).call(this)",
    js_output_file: "output.min.js",
}, {
    platform: ["native", "java", "javascript"],
});

gulpCompiler({
    js: "./src/js/**.js",
    externs: GoogleClosureCompiler.compiler.CONTRIB_PATH + "/externs/jquery-1.9.js",
    compilation_level: "SIMPLE",
    warning_level: "VERBOSE",
    language_in: "ECMASCRIPT6_STRICT",
    language_out: "ECMASCRIPT5_STRICT",
    output_wrapper: "(function(){\n%output%\n}).call(this)",
    js_output_file: "output.min.js",
})
    .src() // needed to force the plugin to run without gulp.src
    .pipe(null!);

// Grunt plugin examples from
//   https://github.com/google/closure-compiler-npm/blob/master/packages/google-closure-compiler/docs/grunt.md

// with options...
GoogleClosureCompiler.grunt(grunt, {
    platform: ["native", "java", "javascript"],
    extraArguments: ["-Xms2048m"],
    max_parallel_compilations: require("os").cpus().length,
});
// or without options
GoogleClosureCompiler.grunt(grunt);

// but make sure to pass the grunt instance
// @ts-expect-error
GoogleClosureCompiler.grunt(console);

grunt.initConfig({
    "closure-compiler": {
        my_target: {
            files: {
                "dest/output.min.js": ["src/js/**/*.js"],
            },
            options: {
                compilation_level: "SIMPLE",
                language_in: "ECMASCRIPT5_STRICT",
                create_source_map: "dest/output.min.js.map",
                output_wrapper: "(function(){\n%output%\n}).call(this)\n//# sourceMappingURL=output.min.js.map",
            },
        },
    },
});

grunt.initConfig({
    "closure-compiler": {
        my_target: {
            files: {
                "dest/output.min.js": ["src/js/**/*.js"],
            },
            options: {
                js: "/node_modules/google-closure-library/**.js",
                externs: GoogleClosureCompiler.compiler.CONTRIB_PATH + "/externs/jquery-1.9.js",
                compilation_level: "SIMPLE",
                manage_closure_dependencies: true,
                language_in: "ECMASCRIPT5_STRICT",
                create_source_map: "dest/output.min.js.map",
                output_wrapper: "(function(){\n%output%\n}).call(this)\n//# sourceMappingURL=output.min.js.map",
            },
        },
    },
});
