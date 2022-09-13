// Type definitions for xml-escape 1.1
// Project: https://github.com/miketheprogrammer/xml-escape
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Escape an XML string
 *
 * @param string String of XML to escape
 * @param ignore Characters to ignore
 */
declare function escape(string: string, ignore?: string): string;
export = escape;
