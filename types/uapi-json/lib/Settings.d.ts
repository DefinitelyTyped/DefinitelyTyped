export interface Options {
    logFunction: (...args: any) => any;
}

export interface Auth {
    username: string;
    password: string;
    targetBranch: string;
    region?: string;
    emulatePcc?: string | boolean;
    provider?: string;
}

export interface Settings {
    auth: Auth;
    debug?: 0 | 1 | 2 | 3;
    production?: boolean;
    timeout?: number;
    autoClose?: boolean;
    options?: Options;
}
