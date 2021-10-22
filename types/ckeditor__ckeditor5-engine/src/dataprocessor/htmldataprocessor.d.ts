import Document from "../view/document";
import DocumentFragment from "../view/documentfragment";
import { MatcherPattern } from "../view/matcher";
import Node from "../view/node";
import { DataProcessor } from "./dataprocessor";

export default class HtmlDataProcessor implements DataProcessor {
    constructor(document: Document);
    registerRawContentMatcher(pattern: MatcherPattern): void;
    toData(viewFragment: DocumentFragment): string;
    toView(data: string): Node | DocumentFragment | null;
    useFillerType(type: "default" | "marked"): void;
}
