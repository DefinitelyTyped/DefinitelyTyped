// Type definitions for promisify-supertest v1.0.0
// Project: https://www.npmjs.com/package/promisify-supertest
// Definitions by: Leo Liang <https://github.com/aleung/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

// Mostly copy-pasted from supertest.d.ts

import * as superagent from 'superagent';
import * as express from 'express';

type CallbackHandler = (err: any, res: supertest.Response) => void;

declare function supertest(app: express.Express): supertest.SuperTest;

declare namespace supertest {
    function agent(app?: any): supertest.SuperTest;

    interface SuperTest extends superagent.SuperAgent<Test> {
    }

    interface Test extends superagent.Request {
        url: string;
        serverAddress(app: any, path: string): string;
        expect(status: number, callback?: CallbackHandler): this;
        expect(status: number, body: string, callback?: CallbackHandler): this;
        expect(body: string, callback?: CallbackHandler): this;
        expect(body: RegExp, callback?: CallbackHandler): this;
        expect(body: Object, callback?: CallbackHandler): this;
        expect(field: string, val: string, callback?: CallbackHandler): this;
        expect(field: string, val: RegExp, callback?: CallbackHandler): this;
        expect(checker: (res: Response) => any): this;
        end(callback?: CallbackHandler): this & Promise<Response>;
    }

    interface Response extends superagent.Response {
    }
}

export = supertest;
