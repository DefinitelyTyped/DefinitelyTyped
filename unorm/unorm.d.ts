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
