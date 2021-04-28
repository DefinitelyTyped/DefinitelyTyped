import Document from "../view/document";
import DocumentFragment from "../view/documentfragment";
import { MatcherPattern } from "../view/matcher";
import Node from "../view/node";
import { DataProcessor } from "./dataprocessor";

export default class XmlDataProcessor implements DataProcessor {
    namespaces: DOMParser;

    constructor(document: Document, options?: { namespaces?: string[] });
    registerRawContentMatcher(pattern: MatcherPattern): void;
    toData(viewFragment: DocumentFragment): string;
    toView(data: string): Node | DocumentFragment | null;
    useFillerType(type: "default" | "marked");
}
