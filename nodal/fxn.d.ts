/// <reference types="node"/>

declare module "fxn" {
    namespace fxn {
      type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS';

      interface HttpHeaders {
        [item: string]: string;
      }

      abstract class Controller {

        protected _method: HttpMethod;
        protected _path: string;
        protected _requestHeaders: Object;
        protected _headers: Object;
        protected _status: number;
        protected _responder: Function;
        protected _securityPolicies: Object;
        protected params: any;

        constructor(path: string, method: string, requestHeaders: Object, params: Object, responder: Function);
        convertMethod(method: HttpMethod, id: number): string;
        run(): void;
        notImplemented(msg: string, details: Object): boolean;
        before(): void;
        after(): void;
        get(): void;
        put(): void;
        post(): void;
        del(): void;
        options(): void;
        index(): void;
        show(): void;
        update(): void;
        create(): void;
        destroy(): void;
        status(value: number): boolean;
        setHeaders(): HttpHeaders;
        setHeader(key: string, value: string): string;
        appendHeader(key: string, value: string): string;
        getHeader(key: string, value: string): string;
        code(code: number): number;
        getStatus(): number;
        render(data: Buffer | String | Object): void;
        allowOrigin(value: string): this;
        securityPolicy(directive: string, src: string): string;
        redirect(location: string): void;
      }

      abstract class Daemon {
        constructor(string: string);
      }

      abstract class Application {
        constructor(string: string);
        send: Function;
      }

      abstract class Router {}
      abstract class Scheduler {}
    }

    export = fxn;
}
