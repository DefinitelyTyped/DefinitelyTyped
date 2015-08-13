// Type definitions for DOM Purify
// Project: https://github.com/cure53/DOMPurify
// Definitions by: Dave Taylor <http://davetayls.me>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface IDOMPurify {
  sanitize(s:string):string;
  addHook(hook:string, cb:(currentNode:Element, data:any, config:any) => Element):void;
}

declare var DOMPurify:IDOMPurify;

declare module 'dompurify' {
  export = DOMPurify;
}
