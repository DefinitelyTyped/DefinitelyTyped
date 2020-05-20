// Type definitions for jenkins 0.23
// Project: https://github.com/silas/node-jenkins
// Definitions by: rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace create {
    interface JenkinsAPI {
        info(callback: (err: Error, data: any) => void): void;
        build: {
            get(name: string, n: number, callback: (err: Error, data: any) => void): void;
            log(name: string, callback: (err: Error, data: any) => void): void;
            log(name: string, n: number,  callback: (err: Error, data: any) => void): void;
            log(name: string, n: number, start: number, callback: (err: Error, data: any) => void): void;
            log(name: string, n: number, start: number, type: 'text' | 'html', callback: (err: Error, data: any) => void): void;
            log(name: string, n: number, start: number, type: 'text' | 'html', meta: boolean, callback: (err: Error, data: any) => void): void;
            logStream(name: string, n: number, options?: { type?: 'text' | 'html', delay?: number }): NodeJS.ReadableStream;
            stop(name: string, n: number, callback: (err: Error) => void): void;
            term(name: string, n: number, callback: (err: Error) => void): void;
        };
        job: {
            build(name: string | JobBuildOptions, callback: (err: Error, data: any) => void): void;
            build(name: string, parameters: any, callback: (err: Error, data: any) => void): void;
            build(name: string, parameters: any, token: string, callback: (err: Error, data: any) => void): void;
            config(name: string, callback: (err: Error, data: any) => void): void;
            config(name: string, xml: string, callback: (err: Error, data: any) => void): void;
            copy(name: string, from: string, callback: (err: Error) => void): void;
            create(name: string, xml: string, callback: (err: Error) => void): void;
            destroy(name: string, callback: (err: Error) => void): void;
            disable(name: string, callback: (err: Error) => void): void;
            enable(name: string, callback: (err: Error) => void): void;
            exists(name: string, callback: (err: Error, exists: boolean) => void): void;
            get(name: string, callback: (err: Error, data: any) => void): void;
            list(callback: (err: Error, data: any) => void): void;
        };
        node: {
            config(name: string, callback: (err: Error, data: any) => void): void;
            create(name: string, callback: (err: Error) => void): void;
            destroy(name: string, callback: (err: Error) => void): void;
            disconnect(name: string, callback: (err: Error) => void): void;
            disconnect(name: string, message: string, callback: (err: Error) => void): void;
            disable(name: string, callback: (err: Error) => void): void;
            disable(name: string, message: string, callback: (err: Error) => void): void;
            enable(name: string, callback: (err: Error) => void): void;
            exists(name: string, callback: (err: Error, data: boolean) => void): void;
            get(name: string, callback: (err: Error, data: any) => void): void;
            list(callback: (err: Error, data: any) => void): void;
            list(full: boolean, callback: (err: Error, data: any) => void): void;
        };
        queue: {
            list(callback: (err: Error, data: any) => void): void;
            item(n: number, callback: (err: Error, data: any) => void): void;
            cancel(n: number, callback: (err: Error) => void): void;
        };
        view: {
            config(name: string, callback: (err: Error, data: any) => void): void;
            config(name: string, xml: string, callback: (err: Error, data: any) => void): void;
            create(name: string, type: 'list' | 'my', callback: (err: Error) => void): void;
            destroy(name: string, callback: (err: Error) => void): void;
            exists(name: string, callback: (err: Error, exists: boolean) => void): void;
            get(name: string, callback: (err: Error, data: any) => void): void;
            list(callback: (err: Error, data: any) => void): void;
            add(name: string, job: string, callback: (err: Error) => void): void;
            remove(name: string, job: string, callback: (err: Error) => void): void;
        };
    }

    interface JenkinsPromisifiedAPI {
        info(): Promise<any>;
        build: {
            get(name: string, n: number): Promise<any>;
            log(name: string, n: number, start?: number, type?: 'text' | 'html', meta?: boolean): Promise<any>;
            logStream(name: string, n: number, type?: 'text' | 'html', delay?: number): Promise<any>;
            stop(name: string, n: number): Promise<void>;
            term(name: string, n: number): Promise<void>;
        };
        job: {
            build(name: string, parameters?: any, token?: string): Promise<any>;
            build(opts: JobBuildOptions): Promise<any>;
            config(name: string, xml?: string): Promise<any>;
            copy(name: string, from: string): Promise<void>;
            create(name: string, xml: string): Promise<void>;
            destroy(name: string): Promise<void>;
            disable(name: string): Promise<void>;
            enable(name: string): Promise<void>;
            exists(name: string): Promise<boolean>;
            get(name: string): Promise<any>;
            list(): Promise<any>;
        };
        node: {
            config(name: string): Promise<any>;
            create(name: string): Promise<void>;
            destroy(name: string): Promise<void>;
            disconnect(name: string, message?: string): Promise<void>;
            disable(name: string, message?: string): Promise<void>;
            enable(name: string): Promise<void>;
            exists(name: string): Promise<boolean>;
            get(name: string): Promise<any>;
            list(full?: boolean): Promise<any>;
        };
        queue: {
            list(): Promise<any>;
            item(n: number): Promise<any>;
            cancel(n: number): Promise<void>;
        };
        view: {
            config(name: string, xml?: string): Promise<any>;
            create(name: string, type: 'list' | 'my'): Promise<void>;
            destroy(name: string): Promise<void>;
            exists(name: string): Promise<boolean>;
            get(name: string): Promise<any>;
            list(): Promise<any>;
            add(name: string, job: string): Promise<void>;
            remove(name: string, job: string): Promise<void>;
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
        promisify?: boolean | ((...args: any[]) => any);
    }
}

declare function create(opts?: {
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
