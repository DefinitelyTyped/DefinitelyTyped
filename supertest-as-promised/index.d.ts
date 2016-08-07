// Type definitions for SuperTest as Promised v2.0.2
// Project: https://github.com/WhoopInc/supertest-as-promised
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as supertest from "supertest";
import * as supersgent from "superagent";
import { SuperTest, Response } from "supertest";
import * as PromiseBlurbird from "bluebird";

declare function supertestAsPromised(app: any): SuperTest<supertestAsPromised.Test>;

declare namespace supertestAsPromised {
    interface Request extends supertest.Request {
    }

    interface Response extends supertest.Response {
    }

    interface Test extends supertest.Test, supersgent.Request {
        toPromise(): PromiseBlurbird<Response>;
        timeout(): Promise<Response> & this;
    }

    function agent(app?: any): SuperTest<Test>;

    interface SuperTest<T extends Request> extends supertest.SuperTest<T> {
    }
}
export = supertestAsPromised;
