// tslint:disable-next-line:no-bad-reference
/// <reference path="./globals.d.ts" />
/// <reference path="./globals.stream.d.ts" />

declare module "stream" {
  import * as events from "events";

  class internal<R> extends events.EventEmitter {
      pipe<T extends NodeJS.WritableStream<R>>(destination: T, options?: { end?: boolean; }): T;
  }

  namespace internal {
      class Stream<R = any> extends internal<R> { }

      interface ReadableOptions<T = any> {
          highWaterMark?: number;
          encoding?: string;
          objectMode?: boolean;
          read?(this: Readable<T>, size: number): void;
          destroy?(this: Readable<T>, error: Error | null, callback: (error: Error | null) => void): void;
          autoDestroy?: boolean;
      }

      class Readable<T = any> extends Stream<T> implements NodeJS.ReadableStream<T> {
          /**
           * A utility method for creating Readable Streams out of iterators.
           */
          static from<T>(iterable: Iterable<T> | AsyncIterable<T>, options?: ReadableOptions<T>): Readable<T>;

          readable: boolean;
          readonly readableHighWaterMark: number;
          readonly readableLength: number;
          constructor(opts?: ReadableOptions<T>);
          _read(size: number): void;
          read(size?: number): T;
          setEncoding(encoding: string): this;
          pause(): this;
          resume(): this;
          isPaused(): boolean;
          unpipe(destination?: NodeJS.WritableStream<T>): this;

          /**
           * Passing chunk as null signals the end of the stream (EOF)
           */
          unshift(chunk: T | null, encoding?: BufferEncoding): void;

          wrap(oldStream: NodeJS.ReadableStream<T>): this;

          /**
           * Passing chunk as null signals the end of the stream (EOF)
           */
          push(chunk: T | null, encoding?: string): boolean;

          _destroy(error: Error | null, callback: (error?: Error | null) => void): void;
          destroy(error?: Error): void;

          /**
           * Event emitter
           * The defined events on documents including:
           * 1. close
           * 2. data
           * 3. end
           * 4. readable
           * 5. error
           */
          addListener(event: "close", listener: () => void): this;
          addListener(event: "data", listener: (chunk: T) => void): this;
          addListener(event: "end", listener: () => void): this;
          addListener(event: "readable", listener: () => void): this;
          addListener(event: "error", listener: (err: Error) => void): this;
          addListener(event: string | symbol, listener: (...args: any[]) => void): this;

          emit(event: "close"): boolean;
          emit(event: "data", chunk: T): boolean;
          emit(event: "end"): boolean;
          emit(event: "readable"): boolean;
          emit(event: "error", err: Error): boolean;
          emit(event: string | symbol, ...args: any[]): boolean;

          on(event: "close", listener: () => void): this;
          on(event: "data", listener: (chunk: T) => void): this;
          on(event: "end", listener: () => void): this;
          on(event: "readable", listener: () => void): this;
          on(event: "error", listener: (err: Error) => void): this;
          on(event: string | symbol, listener: (...args: any[]) => void): this;

          once(event: "close", listener: () => void): this;
          once(event: "data", listener: (chunk: T) => void): this;
          once(event: "end", listener: () => void): this;
          once(event: "readable", listener: () => void): this;
          once(event: "error", listener: (err: Error) => void): this;
          once(event: string | symbol, listener: (...args: any[]) => void): this;

          prependListener(event: "close", listener: () => void): this;
          prependListener(event: "data", listener: (chunk: T) => void): this;
          prependListener(event: "end", listener: () => void): this;
          prependListener(event: "readable", listener: () => void): this;
          prependListener(event: "error", listener: (err: Error) => void): this;
          prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

          prependOnceListener(event: "close", listener: () => void): this;
          prependOnceListener(event: "data", listener: (chunk: T) => void): this;
          prependOnceListener(event: "end", listener: () => void): this;
          prependOnceListener(event: "readable", listener: () => void): this;
          prependOnceListener(event: "error", listener: (err: Error) => void): this;
          prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

