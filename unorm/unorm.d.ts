// Type definitions for unorm 1.3.3
// Project: https://github.com/walling/unorm
// Definitions by: Christopher Brown <https://github.com/chbrown>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module unorm {
  interface Static {
    nfd(str: string): string;
    nfkd(str: string): string;
    nfc(str: string): string;
    nfkc(str: string): string;
  }
}

declare var unorm: unorm.Static;

declare module "unorm" {
  export = unorm;
}
