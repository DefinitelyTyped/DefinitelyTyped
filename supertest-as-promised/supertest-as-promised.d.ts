// Type definitions for SuperTest as Promised v2.0.2
// Project: https://github.com/WhoopInc/supertest-as-promised
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path='../superagent/superagent.d.ts' />
/// <reference path='../supertest/supertest.d.ts' />
/// <reference path='../bluebird/bluebird.d.ts' />

declare module "supertest-as-promised" {
  import * as supertest from "supertest";
  import * as supersgent from "superagent";
  import { SuperTest, Response } from "supertest";
  import * as PromiseBlurbird from "bluebird";

  function supertestAsPromised(app: any): SuperTest<supertestAsPromised.Test>;

  namespace supertestAsPromised {
    interface Request extends supertest.Request {
    }

    interface Response extends supertest.Response {
    }

    interface Test extends Promise<Response>, supertest.Test, supersgent.Request {
      toPromise(): PromiseBlurbird<Response>;
    }

    function agent(app?: any): SuperTest<Test>;

    interface SuperTest<T> extends supertest.SuperTest<T> {
    }
  }
  export = supertestAsPromised

  // from core-js.d.ts
  /**
   * Represents the completion of an asynchronous operation
   */
  interface Promise<T> {
      /**
      * Attaches callbacks for the resolution and/or rejection of the Promise.
      * @param onfulfilled The callback to execute when the Promise is resolved.
      * @param onrejected The callback to execute when the Promise is rejected.
      * @returns A Promise for the completion of which ever callback is executed.
      */
      then<TResult>(onfulfilled?: (value: T) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => TResult | PromiseLike<TResult>): Promise<TResult>;
      then<TResult>(onfulfilled?: (value: T) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => void): Promise<TResult>;

      /**
       * Attaches a callback for only the rejection of the Promise.
       * @param onrejected The callback to execute when the Promise is rejected.
       * @returns A Promise for the completion of the callback.
       */
      catch(onrejected?: (reason: any) => T | PromiseLike<T>): Promise<T>;
      catch(onrejected?: (reason: any) => void): Promise<T>;
  }

}
