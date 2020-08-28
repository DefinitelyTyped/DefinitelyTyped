// Type definitions for koa-joi-router-docs 1.0
// Project: https://github.com/o2team/koa-joi-router-docs#readme
// Definitions by: 4doge <https://github.com/4doge>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { Router } from 'koa-joi-router';

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
        warnFunc?: () => void;
        defaultResponses?: object;
    }

    type RouterOptions = object | string;
}

export class SwaggerAPI {
    addJoiRouter(router: Router, options?: koaJoiRouterDocs.RouterOptions): any;
    generateSpec(config: koaJoiRouterDocs.SpecConfig, options?: koaJoiRouterDocs.SpecOptions): object;
}
