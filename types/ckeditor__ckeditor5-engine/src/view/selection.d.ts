import DocumentSelection from "./documentselection";
import EditableElement from "./editableelement";
import { Item } from "./item";
import Position from "./position";
import Range from "./range";
import Element from "./element";

export type Selectable = Selection | DocumentSelection | Position | Iterable<Range> | Range | Item | null;

export default class Selection {
    readonly anchor: Position;
    readonly editableElement: EditableElement | null;
    readonly fakeSelectionLabel: string;
    readonly focus: Position;
    readonly isBackward: boolean;
    readonly isCollapsed: boolean;
    readonly isFake: boolean;
    readonly rangeCount: number;

    constructor(
        selectable?: Item,
        placeOrOffset?: number | "before" | "end" | "after" | "on" | "in",
        options?: { backward?: boolean; fake?: boolean; label?: boolean },
    );
    constructor(selectable?: Selectable, options?: { backward?: boolean; fake?: boolean; label?: boolean });
    getFirstPosition(): Position | null;
    getFirstRange(): Range | null;
    getLastPosition(): Position | null;
    getLastRange(): Range | null;
    getRanges(): Generator<Range>;
    getSelectedElement(): Element | null;
    is(type: string): boolean;
    isEqual(otherSelection: Selection): boolean;
    isSimilar(otherSelection: Selection): boolean;
    setFocus(itemOrPosition: Item, offset?: number | "end" | "before" | "after"): void;
    setFocus(itemOrPosition: Position): void;
    setTo(
        selectable: Selectable,
        placeOrOffset?: number | "before" | "end" | "after" | "on" | "in",
        options?: { backward?: boolean; fake?: boolean; label?: boolean },
    ): void;
}
