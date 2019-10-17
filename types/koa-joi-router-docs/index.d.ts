// Type definitions for koa-joi-router-docs 1.0
// Project: https://github.com/o2team/koa-joi-router-docs#readme
// Definitions by: 4doge <https://github.com/4doge>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'koa-joi-router-docs' {
    import { Router } from 'koa-joi-router';

    interface ISpecConfig {
        info: {
            title: string;
            version: string;
            description: string;
        },
        basePath: string;
        tags: {
            name: string;
            description: string;
        }[];
    }
    
    interface ISpecOptions {
        warnFunc?: Function;
        defaultResponses?: object;
    }
    
    type RouterOptions = object | string;
    
    
    export class SwaggerAPI {
        addJoiRouter(router: Router, options?: RouterOptions): any;
        generateSpec(config: ISpecConfig, options?: ISpecOptions): object;
    }
}
