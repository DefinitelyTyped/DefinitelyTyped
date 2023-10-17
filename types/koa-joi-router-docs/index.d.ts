import { Router } from "koa-joi-router";

export {};

declare namespace koaJoiRouterDocs {
    interface SpecConfig {
        info: {
            title: string;
            version: string;
            description: string;
        };
        basePath: string;
        tags: Array<{
            name: string;
            description: string;
        }>;
    }

    interface SpecOptions {
        warnFunc?: (() => void) | undefined;
        defaultResponses?: object | undefined;
    }

    type RouterOptions = object | string;
}

export class SwaggerAPI {
    addJoiRouter(router: Router, options?: koaJoiRouterDocs.RouterOptions): any;
    generateSpec(config: koaJoiRouterDocs.SpecConfig, options?: koaJoiRouterDocs.SpecOptions): object;
}
