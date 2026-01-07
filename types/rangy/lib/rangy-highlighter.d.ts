import "./rangy-classapplier";
import "./rangy-core";

declare global {
    namespace rangy {
        interface RangyHighlighter {
            addClassApplier(classApplier: RangyClassApplier, options?: RangyHighlighterAddClassOptions): void;
            highlightSelection(className: string, options?: RangyHighlightOptions): string[];
            unhighlightSelection(selection?: RangySelection): boolean;
            removeAllHighlights(): void;
            serialize(highlights?: RangyHighlight[]): string;
            deserialize(serialized: string): RangyHighlight[];
            getHighlightForElement(el: Element): RangyHighlight | null;
        }

        interface RangyHighlighterAddClassOptions {
            priority?: number;
            exclusive?: boolean;
        }

        interface RangyHighlightOptions {
            selection?: RangySelection;
            exclusive?: boolean;
            containerElementId?: string;
        }

        interface RangyHighlight {
            id: string;
            classApplier: RangyClassApplier;
            characterRange: {
                start: number;
                end: number;
                containerElement: Node;
            };
            containsElement(el: Node): boolean;
            containsRange(range: RangyRange): boolean;
            intersectsRange(range: RangyRange): boolean;
            isCharacterRange(containerElement: Node): boolean;
            getRange(containerElement?: Node): RangyRange;
        }

        function createHighlighter(
            doc?: Document | Window | HTMLIFrameElement,
            type?: "textContent" | "textRange",
        ): RangyHighlighter;
    }
}

export = rangy;
