// Type definitions for yeoman-generator 1.0
// Project: https://github.com/yeoman/generator
// Definitions by: Kentaro Okuno <http://github.com/armorik83>, Jay Anslow <http://github.com/janslow>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EventEmitter } from 'events';
import { Questions, Answers } from 'inquirer';

type Callback = (err: any) => void;

declare namespace Base {
    class Storage {
        constructor(name: string, fs: MemFsEditor, configPath: string);

        defaults(defaults: {}): {};
        delete(key: string): void;
        get(key: string): any;
        getAll(): { [key: string]: any };
        save(): void;
        set(key: string, value: any): any;
    }
    interface InstallOptions {
        npm?: boolean;
        bower?: boolean;
        yarn?: boolean;
        skipMessage?: boolean;
        callback?: Callback;
    }
    interface ArgumentConfig {
        description?: string;
        required?: boolean;
        optional?: boolean;
        type?: typeof String|typeof Number|typeof Array|typeof Object;
        default?: any;
    }
    interface OptionConfig {
        alias?: string;
        default?: any;
        description?: string;
        hide?: boolean;
        type?: typeof Boolean|typeof String|typeof Number;
    }
    interface MemFsEditor {
        read(filepath: string, options?: {}): string;
        readJSON(filepath: string, defaults?: {}): any;
        write(filepath: string, contents: string): void;
        writeJSON(filepath: string, contents: {}, replacer?: (key: string, value: any) => any, space?: number): void;
        extendJSON(filepath: string, contents: {}, replacer?: (key: string, value: any) => any, space?: number): void;
        delete(filepath: string, options?: {}): void;
        copy(from: string, to: string, options?: {}): void;
        copyTpl(from: string, to: string, context: {}, templateOptions?: {}, copyOptions?: {}): void;
        move(from: string, to: string, options?: {}): void;
        exists(filepath: string): boolean;
        commit(callback: Callback): void;
        commit(filters: any[], callback: Callback): void;
    }
}

declare class Base extends EventEmitter {
    static extend(protoProps?: any, staticProps?: any): Base;

    constructor(args: string|string[], options: {});

    env: {};
    args: {};
    resolved: string;
    description: string;
    appname: string;
    config: Base.Storage;
    fs: Base.MemFsEditor;
    options: {};
    log(message?: string, context?: any): void;

    argument(name: string, config: Base.ArgumentConfig): this;
    composeWith(namespace: string, options: { [name: string]: any }, settings?: { local: string, link: 'weak'|'strong' }): this;
    destinationPath(...path: string[]): string;
    destinationRoot(rootPath?: string): string;
    determineAppname(): string;
    option(name: string, config: Base.OptionConfig): this;
    prompt(questions: Questions): Promise<Answers>;
    registerTransformStream(stream: {}|Array<{}>): this;
    rootGeneratorName(): string;
    rootGeneratorVersion(): string;
    run(cb?: Callback): this;
    sourceRoot(rootPath?: string): string;
    templatePath(...path: string[]): string;

    // actions/help mixin
    argumentsHelp(): string;
    desc(description: string): this;
    help(): string;
    optionsHelp(): string;
    usage(): string;

    // actions/spawn_command mixin
    spawnCommand(command: string, args: string[], opt?: {}): any;
    spawnCommandSync(command: string, args: string[], opt?: {}): any;

    // actions/install mixin
    bowerInstall(component?: string|string[], options?: {}, cb?: Callback, spawnOptions?: {}): this;
    installDependencies(options?: Base.InstallOptions): this;
    npmInstall(pkgs?: string|string[], options?: {}, cb?: Callback, spawnOptions?: {}): this;
    runInstall(installer: string, paths?: string|string[], options?: {}, cb?: Callback, spawnOptions?: {}): this;
    yarnInstall(pkgs?: string|string[], options?: {}, cb?: Callback, spawnOptions?: {}): this;

    // actions/user mixin
    readonly user: {
        readonly git: {
            email(): string;
            name(): string;
        };
        readonly github: {
            username(): string;
        }
    };
}
export = Base;
