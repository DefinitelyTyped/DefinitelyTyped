// Type definitions for circular-json v0.1.6
// Project: https://github.com/WebReflection/circular-json
// Definitions by: Jonathan Pevarnek <https://github.com/jpevarnek/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'circular-json' {
  interface ICircularJSON extends JSON {
    parse(text: string, reviver?: (key: any, value: any) => any): any;
    stringify(value: any, replacer?: ((key: string, value: any) => any) | any[], space?: any, placeholder?: boolean): string;
  }

  var CircularJSON: ICircularJSON;

  export = CircularJSON;
}
