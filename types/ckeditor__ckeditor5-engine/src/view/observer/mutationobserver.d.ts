import DomConverter from "../domconverter";
import Element from "../element";
import Node from "../node";
import Text from "../text";
import Observer from "./observer";
import Renderer from "../renderer";

export default class MutationObserver extends Observer {
    domConverter: DomConverter;
    renderer: Renderer;

    flush(): void;
}

export interface MutatedChildren {
    newChildren: Node[];
    node: Element;
    oldChildren: Node[];
    type: string;
}

export interface MutatedText {
    newText: string;
    node: Text;
    oldText: string;
    type: string;
}
