// Type definitions for WallabyJS
// Project: http://wallabyjs.com
// Definitions by: Andrew Connell <https://github.com/andrewconnell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'wallabyjs' {
  /**
   * Wallaby configuration settings.
   *
   * @interface
   *
   * @property {IWallabyCompiler=}     compilers - File patterns as keys and compiler functions as values.
   * @property {boolean=}              debug - Flag if debug messages written to Wallaby console (default=false).
   * @property {IWallabyEnvironment=} env - Specify a different test runner or change the runner settings.
   * @property {string[] | IWallabyFilePattern[]}   files - Specifies an array of source files or file name patterns to copy
   *                                                        to the local cache.
   * @property {Function=}             postprocessor - Function that runs for every batch of file changes after all compilers and preprocessors.
   * @property {Function=}             preprocessors - Function that runs for every batch of file changes after all compilers.
   * @property {string=}               testFramework - Specifies the name and version of the testing framework you are using for your tests.
   * @property {string[] | IWallabyFilePattern[]}   tests - Specifies an array of test files or test file name patterns to copy
   *                                                        to the local cache.
   * @property {IWallabyWorkers=}      workers - Degree of parallelism used to run your tests and controls the way wallaby re-uses workers.
   *
   * @see {@link https://wallabyjs.com/docs/config/overview.html} for details.
   */
  export interface IWallabyConfig {
    compilers?: IWallabyCompilers;
    debug?: boolean;
    env?: IWallabyEnvironment;
    files: string[] | IWallabyFilePattern[];
    postprocessor?: IWallabyProcessor;
    preprocessors?: IWallabyProcessor;
    testFramework?: string;
    tests: string[] | IWallabyFilePattern[];
    workers?: IWallabyWorkers;
  }

  /**
   * Wallaby compilers.
   *
   * @export
   * @interface IWallabyCompiler
   *
   * @see {@link https://wallabyjs.com/docs/config/compilers.html} for details.
   */
  export interface IWallabyCompilers {
    [pattern: string]: any
  }

  /**
   * Wallaby built in compiler options. These are name-value pairs passed into each compiler.
   *
   * @export
   * @interface IWallabyCompilerOptions
   *
   * @see {@link https://wallabyjs.com/docs/config/compilers.html} for details.
   */
  export interface IWallabyBuiltInCompilerOptions {
    [option: string]: string;
  }

  /**
   * Wallaby build in compilers.
   *
   * @export
   * @interface IWallabyBuiltInCompilers
   *
   * @see {@link https://wallabyjs.com/docs/config/compilers.html} for details.
   */
  export interface IWallabyBuiltInCompilers {
    babel(compilerOptions?: IWallabyBuiltInCompilerOptions): IWallabyCompilerResult;
    coffeeScript(compilerOptions?: IWallabyBuiltInCompilerOptions): IWallabyCompilerResult;
    typeScript(compilerOptions?: IWallabyBuiltInCompilerOptions): IWallabyCompilerResult;
  }

  /**
   * Wallaby compiler result entity.
   *
   * @export
   * @interface IWallabyCompilerResult
   *
   * @property  {string}  map - Source map.
   * @property  {string}  code - Code transformed to JavaScript.
   * @property  {any}  ranges - All converable ranges of the original file.
   *
   * @see {@link https://wallabyjs.com/docs/config/compilers.html} for details.
   */
  export interface IWallabyCompilerResult {
    map: string;
    code: string;
    ranges: any;
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
    viewportSize?: IWallabyEnvironmentViewportSize
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
   * Wallaby viewport settings for testing.
   *
   * @interface IWallabyEnvironmentViewportSize
   *
   * @property  {number=} width - Width in pixels for the viewport size in PhantomJs/Electron.
   * @property  {number=} height - height in pixels for the viewport size in PhantomJs/Electron.
   */
  export interface IWallabyEnvironmentViewportSize {
    width?: number;
    height?: number;
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
   * @property  {IWallabyBuiltInCompilers=} compilers - Property which allows you to access the built-in TypeScript, CoffeeScript and Babel compilers.
   * @property  {object=} defaults - Property which allows you to set the default values for file object properties.
   *
   * @see {@link https://wallabyjs.com/docs/config/overview.html} for details.
   */
  export interface IWallaby {
    localProjectDir?: string;
    projectCacheDir?: string;
    compilers?: IWallabyBuiltInCompilers;
    defaults?: any;
  }
}
