// Type definitions for stamplay-js-sdk 1.2
// Project: https://github.com/Stamplay/stamplay-js-sdk
// Definitions by: Riderman de Sousa Barbosa <https://github.com/ridermansb/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Stamplay {
  export function init(appId: string): void;
  export function User(): StamplayObject;
  export function Cobject(object: string): StamplayObject;

  export interface Model {
    signup({}): Promise<any>;
    new(): Model; // This is suspicious, but tests show model instances being constructable...
    get(property: string): any;
    set(property: string, value: any): void;
    unset(property: string) : void;
    fetch(id: any) : Promise<any>;
    destroy(): Promise<any>;
    save({}?): Promise<any>;
    upVote(): Promise<any>;
  }

  export interface StamplayObject  {
      Model: Model;
      Collection : any;
  }
}
