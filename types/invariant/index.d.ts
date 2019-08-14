// Type definitions for invariant 2.2.0
// Project: https://github.com/zertosh/invariant
// Definitions by: MichaelBennett <https://github.com/bennett000>
//                 dtinth <https://github.com/dtinth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare let invariant:invariant.InvariantStatic;

export = invariant;
export as namespace invariant;

declare namespace invariant {
  interface InvariantStatic {
    (testValue:false, format?:string, ...extra:any[]):never;
    (testValue:any, format?:string, ...extra:any[]):void;
  }
}

