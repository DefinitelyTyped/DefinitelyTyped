/// <reference path="index.d.ts"/>
/// <reference path="rangy-classapplier.d.ts"/>

interface RangyStatic {
  createHighlighter(
    doc?: Document | Window | HTMLIFrameElement,
    type?: 'textContent' | 'textRange'): RangyHighlighter;
}

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
    priority?: number | undefined;
    exclusive?: boolean | undefined;
}

interface RangyHighlightOptions {
    selection?: RangySelection
    exclusive?: boolean | undefined;
    containerElementId?: string | undefined;
}

interface RangyHighlight {
    id: string;
    classApplier: RangyClassApplier;
    characterRange: { start: number, end: number, containerElement: Node };
    containsElement(el: Node): boolean;
    containsRange(range: RangyRange): boolean;
    intersectsRange(range: RangyRange): boolean;
    isCharacterRange(containerElement: Node): boolean;
    getRange(containerElement?: Node): RangyRange;
}
