// Type definitions for stream-to-string 1.1.0
// Project: https://github.com/jasonpincin/stream-to-string
// Definitions by: Ryan Smith <https://github.com/ryansmith94>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0.1

declare module 'stream-to-string' {
  const streamToString: (stream: NodeJS.ReadableStream) => Promise<string>;
  export = streamToString;
}