          removeListener(event: "close", listener: () => void): this;
          removeListener(event: "data", listener: (chunk: T) => void): this;
          removeListener(event: "end", listener: () => void): this;
          removeListener(event: "readable", listener: () => void): this;
          removeListener(event: "error", listener: (err: Error) => void): this;
          removeListener(event: string | symbol, listener: (...args: any[]) => void): this;

          [Symbol.asyncIterator](): AsyncIterableIterator<T>;
      }

      interface WritableOptions<T = any> {
          highWaterMark?: number;
          decodeStrings?: boolean;
          defaultEncoding?: string;
          objectMode?: boolean;
          emitClose?: boolean;
          write?(this: Writable<T>, chunk: T, encoding: string, callback: (error?: Error | null) => void): void;
          writev?(this: Writable<T>, chunks: Array<{ chunk: T, encoding: string }>, callback: (error?: Error | null) => void): void;
          destroy?(this: Writable<T>, error: Error | null, callback: (error: Error | null) => void): void;
          final?(this: Writable<T>, callback: (error?: Error | null) => void): void;
          autoDestroy?: boolean;
      }

      class Writable<T = any> extends Stream implements NodeJS.WritableStream<T> {
          readonly writable: boolean;
          readonly writableFinished: boolean;
          readonly writableHighWaterMark: number;
          readonly writableLength: number;
          constructor(opts?: WritableOptions<T>);
          _write(chunk: T, encoding: string, callback: (error?: Error | null) => void): void;
          _writev?(chunks: Array<{ chunk: T, encoding: string }>, callback: (error?: Error | null) => void): void;
          _destroy(error: Error | null, callback: (error?: Error | null) => void): void;
          _final(callback: (error?: Error | null) => void): void;
          write(chunk: T, cb?: (error: Error | null | undefined) => void): boolean;
          write(chunk: T, encoding: string, cb?: (error: Error | null | undefined) => void): boolean;
          setDefaultEncoding(encoding: string): this;
          end(cb?: () => void): void;
          end(chunk: T | null, cb?: () => void): void;
          end(chunk: T | null, encoding: string, cb?: () => void): void;
          cork(): void;
          uncork(): void;
          destroy(error?: Error): void;

          /**
           * never because it will always throw
           */
          pipe(destination: never, options?: { end?: boolean; }): never;

          /**
           * Event emitter
           * The defined events on documents including:
           * 1. close
           * 2. drain
           * 3. error
           * 4. finish
           * 5. pipe
           * 6. unpipe
           */
          addListener(event: "close", listener: () => void): this;
          addListener(event: "drain", listener: () => void): this;
          addListener(event: "error", listener: (err: Error) => void): this;
          addListener(event: "finish", listener: () => void): this;
          addListener(event: "pipe", listener: (src: Readable) => void): this;
          addListener(event: "unpipe", listener: (src: Readable) => void): this;
          addListener(event: string | symbol, listener: (...args: any[]) => void): this;

          emit(event: "close"): boolean;
          emit(event: "drain"): boolean;
          emit(event: "error", err: Error): boolean;
          emit(event: "finish"): boolean;
          emit(event: "pipe", src: Readable): boolean;
          emit(event: "unpipe", src: Readable): boolean;
          emit(event: string | symbol, ...args: any[]): boolean;

          on(event: "close", listener: () => void): this;
          on(event: "drain", listener: () => void): this;
          on(event: "error", listener: (err: Error) => void): this;
          on(event: "finish", listener: () => void): this;
          on(event: "pipe", listener: (src: Readable) => void): this;
          on(event: "unpipe", listener: (src: Readable) => void): this;
          on(event: string | symbol, listener: (...args: any[]) => void): this;

          once(event: "close", listener: () => void): this;
          once(event: "drain", listener: () => void): this;
          once(event: "error", listener: (err: Error) => void): this;
          once(event: "finish", listener: () => void): this;
          once(event: "pipe", listener: (src: Readable) => void): this;
          once(event: "unpipe", listener: (src: Readable) => void): this;
          once(event: string | symbol, listener: (...args: any[]) => void): this;

