// Type definitions for Rangy Class Applier module
// Project: https://github.com/timdown/rangy
// Definitions by: Bùi Việt Thành <https://github.com/ohze>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as rangy from 'rangy';

declare module 'rangy' {
    export interface SerializedSelectionT {
        characterRange: CharacterRange
        backward: boolean
    }

    export type ConverterCreator = () => Converter

    export interface Converter {
        rangeToCharacterRange(range: RangyRange, containerNode?:Node): CharacterRange;
        characterRangeToRange(doc:Document|Window|HTMLIFrameElement,
                              characterRange: CharacterRange,
                              containerNode: Node): RangyRange
        serializeSelection(selection: RangySelection, containerNode: Node): SerializedSelectionT[];
        restoreSelection(selection: RangySelection, savedSelection: RangySelection, containerNode: Node): void
    }
    export interface CharacterRange {
        start: number
        end: number
    }

    export interface HighlightOptions {
        containerElementId?: string
        exclusive?: boolean
    }
    export interface Highlight {
        id: number
        characterRange: CharacterRange
        doc: Document|Window|HTMLIFrameElement
        classApplier: RangyClassApplier
        converter: Converter
        containerElementId: string|null
        applied: boolean

        getContainerElement(): HTMLElement|null
        getRange(): RangyRange
        fromRange(range: RangyRange): void
        getText(): string
        containsElement(el: Node): boolean
        unapply(): void
        apply(): void
        getHighlightElements(): (Node|null)[]
    }

    export class Highlighter {
        doc: Document|Window|HTMLIFrameElement;
        classAppliers: RangyClassApplier;
        highlights: Highlight[];

        constructor(doc?: Document|Window|HTMLIFrameElement, type?: string)

        addClassApplier(classApplier: RangyClassApplier): void
        getHighlightForElement(el: Node): Highlight|null
        removeHighlights(highlights: Highlight[]): void
        removeAllHighlights(): void
        getIntersectingHighlights(ranges: RangyRange[]): Highlight[]

        /** @return new highlights */
        highlightCharacterRanges(className: string|null|undefined, charRanges: CharacterRange[], options?: HighlightOptions): Highlight[]

        highlightRanges(className: string|null|undefined, ranges: RangyRange[], options?: HighlightOptions): Highlight[]

        highlightSelection(className?: string, options?: HighlightOptions & {selection?: RangySelection}): Highlight[]

        unhighlightSelection(selection: RangySelection): Highlight[]
        getHighlightsInSelection(selection: RangySelection): Highlight[]
        selectionOverlapsHighlight(selection: RangySelection): boolean
        serialize(options?: {serializeHighlightText?: boolean; type?: string}): string
        deserialize(serialized: string): void
    }

    export function registerHighlighterType(type: string, converterCreator: ConverterCreator): void
    export function createHighlighter(doc?: Document|Window|HTMLIFrameElement,
                                      rangeCharacterOffsetConverterType?: string): Highlighter;
}
