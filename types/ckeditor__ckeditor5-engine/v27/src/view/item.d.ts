import AttributeElement from "./attributeelement";
import ContainerElement from "./containerelement";
import EditableElement from "./editableelement";
import Element from "./element";
import EmptyElement from "./emptyelement";
import Node from "./node";
import RawElement from "./rawelement";
import RootEditableElement from "./rooteditableelement";
import Text from "./text";
import TextProxy from "./textproxy";
import UIElement from "./uielement";

export type Item =
    | Node
    | Element
    | Text
    | ContainerElement
    | EditableElement
    | RootEditableElement
    | AttributeElement
    | UIElement
    | RawElement
    | EmptyElement
    | TextProxy;
