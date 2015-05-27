// Type definitions for SuperTest 0.14.0
// Project: https://github.com/visionmedia/supertest
// Definitions by: Alex Varju <https://github.com/varju/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path='../superagent/superagent.d.ts' />

declare module "supertest" {
  import superagent = require('superagent');

  type CallbackHandler = { (err: any, res: supertest.Response): void; }|{ (res: supertest.Response): void; };

  function supertest(app: any): supertest.SuperTest;

  module supertest {
    function agent(app?: any): supertest.SuperTest;

    interface SuperTest extends superagent.SuperAgent<Test> {
    }

    interface Test extends superagent.Request<Test> {
      url: string;
      serverAddress(app: any, path: string): string;
      expect(status: number, callback?: CallbackHandler): Test;
      expect(status: number, body: string, callback?: CallbackHandler): Test;
      expect(body: string, callback?: CallbackHandler): Test;
      expect(body: RegExp, callback?: CallbackHandler): Test;
      expect(body: Object, callback?: CallbackHandler): Test;
      expect(field: string, val: string, callback?: CallbackHandler): Test;
      expect(field: string, val: RegExp, callback?: CallbackHandler): Test;
      expect(checker: (res: Response) => any): Test;
    }

    interface Response extends superagent.Response {
    }
  }

  export = supertest;
}
