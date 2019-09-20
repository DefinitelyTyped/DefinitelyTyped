// Type definitions for non-npm package stamplay-js-sdk 1.2
// Project: https://github.com/Stamplay/stamplay-js-sdk
// Definitions by: Riderman de Sousa Barbosa <https://github.com/ridermansb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Stamplay {
  function init(appId: string): void;
  function User(): StamplayObject;
  function Cobject(object: string): StamplayObject;

  interface Model {
    signup(arg: any): Promise<any>;
    new(): Model; // This is suspicious, but tests show model instances being constructable...
    get(property: string): any;
    set(property: string, value: any): void;
    unset(property: string): void;
    fetch(id: any): Promise<any>;
    destroy(): Promise<any>;
    save(arg?: any): Promise<any>; // TODO: Don't know what this is supposed to be.
    upVote(): Promise<any>;
  }

  interface StamplayObject  {
      Model: Model;
      Collection: any;
  }
}
