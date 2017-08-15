// Type definitions for yeoman-test 1.7
// Project: https://github.com/yeoman/yeoman-test
// Definitions by: Ika <https://github.com/ikatyang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import { EventEmitter } from 'events';
import Generator = require('yeoman-generator');

export interface Dictionary<T> {
	[key: string]: T;
}
export interface Constructor<T> {
	new (...args: any[]): T;
}

/**
 * Dependecies can be path (autodiscovery) or an array [<generator>, <name>]
 */
export type Dependency = string | [Generator, string];

/**
 * Create a function that will clean up the test directory,
 * cd into it, and create a dummy gruntfile inside. Intended for use
 * as a callback for the mocha `before` hook.
 *
 * @param {String} dir - path to the test directory
 * @returns {Function} mocha callback
 */
export function setUpTestDirectory(dir: string): (done: (...args: any[]) => void) => void;

/**
 *
 * Generates a new Gruntfile.js in the current working directory based on
 * options hash passed in.
 *
 * @param {Object} options - Grunt configuration
 * @param {Function} done  - callback to call on completion
 */
export function gruntfile(options: Dictionary<any>, done: (...args: any[]) => void): void;

/**
 * Clean-up the test directory and cd into it.
 * Call given callback after entering the test directory.
 * @param {String} dir - path to the test directory
 * @param {Function} cb - callback executed after setting working directory to dir
 * @example
 * testDirectory(path.join(__dirname, './temp'), function () {
 *   fs.writeFileSync('testfile', 'Roses are red.');
 * });
 */
export function testDirectory(dir: string, cb: (error?: any) => void): void;

/**
 * Answer prompt questions for the passed-in generator
 * @param {Generator} generator - a Yeoman generator
 * @param {Object} answers - an object where keys are the
 *   generators prompt names and values are the answers to
 *   the prompt questions
 * @example
 * mockPrompt(angular, {'bootstrap': 'Y', 'compassBoostrap': 'Y'});
 */
export function mockPrompt(generator: Generator, answers: Dictionary<any>): void;

/**
 * Restore defaults prompts on a generator.
 * @param {Generator} generator
 */
export function restorePrompt(generator: Generator): void;

/**
 * Provide mocked values to the config
 * @param  {Generator} generator - a Yeoman generator
 * @param  {Object} localConfig - localConfig - should look just like if called config.getAll()
 */
export function mockLocalConfig(generator: Generator, localConfig: Dictionary<any>): void;

/**
 * Create a simple, dummy generator
 */
export function createDummyGenerator(): Generator;

/**
 * Create a generator, using the given dependencies and controller arguments
 * Dependecies can be path (autodiscovery) or an array [<generator>, <name>]
 *
 * @param {String} name - the name of the generator
 * @param {Array} dependencies - paths to the generators dependencies
 * @param {Array|String} args - arguments to the generator;
 *   if String, will be split on spaces to create an Array
 * @param {Object} options - configuration for the generator
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
 * Dependecies can be path (autodiscovery) or an array [<generator>, <name>]
 *
 * @param {Array} dependencies - paths to the generators dependencies
 */
export function registerDependencies(env: any, dependencies: Dependency[]): void;

/**
 * Run the provided Generator
 * @param  {String|Function} GeneratorOrNamespace - Generator constructor or namespace
 * @return {RunContext}
 */
export function run(GeneratorOrNamespace: string | Constructor<Generator>, settings?: RunContextSettings): RunContext;

export interface RunContextSettings {
  tmpdir: boolean;
}

export interface RunContextConstructor {
	/**
	 * This class provide a run context object to façade the complexity involved in setting
	 * up a generator for testing
	 * @constructor
	 * @param {String|Function} Generator - Namespace or generator constructor. If the later
	 *                                      is provided, then namespace is assumed to be
	 *                                      'gen:test' in all cases
	 * @param {Object} [settings]
	 * @param {Boolean} [settings.tmpdir=true] - Automatically run this generator in a tmp dir
	 * @return {this}
	 */
	new (Generator: string | Constructor<Generator>, settings?: RunContextSettings): RunContext;
}

export interface RunContext extends EventEmitter {
	/**
	 * Hold the execution until the returned callback is triggered
	 * @return {Function} Callback to notify the normal execution can resume
	 */
	async(): () => void;

	/**
	 * Return a promise representing the generator run process
	 * @return {Promise} Promise resolved on end or rejected on error
	 */
	toPromise(): Promise<string>;

	/**
	 * Promise `.then()` duck typing
	 * @return {Promise}
	 */
	then: Promise<string>['then'];

	/**
	 * Promise `.catch()` duck typing
	 * @return {Promise}
	 */
	catch: Promise<string>['catch'];

	/**
	 * Clean the provided directory, then change directory into it
	 * @param  {String} dirPath - Directory path (relative to CWD). Prefer passing an absolute
	 *                            file path for predictable results
	 * @param {Function} [cb] - callback who'll receive the folder path as argument
	 * @return {this} run context instance
	 */
	inDir(dirPath: string, cb: (folderPath: string) => void): this;

	/**
	 * Change directory without deleting directory content.
	 * @param  {String} dirPath - Directory path (relative to CWD). Prefer passing an absolute
	 *                            file path for predictable results
	 * @return {this} run context instance
	 */
	cd(dirPath: string): this;

	/**
	 * Cleanup a temporary directy and change the CWD into it
	 *
	 * This method is called automatically when creating a RunContext. Only use it if you need
	 * to use the callback.
	 *
	 * @param {Function} [cb] - callback who'll receive the folder path as argument
	 * @return {this} run context instance
	 */
	inTmpDir(cb: (folderPath: string) => void): this;

	/**
	 * Clean the directory used for tests inside inDir/inTmpDir
	 */
	cleanTestDirectory(): void;

	/**
	 * Provide arguments to the run context
	 * @param  {String|Array} args - command line arguments as Array or space separated string
	 * @return {this}
	 */
	withArguments(args: string | string[]): this;

	/**
	 * Provide options to the run context
	 * @param  {Object} options - command line options (e.g. `--opt-one=foo`)
	 * @return {this}
	 */
	withOptions(options: Dictionary<any>): this;

	/**
	 * Mock the prompt with dummy answers
	 * @param  {Object} answers - Answers to the prompt questions
	 * @return {this}
	 */
	withPrompts(answers: Dictionary<any>): this;

	/**
	 * Provide dependent generators
	 * @param {Array} dependencies - paths to the generators dependencies
	 * @return {this}
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
	 * @param  {Object} localConfig - should look just like if called config.getAll()
	 * @return {this}
	 */
	withLocalConfig(localConfig: Dictionary<any>): this;
}

export {};
