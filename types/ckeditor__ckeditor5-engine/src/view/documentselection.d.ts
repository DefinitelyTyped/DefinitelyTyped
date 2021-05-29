import EditableElement from "./editableelement";
import Position from "./position";
import Selection, { Selectable } from "./selection";

export default class DocumentSelection {
    readonly anchor: Position;
    readonly editableElement: EditableElement | null;
    readonly fakeSelectionLabel: string;
    readonly focus: Position;
    readonly isBackward: boolean;
    readonly isCollapsed: boolean;
    readonly isFake: boolean;
    readonly rangeCount: number;

    constructor(
        selectable?: Selectable,
        placeOrOffset?: number | "before" | "end" | "after" | "on" | "in",
        options?: { backward?: boolean; fake?: boolean; label?: string },
    );
    getFirstPosition(): Position | null;
    getFirstRange(): Range | null;
    getLastPosition(): Position | null;
    getLastRange(): Range | null;
    getRanges(): Generator<Range>;
    getSelectedElement(): Element | null;
    is(type: string): boolean;
    isEqual(otherSelection: Selection | DocumentSelection): boolean;
    isSimilar(otherSelection: Selection | DocumentSelection): boolean;
}
