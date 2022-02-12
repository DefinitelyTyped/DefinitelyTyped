import DocumentFragment from "../view/documentfragment";
import Element from "../view/element";
import Text from "../view/text";
import Node from "../view/node";

export default class ViewConsumable {
    add(element: Text | DocumentFragment): void;
    add(
        element: Element,
        consumables?: {
            name?: boolean | undefined;
            attributes?: string | string[] | undefined;
            classes?: string | string[] | undefined;
            styles?: string | string[] | undefined;
        },
    ): void;
    consume(
        element: Element,
        consumables?: {
            name?: boolean | undefined;
            attributes?: string | string[] | undefined;
            classes?: string | string[] | undefined;
            styles?: string | string[] | undefined;
        },
    ): boolean;
    consume(element: Text | DocumentFragment): boolean;
    revert(
        element: Element,
        consumables?: {
            name?: boolean | undefined;
            attributes?: string | string[] | undefined;
            classes?: string | string[] | undefined;
            styles?: string | string[] | undefined;
        },
    ): void;
    revert(element: Text | DocumentFragment): void;
    test(
        element: Node | DocumentFragment,
        consumables?: {
            name?: boolean | undefined;
            attributes?: string | string[] | undefined;
            classes?: string | string[] | undefined;
            styles?: string | string[] | undefined;
        },
    ): boolean | null;
    test(element: Text | DocumentFragment): boolean | null;

    static consumablesFromElement(
        element: Element,
    ): { name: true; attributes: string[]; classes: string[]; styles: string[] };
    static createFrom(from: Node | DocumentFragment, instance?: ViewConsumable): void;
}
