// Type definitions for hasha 3.0
// Project: https://github.com/sindresorhus/hasha
// Definitions by: BendingBender <https://github.com/BendgingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>
import * as crypto from "crypto";

export = hasha;

declare function hasha(input: hasha.HashaInput): string;
declare function hasha<E extends hasha.ToStringEncoding>(input: hasha.HashaInput, options: hasha.HashaOptions<E>): string;
declare function hasha<E extends 'buffer'>(input: hasha.HashaInput, options: hasha.HashaOptions<E>): Buffer;

declare namespace hasha {
    type HashaInput = string | string[] | Buffer | Buffer[];
    type ToStringEncoding = 'hex' | 'base64' | 'latin1' | 'binary' | undefined;
    type HashaEncoding = ToStringEncoding | 'buffer';

    interface HashaOptions<E extends HashaEncoding> {
        encoding?: E;
        algorithm?: string;
    }

    function stream(options?: HashaOptions<HashaEncoding>): crypto.Hash;

    function fromStream(stream: NodeJS.ReadableStream): Promise<string | null>;
    function fromStream<E extends ToStringEncoding>(stream: NodeJS.ReadableStream, options?: HashaOptions<E>): Promise<string | null>;
    function fromStream<E extends 'buffer'>(stream: NodeJS.ReadableStream, options?: HashaOptions<E>): Promise<Buffer | null>;

    function fromFile(filePath: string): Promise<string | null>;
    function fromFile<E extends ToStringEncoding>(filePath: string, options: HashaOptions<E>): Promise<string | null>;
    function fromFile<E extends 'buffer'>(filePath: string, options: HashaOptions<E>): Promise<Buffer | null>;

    function fromFileSync(filePath: string): string;
    function fromFileSync<E extends ToStringEncoding>(filePath: string, options: HashaOptions<E>): string;
    function fromFileSync<E extends 'buffer'>(filePath: string, options: HashaOptions<E>): Buffer;
}
