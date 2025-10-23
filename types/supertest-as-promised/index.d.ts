import * as PromiseBluebird from "bluebird";
import supertest = require("supertest");
import { Server } from "tls";

declare function supertestAsPromised(app: any): supertestAsPromised.SuperTest;

declare namespace supertestAsPromised {
    interface Request extends supertest.Request {
    }

    interface Response extends supertest.Response {
    }

    type CallbackHandler = (err: any, res: Response) => void;

    interface Test extends supertest.Request {
        toPromise(): PromiseBluebird<Response & Test>;
        timeout(): Promise<Response> & this;
        end(callback?: CallbackHandler): this;
        app: Server;
        url: string;

        serverAddress(app: Server, path: string): string;

        expect(status: number, callback?: CallbackHandler): this;
        expect(status: number, body: any, callback?: CallbackHandler): this;
        expect(checker: (res: Response) => any, callback?: CallbackHandler): this;
        expect(body: string, callback?: CallbackHandler): this;
        expect(body: RegExp, callback?: CallbackHandler): this;
        expect(body: object, callback?: CallbackHandler): this;
        expect(field: string, val: string, callback?: CallbackHandler): this;
        expect(field: string, val: RegExp, callback?: CallbackHandler): this;
    }

    function agent(app?: any): SuperTest;

    interface SuperTest extends supertest.SuperTest<Test> {
    }
}
export = supertestAsPromised;
