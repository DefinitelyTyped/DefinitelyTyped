// Type definitions for SuperTest as Promised v2.0.2
// Project: https://github.com/WhoopInc/supertest-as-promised
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path='../superagent/superagent.d.ts' />
/// <reference path='../supertest/supertest.d.ts' />
/// <reference path='../bluebird/bluebird.d.ts' />

declare module "supertest-as-promised" {
  import * as supertest from "supertest";
  import * as PromiseBluebird from "bluebird";

  import { SuperTest, Response } from "supertest";

  function supertestAsPromised(app: any): SuperTest<supertestAsPromised.Test>;

  namespace supertestAsPromised {
    interface Test extends PromiseBluebird<Response>, supertest.Test {
      toPromise(): PromiseBluebird<Response>;
    }
    function agent(app?: any): SuperTest<Test>;

    interface Response extends supertest.Response {
    }

    interface SuperTest<T extends Test> extends supertest.SuperTest<T> {
    }
  }
  export = supertestAsPromised
}