          prependListener(event: "close", listener: () => void): this;
          prependListener(event: "drain", listener: () => void): this;
          prependListener(event: "error", listener: (err: Error) => void): this;
          prependListener(event: "finish", listener: () => void): this;
          prependListener(event: "pipe", listener: (src: Readable) => void): this;
          prependListener(event: "unpipe", listener: (src: Readable) => void): this;
          prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

          prependOnceListener(event: "close", listener: () => void): this;
          prependOnceListener(event: "drain", listener: () => void): this;
          prependOnceListener(event: "error", listener: (err: Error) => void): this;
          prependOnceListener(event: "finish", listener: () => void): this;
          prependOnceListener(event: "pipe", listener: (src: Readable) => void): this;
          prependOnceListener(event: "unpipe", listener: (src: Readable) => void): this;
          prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

          removeListener(event: "close", listener: () => void): this;
          removeListener(event: "drain", listener: () => void): this;
          removeListener(event: "error", listener: (err: Error) => void): this;
          removeListener(event: "finish", listener: () => void): this;
          removeListener(event: "pipe", listener: (src: Readable) => void): this;
          removeListener(event: "unpipe", listener: (src: Readable) => void): this;
          removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
      }

      interface DuplexOptions<W = any, R = any> extends ReadableOptions<R>, WritableOptions<W> {
          allowHalfOpen?: boolean;
          readableObjectMode?: boolean;
          writableObjectMode?: boolean;
          read?(this: Duplex<W, R>, size: number): void;
          write?(this: Duplex<W, R>, chunk: W, encoding: string, callback: (error?: Error | null) => void): void;
          writev?(this: Duplex<W, R>, chunks: Array<{ chunk: W, encoding: string }>, callback: (error?: Error | null) => void): void;
          final?(this: Duplex<W, R>, callback: (error?: Error | null) => void): void;
          destroy?(this: Duplex<W, R>, error: Error | null, callback: (error: Error | null) => void): void;
      }

      // Note: Duplex extends both Readable and Writable.
      class Duplex<W = any, R = any> extends Readable<R> implements Writable<W> {
          readonly writable: boolean;
          readonly writableFinished: boolean;
          readonly writableHighWaterMark: number;
          readonly writableLength: number;
          constructor(opts?: DuplexOptions<W, R>);
          _write(chunk: W, encoding: string, callback: (error?: Error | null) => void): void;
          _writev?(chunks: Array<{ chunk: W, encoding: string }>, callback: (error?: Error | null) => void): void;
          _destroy(error: Error | null, callback: (error: Error | null) => void): void;
          _final(callback: (error?: Error | null) => void): void;
          write(chunk: W, encoding?: string, cb?: (error: Error | null | undefined) => void): boolean;
          write(chunk: W, cb?: (error: Error | null | undefined) => void): boolean;
          setDefaultEncoding(encoding: string): this;
          end(cb?: () => void): void;
          end(chunk: W, cb?: () => void): void;
          end(chunk: W, encoding?: string, cb?: () => void): void;
          cork(): void;
          uncork(): void;
      }

      type TransformCallback<T = any> = (error?: Error | null, data?: T) => void;

      interface TransformOptions<W = any, R = any> extends DuplexOptions<W, R> {
          read?(this: Transform<W, R>, size: number): void;
          write?(this: Transform<W, R>, chunk: W, encoding: string, callback: (error?: Error | null) => void): void;
          writev?(this: Transform<W, R>, chunks: Array<{ chunk: W, encoding: string }>, callback: (error?: Error | null) => void): void;
          final?(this: Transform<W, R>, callback: (error?: Error | null) => void): void;
          destroy?(this: Transform<W, R>, error: Error | null, callback: (error: Error | null) => void): void;
          transform?(this: Transform<W, R>, chunk: W, encoding: string, callback: TransformCallback<R>): void;
          flush?(this: Transform<W, R>, callback: TransformCallback<R>): void;
      }

