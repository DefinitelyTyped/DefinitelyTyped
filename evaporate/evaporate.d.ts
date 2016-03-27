// Type definitions for EvaporateJS
// Project: https://github.com/TTLabs/EvaporateJS
// Definitions by: Andrew Kuklewicz <https://github.com/kookster/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare class Evaporate {
  cancel(id:string): boolean;
  constructor(config:any);
  add(config:any): string;
}

declare module 'evaporate' {
  export = Evaporate;
}
