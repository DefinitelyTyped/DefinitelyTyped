declare module "wallabyjs" {
    /**
     * Wallaby configuration settings.
     *
     * @interface
     *
     * compilers - File patterns as keys and compiler functions as values.
     * debug - Flag if debug messages written to Wallaby console (default=false).
     * env - Specify a different test runner or change the runner settings.
     * files - Specifies an array of source files or file name patterns to copy
     *                                                        to the local cache.
     * postprocessor - Function that runs for every batch of file changes after all compilers and preprocessors.
     * preprocessors - Function that runs for every batch of file changes after all compilers.
     * testFramework - Specifies the name and version of the testing framework you are using for your tests.
     * tests - Specifies an array of test files or test file name patterns to copy
     *                                                        to the local cache.
     * workers - Degree of parallelism used to run your tests and controls the way wallaby re-uses workers.
     *
     * @see {@link https://wallabyjs.com/docs/config/overview.html} for details.
     */
    export interface IWallabyConfig {
        compilers?: IWallabyCompilers | undefined;
        debug?: boolean | undefined;
        env?: IWallabyEnvironment | undefined;
        files: string[] | IWallabyFilePattern[];
        postprocessor?: IWallabyProcessor | undefined;
        preprocessors?: IWallabyProcessor | undefined;
        testFramework?: string | undefined;
        tests: string[] | IWallabyFilePattern[];
        workers?: IWallabyWorkers | undefined;
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
        [pattern: string]: any;
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
     * map - Source map.
     * code - Code transformed to JavaScript.
     * ranges - All converable ranges of the original file.
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
     * content - The current content of the file.
     * path - The current path to the file.
     * @function rename - Allows you to rename/move the file to newPath.
     * @function changeExt - Shortcut for the rename function allowing you to change the file extension.
     *
     * @see {@link https://wallabyjs.com/docs/config/preprocessors.html} for details.
     */
    export interface IWallabyFile {
        content?: string | undefined;
        path?: string | undefined;
        rename(newPath: string): void;
        changeExt(newExt: string): void;
    }

    /**
     * Wallaby file pattern.
     *
     * @interface IWallabyFilePattern
     *
     * pattern - File name or file pattern.
     * ignore - Used to completely exclude the file from Wallaby (default=false).
     * instrument - Determines if file is instrumented (default=true).
     * load - Determines if the file is loaded to sandbox HTML via script tag .(default=true).
     *
     * @see {@link https://wallabyjs.com/docs/config/files.html} for details.
     */
    export interface IWallabyFilePattern {
        pattern: string;
        ignore?: boolean | undefined;
        instrument?: boolean | undefined;
        load?: boolean | undefined;
    }

    /**
     * Wallaby environment configuration.
     *
     * @interface IWallabyEnvironment
     *
     * params - set parameters on environment.
     * runner - Path of local Node / PhantomJs / Electron.
     * type - Specify a different test runner or change the runner settings.
     *
     * @see {@link https://wallabyjs.com/docs/config/runner.html} for details.
     */
    export interface IWallabyEnvironment {
        params?: IWallabyEnvironmentParameters | undefined;
        runner?: string | undefined;
        type?: string | undefined;
        viewportSize?: IWallabyEnvironmentViewportSize | undefined;
    }

    /**
     * Wallaby environment parameters.
     *
     * @interface IWallabyEnvironmentParameters
     *
     * env - Semicolon-separated spawed runner process env variables.
     * runner - Space-separated spawed runner process flags.
     *
     * @see {@link https://wallabyjs.com/docs/config/runner.html} for details.
     */
    export interface IWallabyEnvironmentParameters {
        env?: string | undefined;
        runner?: string | undefined;
    }

    /**
     * Wallaby viewport settings for testing.
     *
     * @interface IWallabyEnvironmentViewportSize
     *
     * width - Width in pixels for the viewport size in PhantomJs/Electron.
     * height - height in pixels for the viewport size in PhantomJs/Electron.
     */
    export interface IWallabyEnvironmentViewportSize {
        width?: number | undefined;
        height?: number | undefined;
    }

    /**
     * Wallaby worker configuration.
     *
     * @interface IWallabyWorkers
     *
     * recycle - Specifies the degree of parallelism used to run your tests and
     *                                  controls the way wallaby re-uses workers.
     *
     * @see {@link https://wallabyjs.com/docs/config/workers.html} for details.
     */
    export interface IWallabyWorkers {
        recycle?: boolean | undefined;
    }

    /**
     * Wallaby object passed into config.
     *
     * @interface IWallaby
     *
     * localProjectDir - String property which returns the project local folder.
     * projectCacheDir - String property which returns the project cache folder.
     * compilers - Property which allows you to access the built-in TypeScript, CoffeeScript and Babel compilers.
     * defaults - Property which allows you to set the default values for file object properties.
     *
     * @see {@link https://wallabyjs.com/docs/config/overview.html} for details.
     */
    export interface IWallaby {
        localProjectDir?: string | undefined;
        projectCacheDir?: string | undefined;
        compilers?: IWallabyBuiltInCompilers | undefined;
        defaults?: any;
    }
}
