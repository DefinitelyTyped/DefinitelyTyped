// Type definitions for React DnD Html5 Backend v2.1.2
// Project: https://github.com/gaearon/react-dnd
// Definitions by: Pedro Pereira <https://github.com/oizie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference types='react' />
///<reference types='react-dnd' />

declare module "react-dnd-html5-backend" {
    export enum NativeTypes { FILE, URL, TEXT }
    export function getEmptyImage(): any; // Image
    export default class HTML5Backend implements __ReactDnd.Backend {}
}