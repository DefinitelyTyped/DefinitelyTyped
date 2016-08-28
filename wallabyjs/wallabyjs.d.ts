// Type definitions for WallabyJS
// Project: http://wallabyjs.com
// Definitions by: Andrew Connell <http://www.andrewconnell.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'wallabyjs' {
  /**
   * Wallaby configuration settings.
   *
   * @interface
   *
   * @property {IWallabyCompiler=}     compilers - File patterns as keys and compiler functions as values.
   * @property {boolean=}              debug - Flag if debug messages written to Wallaby console (default=false).
   * @prooperty {IWallabyEnvironment=} env - Specify a different test runner or change the runner settings.
   * @property {string[] | IWallabyFilePattern[]}   files - Specifies an array of source files or file name patterns to copy
   *                                                        to the local cache.
   * @property {Function=}             postprocessor - Function that runs for every batch of file changes after all compilers and preprocessors.
   * @property {Function=}             preprocessor - Function that runs for every batch of file changes after all compilers.
   * @property {string=}               testFramework - Specifies the name and version of the testing framework you are using for your tests.
   * @property {string[] | IWallabyFilePattern[]}   tests - Specifies an array of test files or test file name patterns to copy
   *                                                        to the local cache.
   * @property {IWallabyWorkers=}      workers - Degree of parallelism used to run your tests and controls the way wallaby re-uses workers.
   *
   * @see {@link https://wallabyjs.com/docs/config/overview.html} for details.
   */
  export interface IWallabyConfig {
    comilers?: IWallabyCompiler;
    debug?: boolean;
    env?: IWallabyEnvironment;
    files: string[] | IWallabyFilePattern[];
    postprocessor?: IWallabyProcessor;
    preprocessor?: IWallabyProcessor;
    testFramework?: string;
    tests: string[] | IWallabyFilePattern[];
    workers?: IWallabyWorkers;
  }

  /**
   * Wallaby compiler configuration.
   *
   * @interface IWallabyCompiler
   *
   * @see {@link https://wallabyjs.com/docs/config/compilers.html} for details.
   */
  export interface IWallabyCompiler {
    [pattern: string]: any
  }


  /**
   * Wallaby processor used in pre & post processors.
   *
   * @interface IWallabyProcessor
   *
   * @see {@link https://wallabyjs.com/docs/config/preprocessors.html} for details.
   */
  export interface IWallabyProcessor {
    [pattern: string]: (file: IWallabyFile) => void;
  }

  /**
   * Wallaby file object passed to pre & post processors.
   *
   * @interface IWallabyFile
   *
   * @property {string=}  content - The current content of the file.
   * @property {string=}  path - The current path to the file.
   * @function rename - Allows you to rename/move the file to newPath.
   * @function changeExt - Shortcut for the rename function allowing you to change the file extension.
   *
   * @see {@link https://wallabyjs.com/docs/config/preprocessors.html} for details.
   */
  export interface IWallabyFile {
    content?: string;
    path?: string;
    rename(newPath: string): void;
    changeExt(newExt: string): void;
  }

  /**
   * Wallaby file pattern.
   *
   * @interface IWallabyFilePattern
   *
   * @property {string}   pattern - File name or file pattern.
   * @property {boolean=}   ignore - Used to completely exclude the file from Wallaby (default=false).
   * @property {boolean=}   instrument - Determines if file is instrumented (default=true).
   * @property {boolean=}   load - Determines if the file is loaded to sandbox HTML via script tag .(default=true).
   *
   * @see {@link https://wallabyjs.com/docs/config/files.html} for details.
   */
  export interface IWallabyFilePattern {
    pattern: string;
    ignore?: boolean;
    instrument?: boolean;
    load?: boolean;
  }

  /**
   * Wallaby environment configuration.
   *
   * @interface IWallabyEnvironment
   *
   * @property  {IWallabyEnvironmentParameters=}  params - set parameters on environment.
   * @property  {string=}  runner - Path of local Node / PhantomJs / Electron.
   * @property  {string=}  type - Specify a different test runner or change the runner settings.
   *
   * @see {@link https://wallabyjs.com/docs/config/runner.html} for details.
   */
  export interface IWallabyEnvironment {
    params?: IWallabyEnvironmentParameters;
    runner?: string;
    type?: string;
  }

  /**
   * Wallaby environment parameters.
   *
   * @interface IWallabyEnvironmentParameters
   *
   * @property  {string=}  env - Semicolon-separated spawed runner process env variables.
   * @property  {string=}  runner - Space-separated spawed runner process flags.
   *
   * @see {@link https://wallabyjs.com/docs/config/runner.html} for details.
   */
  export interface IWallabyEnvironmentParameters {
    env?: string;
    runner?: string;
  }

  /**
   * Wallaby worker configuration.
   *
   * @interface IWallabyWorkers
   *
   * @property  {boolean=}  recycle - Specifies the degree of parallelism used to run your tests and
   *                                  controls the way wallaby re-uses workers.
   *
   * @see {@link https://wallabyjs.com/docs/config/workers.html} for details.
   */
  export interface IWallabyWorkers {
    recycle?: boolean;
  }

  /**
   * Wallaby object passed into config.
   *
   * @interface IWallaby
   *
   * @property  {string=} localProjectDir - String property which returns the project local folder.
   * @property  {string=} projectCacheDir - String property which returns the project cache folder.
   * @property  {IWallabyCompiler=} compilers - Property which allows you to access the built-in TypeScript, CoffeeScript and Babel compilers.
   * @property  {object=} defaults - Property which allows you to set the default values for file object properties.
   *
   * @see {@link https://wallabyjs.com/docs/config/overview.html} for details.
   */
  export interface IWallaby {
    localProjectDir?: string;
    projectCacheDir?: string;
    compilers?: IWallabyCompiler;
    defaults?: any;
  }
}
