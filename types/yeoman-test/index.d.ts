// Type definitions for yeoman-test 4.0
// Project: https://github.com/yeoman/yeoman-test, http://yeoman.io/authoring/testing.html
// Definitions by: Ika <https://github.com/ikatyang>
//                 Manuel Thalmann <https://github.com/manuth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

import { EventEmitter } from 'events';
import Generator = require('yeoman-generator');
import Environment = require('yeoman-environment');
import { Store } from 'mem-fs';
import { Editor } from 'mem-fs-editor';

/**
 * Represents a dictionary.
 */
export interface Dictionary<T> {
    [key: string]: T;
}

/**
 * Represents a constructor.
 */
export interface Constructor<T> {
    new (...args: any[]): T;
}

/**
 * Represents an environment for running yeoman-generators.
 */
export interface Env extends Environment {
    queues: string[];
}

/**
 * Dependencies can be path (autodiscovery) or an array [<generator>, <name>]
 */
export type Dependency = string | [Generator, string];

/**
 * Create a function that will clean up the test directory,
 * cd into it, and create a dummy gruntfile inside. Intended for use
 * as a callback for the mocha `before` hook.
 *
 * @param dir - path to the test directory
 * @returns mocha callback
 */
export function setUpTestDirectory(dir: string): (done: (...args: any[]) => void) => void;

/**
 *
 * Generates a new Gruntfile.js in the current working directory based on
 * options hash passed in.
 *
 * @param options - Grunt configuration
 * @param done  - callback to call on completion
 */
export function gruntfile(options: Dictionary<any>, done?: (...args: any[]) => void): void;

/**
 * Clean-up the test directory and cd into it.
 * Call given callback after entering the test directory.
 * @param dir - path to the test directory
 * @param cb - callback executed after setting working directory to dir
 * @example
 * testDirectory(path.join(__dirname, './temp'), function () {
 *   fs.writeFileSync('testfile', 'Roses are red.');
 * });
 */
export function testDirectory(dir: string, cb?: (error?: any) => void): void;

/**
 * Answer prompt questions for the passed-in generator
 * @param generator - a Yeoman generator
 * @param answers - an object where keys are the
 *   generators prompt names and values are the answers to
 *   the prompt questions
 * @example
 * mockPrompt(angular, {'bootstrap': 'Y', 'compassBoostrap': 'Y'});
 */
export function mockPrompt(generator: Generator, answers: Generator.Answers): void;

/**
 * Restore defaults prompts on a generator.
 */
export function restorePrompt(generator: Generator): void;

/**
 * Provide mocked values to the config
 * @param  generator - a Yeoman generator
 * @param  localConfig - localConfig - should look just like if called config.getAll()
 */
export function mockLocalConfig(generator: Generator, localConfig: Dictionary<any>): void;

/**
 * Create a simple, dummy generator
 */
export function createDummyGenerator(): Generator;

/**
 * Create a generator, using the given dependencies and controller arguments
 * Dependencies can be path (autodiscovery) or an array [<generator>, <name>]
 *
 * @param name - the name of the generator
 * @param dependencies - paths to the generators dependencies
 * @param args - arguments to the generator;
 *   if String, will be split on spaces to create an Array
 * @param options - configuration for the generator
 * @example
 *  var deps = ['../../app',
 *              '../../common',
 *              '../../controller',
 *              '../../main',
 *              [createDummyGenerator(), 'testacular:app']
 *            ];
 * var angular = createGenerator('angular:app', deps);
 */
export function createGenerator(name: string, dependencies: Dependency[], args?: string | string[], options?: Dictionary<any>): Generator;

/**
 * Register a list of dependent generators into the provided env.
 * Dependencies can be path (autodiscovery) or an array [<generator>, <name>]
 *
 * @param dependencies - paths to the generators dependencies
 */
export function registerDependencies(env: Env, dependencies: Dependency[]): void;

/**
 * Run the provided Generator
 * @param  GeneratorOrNamespace - Generator constructor or namespace
 */
export function run(GeneratorOrNamespace: string | Constructor<Generator>, settings?: RunContextSettings): RunContext;

/**
 * Create a RunContext
 * @param  GeneratorOrNamespace - Generator constructor or namespace
 * @param  settings - Generator settings
 * @param  envOptions - Environment options
 */
export function create(GeneratorOrNamespace: string | Constructor<Generator>, settings?: RunContextSettings, envOptions?: Environment.Options): RunContext;

/**
 * Provides settings for creating a `RunContext`.
 */
export interface RunContextSettings {
    /**
     * Automatically run this generator in a tmp dir
     * @default true
     */
    tmpdir?: boolean;

    /**
     * File path to the generator (only used if Generator is a constructor)
     */
    resolved?: string;

    /**
     * Namespace (only used if Generator is a constructor)
     * @default 'gen:test'
     */
    namespace?: string;
}

/**
 * Provides the functionality to initialize new `RunContext`s.
 */
