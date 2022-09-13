import Node from "./node";
import TextProxy from "./textproxy";
import Element from "./element";
import RootElement from "./rootelement";
import Text from "./text";

export type Item = Node | Element | RootElement | Text | TextProxy;
