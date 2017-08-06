// Type definitions for next 2.4
// Project: https://github.com/zeit/next.js
// Definitions by: Drew Hays <https://github.com/dru89>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

declare module 'next' {
  import * as http from 'http';
  import * as url from 'url';

  namespace next {
    type UrlLike = url.UrlObject | url.Url;

    interface ServerConfig {
      // known keys
      webpack?: any;
      webpackDevMiddleware?: any;
      poweredByHeader?: boolean;
      distDir?: string;
      assetPrefix?: string;
      configOrigin?: string;
      useFileSystemPublicRoutes?: boolean;

      // and since this is a config, it can take anything else, too.
      [key: string]: any;
    }

    interface ServerOptions {
      dir?: string;
      dev?: boolean;
      staticMarkup?: boolean;
      quiet?: boolean;
      conf?: ServerConfig;
    }

    interface Server {
      handleRequest(req: http.IncomingMessage, res: http.ServerResponse, parsedUrl?: UrlLike): Promise<void>;
      getRequestHandler(): (req: http.IncomingMessage, res: http.ServerResponse, parsedUrl?: UrlLike) => Promise<void>;
      prepare(): Promise<void>;
      close(): Promise<void>;
      defineRoutes(): Promise<void>;
      start(): Promise<void>;
      run(req: http.IncomingMessage, res: http.ServerResponse, parsedUrl: UrlLike): Promise<void>;

      render(req: http.IncomingMessage, res: http.ServerResponse, pathname: string, query?: {[key: string]: any}, parsedUrl?: UrlLike): Promise<void>;
      renderError(err: any, req: http.IncomingMessage, res: http.ServerResponse, pathname: string, query?: {[key: string]: any}): Promise<void>;
      render404(req: http.IncomingMessage, res: http.ServerResponse, parsedUrl: UrlLike): Promise<void>;
      renderToHTML(req: http.IncomingMessage, res: http.ServerResponse, pathname: string, query?: {[key: string]: any}): Promise<string>;
      renderErrorToHTML(err: any, req: http.IncomingMessage, res: http.ServerResponse, pathname: string, query?: {[key: string]: any}): Promise<string>;

      serveStatic(req: http.IncomingMessage, res: http.ServerResponse, path: string): Promise<void>;
      isServeableUrl(path: string): boolean;
      isInternalUrl(req: http.IncomingMessage): boolean;
      readBuildId(): string;
      handleBuildId(buildId: string, res: http.ServerResponse): boolean;
      getCompilationError(page: string, req: http.IncomingMessage, res: http.ServerResponse): Promise<any>;
      handleBuildHash(filename: string, hash: string, res: http.ServerResponse): void;
      send404(res: http.ServerResponse): void;
    }
  }

  function next(options?: next.ServerOptions): next.Server;
  export = next;
}

declare module 'next/error' {
  import * as React from 'react';
  export default class extends React.Component<{statusCode: number}, {}> {}
}

declare module 'next/head' {
  import * as React from 'react';

  function defaultHead(): JSX.Element[];
  export default class extends React.Component<{}, {}> {
    static canUseDOM: boolean;
    static peek(): Array<React.ReactElement<any>>;
    static rewind(): Array<React.ReactElement<any>>;
  }
}

declare module 'next/document' {
  import * as React from 'react';

  interface DocumentProps {
    __NEXT_DATA__?: any;
    dev?: boolean;
    chunks?: string[];
    head?: Array<React.ReactElement<any>>;
    styles?: Array<React.ReactElement<any>>;
    [key: string]: any;
  }

  class Head extends React.Component<any, {}> {}
  class Main extends React.Component<{}, {}> {}
  class NextScript extends React.Component<{}, {}> {}
  export default class extends React.Component<DocumentProps, {}> {}
}

declare module 'next/link' {
  import * as url from 'url';
  import * as React from 'react';

  type UrlLike = url.UrlObject | url.Url;
  interface LinkState {
    prefetch?: boolean;
    shallow?: boolean;
    scroll?: boolean;
    replace?: boolean;
    onError?(error: any): void;
    href?: string | UrlLike;
    as?: string | UrlLike;
    children: React.ReactElement<any>;
  }

  export default class extends React.Component<LinkState, {}> {}
}

declare module 'next/dynamic' {
  import * as React from 'react';

  interface DynamicOptions<TCProps, TLProps> {
    loading?: React.ComponentType<TLProps>;
    ssr?: boolean;
    modules?(props: TCProps & TLProps): { [key: string]: Promise<React.ComponentType<any>> };
    render?(props: TCProps & TLProps, modules: { [key: string]: React.ComponentType<any> }): void;
  }

  class SameLoopPromise<T> extends Promise<T> {
    constructor(executor: (resolve: (value?: T) => void, reject: (reason?: any) => void) => void);
    setResult(value: T): void;
    setError(value: any): void;
    runIfNeeded(): void;
  }
  export default function<TCProps, TLProps>(componentPromise: Promise<React.ComponentType<TCProps>>, options?: DynamicOptions<TCProps, TLProps>): React.ComponentType<TCProps & TLProps>;
}

declare module 'next/router' {
  import * as React from 'react';

  interface EventChangeOptions {
    shallow?: boolean;
    [key: string]: any;
  }

  type RouterCallback = () => void;
  interface SingletonRouter {
    readyCallbacks: RouterCallback[];
    ready(cb: RouterCallback): void;

    // router properties
    readonly components: { [key: string]: { Component: React.ComponentType<any>, err: any } };
    readonly pathname: string;
    readonly route: string;
    readonly asPath?: string;
    readonly query?: { [key: string]: any };

    // router methods
    reload(route: string): Promise<void>;
    back(): void;
    push(url: string, as?: string, options?: EventChangeOptions): Promise<boolean>;
    replace(url: string, as?: string, options?: EventChangeOptions): Promise<boolean>;
    prefetch(url: string): Promise<React.ComponentType<any>>;

    // router events
    onAppUpdated?(nextRoute: string): void;
    onRouteChangeStart?(url: string): void;
    onBeforeHistoryChange?(as: string): void;
    onRouteChangeComplete?(url: string): void;
    onRouteChangeError?(error: any, url: string): void;
  }

  const Singleton: SingletonRouter;
  export default Singleton;
}
