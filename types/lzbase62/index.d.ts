// Type definitions for lzbase62 2.0
// Project: https://github.com/polygonplanet/lzbase62
// Definitions by: ArthurKa <https://github.com/ArthurKa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface DataOption {
  onData(data: string): void;
}
interface EndOption {
  onEnd(): void;
}
interface Options extends DataOption, EndOption {}

export const version: string;

export function compress(data: string, options: Options | DataOption): '';
export function compress(data: string, options?: Partial<Options>): string;

export function decompress(data: string, options: Options | DataOption): '';
export function decompress(data: string, options?: Partial<Options>): string;

interface LZ62 {
  version: typeof version;
  compress: typeof compress;
  decompress: typeof decompress;
}

declare const lzbase62: LZ62;
export default lzbase62;
