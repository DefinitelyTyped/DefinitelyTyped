// Type definitions for jenkins v0.20.0
// Project: https://github.com/silas/node-jenkins
// Definitions by: rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace create {
    interface JenkinsAPI {
        info(callback: Function): void;
        build: {
            get(name: string, n: number, callback: Function): void;
            log(name: string, callback: Function): void;
            log(name: string, n: number,  callback: Function): void;
            log(name: string, n: number, start: number, callback: Function): void;
            log(name: string, n: number, start: number, type: 'text' | 'html', callback: Function): void;
            log(name: string, n: number, start: number, type: 'text' | 'html', meta: boolean, callback: Function): void;
            logStream(name: string, n: number, type?: 'text' | 'html', delay?: number): NodeJS.ReadableStream;
            stop(name: string, n: number, callback: Function): void;
        };
        job: {
            build(name: string, callback: Function): void;
            build(name: string, parameters: any, callback: Function): void;
            build(name: string, parameters: any, token: string, callback: Function): void;
            build(opts: JobBuildOptions, callback: Function): void;
            config(name: string, callback: Function): void;
            config(name: string, xml: string, callback: Function): void;
            copy(name: string, from: string, callback: Function): void;
            create(name: string, xml: string, callback: Function): void;
            destroy(name: string, callback: Function): void;
            disable(name: string, callback: Function): void;
            enable(name: string, callback: Function): void;
            exists(name: string, callback: Function): void;
            get(name: string, callback: Function): void;
            list(callback: Function): void;
        };
        node: {
            config(name: string, callback: Function): void;
            create(name: string, callback: Function): void;
            destroy(name: string, callback: Function): void;
            disconnect(name: string, callback: Function): void;
            disconnect(name: string, message: string, callback: Function): void;
            disable(name: string, callback: Function): void;
            disable(name: string, message: string, callback: Function): void;
            enable(name: string, callback: Function): void;
            exists(name: string, callback: Function): void;
            get(name: string, callback: Function): void;
            list(callback: Function): void;
            list(full: boolean, callback: Function): void;
        };
        queue: {
            list(callback: Function): void;
            item(n: number, callback: Function): void;
            cancel(n: number, callback: Function): void;
        };
        view: {
            config(name: string, callback: Function): void;
            config(name: string, xml: string, callback: Function): void;
            create(name: string, type: 'list' | 'my', callback: Function): void;
            destroy(name: string, callback: Function): void;
            exists(name: string, callback: Function): void;
            get(name: string, callback: Function): void;
            list(callback: Function): void;
            add(name: string, job: string, callback: Function): void;
            remove(name: string, job: string, callback: Function): void;
        };
    }

    export interface JenkinsPromisifiedAPI {
        info(): Promise<any>;
        build: {
            get(name: string, n: number): Promise<any>;
            log(name: string, n: number, start?: number, type?: 'text' | 'html', meta?: boolean): Promise<any>;
            logStream(name: string, n: number, type?: 'text' | 'html', delay?: number): Promise<any>;
            stop(name: string, n: number): Promise<any>;
        };
        job: {
            build(name: string, parameters?: any, token?: string): Promise<any>;
            build(opts: JobBuildOptions): Promise<any>;
            config(name: string): Promise<any>;
            config(name: string, xml: string): Promise<any>;
            copy(name: string, from: string): Promise<any>;
            create(name: string, xml: string): Promise<any>;
            destroy(name: string): Promise<any>;
            disable(name: string): Promise<any>;
            enable(name: string): Promise<any>;
            exists(name: string): Promise<any>;
            get(name: string): Promise<any>;
            list(): Promise<any>;
        };
        node: {
            config(name: string): Promise<any>;
            create(name: string): Promise<any>;
            destroy(name: string): Promise<any>;
            disconnect(name: string, message?: string): Promise<any>;
            disable(name: string, message?: string): Promise<any>;
            enable(name: string): Promise<any>;
            exists(name: string): Promise<any>;
            get(name: string): Promise<any>;
            list(full?: boolean): Promise<any>;
        };
        queue: {
            list(): Promise<any>;
            item(n: number): Promise<any>;
            cancel(n: number): Promise<any>;
        };
        view: {
            config(name: string, xml?: string): Promise<any>;
            create(name: string, type: 'list' | 'my'): Promise<any>;
            destroy(name: string): Promise<any>;
            exists(name: string): Promise<any>;
            get(name: string): Promise<any>;
            list(): Promise<any>;
            add(name: string, job: string): Promise<any>;
            remove(name: string, job: string): Promise<any>;
        };
    }

    interface JobBuildOptions {
        name: string;
        parameters?: any;
        token?: string;
    }

    interface JenkinsClientOptions {
        baseUrl?: string;
        crumbIssuer?: boolean;
        headers?: any;
        promisify?: boolean | Function;
    }
}

declare function create(): create.JenkinsAPI;
declare function create(opts: {
        baseUrl?: string;
        crumbIssuer?: boolean;
        headers?: any;
        promisify?: false;
    }): create.JenkinsAPI;
declare function create(opts: {
        baseUrl?: string;
        crumbIssuer?: boolean;
        headers?: any;
        promisify: true;
    }): create.JenkinsPromisifiedAPI;
export = create;
