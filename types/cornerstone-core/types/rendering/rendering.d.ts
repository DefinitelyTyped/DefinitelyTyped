declare namespace _default {
    export { renderColorImage as colorImage };
    export { renderGrayscaleImage as grayscaleImage };
    export { renderWebImage as webImage };
    export { renderPseudoColorImage as pseudoColorImage };
    export { renderLabelMapImage as labelMapImage };
    export { renderToCanvas as toCanvas };
}
export default _default;
import { renderColorImage } from "./renderColorImage.js";
import { renderGrayscaleImage } from "./renderGrayscaleImage.js";
import { renderWebImage } from "./renderWebImage.js";
import { renderPseudoColorImage } from "./renderPseudoColorImage.js";
import { renderLabelMapImage } from "./renderLabelMapImage.js";
import renderToCanvas from "./renderToCanvas.js";
