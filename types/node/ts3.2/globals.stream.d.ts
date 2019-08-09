// tslint:disable-next-line:no-bad-reference
/// <reference path="./globals.d.ts" />

declare namespace NodeJS {
  type StreamChunk = any;

  interface ReadableStream<T = StreamChunk> extends EventEmitter {
      readable: boolean;
      read(size?: number): T;
      setEncoding(encoding: string): this;
      pause(): this;
      resume(): this;
      isPaused(): boolean;
      pipe<W extends WritableStream<T>>(destination: W, options?: { end?: boolean; }): W;
      unpipe(destination?: WritableStream<T>): this;
      unshift(chunk: T | null, encoding?: BufferEncoding): void;
      wrap(oldStream: ReadableStream<T>): this;

      [Symbol.asyncIterator](): AsyncIterableIterator<T>;
  }

  interface WritableStream<T = StreamChunk> extends EventEmitter {
      writable: boolean;
      write(chunk: T, cb?: (err?: Error | null) => void): boolean;
      write(chunk: T, encoding?: string, cb?: (err?: Error | null) => void): boolean;
      end(cb?: () => void): void;
      end(chunk: T | null, cb?: () => void): void;
      end(chunk: T | null, encoding?: string, cb?: () => void): void;
  }

  interface ReadWriteStream<W = StreamChunk, R = StreamChunk> extends ReadableStream<R>, WritableStream<W> { }
}
