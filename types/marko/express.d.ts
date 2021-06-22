import * as express from 'express';
import Template from './src/runtime/html/Template';

declare module 'express-serve-static-core' {
    interface Response {
        marko(template: Template, data?: any): void;
    }
}

export = express;
