// Type definitions for SuperTest as Promised 2.0
// Project: https://github.com/WhoopInc/supertest-as-promised
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import * as supertest from "supertest";
import * as superagent from "superagent";
import { SuperTest, Response } from "supertest";
import * as PromiseBluebird from "bluebird";

declare function supertestAsPromised(app: any): SuperTest<supertestAsPromised.Test>;

declare namespace supertestAsPromised {
    interface Request extends supertest.Request {
    }

    interface Response extends supertest.Response {
    }

    type CallbackHandler = (err: any, res: Response) => void;
    interface Test extends supertest.Test, superagent.Request {
        toPromise(): PromiseBluebird<Response>;
        timeout(): Promise<Response> & this;
        end(callback?: CallbackHandler): this;
    }

    function agent(app?: any): SuperTest<Test>;

    interface SuperTest<T extends Request> extends supertest.SuperTest<T> {
    }
}
export = supertestAsPromised;
