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

interface LZ62 {
  version: string;

  compress(data: string, options: Options | DataOption): '';
  compress(data: string, options?: Partial<Options>): string;

  decompress(data: string, options: Options | DataOption): '';
  decompress(data: string, options?: Partial<Options>): string;
}

declare const lzbase62: LZ62;
export = lzbase62;
