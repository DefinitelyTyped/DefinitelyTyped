// Type definitions for Colors.js 0.6.0-1
// Project: https://github.com/Marak/colors.js
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "colors" {
    export function setTheme(theme:any):any;
}

interface String {
    bold:string;
    italic:string;
    underline:string;
    inverse:string;
    yellow:string;
    cyan:string;
    white:string;
    magenta:string;
    green:string;
    red:string;
    grey:string;
    blue:string;
    rainbow:string;
    zebra:string;
    random:string;
}
