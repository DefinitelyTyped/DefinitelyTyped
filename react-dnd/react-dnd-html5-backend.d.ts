// Type definitions for React DnD HTML 5 Backend v2.0.0
// Project: https://github.com/gaearon/react-dnd
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path='./react-dnd.d.ts' />

declare module "react-dnd-html5-backend" {
    export namespace NativeTypes {
        export const FILE: string;
        export const URL: string;
        export const TEXT: string;
    }
    export function getEmptyImage(): any; // Image
    export default class HTML5Backend implements __ReactDnd.Backend { }
}
