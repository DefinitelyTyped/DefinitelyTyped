// Type definitions for cornerstone-core 2.3
// Project: https://github.com/cornerstonejs/cornerstone
// Definitions by: SangYeob Yu <https://github.com/deminoth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

export default cornerstone;
import * as colors from './types/Colors';
import { displayImage, draw, drawInvalidated, invalidate, invalidateImageId, updateImage } from './types/Drawing';
import { disable, enable } from './types/Enable.js';
import { getElementData, removeElementData } from './types/EnabledElementData.js';
import {
    addLayer,
    getActiveLayer,
    getLayer,
    getLayers,
    getVisibleLayers,
    purgeLayers,
    removeLayer,
    setActiveLayer,
    setLayerImage,
} from './types/EnabledElementLayers.js';
import {
    addEnabledElement,
    getEnabledElement,
    getEnabledElements,
    getEnabledElementsByImageId,
} from './types/EnabledElements.js';
import { default as EVENTS, events } from './types/events.js';
import { convertImageToFalseColorImage, convertToFalseColorImage, restoreImage } from './types/falseColorMapping.js';
import { default as fitToWindow } from './types/fitToWindow.js';
import { default as getDefaultViewportForImage } from './types/getDefaultViewportForImage.js';
import { default as getImage } from './types/getImage.js';
import { default as getPixels } from './types/getPixels.js';
import { default as getStoredPixels } from './types/getStoredPixels.js';
import * as imageCache from './types/imageCache.js';
import { loadAndCacheImage, loadImage, registerImageLoader, registerUnknownImageLoader } from './types/ImageLoader.js';
import { default as drawImage } from './types/internal/drawImage.js';
import { default as generateLut } from './types/internal/generateLut.js';
import { default as getDefaultViewport } from './types/internal/getDefaultViewport.js';
import { default as internal } from './types/internal/internal.js';
import { default as requestAnimationFrame } from './types/internal/requestAnimationFrame.js';
import { default as setDefaultViewport } from './types/internal/setDefaultViewport.js';
import { default as storedColorPixelDataToCanvasImageData } from './types/internal/storedColorPixelDataToCanvasImageData.js';
import { default as storedPixelDataToCanvasImageData } from './types/internal/storedPixelDataToCanvasImageData.js';
import { default as storedPixelDataToCanvasImageDataColorLUT } from './types/internal/storedPixelDataToCanvasImageDataColorLUT.js';
import { default as storedPixelDataToCanvasImageDataPseudocolorLUT } from './types/internal/storedPixelDataToCanvasImageDataPseudocolorLUT.js';
import * as metaData from './types/MetaData.js';
import { Image, Viewport } from './types/Objects';
import { canvasToPixel, pageToPixel, pixelToCanvas } from './types/PixelCoordinateSystem';
import { default as pixelDataToFalseColorData } from './types/pixelDataToFalseColorData.js';
import { default as rendering } from './types/rendering/rendering.js';
import { renderColorImage } from './types/rendering/renderColorImage.js';
import { renderGrayscaleImage } from './types/rendering/renderGrayscaleImage.js';
import { renderLabelMapImage } from './types/rendering/renderLabelMapImage.js';
import { renderPseudoColorImage } from './types/rendering/renderPseudoColorImage.js';
import { default as renderToCanvas } from './types/rendering/renderToCanvas.js';
import { renderWebImage } from './types/rendering/renderWebImage.js';
import { default as reset } from './types/reset.js';
import { default as resize } from './types/resize.js';
import { default as setToPixelCoordinateSystem } from './types/setToPixelCoordinateSystem.js';
import { default as triggerEvent } from './types/triggerEvent.js';
import { getViewport, setViewport } from './types/ViewportSettings';
import { default as webGL } from './types/webgl/webgl.js';

declare namespace cornerstone {
    export { drawImage };
    export { generateLut };
    export { getDefaultViewport };
    export { requestAnimationFrame };
    export { storedPixelDataToCanvasImageData };
    export { storedColorPixelDataToCanvasImageData };
    export { storedPixelDataToCanvasImageDataColorLUT };
    export { storedPixelDataToCanvasImageDataPseudocolorLUT };
    export { internal };
    export { renderLabelMapImage };
    export { renderPseudoColorImage };
    export { renderColorImage };
    export { renderGrayscaleImage };
    export { renderWebImage };
    export { renderToCanvas };
    export { canvasToPixel };
    export { disable };
    export { displayImage };
    export { draw };
    export { drawInvalidated };
    export { enable };
    export { getElementData };
    export { removeElementData };
    export { getEnabledElement };
    export { addEnabledElement };
    export { getEnabledElementsByImageId };
    export { getEnabledElements };
    export { addLayer };
    export { removeLayer };
    export { getLayer };
    export { getLayers };
    export { getVisibleLayers };
    export { setActiveLayer };
    export { getActiveLayer };
    export { purgeLayers };
    export { setLayerImage };
    export { fitToWindow };
    export { getDefaultViewportForImage };
    export { setDefaultViewport };
    export { getImage };
    export { getPixels };
    export { getStoredPixels };
    export { getViewport };
    export { loadImage };
    export { loadAndCacheImage };
    export { registerImageLoader };
    export { registerUnknownImageLoader };
    export { invalidate };
    export { invalidateImageId };
    export { pageToPixel };
    export { pixelToCanvas };
    export { reset };
    export { resize };
    export { setToPixelCoordinateSystem };
    export { setViewport };
    export { updateImage };
    export { pixelDataToFalseColorData };
    export { rendering };
    export { imageCache };
    export { metaData };
    export { webGL };
    export { colors };
    export { convertImageToFalseColorImage };
    export { convertToFalseColorImage };
    export { restoreImage };
    export { EVENTS };
    export { events };
    export { triggerEvent };
    export { Image };
    export { Viewport };
}
export {
    drawImage,
    generateLut,
    getDefaultViewport,
    setDefaultViewport,
    requestAnimationFrame,
    storedPixelDataToCanvasImageData,
    storedColorPixelDataToCanvasImageData,
    storedPixelDataToCanvasImageDataColorLUT,
    storedPixelDataToCanvasImageDataPseudocolorLUT,
    internal,
    renderLabelMapImage,
    renderPseudoColorImage,
    renderColorImage,
    renderGrayscaleImage,
    renderWebImage,
    renderToCanvas,
    canvasToPixel,
    disable,
    displayImage,
    draw,
    drawInvalidated,
    enable,
    getElementData,
    removeElementData,
    getEnabledElement,
    addEnabledElement,
    getEnabledElementsByImageId,
    getEnabledElements,
    addLayer,
    removeLayer,
    getLayer,
    getLayers,
    getVisibleLayers,
    setActiveLayer,
    getActiveLayer,
    purgeLayers,
    setLayerImage,
    fitToWindow,
    getDefaultViewportForImage,
    getImage,
    getPixels,
    getStoredPixels,
    getViewport,
    loadImage,
    loadAndCacheImage,
    registerImageLoader,
    registerUnknownImageLoader,
    invalidate,
    invalidateImageId,
    pageToPixel,
    pixelToCanvas,
    reset,
    resize,
    setToPixelCoordinateSystem,
    setViewport,
    updateImage,
    pixelDataToFalseColorData,
    rendering,
    imageCache,
    metaData,
    webGL,
    colors,
    convertImageToFalseColorImage,
    convertToFalseColorImage,
    restoreImage,
    EVENTS,
    events,
    triggerEvent,
    Image,
    Viewport,
};

export as namespace cornerstone;
