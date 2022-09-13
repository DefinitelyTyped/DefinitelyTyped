import DocumentFragment from "../view/documentfragment";
import { MatcherPattern } from "../view/matcher";
import Node from "../view/node";

export interface DataProcessor {
    registerRawContentMatcher(pattern: MatcherPattern): void;
    toData(fragment: DocumentFragment): string;
    toView(data: string): DocumentFragment | Node | null;
    useFillerType(type: "default" | "marked"): void;
}
