// Type definitions for React DnD Html5 Backend 2.1
// Project: https://github.com/gaearon/react-dnd
// Definitions by: Pedro Pereira <https://github.com/oizie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as ReactDnd from "react-dnd";

export namespace NativeTypes {
    const FILE: string;
    const URL: string;
    const TEXT: string;
}
export function getEmptyImage(): any; // Image
export default class HTML5Backend implements ReactDnd.Backend {}
