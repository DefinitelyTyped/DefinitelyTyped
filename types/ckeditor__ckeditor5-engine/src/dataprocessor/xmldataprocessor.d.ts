import Document from '../view/document';
import ViewDocumentFragment from '../view/documentfragment';
import DomConverter from '../view/domconverter';
import { MatcherPattern } from '../view/matcher';
import ViewNode from '../view/node';
import { DataProcessor } from './dataprocessor';
import BasicHtmlWriter from './basichtmlwriter';

export default class XmlDataProcessor<N extends string[] = []> implements DataProcessor {
    constructor(document: Document, options?: { namespaces?: N });
    readonly namespaces: N;
    readonly domParser: DOMParser;
    readonly domConverter: DomConverter;
    readonly htmlWriter: BasicHtmlWriter;
    toData(viewFragment: ViewDocumentFragment): string;
    toView(data: string): ViewNode | ViewDocumentFragment | null;
    registerRawContentMatcher(pattern: MatcherPattern): void;
    useFillerType(type: 'default' | 'marked'): void;
}
