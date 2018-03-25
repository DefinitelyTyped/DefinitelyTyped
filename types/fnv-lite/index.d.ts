// Type definitions for fnv-lite 1.2
// Project: https://github.com/casetext/fnv-lite
// Definitions by: MarcinD <https://github.com/marcind>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Input = string | ArrayLike<number>;

declare class FNV {
  static hex(input: Input): string;
  static base64(input: Input): string;
  static base64Url(input: Input): string;
  static base36(input: Input): string;

  update(input: Input): this;
  digest(): number[];
  digest(type: "hex" | "base36" | "base64" | "base64Url"): string;
}

export = FNV;
