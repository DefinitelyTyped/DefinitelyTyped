// Type definitions for get-size 3.0
// Project: https://github.com/desandro/get-size
// Definitions by: Leon Si <https://github.com/leondreamed>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Size {
    width: number;
    height: number;

    innerWidth: number;
    innerHeight: number;
    outerWidth: number;
    outerHeight: number;

    paddingLeft: number;
    paddingRight: number;
    paddingTop: number;
    paddingBottom: number;

    marginLeft: number;
    marginRight: number;
    marginTop: number;
    marginBottom: number;

    borderLeftWidth: number;
    borderRightWidth: number;
    borderTopWidth: number;
    borderBottomWidth: number;
}

declare function getSize(element: string | Element): Size;

export = getSize;
