declare namespace NodeJS {
  interface ReadableStream extends EventEmitter {
    readable: boolean;
    read(size?: number): string | Buffer;
    setEncoding(encoding: string): this;
    pause(): this;
    resume(): this;
    isPaused(): boolean;
    pipe<T extends WritableStream>(destination: T, options?: { end?: boolean; }): T;
    unpipe(destination?: WritableStream): this;
    unshift(chunk: string | Uint8Array, encoding?: BufferEncoding): void;
    wrap(oldStream: ReadableStream): this;
    [Symbol.asyncIterator](): AsyncIterableIterator<string | Buffer>;
  }

  interface WritableStream extends EventEmitter {
      writable: boolean;
      write(buffer: Uint8Array | string, cb?: (err?: Error | null) => void): boolean;
      write(str: string, encoding?: string, cb?: (err?: Error | null) => void): boolean;
      end(cb?: () => void): void;
      end(data: string | Uint8Array, cb?: () => void): void;
      end(str: string, encoding?: string, cb?: () => void): void;
  }

  interface ReadWriteStream extends ReadableStream, WritableStream { }
}
