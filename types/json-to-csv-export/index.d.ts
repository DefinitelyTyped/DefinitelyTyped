// Type definitions for json-to-csv-export 1.1
// Project: https://github.com/coston/json-to-csv-export
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * @param data object or array of objects
 * @param [name] The complete filename. Deaults to "export.csv"
 * @param [delimiter] field separator Defaults to ","
 */
export default function jsonToCsv(data: object | object[], name?: string, delimiter?: string): void;

export as namespace csvDownload;
