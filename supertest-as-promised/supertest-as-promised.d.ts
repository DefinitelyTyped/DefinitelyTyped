// Type definitions for SuperTest as Promised v2.0.2
// Project: https://github.com/WhoopInc/supertest-as-promised
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path='../superagent/superagent.d.ts' />
/// <reference path="../bluebird/bluebird.d.ts" />

declare module "supertest-as-promised" {
  // Mostly copy-pasted from supertest.d.ts

  import * as superagent from 'superagent';
  import * as PromiseBluebird from 'bluebird';

  function supertest(app: any): supertest.SuperTest;

  module supertest {
    function agent(app?: any): supertest.SuperTest;

    interface SuperTest extends superagent.SuperAgent<Test> {
    }

    interface Promise<T> extends PromiseBluebird<T> {
      toPromise(): PromiseBluebird<T>;
    }

    interface Test extends superagent.Request<Test> {
      url: string;
      serverAddress(app: any, path: string): string;
      expect(status: number): Promise<supertest.Response>;
      expect(status: number, body: string): Promise<supertest.Response>;
      expect(body: string): Promise<supertest.Response>;
      expect(body: RegExp): Promise<supertest.Response>;
      expect(body: Object): Promise<supertest.Response>;
      expect(field: string, val: string): Promise<supertest.Response>;
      expect(field: string, val: RegExp): Promise<supertest.Response>;
      expect(checker: (res: Response) => any): Promise<supertest.Response>;
    }

    interface Response extends superagent.Response {
    }
  }

  export = supertest;
}
