import { DomHelpersRect } from "./offset";
/**
 * Return "offset" of the node to its offsetParent,
 * optionally you can specify the offset parent if different than the "real" one
 */
declare const position: (element: Element, offsetParent?: Node) => DomHelpersRect;
export = position;
