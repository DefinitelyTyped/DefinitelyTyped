import * as PromiseBluebird from "bluebird";
import * as superagent from "superagent";
import * as supertest from "supertest";
import { Response, SuperTest } from "supertest";

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
