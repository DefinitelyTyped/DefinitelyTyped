import { HtmlWriter } from "./htmlwriter";

export default class BasicHtmlWriter implements HtmlWriter {
    getHtml(fragment: DocumentFragment): string;
}
