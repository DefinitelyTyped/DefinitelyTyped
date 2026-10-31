/**
 * Creates an element with the given attributes and child elements
 *
 * @internal
 * @template {keyof HTMLElementTagNameMap} TagName
 * @param {TagName} tagName - Type of element to create
 * @param {{[key: string]: string}} [attributes] - Attributes to set on the element
 * @param {Array<HTMLElement | string>} [children] - An optional list of children or text to append to the element
 * @returns {HTMLElementTagNameMap[TagName]} Created element
 */
export function createElement<TagName extends keyof HTMLElementTagNameMap>(tagName: TagName, attributes?: {
    [key: string]: string;
}, children?: Array<HTMLElement | string>): HTMLElementTagNameMap[TagName];
