/**
 * Create a valid HTML4 ID from an input value.
 */
export as namespace idify;

/**
 * Removes invalid characters and generates an id meant to be used for HTML elements.
 * See {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id|MDN} for the note about invalid characters.
 */
declare function createId(input: string): string;

export = createId;
