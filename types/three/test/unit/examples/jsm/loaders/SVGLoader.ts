import { SVGLoader } from "three/addons/loaders/SVGLoader.js";

const loader = new SVGLoader();
const result = loader.parse(`<svg xmlns="http://www.w3.org/2000/svg"></svg>`);

// $ExpectType SVGSVGElement
result.xml;
