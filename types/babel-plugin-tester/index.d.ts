// Type definitions for babel-plugin-tester 9.0
// Project: https://github.com/babel-utils/babel-plugin-tester#readme
// Definitions by: Ifiok Jr. <https://github.com/ifiokjr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.4

import * as Babel from '@babel/core';
import { Options } from 'prettier';

export type BabelType = typeof Babel;

/**
 * A minimal test object can be:
 *
 * - A string representing code
 * - An object with a code property
 *
 * Here are the available properties if you provide an object.
 */
export interface TestObject {
    /**
     * The code that you want to run through your babel plugin. This must be
     * provided unless you provide a fixture instead. If there's no output or
     * outputFixture and snapshot is not true, then the assertion is that this
     * code is unchanged by the plugin.
     */
    code?: string;

    /**
     * If provided, this will be used instead of the pluginName. If you're using
     * the object API, then the key of this object will be the title (see
     * example below).
     */
    title?: string;

    /**
     * If this is provided, the result of the plugin will be compared with this
     * output for the assertion. It will have any indentation stripped and will
     * be trimmed as a convenience for template literals.
     */
    output?: string;

    /**
     * If you'd rather put your code in a separate file, you can specify a
     * filename here. If it's an absolute path, that's the file that will be
     * loaded, otherwise, this will be path.joined with the filename path.
     */
    fixture?: string;

    /**
     * If you'd rather put your output in a separate file, you can specify this
     * instead (works the same as fixture).
     */
    outputFixture?: string;

    /**
     * To run only this test. Useful while developing to help focus on a single
     * test. Can be used on multiple tests.
     */
    only?: boolean;

    /**
     * To skip running this test. Useful for when you're working on a feature
     * that is not yet supported.
     */
    skip?: boolean;

    /**
     * If you'd prefer to take a snapshot of your output rather than compare it
     * to something you hard-code, then specify snapshot: true. This will take a
     * snapshot with both the source code and the output, making the snapshot
     * easier to understand.
     */
    snapshot?: boolean;

    /**
     * If a particular test case should be throwing an error, you can that using
     * one of the following:
     *
     * ```ts
     * {
     *  // ...
     *   error: true,
     *   error: 'should have this exact message',
     *   error: /should pass this regex/,
     *   error: SyntaxError, // should be instance of this constructor
     *   error: err => {
     *     if (err instanceof SyntaxError && /message/.test(err.message)) {
     *       return true; // test will fail if function doesn't return `true`
     *     }
     *   },
     * }
     * ```
     */
    error?: boolean | string | RegExp | Error | ((error: unknown) => boolean);

    /**
     * If you need something set up before a particular test is run, you can do
     * this with setup. This function will be run before the test runs. It can
     * return a function which will be treated as a teardown function. It can
     * also return a promise. If that promise resolves to a function, that will
     * be treated as a teardown function.
     */
    setup?: () =>
        | void
        | NonNullable<TestObject['teardown']>
        | Promise<void>
        | Promise<NonNullable<TestObject['teardown']>>;

    /**
     * If you set up some state, it's quite possible you want to tear it down.
     * You can either define this as its own property, or you can return it from
     * the setup function. This can likewise return a promise if it's
     * asynchronous.
     */
    teardown?: () => void | Promise<void>;

    /**
     * This defaults to a function which formats your code output with prettier.
     * If you have prettier configured, then it will use your configuration. If
     * you don't then it will be default configuration.
     *
     * If you'd like to specify your own, then feel free to do so. Here's the
     * API:
     *
     * ```ts
     * function customFormatter(code, { filename }) {
     *   return formattedCode;
     * }
     * ```
     *
     * The use case for this originally was for testing codemods and formatting
     * their result with prettier-eslint.
     */
    formatResult?: (code: string, options: { filename: string }) => string;

    /**
     * To use `babel.config.js` instead of `.babelrc`, set babelOptions to the
     * config object:
     *
     * ```ts
     * pluginTester({
     *   plugin: yourPlugin,
     *   ...
     *   babelOptions: require('./babel.config.js'),
     *   ...
     *   tests: {
     *     // your test objects
     *   },
     * });
     * ```
     *
     */
    babelOptions?: Babel.TransformOptions;
}

export type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

export interface PluginTesterOptions extends TestObject, Omit<Babel.TransformOptions, 'code' | 'only'> {
    /**
     * Your babel plugin. For example:
     *
     * ```ts
     * pluginTester({
     *   plugin: identifierReversePlugin,
     *   tests: {
     *   },
     * })
     *
     * // normally you would import this from your plugin module
     * function identifierReversePlugin() {
     *   return {
     *     name: 'identifier reverse',
     *     visitor: {
     *       Identifier(idPath) {
     *         idPath.node.name = idPath.node.name.split('').reverse().join('')
     *       },
     *     },
     *   }
     * }
     * ```
     */
    plugin: any;

    /**
     * This is used for the describe title as well as the test titles. If it can be inferred from the plugin's name then it will be and you don't need to provide this option.
     */
    pluginName?: string;

    /**
     * This can be used to pass options into your plugin at transform time. This
     * option can be overwritten using the test object.
     *
     */
    pluginOptions?: Babel.PluginOptions;

    /**
     * This can be used to specify a title for the describe block (rather than
     * using the pluginName).
     */
    title?: string;

    /**
     * Relative paths from the other options will be relative to this. Normally
     * you'll provide this as filename: __filename. The only options property
     * affected by this value is fixtures. Test Object properties affected by
     * this value are: fixture and outputFixture. If those properties are not
     * absolute paths, then they will be path.joined with path.dirname of the
     * filename.
     */
    filename?: string;

    /**
     * This is used to control which line endings the output from babel should
     * have
     *
     * - `lf` - **Unix** default
     * - `crlf` - **Windows**
     * - `auto` - Use the system default
     * - `preserve` Use the line ending from the input.
     *
     * @default 'lf'
     */
    endOfLine?: 'lf' | 'crlf' | 'auto' | 'preserve';

    /**
     * This is a path to a directory with this format:
     *
     * ```
     * __fixtures__
     * ├── first-test # test title will be: "first test"
     * │   ├── code.js # required
     * │   └── output.js # required
     * └── second-test
     *     ├── .babelrc # optional
     *     ├── options.json # optional
     *     ├── code.js
     *     └── output.js
     * ```
     *
     * With this you could make your test config like so:
     *
     * ```ts
     * pluginTester({
     *   plugin,
     *   fixtures: path.join(__dirname, '__fixtures__'),
     * })
     * ```
     *
     * And it would run two tests. One for each directory in __fixtures__, with
     * plugin options set to the content of options.json
     *
     * Options are inherited, placing a options.json file in __fixtures__ would
     * add those options to all fixtures.
     */
    fixtures?: string;

    /**
     * You provide test objects as the tests option to babel-plugin-tester. You
     * can either provide the tests as an object of test objects or an array of
     * test objects.
     *
     * If you provide the tests as an object, the key will be used as the title
     * of the test.
     *
     * If you provide an array, the title will be derived from it's index and a
     * specified title property or the pluginName.
     *
     * Read more about test objects below.
     */
    tests?: Array<TestObject | string> | Record<string, TestObject | string>;

    /**
     * Use this to provide your own implementation of babel. This is
     * particularly useful if you want to use a different version of babel than
     * what's included in this package.
     */
    babel?: BabelType;
}

export default function pluginTester(options: PluginTesterOptions): void;

/**
 * Formatter used for the snapshots.
 */
export function prettierFormatter(code: string, options: Options): string;

export const unstringSnapshotSerializer: {
    test(value: unknown): value is string;
    print(value: string): string;
};
