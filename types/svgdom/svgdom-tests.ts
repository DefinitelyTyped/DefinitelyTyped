// Common things we interface with from @svgdotjs/svg.js
declare function registerWindow(win: Window, doc: Document): void;
declare function SVG<T>(el: T): SVGTypeMapping<T>;
type SVGTypeMapping<T> = T extends HTMLElement ? Dom : T extends SVGSVGElement ? Svg : never;
interface Svg {
    _svg: "Svg";
}
interface Dom {
    _dom: "Dom";
}

// Test the createSVGWindow method of this library
import { createSVGWindow } from "svgdom";

// $ExpectType SVGWindow
const window = createSVGWindow();
// $ExpectType SVGDocument
const document = window.document;
registerWindow(window, document);

// $ExpectType Dom
SVG(document.documentElement);

// $ExpectType Svg
SVG<SVGSVGElement>(document.documentElement);

// $ExpectType Dom
SVG<HTMLElement>(document.documentElement);
