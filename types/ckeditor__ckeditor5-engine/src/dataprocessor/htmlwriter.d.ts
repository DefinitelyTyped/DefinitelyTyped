/**
 * The HTML writer interface.
 */
export interface HtmlWriter {
    /**
     * Returns an HTML string created from a document fragment.
     */
    getHtml(fragment: DocumentFragment): string;
}
