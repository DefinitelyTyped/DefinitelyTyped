// Type definitions for post-message-stream 3.0
// Project: https://github.com/baalexander/node-portscanner
// Definitions by: Douglas Duteil <https://github.com/douglasduteil>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Duplex } from "readable-stream";

declare class PostMessageStream extends Duplex {
  _name: string;
  _target: string;
  _targetWindow: Window;
  _origin: string;
  _init: boolean;
  _haveSyn: boolean;

  constructor(props: {
    name: string;
    target: string;
    targetWindow?: Window;
  });

  _write(
    data: any,
    _encoding: BufferEncoding,
    cb: () => void
  ): void;
}

export = PostMessageStream;
