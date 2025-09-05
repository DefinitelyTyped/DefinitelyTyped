import { Node } from "./Element.js";

export default function clone<T extends Node>(el: T): T;