export interface RunContextConstructor {
    /**
     * This class provide a run context object to façade the complexity involved in setting
     * up a generator for testing
     * @param Generator - Namespace or generator constructor. If the later
     *                                      is provided, then namespace is assumed to be
     *                                      'gen:test' in all cases
     */
    new (Generator: string | Constructor<Generator>, settings?: RunContextSettings): RunContext;
}

/**
 * Provides options for `RunResult`s.
 */
export interface RunResultOptions {
    /**
     * The environment of the generator.
     */
    env: Environment;

    /**
     * The working directory after running the generator.
     */
    cwd: string;

    /**
     * The working directory before on running the generator.
     */
    oldCwd: string;

    /**
     * The file-system of the generator.
     */
    memFs: Store;

    /**
     * The file-system editor of the generator.
     */
    fs: Editor;

    /**
     * The mocked generators of the context.
     */
    mockedGenerators: Dictionary<Generator>;
}

export interface RunResult extends RunResultOptions {
    /**
     * The options of this result.
     */
    options: RunResultOptions;

    /**
     * Either dumps the contents of the specified files or the name and the contents of each file to the console.
     */
    dumpFiles(...files: string[]): void;

    /**
     * Dumps the name of each file to the console.
     */
    dumpFilenames(): void;

    /**
     * Assert that a file exists
     * @param path     - path to a file
     * @example
     * result.assertFile('templates/user.hbs');
     *
     * @also
     *
     * Assert that each files in the array exists
     * @param paths    - an array of paths to files
     * @example
     * result.assertFile(['templates/user.hbs', 'templates/user/edit.hbs']);
     */
    assertFile(path: string | string[]): void;

    /**
     * Assert that a file doesn't exist
     * @param file     - path to a file
     * @example
     * result.assertNoFile('templates/user.hbs');
     *
     * @also
     *
     * Assert that each of an array of files doesn't exist
     * @param pairs    - an array of paths to files
     * @example
     * result.assertNoFile(['templates/user.hbs', 'templates/user/edit.hbs']);
     */
    assertNoFile(file: string | string[]): void;

    /**
     * Assert that a file's content matches a regex or string
     * @param file     - path to a file
     * @param reg      - regex / string that will be used to search the file
     * @example
     * result.assertFileContent('models/user.js', /App\.User = DS\.Model\.extend/);
     * result.assertFileContent('models/user.js', 'App.User = DS.Model.extend');
     *
     * @also
     *
     * Assert that each file in an array of file-regex pairs matches its corresponding regex
     * @param pairs    - an array of arrays, where each subarray is a [String, RegExp] pair
     * @example
     * var arg = [
     *   [ 'models/user.js', /App\.User = DS\.Model\.extend/ ],
     *   [ 'controllers/user.js', /App\.UserController = Ember\.ObjectController\.extend/ ]
     * ]
     * result.assertFileContent(arg);
     */
    assertFileContent(file: string, reg: string | RegExp): void;
    assertFileContent(pairs: Array<[string, string | RegExp]>): void;

    /**
     * Assert that a file's content is the same as the given string
     * @param file            - path to a file
     * @param expectedContent - the expected content of the file
     * @example
     * result.assertEqualsFileContent(
     *   'data.js',
     *   'const greeting = "Hello";\nexport default { greeting }'
     * );
     *
     * @also
     *
     * Assert that each file in an array of file-string pairs equals its corresponding string
     * @param pairs           - an array of arrays, where each subarray is a [String, String] pair
     * @example
     * result.assertEqualsFileContent([
     *   ['data.js', 'const greeting = "Hello";\nexport default { greeting }'],
     *   ['user.js', 'export default {\n  name: 'Coleman',\n  age: 0\n}']
     * ]);
     */
    assertEqualsFileContent(file: string, expectedContent: string): void;
    assertEqualsFileContent(pairs: Array<[string, string]>): void;

    /**
     * Assert that a file's content does not match a regex / string
     * @param file     - path to a file
     * @param reg      - regex / string that will be used to search the file
     * @example
     * result.assertNoFileContent('models/user.js', /App\.User = DS\.Model\.extend/);
     * result.assertNoFileContent('models/user.js', 'App.User = DS.Model.extend');
     *
     * @also
     *
     * Assert that each file in an array of file-regex pairs does not match its corresponding regex
     * @param pairs    - an array of arrays, where each subarray is a [String, RegExp] pair
     * var arg = [
     *   [ 'models/user.js', /App\.User \ DS\.Model\.extend/ ],
     *   [ 'controllers/user.js', /App\.UserController = Ember\.ObjectController\.extend/ ]
     * ]
     * result.assertNoFileContent(arg);
     */
    assertNoFileContent(file: string, reg: RegExp | string): void;
    assertNoFileContent(pairs: Array<[string, string | RegExp]>): void;

