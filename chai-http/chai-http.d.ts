// Type definitions for chai-http 0.4.0
// Project: https://github.com/chaijs/chai-http
// Definitions by: Alex Varju <https://github.com/varju/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../chai/chai.d.ts" />
/// <reference path="../superagent/superagent.d.ts" />

declare module "chai" {
  import superagent = require('superagent');

  function request(app: any): ChaiHttpRequest;

  interface ChaiHttpRequest {
      get(path: string): ChaiHttpTest;
      post(path: string): ChaiHttpTest;
      put(path: string): ChaiHttpTest;
      head(path: string): ChaiHttpTest;
      del(path: string): ChaiHttpTest;
      options(path: string): ChaiHttpTest;
      trace(path: string): ChaiHttpTest;
      copy(path: string): ChaiHttpTest;
      lock(path: string): ChaiHttpTest;
      mkcol(path: string): ChaiHttpTest;
      move(path: string): ChaiHttpTest;
      propfind(path: string): ChaiHttpTest;
      proppatch(path: string): ChaiHttpTest;
      unlock(path: string): ChaiHttpTest;
      report(path: string): ChaiHttpTest;
      mkactivity(path: string): ChaiHttpTest;
      checkout(path: string): ChaiHttpTest;
      merge(path: string): ChaiHttpTest;
      //m-search(path: string): ChaiHttpTest;
      notify(path: string): ChaiHttpTest;
      subscribe(path: string): ChaiHttpTest;
      unsubscribe(path: string): ChaiHttpTest;
      patch(path: string): ChaiHttpTest;
   }

   interface ChaiHttpTest {
      req(cb: (req: superagent.Request) => void): ChaiHttpTest;
      res(cb: (res: superagent.Response) => void): void;
   }

   interface Expect {
    status(code: Number): Expect;
    header(key: string, value?: string): Expect;
    headers: Expect;
    json: Expect;
    text: Expect;
    html: Expect;
   }

   interface TypeComparison {
    ip: Expect;
   }
}

declare module "chai-http" {
}
