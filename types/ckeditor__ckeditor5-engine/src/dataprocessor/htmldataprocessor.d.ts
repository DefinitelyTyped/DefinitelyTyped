import Document from '../view/document';
import DocumentFragment from '../view/documentfragment';
import DomConverter from '../view/domconverter';
import { MatcherPattern } from '../view/matcher';
import Node from '../view/node';
import { DataProcessor } from './dataprocessor';
import BasicHtmlWriter from './basichtmlwriter';

export default class HtmlDataProcessor implements DataProcessor {
    constructor(document: Document);
    domParser: DOMParser;
    domConverter: DomConverter;
    htmlWriter: BasicHtmlWriter;
    registerRawContentMatcher(pattern: MatcherPattern): void;
    toData(viewFragment: DocumentFragment): string;
    toView(data: string): Node | DocumentFragment | null;
    useFillerType(type: 'default' | 'marked'): void;
}
