// Type definitions for SuperTest 0.8.0
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
      expect(status: number, callback?: (err: Error, res: superagent.Response) => void): Test;
      expect(status: number, body: string, callback?: (err: Error, res: superagent.Response) => void): Test;
      expect(body: string, callback?: (err: Error, res: superagent.Response) => void): Test;
      expect(body: RegExp, callback?: (err: Error, res: superagent.Response) => void): Test;
      expect(body: Object, callback?: (err: Error, res: superagent.Response) => void): Test;
      expect(field: string, val: string, callback?: (err: Error, res: superagent.Response) => void): Test;
      expect(field: string, val: RegExp, callback?: (err: Error, res: superagent.Response) => void): Test;
      set(field: string, val: string): Test;
      set(field: Object): Test;
      query(val: Object): Test;
      send(data: string): Test;
      send(data: Object): Test;
    }

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

    function agent(): superagent.Agent;
  }

  function supertest(app: any): supertest.SuperTest;
  export = supertest;
}
