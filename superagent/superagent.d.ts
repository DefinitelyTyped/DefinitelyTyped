// Type definitions for SuperAgent v2.0.0
// Project: https://github.com/visionmedia/superagent
// Definitions by: Alex Varju <https://github.com/varju/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path='../node/node.d.ts' />

declare module "superagent" {
  import stream = require('stream');

  type CallbackHandler = (err: any, res: request.Response) => void;

  var request: request.SuperAgentStatic;

  namespace request {
    interface SuperAgentRequest extends Request {}
    interface SuperAgentStatic extends SuperAgent<SuperAgentRequest> {
      (url: string): SuperAgentRequest;
      (method: string, url: string): SuperAgentRequest;

      agent(): SuperAgent<SuperAgentRequest>;
    }

    interface SuperAgent<Req> extends stream.Stream {
      get(url: string, callback?: CallbackHandler): Req;
      post(url: string, callback?: CallbackHandler): Req;
      put(url: string, callback?: CallbackHandler): Req;
      head(url: string, callback?: CallbackHandler): Req;
      del(url: string, callback?: CallbackHandler): Req;
      delete(url: string, callback?: CallbackHandler): Req;
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

      parse(fn: (res: Response, callback: (err: Error, body: any) => void) => void): this;
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

    interface Request extends Promise<Response> /* extends NodeJS.WritableStream */ {
      abort(): void;
      accept(type: string): this;
      attach(field: string, file: string, filename?: string): this;
      auth(user: string, name: string): this;
      buffer(val?: boolean): this;
      clearTimeout(): this;
      end(callback?: CallbackHandler): this;
      field(name: string, val: string): this;
      get(field: string): string;
      on(name: string, handler: Function): this;
      on(name: 'error', handler: (err: any) => void): this;
      part(): this;
      pipe(stream: NodeJS.WritableStream, options?: Object): stream.Writable;
      query(val: Object): this;
      redirects(n: number): this;
      send(data: string): this;
      send(data: Object): this;
      send(): this;
      set(field: string, val: string): this;
      set(field: Object): this;
      timeout(ms: number): this;
      type(val: string): this;
      use(fn: Function): this;
      withCredentials(): this;
      write(data: string, encoding?: string): this;
      write(data: Buffer, encoding?: string): this;
      parse(fn: (res: Response, callback: (err: Error, body: any) => void) => void): this;
    }

  }

  export = request;
}
