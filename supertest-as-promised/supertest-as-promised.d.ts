// Type definitions for SuperTest as Promised v2.0.2
// Project: https://github.com/WhoopInc/supertest-as-promised
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path='../superagent/superagent.d.ts' />
/// <reference path='../supertest/supertest.d.ts' />
/// <reference path='../bluebird/bluebird.d.ts' />

declare module "supertest-as-promised" {
  import * as supertest from "supertest";
  import * as superagent from "superagent";
  import * as PromiseBlurbird from "bluebird";

  function supertestAsPromised(app: supertest.App): supertest.SuperTest<supertestAsPromised.Test>;
  function supertestAsPromised(promiseConstructor: { resolve: Function, reject: Function }): (app: supertest.App) => supertest.SuperTest<supertestAsPromised.Test>;

  namespace supertestAsPromised {
    interface Request extends supertest.Request {
    }

    interface Response extends supertest.Response {
    }

    interface Test extends supertest.Test, superagent.Request {
      toPromise(): PromiseBlurbird<Response>;
    }

    function agent(app?: any): supertest.SuperTest<Test>;

    interface SuperTest<T> extends supertest.SuperTest<T> {
    }
  }
  export = supertestAsPromised;
}
