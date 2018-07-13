// Type definitions for zipkin-javascript-opentracing 1.6
// Project: https://github.com/DanielMSchmidt/zipkin-javascript-opentracing
// Definitions by: Laurent Gilly <https://github.com/laurentgilly>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = zipkin_javascript_opentracing;

declare class zipkin_javascript_opentracing {
    constructor(...args: any[]);

    extract(format: any, carrier: any): any;

    inject(span: any, format: any, carrier: any): void;

    startSpan(name: any, ...args: any[]): any;

    static FORMAT_BINARY: string;

    static FORMAT_HTTP_HEADERS: string;

    static FORMAT_TEXT_MAP: string;

    static makeOptional(val: any): any;
}

declare namespace zipkin_javascript_opentracing {
    namespace makeOptionalNamespace {
        const prototype: {};
    }

    namespace prototypeNamespace {
        function extract(format: any, carrier: any): any;

        function inject(span: any, format: any, carrier: any): void;

        function startSpan(name: any, ...args: any[]): any;

        namespace extract {
            const prototype: {};
        }

        namespace inject {
            const prototype: {};
        }

        namespace startSpan {
            const prototype: {};
        }
    }
}
