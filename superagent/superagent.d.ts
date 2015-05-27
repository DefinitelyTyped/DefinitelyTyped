// Type definitions for SuperAgent 0.15.4
// Project: https://github.com/visionmedia/superagent
// Definitions by: Alex Varju <https://github.com/varju/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path='../node/node.d.ts' />

declare module "superagent" {
  import stream = require('stream');

  type CallbackHandler = { (err: any, res: request.Response): void; }|{ (res: request.Response): void; };

  var request: request.SuperAgentStatic;

  module request {
    interface SuperAgentStatic extends SuperAgent<SuperAgentRequest> {
      (url: string): SuperAgentRequest;
      (method: string, url: string): SuperAgentRequest;

      agent(): SuperAgent<SuperAgentRequest>;
    }

    interface SuperAgent<Req extends Request<any>> extends stream.Stream {
      get(url: string, callback?: CallbackHandler): Req;
      post(url: string, callback?: CallbackHandler): Req;
      put(url: string, callback?: CallbackHandler): Req;
      head(url: string, callback?: CallbackHandler): Req;
      del(url: string, callback?: CallbackHandler): Req;
      options(url: string, callback?: CallbackHandler): Req;
      trace(url: string, callback?: CallbackHandler): Req;
      copy(url: string, callback?: CallbackHandler): Req;
      lock(url: string, callback?: CallbackHandler): Req;
      mkcol(url: string, callback?: CallbackHandler): Req;
      move(url: string, callback?: CallbackHandler): Req;
      purge(url: string, callback?: CallbackHandler): Req;
      propfind(url: string, callback?: CallbackHandler): Req;
      proppatch(url: string, callback?: CallbackHandler): Req;
      unlock(url: string, callback?: CallbackHandler): Req;
      report(url: string, callback?: CallbackHandler): Req;
      mkactivity(url: string, callback?: CallbackHandler): Req;
      checkout(url: string, callback?: CallbackHandler): Req;
      merge(url: string, callback?: CallbackHandler): Req;
      // m-search(url: string, callback?: CallbackHandler): Req;
      notify(url: string, callback?: CallbackHandler): Req;
      subscribe(url: string, callback?: CallbackHandler): Req;
      unsubscribe(url: string, callback?: CallbackHandler): Req;
      patch(url: string, callback?: CallbackHandler): Req;
      search(url: string, callback?: CallbackHandler): Req;
      connect(url: string, callback?: CallbackHandler): Req;

      parse(fn: Function): Req;
      saveCookies(res: Response): void;
      attachCookies(req: Req): void;
    }

    interface Response extends NodeJS.ReadableStream {
      text: string;
      body: any;
      files: any;
      header: any;
      type: string;
      charset: string;
      status: number;
      statusType: number;
      info: boolean;
      ok: boolean;
      redirect: boolean;
      clientError: boolean;
      serverError: boolean;
      error: Error;
      accepted: boolean;
      noContent: boolean;
      badRequest: boolean;
      unauthorized: boolean;
      notAcceptable: boolean;
      notFound: boolean;
      forbidden: boolean;
      get(header: string): string;
    }

    interface Request<Req extends Request<any>> /* extends NodeJS.WritableStream */ {
      abort(): void;
      accept(type: string): Req;
      attach(field: string, file: string, filename?: string): Req;
      auth(user: string, name: string): Req;
      buffer(val: boolean): Req;
      clearTimeout(): Req;
      end(callback?: CallbackHandler): Req;
      field(name: string, val: string): Req;
      get(field: string): string;
      on(name: string, handler: Function): Req;
      on(name: 'error', handler: (err: any) => void): Req;
      part(): Req;
      pipe(stream: NodeJS.WritableStream, options?: Object): stream.Writable;
      query(val: Object): Req;
      redirects(n: number): Req;
      send(data: string): Req;
      send(data: Object): Req;
      set(field: string, val: string): Req;
      set(field: Object): Req;
      timeout(ms: number): Req;
      type(val: string): Req;
      withCredentials(): Req;
      write(data: string, encoding?: string): Req;
      write(data: Buffer, encoding?: string): Req;
    }
    interface SuperAgentRequest extends Request<Request<Request<Request<any>>>> {}

  }

  export = request;
}

