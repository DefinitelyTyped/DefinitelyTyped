// Type definitions for EvaporateJS
// Project: https://github.com/TTLabs/EvaporateJS
// Definitions by: Andrew Kuklewicz <https://github.com/kookster/>, Chris Rhoden <https://github.com/chrisrhoden>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = Evaporate;

declare class Evaporate {
  cancel(id:string): boolean;
  constructor(config:any);
  add(config:any): string;
}
