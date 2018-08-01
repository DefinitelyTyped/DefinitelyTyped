import dts = require("dts-bundle");

var opts = {
    // Required

    // name of module likein package.json
    // - used to declare module & import/require
    name: 'cool-project',
    // path to entry-point (generated .d.ts file for main module)
    // - either relative or absolute
    main: 'build/index.d.ts',

    // Optional

    // base directory to be used for discovering type declarations (i.e. from this project itself)
    // - default: dirname of main
    baseDir: 'build',
    // path of output file
    // - default: "<baseDir>/<name>.d.ts"
    out: 'dist/cool-project.d.ts',
    // include typings outside of the 'baseDir' (i.e. like node.d.ts)
    // - default: false
    externals: false,
    // filter to exclude typings, either a RegExp or a callback. match path relative to opts.baseDir
    // - RegExp: a match excludes the file
    // - function: (file:String, external:Boolean) return true to exclude, false to allow
    // - always use forward-slashes (even on Windows)
    // - default: *pass*
    exclude: /^defs\/$/,
    // delete all source typings (i.e. "<baseDir>/**/*.d.ts")
    // - default: false
    removeSource: false,
    // newline to use in output file
    newline: "\n",
    // indentation to use in output file
    // - default 4 spaces
    indent: '   ',
    // prefix for rewriting module names
    // - default '__'
    prefix: '__',
    // separator for rewriting module 'path' names
    // - default: forward slash (like sub-modules)
    separator: '/',
    // enable verbose mode, prints detailed info about all references and includes/excludes
    // - default: false
    verbose: false
};

// run it
dts.bundle(opts);