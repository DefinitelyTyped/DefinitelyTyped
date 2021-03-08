import DocumentFragment from "../model/documentfragment";
import { MatcherPattern } from "../view/matcher";
import ViewNode from "../view/node";

export interface DataProcessor {
    /**
     * Converts a {@link module:engine/view/documentfragment~DocumentFragment document fragment} to data.
     */
    toData(documentfragment: DocumentFragment): string;

    /**
     * Converts the data to a {@link module:engine/view/documentfragment~DocumentFragment document fragment}.
     */
    toView(data: string): ViewNode | DocumentFragment | null;

    /**
     * Registers a {@link module:engine/view/matcher~MatcherPattern} for view elements whose content should be treated as raw data
     * and its content should be converted to a
     * {@link module:engine/view/element~Element#getCustomProperty custom property of a view element} called `"$rawContent"` while
     * converting {@link #toView to view}.
     */
    registerRawContentMatcher(pattern: MatcherPattern): void;
}
