import DocumentFragment from "../model/documentfragment";
import Node from "../model/node";
import ViewDocument from "../view/document";
import { MatcherPattern } from "../view/matcher";
import { DataProcessor } from "./dataprocessor";
import ViewNode from "../view/node";

/**
 * The HTML data processor class.
 * This data processor implementation uses HTML as input and output data.
 */
export default class HtmlDataProcessor implements DataProcessor {
    /**
     * Creates a new instance of the HTML data processor class.
     */
    constructor(document: ViewDocument);
    /**
     * Converts a provided {@link module:engine/view/documentfragment~DocumentFragment document fragment}
     * to data format &mdash; in this case to an HTML string.
     */
    toData(viewFragment: DocumentFragment): string;
    /**
     * Converts the provided HTML string to a view tree.
     */
    toView(data: string): ViewNode | DocumentFragment | null;
    /**
     * Registers a {@link module:engine/view/matcher~MatcherPattern} for view elements whose content should be treated as raw data
     * and not processed during the conversion from the DOM to the view elements.
     *
     * The raw data can be later accessed by a
     * {@link module:engine/view/element~Element#getCustomProperty custom property of a view element} called `"$rawContent"`.
     */
    registerRawContentMatcher(pattern: MatcherPattern): void;
}
