/**
 * Creates an array containing the nodes rendered from the supplied markup. The
 * optionally supplied `handleScript` function will be invoked once for each
 * <script> element that is rendered. If no `handleScript` function is supplied,
 * an exception is thrown if any <script> elements are rendered.
 *
 * return {array<DOMElement|DOMTextNode>} An array of rendered nodes.
 */
declare function createNodesFromMarkup(markup: string, handleScript?: (script: string) => void): any[];

declare namespace createNodesFromMarkup {}

export = createNodesFromMarkup;
