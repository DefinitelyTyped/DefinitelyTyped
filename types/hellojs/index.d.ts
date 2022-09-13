// Type definitions for hello.js 1.19
// Project: https://adodson.com/hello.js
// Definitions by: Pavel Zika <https://github.com/PavelPZ>
//                 Mikko Vuorinen <https://github.com/vuorinem>
//                 Vincent Biret <https://github.com/baywet>
//                 Batuhan Wilhelm <https://github.com/batuhanw>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = hello;
export as namespace hello;

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

    type HelloJSTokenResponseType =
        "code"
        | "code id_token"
        | "code id_token token"
        | "code token"
        | "id_token"
        | "id_token token"
        | "none"
        | "token";

    type HelloJSDisplayType = "popup" | "page" | "none";

    interface HelloJSLoginOptions {
        redirect_uri?: string | undefined;
        display?: HelloJSDisplayType | undefined;
        scope?: string | undefined;
        response_type?: HelloJSTokenResponseType | undefined;
        force?: boolean | null | undefined;
        oauth_proxy?: string | undefined;
        timeout?: number | undefined;
        default_service?: string | undefined;
        popup?: HelloJSPopupOptions | undefined;
        state?: string | undefined;
    }

    interface HelloJSLogoutOptions {
        force?: boolean | undefined;
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
        authResponse?: HelloJSAuthResponse | undefined;
    }

    interface HelloJSLoginEventArguement {
        network: string;
        authResponse?: HelloJSAuthResponse | undefined;
        error?: Error | undefined;
    }

    interface HelloJSAuthResponse {
        client_id?: string | undefined;
        access_token?: string | undefined;
        token_type?: string | undefined;
        expires_in?: number | undefined;
        id_token?: string | undefined;
        state?: string | undefined;
        session_state?: string | undefined;
        network?: string | undefined;
        display?: HelloJSDisplayType | undefined;
        redirect_uri?: string | undefined;
        scope?: string | undefined;
        expires?: number | undefined;
    }

    interface HelloJSStatic extends HelloJSEvent {
        init(serviceAppIdsOrDefs: { [id: string]: string | HelloJSServiceDef; }, options?: HelloJSLoginOptions): void;
        login(callback: () => void): PromiseLike<HelloJSLoginEventArguement>;
        login(options?: HelloJSLoginOptions, callback?: () => void): PromiseLike<HelloJSLoginEventArguement>;
        login(network?: string, options?: HelloJSLoginOptions, callback?: () => void): PromiseLike<HelloJSLoginEventArguement>;
        logout(callback?: () => void): PromiseLike<any>;
        logout(options?: HelloJSLogoutOptions, callback?: () => void): PromiseLike<any>;
        logout(network?: string, options?: HelloJSLogoutOptions, callback?: () => void): PromiseLike<any>;
        getAuthResponse(network?: string): HelloJSAuthResponse;
        settings: HelloJSLoginOptions;
        (network: string): HelloJSStatic;
        utils: HelloJSUtils;
        api(options: object): PromiseLike<any>;
        api(path?: string, method?: string, data?: object, callback?: (json: any) => void): PromiseLike<any>;
        api(path?: string, query?: object, method?: string, data?: object, timeout?: number, callback?: (json: any) => void): PromiseLike<any>;
    }

    interface HelloJSOAuthDef {
        version: string | number;
        auth?: string | undefined;
    }

    interface HelloJSOAuth2Def extends HelloJSOAuthDef {
        grant?: string | undefined;
        response_type?: HelloJSTokenResponseType | undefined;
    }

    interface HelloJSOAuth1Def extends HelloJSOAuthDef {
        request?: string | undefined;
        token?: string | undefined;
    }

    type HelloJSUrlMappingFunction = (p: any, callback: (url: string) => void) => void;

    interface HelloJSServiceDef {
        id?: string | undefined;
        name?: string | undefined;
        oauth: HelloJSOAuth2Def | HelloJSOAuth1Def;
        scope?: { [id: string]: string; } | undefined;
        scope_delim?: string | undefined;
        refresh?: boolean | undefined;
        base?: string | undefined;
        root?: string | undefined;
        get?: { [id: string]: string | HelloJSUrlMappingFunction } | undefined;
        post?: { [id: string]: string | HelloJSUrlMappingFunction } | undefined;
        del?: { [id: string]: string | HelloJSUrlMappingFunction } | undefined;
        put?: { [id: string]: string | HelloJSUrlMappingFunction } | undefined;
        patch?: { [id: string]: string | HelloJSUrlMappingFunction } | undefined;
        wrap?: { [id: string]: (r: any, headers: any, p: any) => void; } | undefined;
        xhr?(p: any, query: any): void;
        jsonp?: ((p: any, query: any) => void) | boolean | undefined;
        form?: ((p: any, query: any) => void) | boolean | undefined;
        login?(p: any): void;
        logout?: ((callback: () => void | string) => void) | string | undefined;
    }
}
