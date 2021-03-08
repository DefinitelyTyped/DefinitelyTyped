import Node from "../node";
import Position from "../position";
import Writer from "../writer";
import Schema from "../schema";

/**
 * Fixes all empty roots.
 */
export function autoParagraphEmptyRoots(writer: Writer): boolean;

/**
 * Checks if the given node wrapped with a paragraph would be accepted by the schema in the given position.
 */
export function isParagraphable(position: Position, nodeOrType: Node | string, schema: Schema): boolean;

/**
 * Inserts a new paragraph at the given position and returns a position inside that paragraph.
 */
export function wrapInParagraph(position: Position, writer: Writer): Position;
