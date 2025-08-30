import { Node } from "./Element.js";

declare function clone<T extends Node>(el: T): T;
export = clone;
