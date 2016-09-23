// Type definitions for SuperTest v1.1.0
// Project: https://github.com/visionmedia/supertest
// Definitions by: Alex Varju <https://github.com/varju/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as superagent from "superagent"

export = supertest;

declare function supertest(app: any): supertest.SuperTest<any>;
declare namespace supertest {
    interface Response extends superagent.Response {
    }

    interface Request extends superagent.Request {
    }

    type CallbackHandler = (err: any, res: Response) => void;
    interface Test extends Request {
        app?: any;
        url: string;
        serverAddress(app: any, path: string): string;
        expect(status: number, callback?: CallbackHandler): this;
        expect(status: number, body: string, callback?: CallbackHandler): this;
        expect(body: string, callback?: CallbackHandler): this;
        expect(body: RegExp, callback?: CallbackHandler): this;
        expect(body: Object, callback?: CallbackHandler): this;
        expect(field: string, val: string, callback?: CallbackHandler): this;
        expect(fzield: string, val: RegExp, callback?: CallbackHandler): this;
        expect(checker: (res: Response) => any): this;
        end(callback?: CallbackHandler): this;
    }

    function agent(app?: any): SuperTest<Test>;

    interface SuperTest<T extends Request> extends superagent.SuperAgent<T> {
    }

}
