import { HtmlWriter } from './htmlwriter';

/**
 * Basic HTML writer. It uses the native `innerHTML` property for basic conversion
 * from a document fragment to an HTML string.
 */
export default class BasicHtmlWriter implements HtmlWriter {
    /**
     * Returns an HTML string created from the document fragment.
     */
    getHtml(fragment: DocumentFragment): string;
}
