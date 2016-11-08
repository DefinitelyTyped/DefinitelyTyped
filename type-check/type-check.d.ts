// Type definitions for type-check v0.3.1
// Project: https://github.com/gkz/type-check
// Definitions by: Hans Windhoff <https://github.com/hansrwindhoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace TypeCheck {

  export interface CustomType {
    [typeName: string]: {
      typeOf: string;
      validate: (x: any)=> any;
    }
  }

  export interface Options {
    customTypes: CustomType;
  }

  export interface TC{
    VERSION: string;
    typeCheck: (typeDescription: string , inst: any, options?: Options) => boolean;
    parseType: (typeDescription: string) => Object;
    parsedTypeCheck: (parsedType: any, obj: any) => boolean;

  }
}

declare var typecheck: TypeCheck.TC;

declare module "type-check" {
  export=typecheck;
}