    /**
     * Assert that two strings are equal after standardization of newlines
     * @param value    - a string
     * @param expected - the expected value of the string
     * @example
     * result.assertTextEqual('I have a yellow cat', 'I have a yellow cat');
     */
    assertTextEqual(value: string, expected: string): void;

    /**
     * Assert an object contains the provided keys
     * @param obj      Object that should match the given pattern
     * @param content  An object of key/values the object should contains
     */
    assertObjectContent(obj: object, content: { [key: string]: any }): void;

    /**
     * Assert an object does not contain the provided keys
     * @param obj Object that should not match the given pattern
     * @param content An object of key/values the object should not contain
     */
    assertNoObjectContent(obj: object, content: { [key: string]: any }): void;

    /**
     * Assert a JSON file contains the provided keys
     * @param filename
     * @param content An object of key/values the file should contains
     */
    assertJsonFileContent(filename: string, content: { [key: string]: any }): void;

    /**
     * Assert a JSON file does not contain the provided keys
     * @param filename
     * @param content An object of key/values the file should not contain
     */
    assertNoJsonFileContent(filename: string, content: { [key: string]: any }): void;

    /**
     * Reverts to old cwd.
     * @returns this
     */
    restore(): this;
}

/**
 * Represents the context of a running generator.
 */
export interface RunContext extends RunContextConstructor, EventEmitter, Promise<RunResult> {
    /**
     * A value indicating whether the generator ran through.
     */
    ran: boolean;

    /**
     * A value indicating whether a current directory has been set.
     */
    inDirSet: boolean;

    /**
     * The arguments that are passed to the generator.
     */
    args: string[];

    /**
     * The options that are passed to the generator.
     */
    options: {};

    /**
     * The mocked `inquirer`-answers.
     */
    answers: Generator.Answers;

    /**
     * The mocked configuration.
     */
    localConfig: {};

    /**
     * A set of generators this generator depends on.
     */
    dependencies: Dependency[];

    /**
     * A set of mocked generators.
     */
    mockedGenerators: Dictionary<Generator>;

    /**
     * Hold the execution until the returned callback is triggered
     * @return Callback to notify the normal execution can resume
     */
    async(): () => void;

    /**
     * Return a promise representing the generator run process
     * @return Promise resolved on end or rejected on error
     */
    toPromise(): Promise<RunResult>;

    /**
     * Clean the provided directory, then change directory into it
     * @param  dirPath - Directory path (relative to CWD). Prefer passing an absolute
     *                            file path for predictable results
     * @param [cb] - callback who'll receive the folder path as argument
     * @return run context instance
     */
    inDir(dirPath: string, cb?: (folderPath: string) => void): this;

    /**
     * Change directory without deleting directory content.
     * @param  dirPath - Directory path (relative to CWD). Prefer passing an absolute
     *                            file path for predictable results
     * @return run context instance
     */
    cd(dirPath: string): this;

    /**
     * Register an callback to prepare the destination folder.
     * @param [cb]  - callback who'll receive the folder path as argument
     * @return this - run context instance
     */
    doInDir(cb: (folderPath: string) => void): this;

    /**
     * Cleanup a temporary directory and change the CWD into it
     *
     * This method is called automatically when creating a RunContext. Only use it if you need
     * to use the callback.
     *
     * @param [cb]  - callback who'll receive the folder path as argument
     * @return this - run context instance
     */
    inTmpDir(cb: (folderPath: string) => void): this;

    /**
     * Clean the directory used for tests inside inDir/inTmpDir
     */
    cleanTestDirectory(): void;

    /**
     * Provide arguments to the run context
     * @param  args - command line arguments as Array or space separated string
     */
    withArguments(args: string | string[]): this;

    /**
     * Provide options to the run context
     * @param  options - command line options (e.g. `--opt-one=foo`)
     */
    withOptions(options: Dictionary<any>): this;

    /**
     * Mock the prompt with dummy answers
     * @param  answers - Answers to the prompt questions
     */
    withPrompts(answers: Generator.Answers): this;

    /**
     * Provide dependent generators
     * @param dependencies - paths to the generators dependencies
     * @example
     * var angular = new RunContext('../../app');
     * angular.withGenerators([
     *   '../../common',
     *   '../../controller',
     *   '../../main',
     *   [helpers.createDummyGenerator(), 'testacular:app']
     * ]);
     * angular.on('end', function () {
     *   // assert something
     * });
     */
    withGenerators(dependencies: Dependency[]): this;

    /**
     * Mock the local configuration with the provided config
     * @param  localConfig - should look just like if called config.getAll()
     */
    withLocalConfig(localConfig: Dictionary<any>): this;

    /**
     * Creates mocked generators.
     * @param namespaces - The namespaces of the mocked generators.
     */
    withMockedGenerators(namespaces: string[]): this;

    /**
     * Run the generator on the environment and returns the promise.
     * @return Promise
     */
    run(): Promise<RunResult>;
}

export {};
