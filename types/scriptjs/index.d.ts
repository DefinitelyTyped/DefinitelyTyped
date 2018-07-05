// Type definitions for scriptjs
// Project: https://github.com/ded/script.js
// Definitions by: Steve Lam <https://github.com/ssttevee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface $script {
  (paths:string | string[], idOrDone:string | (() => void), optDone?:() => void): $script;
  get(path:string, fn:() => void): void;
  order(scripts:string[], id:string, done:() => void): void;
  path(p:string): void;
  urlArgs(str:string): void;
  ready(deps:string | string[], ready:() => void, req?:(missing:string[]) => void): $script;
}

declare module 'scriptjs'{ 
    var $script: $script; 
    export = $script; 
}
