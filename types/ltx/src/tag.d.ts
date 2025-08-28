import Element from "./Element.js";
import tagString from "./tagString.js";

export default function tag(...args: Parameters<typeof tagString>): Element;
