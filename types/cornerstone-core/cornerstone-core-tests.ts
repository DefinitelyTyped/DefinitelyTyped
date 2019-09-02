import { events, EVENTS, EnabledElement, CornerstoneEvent, CornerstoneEventData, Viewport, disable, enable, getDefaultViewport, getDefaultViewportForImage, Image, displayImage, setViewport, setToPixelCoordinateSystem, pageToPixel, pixelToCanvas, loadImage } from 'cornerstone-core';

declare const element: HTMLElement;
declare const enabledElement: EnabledElement;
declare const image: Image;
declare const context2d: CanvasRenderingContext2D;

events.addEventListener(EVENTS.IMAGE_RENDERED, (event: CornerstoneEvent) => {
    const eventData: CornerstoneEventData | undefined = event.detail;
    if (eventData
        && eventData.canvasContext
        && eventData.element
        && eventData.enabledElement
        && eventData.image
        && typeof eventData.renderTimeInMs === 'number'
        && eventData.viewport) {
        const currentViewport: Viewport = eventData.viewport;
    }
})

disable(element);
enable(element, { renderer: 'webgl' });

const defaultViewport: Viewport = getDefaultViewportForImage(element, image);

displayImage(element, image, defaultViewport);

setViewport(element, {
    ...defaultViewport,
    scale: 0.6,
    translation: {
        x: 30,
        y: 50,
    }
})

image.voiLUT = undefined;

setToPixelCoordinateSystem(enabledElement, context2d);

const { x: pixelX, y: pixelY } = pageToPixel(element, 30, 50);
const { x: canvasX, y: canvasY } = pixelToCanvas(element, { x: 50, y: 60 });

async function loadImageTest(): Promise<Image> {
    const image: Image = await loadImage('wado://...');
    return image;
}