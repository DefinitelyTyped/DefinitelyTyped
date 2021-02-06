/**
 * Create an html canvas element and returns its 2d context.
 */
export function createCanvasContext2D(
    opt_width?: number,
    opt_height?: number,
    opt_canvasPool?: HTMLCanvasElement[],
): CanvasRenderingContext2D;
/**
 * Get the current computed height for the given element including margin,
 * padding and border.
 * Equivalent to jQuery's $(el).outerHeight(true).
 */
export function outerHeight(element: HTMLElement): number;
/**
 * Get the current computed width for the given element including margin,
 * padding and border.
 * Equivalent to jQuery's $(el).outerWidth(true).
 */
export function outerWidth(element: HTMLElement): number;
export function removeChildren(node: Node): void;
export function removeNode(node: Node): Node;
/**
 * Transform the children of a parent node so they match the
 * provided list of children.  This function aims to efficiently
 * remove, add, and reorder child nodes while maintaining a simple
 * implementation (it is not guaranteed to minimize DOM operations).
 */
export function replaceChildren(node: Node, children: Node[]): void;
export function replaceNode(newNode: Node, oldNode: Node): void;
