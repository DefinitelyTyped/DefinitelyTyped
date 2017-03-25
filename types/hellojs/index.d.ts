// Type definitions for hello.js 0.2
// Project: http://adodson.com/hello.js/
// Definitions by: Pavel Zika <https://github.com/PavelPZ>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface HelloJSLoginOptions {
    redirect_uri?: string;
    display?: string;
    scope?: string;
    response_type?: string;
    force?: boolean;
    oauth_proxy?: string;
    timeout?: number;
    default_service?: string;
}

interface HelloJSLogoutOptions {
    force?: boolean;
}

interface HelloJSImmediateSuccessCB<T, TP> {
    (value: T): TP;
}

interface HelloJSImmediateErrorCB<TP> {
    (err: any): TP;
}

interface HelloJSDeferredSuccessCB<T, TP> {
    (value: T): HelloJSThenable<TP>;
}

interface HelloJSDeferredErrorCB<TP> {
    (error: any): HelloJSThenable<TP>;
}

interface HelloJSThenable<T> {
    then<TP>(
            successCB?:  HelloJSDeferredSuccessCB<T, TP>,
            errorCB?:    HelloJSDeferredErrorCB<TP>
        ): HelloJSThenable<TP>;

    then<TP>(
            successCB?:   HelloJSDeferredSuccessCB<T, TP>,
            errorCB?:   HelloJSImmediateErrorCB<TP>
        ): HelloJSThenable<TP>;

    then<TP>(
            successCB?:  HelloJSImmediateSuccessCB<T, TP>,
            errorCB?:    HelloJSDeferredErrorCB<TP>
        ): HelloJSThenable<TP>;

    then<TP>(
            successCB?:  HelloJSImmediateSuccessCB<T, TP>,
            errorCB?:   HelloJSImmediateErrorCB<TP>
        ): HelloJSThenable<TP>;
}

interface HelloJSEvent extends HelloJSThenable<void> {
    on(event: string, callback: (auth: HelloJSEventArgument) => void): HelloJSStatic;
    off(event: string, callback: (auth: HelloJSEventArgument) => void): HelloJSStatic;
    findEvents(event: string, callback: (name: string, index: number) => void): void;
    emit(event: string, data: any): HelloJSStatic;
    emitAfter(): HelloJSStatic;
    success(callback: (json?: any) => void): HelloJSStatic;
    error(callback: (json?: any) => void): HelloJSStatic;
    complete(callback: (json?: any) => void): HelloJSStatic;
}



interface HelloJSEventArgument {
    network: string;
    authResponse?: any;
}


interface HelloJSStatic extends HelloJSEvent {
    init(serviceAppIds: { [id: string]: string; }, options?: HelloJSLoginOptions): void;
    login(network: string, options?: HelloJSLoginOptions, callback?: () => void): HelloJSStatic;
    logout(network: string, options?: HelloJSLogoutOptions, callback?: () => void): HelloJSStatic;
    getAuthResponse(network: string): any;
    service(network: string): HelloJSServiceDef;
    settings: HelloJSLoginOptions;
    (network: string): HelloJSStaticNamed;
    init(servicesDef: { [id: string]: HelloJSServiceDef; }): void;
}

interface HelloJSStaticNamed {
    login(option?: HelloJSLoginOptions, callback?: () => void): void;
    logout(callback?: () => void): void;
    getAuthResponse(): any;
    api(path?: string, method?: string, data?: any, callback?: (json?: any) => void):  HelloJSStatic;
}

interface HelloJSOAuthDef {
    version: number;
    auth: string;
    request: string;
    token: string;
}

interface HelloJSServiceDef {
    name: string;
    oauth: HelloJSOAuthDef;
    scope?: { [id: string]: string; };
    scope_delim?: string;
    autorefresh?: boolean;
    base?: string;
    root?: string;
    get?: { [id: string]: any; };
    post?: { [id: string]: any; };
    del?: { [id: string]: string; };
    put?: { [id: string]: any; };
    wrap?: { [id: string]: (par: any) => void; };
    xhr?: (par: any) => void;
    jsonp?: (par: any) => void;
    form?: (par: any) => void;
    api?: (...par: any[]) => void;
}

declare var hello: HelloJSStatic;

// Support AMD require
declare module 'hellojs' {
  export = hello;
}
