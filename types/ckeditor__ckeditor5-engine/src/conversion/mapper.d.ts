import Element from "../view/element";
import ModelElement from "../model/element";
import Position from "../view/position";
import ModelPosition from "../model/position";
import Range from "../view/range";
import ModelRange from "../model/range";

export default class Mapper {
    bindElementToMarker(element: Element, name: string): void;
    bindElements(modelElement: ModelElement, viewElement: Element): void;
    clearBindings(): void;
    findMappedViewAncestor(viewPosition: Position): Element;
    findPositionIn(viewParent: Element, expectedOffset: number): Position;
    flushUnboundMarkerNames(): string[];
    getModelLength(viewNode: Element): number;
    markerNameToElements(name: string): Set<Element> | null;
    registerViewToModelLength(viewElementName: string, lengthCallback: (element: Element) => number): void;
    toModelElement(viewElement: Element): ModelElement | undefined;
    toModelPosition(viewPosition: Position): ModelPosition;
    toModelRange(viewRange: Range): ModelRange;
    toViewElement(modelElement: ModelElement): Element | undefined;
    toViewPosition(modelPosition: ModelPosition, options?: { isPhantom?: boolean }): Position;
    toViewRange(modelRange: ModelRange): Range;
    unbindElementFromMarkerName(element: Element, name: string): void;
    unbindModelElement(modelElement: ModelElement): void;
    unbindViewElement(viewElement: Element): void;
}
