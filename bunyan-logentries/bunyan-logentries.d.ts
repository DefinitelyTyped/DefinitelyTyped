// Type definitions for node-bunyan-logentries v0.1.0
// Project: https://github.com/nemtsov/node-bunyan-logentries
// Definitions by: Aymeric Beaumet <http://aymericbeaumet.me>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
/// <reference path="../bunyan/bunyan.d.ts" />

declare module "bunyan-logentries" {
  import bunyan = require("bunyan");

  interface StreamOptions {
    token: string;
  }

  export function createStream(options: StreamOptions): NodeJS.WritableStream;
}
