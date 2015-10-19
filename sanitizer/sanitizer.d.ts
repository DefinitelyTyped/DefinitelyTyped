// Type definitions for Sanitizer
// Project: https://github.com/theSmaw/Caja-HTML-Sanitizer
// Definitions by: Dave Taylor <http://davetayls.me>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'sanitizer' {
  export interface ISaxHandler {
    startTag(name:string, attribs:string[], param:any):void;
    endTag(name:string, param:any):void;
    pcdata(text:string, param:any):void;
    cdata(text:string, param:any):void;
    rcdata(text:string, param:any):void;
    comment(text:string, param:any):void;
    startDoc(param:any):void;
    endDoc(param:any):void;
  }

  export function escape(s:string):string;

  export function makeSaxParser(yourHandler:ISaxHandler):(...any:any[])=>any;

  export function normalizeRCData(s:string):string;

  export function sanitize(s:string):string;

  export function unescapeEntities(s:string):string;
}
