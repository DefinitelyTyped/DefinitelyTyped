import Element from "./element";

export default class AttributeElement extends Element {
    readonly id: string | number;
    readonly priority: number;

    static DEFAULT_PRIORITY: number;

    getElementsWithSameId(): Set<AttributeElement>;
    toJSON(): ReturnType<Element["toJSON"]> & { id: string; priority: number };
}
