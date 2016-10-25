// Type definitions for stamplay-js-sdk 1.2.9
// Project: https://github.com/Stamplay/stamplay-js-sdk
// Definitions by: Riderman de Sousa Barbosa <https://github.com/ridermansb/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../promises-a-plus/promises-a-plus.d.ts"/>

declare namespace Stamplay {

  export interface IStamplayModel {
    signup({}) : PromisesAPlus.Thenable<any>
    new() : IStamplayModel
    get(property : string) : any
    set(property : string, value: any) : void
    unset(property : string) : void
    fetch(id : any) : PromisesAPlus.Thenable<any>
    destroy() : PromisesAPlus.Thenable<any>
    save({}?) : PromisesAPlus.Thenable<any>
    upVote() : PromisesAPlus.Thenable<any>
  }

  export interface IStamplayObject  {
      Model : IStamplayModel
      Collection : any

  }

  export interface StamplayStatic {
      init(appId : string) : void;
      User() : IStamplayObject
      Cobject(object : string) : IStamplayObject
  }
}

declare var Stamplay: Stamplay.StamplayStatic;

declare module "Stamplay" {
    export = Stamplay;
}
