// Type definitions for serve-index v1.7.2
// Project: https://github.com/expressjs/serve-index
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../express/express.d.ts" />

declare module 'serve-index' {
  import * as express from 'express';
  import * as fs from 'fs';

  namespace serveIndex {
    interface File {
      name: string;
      stat: fs.Stats;
    }

    interface Locals {
      directory: string;
      displayIcons: boolean;
      fileList: Array<File>;
      name: string;
      stat: fs.Stats;
      path: string;
      style: string;
      viewName: string;
    }

    type templateCallback = (error: Error, htmlString?: string) => void;

    interface Options {
      filter?: (filename: string, index: number, files: Array<File>, dir: string) => boolean;
      hidden?: boolean;
      icons?: boolean;
      stylesheet?: string;
      template?: string | ((locals: Locals, callback: templateCallback) => void);
      view?: string;
    }
  }

  function serveIndex(path: string, options?: serveIndex.Options): express.Handler;

  export = serveIndex;
}
