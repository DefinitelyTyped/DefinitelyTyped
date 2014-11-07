// Type definitions for SuperTest 0.14.0
// Project: https://github.com/visionmedia/supertest
// Definitions by: Alex Varju <https://github.com/varju/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path='../superagent/superagent.d.ts' />

declare module "supertest" {
  import superagent = require('superagent');

  module supertest {
    interface Test extends superagent.Request {
      url: string;
      serverAddress(app: any, path: string): string;
      expect(status: number, callback?: (err: Error, res: Response) => void): Test;
      expect(status: number, body: string, callback?: (err: Error, res: Response) => void): Test;
      expect(body: string, callback?: (err: Error, res: Response) => void): Test;
      expect(body: RegExp, callback?: (err: Error, res: Response) => void): Test;
      expect(body: Object, callback?: (err: Error, res: Response) => void): Test;
      expect(field: string, val: string, callback?: (err: Error, res: Response) => void): Test;
      expect(field: string, val: RegExp, callback?: (err: Error, res: Response) => void): Test;
      expect(checker: (res: Response) => any): Test;

      attach(field: string, file: string, filename: string): Test;
      redirects(n: number): Test;
      part(): Test;
      set(field: string, val: string): Test;
      set(field: Object): Test;
      type(val: string): Test;
      query(val: Object): Test;
      send(data: string): Test;
      send(data: Object): Test;
      buffer(val: boolean): Test;
      timeout(ms: number): Test;
      clearTimeout(): Test;
      auth(user: string, name: string): Test;
      field(name: string, val: string): Test;
      end(callback?: (err: Error, res: Response) => void): Test;
    }
    interface Response extends superagent.Response {}

    interface SuperTest {
      get(url: string): Test;
      post(url: string): Test;
      put(url: string): Test;
      head(url: string): Test;
      del(url: string): Test;
      options(url: string): Test;
      trace(url: string): Test;
      copy(url: string): Test;
      lock(url: string): Test;
      mkcol(url: string): Test;
      move(url: string): Test;
      propfind(url: string): Test;
      proppatch(url: string): Test;
      unlock(url: string): Test;
      report(url: string): Test;
      mkactivity(url: string): Test;
      checkout(url: string): Test;
      merge(url: string): Test;
      //m-search(url: string): Test;
      notify(url: string): Test;
      subscribe(url: string): Test;
      unsubscribe(url: string): Test;
      patch(url: string): Test;
    }

    interface TestAgent extends superagent.Agent {
      get(url: string, callback?: (err: Error, res: Response) => void): Test;
      post(url: string, callback?: (err: Error, res: Response) => void): Test;
      put(url: string, callback?: (err: Error, res: Response) => void): Test;
      head(url: string, callback?: (err: Error, res: Response) => void): Test;
      del(url: string, callback?: (err: Error, res: Response) => void): Test;
      options(url: string, callback?: (err: Error, res: Response) => void): Test;
      trace(url: string, callback?: (err: Error, res: Response) => void): Test;
      copy(url: string, callback?: (err: Error, res: Response) => void): Test;
      lock(url: string, callback?: (err: Error, res: Response) => void): Test;
      mkcol(url: string, callback?: (err: Error, res: Response) => void): Test;
      move(url: string, callback?: (err: Error, res: Response) => void): Test;
      propfind(url: string, callback?: (err: Error, res: Response) => void): Test;
      proppatch(url: string, callback?: (err: Error, res: Response) => void): Test;
      unlock(url: string, callback?: (err: Error, res: Response) => void): Test;
      report(url: string, callback?: (err: Error, res: Response) => void): Test;
      mkactivity(url: string, callback?: (err: Error, res: Response) => void): Test;
      checkout(url: string, callback?: (err: Error, res: Response) => void): Test;
      merge(url: string, callback?: (err: Error, res: Response) => void): Test;
      //m-search(url: string, callback?: (err: Error, res: Response) => void): Test;
      notify(url: string, callback?: (err: Error, res: Response) => void): Test;
      subscribe(url: string, callback?: (err: Error, res: Response) => void): Test;
      unsubscribe(url: string, callback?: (err: Error, res: Response) => void): Test;
      patch(url: string, callback?: (err: Error, res: Response) => void): Test;
      search(url: string, callback?: (err: Error, res: Response) => void): Test;
      connect(url: string, callback?: (err: Error, res: Response) => void): Test;
    }
    function agent(app?: any): supertest.TestAgent;
  }

  function supertest(app: any): supertest.SuperTest;
  export = supertest;
}
