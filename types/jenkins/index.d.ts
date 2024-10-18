/// <reference types="node" />
import FormData = require("form-data");

interface CrumbData {
    headerName: string;
    headerValue: string;
    cookies?: string[];
}

interface JenkinsClientOptions {
    baseUrl: string;
    crumbIssuer?: boolean | undefined | ((client: Jenkins) => Promise<CrumbData>);
    formData?: FormData;
    headers?: any;
}

interface JobBuildOptions {
    name: string;
    parameters?: any;
    token?: string | undefined;
}

declare class Jenkins {
    constructor(opts: JenkinsClientOptions);
    info(): Promise<any>;
    build: {
        get(name: string, n: number): Promise<any>;
        log(name: string, n: number, start?: number, type?: "text" | "html", meta?: boolean): Promise<any>;
        logStream(name: string, n: number, type?: "text" | "html", delay?: number): Promise<any>;
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
        list(folder?: string): Promise<any>;
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
        create(name: string, type: "list" | "my"): Promise<void>;
        destroy(name: string): Promise<void>;
        exists(name: string): Promise<boolean>;
        get(name: string): Promise<any>;
        list(): Promise<any>;
        add(name: string, job: string): Promise<void>;
        remove(name: string, job: string): Promise<void>;
    };
}
export = Jenkins;
