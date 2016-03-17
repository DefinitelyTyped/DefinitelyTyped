// Type definitions for promisify-supertest v1.0.0
// Project: https://www.npmjs.com/package/promisify-supertest
// Definitions by: Leo Liang <https://github.com/aleung/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path='../superagent/superagent.d.ts' />
/// <reference path="../express/express.d.ts" />

declare module 'promisify-supertest' {
  // Mostly copy-pasted from supertest.d.ts

  import * as superagent from 'superagent';
  import * as express from 'express';

  type CallbackHandler = (err: any, res: supertest.Response) => void;

  function supertest(app: express.Express): supertest.SuperTest;

  namespace supertest {
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
      end(callback: CallbackHandler): Test;
      end(): Promise<Response>;
    }

    interface Response extends superagent.Response {
    }
  }

  export = supertest;
}
