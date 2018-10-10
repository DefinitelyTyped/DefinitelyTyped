// Type definitions for end-of-stream 1.4
// Project: https://github.com/mafintosh/end-of-stream
// Definitions by: Sami Kukkonen <https://github.com/strax>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node"/>

interface Options {
  readable?: boolean;
  writable?: boolean;
  error?: boolean;
}
type Stream = NodeJS.ReadableStream | NodeJS.WritableStream;
type Callback = (error?: Error | null) => void;
declare function eos(
  stream: Stream,
  callback?: Callback
): () => void;
declare function eos(
  stream: Stream,
  options: Options,
  callback?: Callback
): () => void;
declare namespace eos {
}
export = eos;
