// Type definitions for svg2png node package 
// Project: https://github.com/domenic/svg2png
// Definitions by: hans windhoff <https://github.com/hansrwindhoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function svg2png(srcFile: string, destFile: string, scale: number, cb: (err:Error) => void):void;
declare function svg2png(srcFile: string, destFile: string, cb: (err:Error) => void):void;


export = svg2png;
