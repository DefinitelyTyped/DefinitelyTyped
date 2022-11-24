import Document from '../view/document';
import DocumentFragment from '../view/documentfragment';
import DomConverter from '../view/domconverter';
import { MatcherPattern } from '../view/matcher';
import BasicHtmlWriter from './basichtmlwriter';
import { DataProcessor } from './dataprocessor';

/**
 * The XML data processor class.
 * This data processor implementation uses XML as input and output data.
 * This class is needed because unlike HTML, XML allows to use any tag with any value.
 * For example, `<link>Text</link>` is a valid XML but invalid HTML.
 */
export default class XmlDataProcessor implements DataProcessor {
    /**
     * Creates a new instance of the XML data processor class.
     */
    constructor(document: Document, options?: { namespaces?: string[] });
    /**
     * A list of namespaces allowed to use in the XML input.
     *
     * For example, registering namespaces [ 'attribute', 'container' ] allows to use `<attirbute:tagName></attribute:tagName>`
     * and `<container:tagName></container:tagName>` input. It is mainly for debugging.
     */
    readonly namespaces: string[];

    /**
     * DOM parser instance used to parse an XML string to an XML document.
     */
    readonly domParser: DOMParser;

    /**
     * DOM converter used to convert DOM elements to view elements.
     */
    readonly domConverter: DomConverter;

    /**
     * A basic HTML writer instance used to convert DOM elements to an XML string.
     * There is no need to use a dedicated XML writer because the basic HTML writer works well in this case.
     */
    readonly htmlWriter: BasicHtmlWriter;

    /**
     * Converts the provided {@link module:engine/view/documentfragment~DocumentFragment document fragment}
     * to data format &mdash; in this case an XML string.
     */
    toData(viewFragment: DocumentFragment): string;

    /**
     * Converts the provided XML string to a view tree.
     */
    toView(data: string): DocumentFragment;

    /**
     * Registers a {@link module:engine/view/matcher~MatcherPattern} for view elements whose content should be treated as raw data
     * and not processed during the conversion from XML to view elements.
     *
     * The raw data can be later accessed by a
     * {@link module:engine/view/element~Element#getCustomProperty custom property of a view element} called `"$rawContent"`.
     */
    registerRawContentMatcher(pattern: MatcherPattern): void;

    /**
     * If the processor is set to use marked fillers, it will insert `&nbsp;` fillers wrapped in `<span>` elements
     * (`<span data-cke-filler="true">&nbsp;</span>`) instead of regular `&nbsp;` characters.
     *
     * This mode allows for a more precise handling of block fillers (so they do not leak into editor content) but
     * bloats the editor data with additional markup.
     *
     * This mode may be required by some features and will be turned on by them automatically.
     */
    useFillerType(type: 'default' | 'marked'): void;
}
