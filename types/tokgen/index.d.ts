// Type definitions for tokgen 1.0
// Project: https://github.com/maxtruxa/tokgen#readme
// Definitions by: Jonas Lochmann <https://github.com/l-jonas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = TokenGenerator;

declare class TokenGenerator {
  constructor(options?: TokenGenerator.Options);

  generate(length?: number): string;
  generate(length: number, callback: TokenGenerator.Callback): void;
  generate(callback: TokenGenerator.Callback): void;
}

declare namespace TokenGenerator {
  interface OptionsObject {
    chars?: string;
    length?: number;
  }

  type Options = number | string | OptionsObject;
  type Callback = (error: any, token: string) => void;
}
