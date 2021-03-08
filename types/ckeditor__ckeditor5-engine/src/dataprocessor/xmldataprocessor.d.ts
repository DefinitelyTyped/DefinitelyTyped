import BasicHtmlWriter from "./basichtmlwriter";
import DomConverter from "../view/domconverter";
import { DataProcessor } from "./dataprocessor";
import ViewDocument from "../view/document";
import ViewDocumentFragment from "../view/documentfragment";
import ViewNode from "../view/node";
import { MatcherPattern } from "../view/matcher";

/**
 * The XML data processor class.
 * This data processor implementation uses XML as input and output data.
 * This class is needed because unlike HTML, XML allows to use any tag with any value.
 * For example, `<link>Text</link>` is a valid XML but invalid HTML.
 *
 * @implements module:engine/dataprocessor/dataprocessor~DataProcessor
 */
export default class XmlDataProcessor implements DataProcessor {
    /**
     * Creates a new instance of the XML data processor class.
     * @param {Object} options Configuration options.
     * @param {Array<String>} [options.namespaces=[]] A list of namespaces allowed to use in the XML input.
     */
    constructor(
        document: ViewDocument,
        options?: {
            /**
             * A list of namespaces allowed to use in the XML input.
             */
            namespaces: string[];
        },
    );

    /**
     * Converts the provided {@link module:engine/view/documentfragment~DocumentFragment document fragment}
     * to data format; in this case an XML string.
     */
    toData(viewFragment: ViewDocumentFragment): string;

    /**
     * Converts the provided XML string to a view tree.
     */
    toView(data: string): ViewNode | ViewDocumentFragment | null;

    /**
     * Registers a {@link module:engine/view/matcher~MatcherPattern} for view elements whose content should be treated as raw data
     * and not processed during the conversion from XML to view elements.
     *
     * The raw data can be later accessed by a
     * {@link module:engine/view/element~Element#getCustomProperty custom property of a view element} called `"$rawContent"`.
     */
    registerRawContentMatcher(pattern: MatcherPattern): void;
}
