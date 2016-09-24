// Type definitions for uuid v2.0.3
// Project: https://github.com/defunctzombie/node-uuid
// Definitions by: Oliver Hoffmann <https://github.com/iamolivinius/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

interface v1Options {
  node?: Array<number>
  clockseq?: number
  msecs?: Number | Date
  nsecs?: Number
}

interface v4Options {
  random?: Array<number>
  rng?: () => Array<number>
}

interface uuid {
  v1(options?: v1Options): string
  v1(options: v1Options | null, buffer: Array<number>, offset?: number): Array<number>
  v1(options: v1Options | null, buffer: Buffer, offset?: number): Buffer
  v4(options?: v4Options): string
  v4(options: v4Options | null, buffer: Array<number>, offset?: number): Array<number>
  v4(options: v4Options | null, buffer: Buffer, offset?: number): Buffer
  parse(id: string): Array<number>
  parse(id: string, buffer: Array<number>, offset?: number): Array<number>
  parse(id: string, buffer: Buffer, offset?: number): Buffer
  unparse(buffer: Array<number> | Buffer, offset?: number): string
}

declare const uuidType: uuid

declare module 'uuid' {
  export = uuidType
}
