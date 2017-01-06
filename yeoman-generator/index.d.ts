// Type definitions for yeoman-generator v1.0.x
// Project: https://github.com/yeoman/generator
// Definitions by: Kentaro Okuno <http://github.com/armorik83>
// Definitions by: Jay Anslow <http://github.com/janslow>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EventEmitter } from 'events';
import { Questions, Answers } from 'inquirer';

declare type Callback = (err: any) => void;

declare namespace Base {
    class Storage {
        constructor(name: string, fs: MemFsEditor, configPath: string);

        defaults(defaults: Object): Object;
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
        read(filepath: string, options?: Object): string;
        readJSON(filepath: string, defaults?: Object): any;
        write(filepath: string, contents: string): void;
        writeJSON(filepath: string, contents: Object, replacer?: Function, space?: number): void;
        extendJSON(filepath: string, contents: Object, replacer?: Function, space?: number): void;
        delete(filepath: string, options?: Object): void;
        copy(from: string, to: string, options?: Object): void;
        copyTpl(from: string, to: string, context: Object, templateOptions?: Object, copyOptions?: Object): void;
        move(from: string, to: string, options?: Object): void;
        exists(filepath: string): boolean;
        commit(callback: Function): void;
        commit(filters: any[], callback: Function): void;
    }
}

declare class Base extends EventEmitter {
    static extend(protoProps?: any, staticProps?: any): Base;

    constructor(args: string|any[], options: any);

    env: Object;
    args: Object;
    resolved: string;
    description: string;
    appname: string;
    config: Base.Storage;
    fs: Base.MemFsEditor;
    log: Function;

    argument(name: string, config: Base.ArgumentConfig): this;
    composeWith(namespace: string, options: { [name: string]: any }, settings?: { local: string, link: 'weak'|'strong' }): this;
    destinationPath(...path: string[]): string;
    destinationRoot(rootPath?: string): string;
    determineAppname(): string;
    option(name: string, config: Base.OptionConfig): this;
    prompt(questions: Questions): Promise<Answers>;
    registerTransformStream(stream: Object|Object[]): this;
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
    spawnCommand(command: string, args: string[], opt?: Object): any;
    spawnCommandSync(command: string, args: string[], opt?: Object): any;

    // actions/install mixin
    bowerInstall(component?: string|string[], options?: Object, cb?: Callback, spawnOptions?: Object): this;
    installDependencies(options?: Base.InstallOptions): this;
    npmInstall(pkgs?: string|string[], options?: Object, cb?: Callback, spawnOptions?: Object): this;
    runInstall(installer: string, paths?: string|string[], options?: Object, cb?: Callback, spawnOptions?: Object): this;
    yarnInstall(pkgs?: string|string[], options?: Object, cb?: Callback, spawnOptions?: Object): this;

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
