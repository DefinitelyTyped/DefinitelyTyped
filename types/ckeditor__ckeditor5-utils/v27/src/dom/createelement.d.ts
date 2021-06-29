/**
 * Creates element with attributes and children.
 *
 *  createElement( document, 'p' ); // <p>
 *  createElement( document, 'p', { class: 'foo' } ); // <p class="foo">
 *  createElement( document, 'p', null, 'foo' ); // <p>foo</p>
 *  createElement( document, 'p', null, [ 'foo', createElement( document, 'img' ) ] ); // <p>foo<img></p>
 */
export default function createElement(
    doc: Document,
    name: string,
    attributes?: Record<string, unknown> | null,
    children?: Node | string | Array<Node | string>,
): HTMLElement;
