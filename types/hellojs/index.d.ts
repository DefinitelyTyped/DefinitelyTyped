// Type definitions for hello.js 1.15
// Project: http://adodson.com/hello.js/
// Definitions by: Pavel Zika <https://github.com/PavelPZ>
//                 Mikko Vuorinen <https://github.com/vuorinem>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export = hello;

declare const hello: hello.HelloJSStatic;

declare namespace hello {
    interface HelloJSUtils {
        extend(r: object, ...a: any[]): any;
        error(code: number, message: string): { code: number, message: string };
        qs(url: string, params?: object, formatFunction?: (param: any) => string): string;
        param(o: object, formatFunction?: (param: any) => string): string;
        param(s: string, formatFunction?: (param: string) => any): any;
        store(name?: string, value?: any): any;
        append(node: string | HTMLElement, attr: object | undefined | null, target: string | HTMLElement): HTMLElement;
        iframe(src: string, redirectUri?: string): void;
        merge(...a: any[]): any;
        args(o: object, args: object): any | false;
        url(): Location;
        url(path: string): URL | HTMLAnchorElement;
        diff(a: any[], b: any[]): any[];
        diffKey(a: any[], b: any[]): any[];
        unique(a: any[]): any[];
        isEmpty(obj: any): boolean;
        Event: HelloJSEvent;
        globalEvent(callback: () => void, guid?: string): string;
        popup(url: string, redirectUri?: string, options?: object): Window | any;
        responseHandler(window: Window, parent?: any): void;
    }

    // API utilities
    interface HelloJSUtils {
        request(p: object, callback: HelloJSResponseCallback): void;
        request_cors(callback: HelloJSResponseCallback): boolean;
        domInstance(type: string, data: any): boolean;
        clone<T>(obj: T): T;
        xhr(method: string, url: string, headers: object, data: any, callback: HelloJSResponseCallback): XMLHttpRequest;
        jsonp(url: string, callback: () => void, callbackID?: string, timeout?: number): void;
        post(url: string, data: any, options: object, callback: HelloJSResponseCallback, callbackID?: string, timeout?: number): void;
        hasBinary(data: any): boolean;
        isBinary(data: any): boolean;
        toBlob(dataURI: string): Blob | string;
        dataToJSON(p: any): any;
        nodeListToJSON(nodelist: NodeList): any;
    }

    type HelloJSResponseCallback = (r: any, headers: any) => void;

    type HelloJSTokenResponseType = "token" | "code";

    interface HelloJSLoginOptions {
        redirect_uri?: string;
        display?: string;
        scope?: string;
        response_type?: HelloJSTokenResponseType;
        force?: boolean | null;
        oauth_proxy?: string;
        timeout?: number;
        default_service?: string;
        popup?: HelloJSPopupOptions;
        state?: string;
    }

    interface HelloJSLogoutOptions {
        force?: boolean;
    }

    interface HelloJSPopupOptions {
        resizable: number;
        scrollbars: number;
        width: number;
        height: number;
    }

    interface HelloJSEvent {
        on(event: string, callback: (auth: HelloJSEventArgument) => void): HelloJSStatic;
        off(event: string, callback: (auth: HelloJSEventArgument) => void): HelloJSStatic;
        findEvents(event: string, callback: (name: string, index: number) => void): void;
        emit(event: string, data: any): HelloJSStatic;
        emitAfter(): HelloJSStatic;
    }

    interface HelloJSEventArgument {
        network: string;
        authResponse?: any;
    }

    interface HelloJSStatic extends HelloJSEvent {
        init(serviceAppIds: { [id: string]: string; }, options?: HelloJSLoginOptions): void;
        init(servicesDef: { [id: string]: HelloJSServiceDef; }): void;
        login(callback: () => void): PromiseLike<any>;
        login(options?: HelloJSLoginOptions, callback?: () => void): PromiseLike<any>;
        login(network?: string, options?: HelloJSLoginOptions, callback?: () => void): PromiseLike<any>;
        logout(callback?: () => void): PromiseLike<any>;
        logout(options?: HelloJSLogoutOptions, callback?: () => void): PromiseLike<any>;
        logout(network?: string, options?: HelloJSLogoutOptions, callback?: () => void): PromiseLike<any>;
        getAuthResponse(network?: string): any;
        settings: HelloJSLoginOptions;
        (network: string): HelloJSStatic;
        utils: HelloJSUtils;
        api(options: object): PromiseLike<any>;
        api(path?: string, method?: string, data?: object, callback?: (json: any) => void): PromiseLike<any>;
        api(path?: string, query?: object, method?: string, data?: object, timeout?: number, callback?: (json: any) => void): PromiseLike<any>;
    }

    interface HelloJSOAuthDef {
        version: string | number;
        auth?: string;
    }

    interface HelloJSOAuth2Def extends HelloJSOAuthDef {
        grant?: string;
        response_type?: HelloJSTokenResponseType;
    }

    interface HelloJSOAuth1Def extends HelloJSOAuthDef {
        request?: string;
        token?: string;
    }

    type HelloJSUrlMappingFunction = (p: any, callback: (url: string) => void) => void;

    interface HelloJSServiceDef {
        name?: string;
        oauth: HelloJSOAuth2Def | HelloJSOAuth1Def;
        scope?: { [id: string]: string; };
        scope_delim?: string;
        refresh?: boolean;
        base?: string;
        root?: string;
        get?: { [id: string]: string | HelloJSUrlMappingFunction };
        post?: { [id: string]: string | HelloJSUrlMappingFunction };
        del?: { [id: string]: string | HelloJSUrlMappingFunction };
        put?: { [id: string]: string | HelloJSUrlMappingFunction };
        patch?: { [id: string]: string | HelloJSUrlMappingFunction };
        wrap?: { [id: string]: (r: any, headers: any, p: any) => void; };
        xhr?(p: any, query: any): void;
        jsonp?: ((p: any, query: any) => void) | boolean;
        form?: ((p: any, query: any) => void) | boolean;
        login?(p: any): void;
        logout?: ((callback: () => void | string) => void) | string;
    }
}
