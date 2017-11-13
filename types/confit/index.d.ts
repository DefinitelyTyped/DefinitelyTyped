// Type definitions for Confit 2.x
// Project: https://github.com/krakenjs/confit
// Definitions by: Ethan Resnick <https://github.com/ethanresnick>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "confit" {
  interface ProtocolsSetPrivate {
    [protocol:string] : (value:any, callback?:any) => void
  }

  interface ConfigStore {
    get(name: string): any;
    set<T>(name: string, newValue: T): T;
    use(newSettings: Object): void;
  }

  type options = {
    basedir: string;
    protocols: ProtocolsSetPrivate
  }

  interface ConfigFactory {
    create(callback: (err: any, config: ConfigStore) => any) : void;
    addOverride(filepathOrSettingsObj: string|Object): this;
    addDefault(filepathOrSettingsObj: string|Object): this;
  }

  function confit(optionsOrBaseDir: options|string): ConfigFactory;

  namespace confit {
    export interface ProtocolsSet extends ProtocolsSetPrivate {}
  }

  export = confit;
}
