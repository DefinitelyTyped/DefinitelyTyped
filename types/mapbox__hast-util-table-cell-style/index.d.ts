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
