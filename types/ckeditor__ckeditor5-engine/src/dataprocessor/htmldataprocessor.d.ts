import Document from '../view/document';
import DocumentFragment from '../view/documentfragment';
import DomConverter from '../view/domconverter';
import { MatcherPattern } from '../view/matcher';
import BasicHtmlWriter from './basichtmlwriter';
import { DataProcessor } from './dataprocessor';

/**
 * The HTML data processor class.
 * This data processor implementation uses HTML as input and output data.
 */
export default class HtmlDataProcessor implements DataProcessor {
    /**
     * Creates a new instance of the HTML data processor class.
     */
    constructor(document: Document);
    /**
     * A DOM parser instance used to parse an HTML string to an HTML document.
     */
    readonly domParser: DOMParser;

    /**
     * A DOM converter used to convert DOM elements to view elements.
     */
    domConverter: DomConverter;

    /**
     * A basic HTML writer instance used to convert DOM elements to an HTML string.
     */
    readonly htmlWriter: BasicHtmlWriter;

    /**
     * Converts a provided {@link module:engine/view/documentfragment~DocumentFragment document fragment}
     * to data format &mdash; in this case to an HTML string.
     */
    toData(viewFragment: DocumentFragment): string;

    /**
     * Converts the provided HTML string to a view tree.
     */
    toView(data: string): DocumentFragment;

    /**
     * Registers a {@link module:engine/view/matcher~MatcherPattern} for view elements whose content should be treated as raw data
     * and not processed during the conversion from the DOM to the view elements.
     *
     * The raw data can be later accessed by a
     * {@link module:engine/view/element~Element#getCustomProperty custom property of a view element} called `"$rawContent"`.
     */
    registerRawContentMatcher(pattern: MatcherPattern): void;

    /**
     * If the processor is set to use marked fillers, it will insert `&nbsp;` fillers wrapped in `<span>` elements
     * (`<span data-cke-filler="true">&nbsp;</span>`) instead of regular `&nbsp;` characters.
     *
     * This mode allows for a more precise handling of the block fillers (so they do not leak into the editor content) but
     * bloats the editor data with additional markup.
     *
     * This mode may be required by some features and will be turned on by them automatically.
     */
    useFillerType(type: 'default' | 'marked'): void;
}
