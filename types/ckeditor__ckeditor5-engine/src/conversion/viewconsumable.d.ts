import DocumentFragment from "../view/documentfragment";
import Element from "../view/element";
import Text from "../view/text";

export default class ViewConsumable {
    add(element: Text | DocumentFragment): void;
    add(
        element: Element,
        consumables?: {
            name?: boolean;
            attributes?: string | string[];
            classes?: string | string[];
            styles?: string | string[];
        },
    ): void;
    consume(
        element: Element,
        consumables?: {
            name?: boolean;
            attributes?: string | string[];
            classes?: string | string[];
            styles?: string | string[];
        },
    ): boolean;
    consume(element: Text | DocumentFragment): boolean;
    revert(
        element: Element,
        consumables?: {
            name?: boolean;
            attributes?: string | string[];
            classes?: string | string[];
            styles?: string | string[];
        },
    ): void;
    revert(element: Text | DocumentFragment): void;
    test(
        element: Element,
        consumables?: {
            name?: boolean;
            attributes?: string | string[];
            classes?: string | string[];
            styles?: string | string[];
        },
    ): boolean | null;
    test(element: Text | DocumentFragment): boolean | null;

    static consumablesFromElement(
        element: Element,
    ): { name: true; attributes: string[]; classes: string[]; styles: string[] };
    static createFrom(from: Node | DocumentFragment, instance?: ViewConsumable): void;
}