      class Transform<W = any, R = any> extends Duplex<W, R> {
          constructor(opts?: TransformOptions<W, R>);
          _transform(chunk: W, encoding: string, callback: TransformCallback<R>): void;
          _flush(callback: TransformCallback<R>): void;
      }

      class PassThrough<T = any> extends Transform<T, T> { }

      function finished(stream: NodeJS.ReadWriteStream<unknown, unknown>, callback: (err?: NodeJS.ErrnoException | null) => void): () => void;
      function finished(stream: NodeJS.ReadableStream<unknown>, callback: (err?: NodeJS.ErrnoException | null) => void): () => void;
      function finished(stream: NodeJS.WritableStream<unknown>, callback: (err?: NodeJS.ErrnoException | null) => void): () => void;
      namespace finished {
          function __promisify__(stream: NodeJS.ReadWriteStream<unknown, unknown>): Promise<void>;
          function __promisify__(stream: NodeJS.ReadableStream<unknown>): Promise<void>;
          function __promisify__(stream: NodeJS.WritableStream<unknown>): Promise<void>;
      }

      function pipeline<T extends NodeJS.WritableStream>(stream1: NodeJS.ReadableStream, stream2: T, callback?: (err: NodeJS.ErrnoException | null) => void): T;
      function pipeline<T extends NodeJS.WritableStream>(stream1: NodeJS.ReadableStream, stream2: NodeJS.ReadWriteStream, stream3: T, callback?: (err: NodeJS.ErrnoException | null) => void): T;
      function pipeline<T extends NodeJS.WritableStream>(
          stream1: NodeJS.ReadableStream,
          stream2: NodeJS.ReadWriteStream,
          stream3: NodeJS.ReadWriteStream,
          stream4: T,
          callback?: (err: NodeJS.ErrnoException | null) => void,
      ): T;
      function pipeline<T extends NodeJS.WritableStream>(
          stream1: NodeJS.ReadableStream,
          stream2: NodeJS.ReadWriteStream,
          stream3: NodeJS.ReadWriteStream,
          stream4: NodeJS.ReadWriteStream,
          stream5: T,
          callback?: (err: NodeJS.ErrnoException | null) => void,
      ): T;
      function pipeline(streams: Array<NodeJS.ReadableStream | NodeJS.WritableStream | NodeJS.ReadWriteStream>, callback?: (err: NodeJS.ErrnoException | null) => void): NodeJS.WritableStream;
      function pipeline(
          stream1: NodeJS.ReadableStream,
          stream2: NodeJS.ReadWriteStream | NodeJS.WritableStream,
          ...streams: Array<NodeJS.ReadWriteStream | NodeJS.WritableStream | ((err: NodeJS.ErrnoException | null) => void)>,
      ): NodeJS.WritableStream;
      namespace pipeline {
          function __promisify__(stream1: NodeJS.ReadableStream, stream2: NodeJS.WritableStream): Promise<void>;
          function __promisify__(stream1: NodeJS.ReadableStream, stream2: NodeJS.ReadWriteStream, stream3: NodeJS.WritableStream): Promise<void>;
          function __promisify__(stream1: NodeJS.ReadableStream, stream2: NodeJS.ReadWriteStream, stream3: NodeJS.ReadWriteStream, stream4: NodeJS.WritableStream): Promise<void>;
          function __promisify__(
              stream1: NodeJS.ReadableStream,
              stream2: NodeJS.ReadWriteStream,
              stream3: NodeJS.ReadWriteStream,
              stream4: NodeJS.ReadWriteStream,
              stream5: NodeJS.WritableStream,
          ): Promise<void>;
          function __promisify__(streams: Array<NodeJS.ReadableStream | NodeJS.WritableStream | NodeJS.ReadWriteStream>): Promise<void>;
          function __promisify__(
              stream1: NodeJS.ReadableStream,
              stream2: NodeJS.ReadWriteStream | NodeJS.WritableStream,
              ...streams: Array<NodeJS.ReadWriteStream | NodeJS.WritableStream>,
          ): Promise<void>;
      }

      interface Pipe { }
  }

  export = internal;
}
