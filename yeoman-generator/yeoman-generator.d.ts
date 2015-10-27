// Type definitions for yeoman-generator
// Project: https://github.com/yeoman/generator
// Definitions by: Kentaro Okuno <http://github.com/armorik83>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
/// <reference path="../node/node.d.ts" />

declare module yo {
    export interface IYeomanGenerator {
        argument(name: string, config: IArgumentConfig): void;
        composeWith(namespace: string, options: any, settings?: IComposeSetting): IYeomanGenerator;
        defaultFor(name: string): void;
        destinationRoot(rootPath: string): string;
        determineAppname(): void;
        getCollisionFilter(): (output: any) => void;
        hookFor(name: string, config: IHookConfig): void;
        option(name: string, config: IYeomanGeneratorOption): void;
        rootGeneratorName(): string;
        run(args?: any): void;
        run(args: any, callback?: Function): void;
        runHooks(callback?: Function): void;
        sourceRoot(rootPath: string): string;


    }

    export class YeomanGeneratorBase implements IYeomanGenerator, NodeJS.EventEmitter {
        argument(name: string, config: IArgumentConfig): void;
        composeWith(namespace: string, options: any, settings?: IComposeSetting): IYeomanGenerator;
        defaultFor(name: string): void;
        destinationRoot(rootPath: string): string;
        determineAppname(): void;
        getCollisionFilter(): (output: any) => void;
        hookFor(name: string, config: IHookConfig): void;
        option(name: string, config?: IYeomanGeneratorOption): void;
        rootGeneratorName(): string;
        run(args?: any): void;
        run(args: any, callback?: Function): void;
        runHooks(callback?: Function): void;
        sourceRoot(rootPath: string): string;
        addListener(event: string, listener: Function): NodeJS.EventEmitter;
        on(event: string, listener: Function): NodeJS.EventEmitter;
        once(event: string, listener: Function): NodeJS.EventEmitter;
        removeListener(event: string, listener: Function): NodeJS.EventEmitter;
        removeAllListeners(event?: string): NodeJS.EventEmitter;
        setMaxListeners(n: number): void;
        listeners(event: string): Function[];
        emit(event: string, ...args: any[]): boolean;

        async(): any;
        prompt(opt?:IPromptOptions, callback?:(answers:any)=>void) :void;
        log(message: string) : void;
        npmInstall(packages: string[], options?:any) :void;

        appname: string;
        gruntfile: IGruntFileStatic;
    }
    export interface IPromptOptions{
        type:string;
        name:string;
        message:string;
        default:string;
    }
    
    export interface IGruntFileStatic {
        loadNpmTasks(pluginName: string): void;
        insertConfig(name:string, config:any):void;
        registerTask(name:string, tasks:any):void;
        insertVariable(name:string, value:any):void;
        prependJavaScript(code:string):void;
    }

    export interface IArgumentConfig {
        desc: string;
        required: boolean;
        optional: boolean;
        type: any;
        defaults: any;
    }

    export interface IComposeSetting {
        local?: string;
        link?: string;
    }

    export interface IHookConfig {
        as: string;
        args: any;
        options: any;
    }

    export interface IYeomanGeneratorOption {
        alias?: string;
        defaults?: any;
        desc?: string;
        hide?: boolean;
        type?: any;
    }

    export interface IQueueProps {
        initializing: () => void;
        prompting?: () => void;
        configuring?: () => void;
        default?: () => void;
        writing: {
            [target: string]: () => void;
        };
        conflicts?: () => void;
        install?: () => void;
        end: () => void;
    }

    export interface INamedBase extends IYeomanGenerator {
    }

    export interface IBase extends INamedBase {
    }

    export interface IAssert {
        file(path: string): void;
        file(paths: string[]): void;
        fileContent(file: string, reg: RegExp): void;

        /** @param {[String, RegExp][]} pairs */
        fileContent(pairs: any[][]): void;

        /** @param {[String, RegExp][]|String[]} pairs */
        files(pairs: any[]): void;

        /**
         * @param {Object} subject
         * @param {Object|Array} methods
         */
        implement(subject: any, methods: any): void;
        noFile(file: string): void;
        noFileContent(file: string, reg: RegExp): void;

        /** @param {[String, RegExp][]} pairs */
        noFileContent(pairs: any[][]): void;

        /**
         * @param {Object} subject
         * @param {Object|Array} methods
         */
        noImplement(subject: any, methods: any): void;

        textEqual(value: string, expected: string): void;
    }

    export interface ITestHelper {
        createDummyGenerator(): IYeomanGenerator;
        createGenerator(name: string, dependencies: any[], args: any, options: any): IYeomanGenerator;
        decorate(context: any, method: string, replacement: Function, options: any): void;
        gruntfile(options: any, done: Function): void;
        mockPrompt(generator: IYeomanGenerator, answers: any): void;
        registerDependencies(dependencies: string[]): void;
        restore(): void;

        /** @param {String|Function} generator */
        run(generator: any): IRunContext;
    }

    export interface IRunContext {
        async(): Function;
        inDir(dirPath: string): IRunContext;

        /** @param {String|String[]} args */
        withArguments(args: any): IRunContext;
        withGenerators(dependencies: string[]): IRunContext;
        withOptions(options: any): IRunContext;
        withPrompts(answers: any): IRunContext;
    }

    /** @type file file-utils */
    var file: any;
    var assert: IAssert;
    var test: ITestHelper;
    module generators {

        export class NamedBase extends YeomanGeneratorBase implements INamedBase {
            constructor(args: string | string[], options: any);
        }

        export class Base extends NamedBase implements IBase {
            static extend(protoProps: IQueueProps, staticProps?: any): IYeomanGenerator;
        }
    }
}

declare module "yeoman-generator" {
    export = yo;
}
