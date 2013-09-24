// Type definitions for Grunt JS
// Project: http://gruntjs.com/
// Definitions by: Basarat Ali Syed <https://github.com/basarat>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


////////////////
/// To add plugins update the IGruntConfig using open ended interface syntax
////////////////
interface IGruntConfig {
    pkg?: any;
}

////////////////
/// Sample grunt plugin definition: 
/// uglify : https://github.com/gruntjs/grunt-contrib-uglify
////////////////
interface IGruntUglifyConfig {
    mangle?: boolean;
    compress?: boolean;
    beautify?: boolean;
    report?: any; // false / 'min' / 'gzip'
    sourceMap?: any; // String / Function 
    sourceMapRoot?: string;
    sourceMapIn?: string;
    sourceMappingURL?: any; // String / Function
    sourceMapPrefix?: number;
    wrap?: string;
    exportAll?: boolean;
    preserveComments?: any; // boolean / string / function 
    banner?: string;
}
interface IGruntConfig {
    uglify?: {
        options?: IGruntUglifyConfig;
        build?: {
            src: string;
            dest: string;
        };

    };
}




////////////////
// Main Grunt object 
// http://gruntjs.com/api/grunt
////////////////
interface IGrunt {
    // Config
    config: IGruntConfigObject;
    initConfig(config?: IGruntConfig): void;


    // Tasks
    task: any;
    // Creating
    registerTask: Function;
    registerMultiTask: Function;
    renameTask: Function;
    // Loading
    loadTasks: Function;
    loadNpmTasks: Function;

    // Errors
    warn: Function;
    fatal: Function;

    // Misc: 
    package: any;
    version: any;

    // File
    file: IGruntFileObject;

    // Event
    event: any;
    // Fail
    fail: any;
    // Log
    log: any;
    // Options
    option: any;
    // Template
    template: any;
    // Util
    util: any;
}

////////////////
/// Grunt Config object
/// http://gruntjs.com/api/grunt.config#accessing-config-data
////////////////
interface IGruntConfigObject {
    (...param: any[]): any;
    init: (config?: IGruntConfig) => void;
    get: Function;
    process: Function;
    getRaw: Function;
    set: Function;
    escape: (propString: string) => void;
    requires: Function;
}

////////////////
// Grunt File object
// http://gruntjs.com/api/grunt.file
////////////////
interface IGruntFileObjectOptionsSimple {
    encoding?: string;
}
interface IGruntFileObjectOptions extends IGruntFileObjectOptionsSimple {
    process?: Function;
    noProcess?: any;
}
interface IGruntFileObject {

    // Character encoding
    defaultEncoding: string;

    // Reading and writing
    read(filepath: string, options?: IGruntFileObjectOptionsSimple): string;
    readJSON(filepath: string, options?: IGruntFileObjectOptionsSimple): any;
    readYAML(filepath: string, options?: IGruntFileObjectOptionsSimple): any;
    write(filepath: string, contents: any, options?: IGruntFileObjectOptionsSimple): void;
    copy(srcpath: string, destpath: string, options?: IGruntFileObjectOptions): void;
    delete(filepath: string, options?: { force?: boolean; }): void;

    // Directories
    mkdir(dirpath: string, mode?: number): void;
    recurse(rootdir: string, callback: (abspath: string, rootdir: string, subdir: string, filename: string) => void): void;

    // Globbing patterns
    expand(...patterns: string[]): string[];
    expand(options: Object, ...patterns: string[]): string[];
    expandMapping(patterns: string[], dest: string, options?: Object): any[];

    match(patterns: string[], filepaths: string[]): string[];
    match(patterns: string[], filepaths: string): string[];
    match(patterns: string, filepaths: string[]): string[];
    match(patterns: string, filepaths: string): string[];
    match(options: Object, patterns: string[], filepaths: string[]): string[];
    match(options: Object, patterns: string[], filepaths: string): string[];
    match(options: Object, patterns: string, filepaths: string[]): string[];
    match(options: Object, patterns: string, filepaths: string): string[];

    isMatch(patterns: string[], filepaths: string[]): boolean;
    isMatch(patterns: string[], filepaths: string): boolean;
    isMatch(patterns: string, filepaths: string[]): boolean;
    isMatch(patterns: string, filepaths: string): boolean;
    isMatch(options: Object, patterns: string[], filepaths: string[]): boolean;
    isMatch(options: Object, patterns: string[], filepaths: string): boolean;
    isMatch(options: Object, patterns: string, filepaths: string[]): boolean;
    isMatch(options: Object, patterns: string, filepaths: string): boolean;

    // file types
    exists(...paths: string[]): boolean;
    isLink(...paths: string[]): boolean;
    isDir(...paths: string[]): boolean;
    isFile(...paths: string[]): boolean;

    // paths
    isPathAbsolute(...paths: string[]): boolean;
    arePathsEquivalent(...paths: string[]): boolean;
    doesPathContain(ancestorPath: string, ...descendantPaths: string[]): boolean;
    isPathCwd(...paths: string[]): boolean;
    isPathInCwd(...paths: string[]): boolean;
    setBase(...paths: string[]): void;

    // External libraries
    glob: any;
    minimatch: any;
    findup: any;
}

////////////////
// 'this' when executing within a task
// http://gruntjs.com/api/inside-tasks
////////////////
interface IGruntTaskThis {
    async(): (err:any) => void;
    requires(...taskNames: string[]): void;
    requiresConfig(...props: string[]): void;
    name: string;
    nameArgs: string;
    args: string[];
    flags: any;
    errorCount: number;
    options(defaults?: Object): any;
}

////////////////
// 'this' when executing within a multitask
// http://gruntjs.com/api/inside-tasks
////////////////
interface IGruntMultiTaskThis extends IGruntTaskThis {
  target: string;
  files: IGruntFileArray[];
  filesSrc: string[];
  data: any;
}

////////////////
// Files array format
// http://gruntjs.com/configuring-tasks#files-array-format
////////////////
interface IGruntFileArray {
  src: string[];
  dest: string;
  nonull?: boolean;
  filter?: any;
}

////////////////
/// Globally called export function module.exports
////////////////

declare var exports: (grunt: IGrunt) => void;
