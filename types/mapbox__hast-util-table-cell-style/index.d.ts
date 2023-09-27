// Type definitions for @mapbox/hast-util-table-cell-style 0.2
// Project: https://github.com/mapbox/hast-util-table-cell-style
// Definitions by: Remco Haszing <https://github.com/remcohaszing>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Element, Root } from "hast";

/**
 * This simple utility transforms the following deprecated styling attributes on `<td>`, `<th>`, and `<tr>` elements to equivalent inline styles:
 *
 * - `align`
 * - `valign`
 * - `width`
 * - `height`
 *
 * Mutates the HAST AST you pass in, and returns it.
 */
declare function tableCellStyle(ast: Element): Element;
declare function tableCellStyle(ast: Root): Root;

export = tableCellStyle;
