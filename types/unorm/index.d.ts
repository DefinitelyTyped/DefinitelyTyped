// Type definitions for unorm 1.3.3
// Project: https://github.com/walling/unorm
// Definitions by: Christopher Brown <https://github.com/chbrown>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare var unorm: unorm.Static;
export = unorm;
export as namespace unorm;

declare namespace unorm {
  interface Static {
    nfd(str: string): string;
    nfkd(str: string): string;
    nfc(str: string): string;
    nfkc(str: string): string;
  }
}