declare const canvas: HTMLCanvasElement;
declare const offscreen: OffscreenCanvas;
declare const element: Element;
declare const queue: GPUQueue;
declare const texture: GPUTexture;
declare const gl: WebGLRenderingContext;
declare const gl2: WebGL2RenderingContext;
declare const worker: Worker;
declare const someEvent: Event;

// api.HTMLCanvasElement.content (and html.elements.canvas.content)
canvas.content; // $ExpectType string
canvas.content = "drawable";

// api.HTMLCanvasElement.paint_event
canvas.onpaint = (ev) => {
    ev; // $ExpectType CanvasPaintEvent
    ev.changedElements; // $ExpectType readonly Element[]
};
canvas.onpaint = null;
canvas.addEventListener("paint", (ev) => {
    ev; // $ExpectType CanvasPaintEvent
});
canvas.addEventListener("paint", function(ev) {
    this; // $ExpectType HTMLCanvasElement
});
canvas.removeEventListener("paint", (ev) => {
    ev; // $ExpectType CanvasPaintEvent
});
// @ts-expect-error listener typed for the wrong event
canvas.addEventListener("paint", (ev: ElementGeometryUpdateEvent) => {});
// @ts-expect-error handler typed for the wrong event
canvas.onpaint = (ev: ElementGeometryUpdateEvent) => {};

// api.HTMLCanvasElement.elementgeometryupdate_event
canvas.onelementgeometryupdate = function(ev) {
    this; // $ExpectType HTMLCanvasElement
    ev; // $ExpectType ElementGeometryUpdateEvent
    ev.elements; // $ExpectType readonly Element[]
};
canvas.onelementgeometryupdate = null;
canvas.addEventListener("elementgeometryupdate", (ev) => {
    ev; // $ExpectType ElementGeometryUpdateEvent
});
const onGeometry = (ev: ElementGeometryUpdateEvent) => {};
canvas.addEventListener("elementgeometryupdate", onGeometry, { once: true });
canvas.removeEventListener("elementgeometryupdate", onGeometry);

// Inherited HTMLElement events keep working.
canvas.addEventListener("click", (ev) => {
    ev; // $ExpectType PointerEvent
});

// api.HTMLCanvasElement.requestPaint
canvas.requestPaint(); // $ExpectType void

// api.HTMLCanvasElement.captureElementImage
const image = canvas.captureElementImage(element); // $ExpectType ElementImage
// @ts-expect-error
canvas.captureElementImage(image);

// api.HTMLCanvasElement.getElementImageDefaultSize
canvas.getElementImageDefaultSize(element); // $ExpectType ElementImageDefaultSize
canvas.getElementImageDefaultSize(image).width; // $ExpectType number | undefined

// api.HTMLCanvasElement.getElementTransform
canvas.getElementTransform(element); // $ExpectType DOMMatrix
// @ts-expect-error getElementTransform takes Element only
canvas.getElementTransform(image);

// api.HTMLCanvasElement.updateElementGeometry
canvas.updateElementGeometry(element); // $ExpectType void
canvas.updateElementGeometry(image, {
    preserveHitTestOrder: true,
    canvasClip: { x: 0, y: 0, width: 10, height: 10 },
    canvasTransform: { a: 1, d: 1 },
});
// @ts-expect-error
canvas.updateElementGeometry(element, { unknown: true });

// api.HTMLCanvasElement.clearElementGeometry
canvas.clearElementGeometry(element); // $ExpectType void
canvas.clearElementGeometry(image);

// api.ElementImage, api.ElementImage.close, api.ElementImage.worker_support
image.close(); // $ExpectType void
// ElementImage is transferable (assignable to Transferable without a cast).
worker.postMessage(image, [image]);
structuredClone(image, { transfer: [image] });
ElementImage.prototype; // $ExpectType ElementImage

// api.CanvasPaintEvent, api.CanvasPaintEvent.CanvasPaintEvent, api.CanvasPaintEvent.changedElements
const paintEvent = new CanvasPaintEvent("paint"); // $ExpectType CanvasPaintEvent
new CanvasPaintEvent("paint", { changedElements: [element], bubbles: false });
paintEvent.changedElements; // $ExpectType readonly Element[]
// @ts-expect-error type is required
new CanvasPaintEvent();
// @ts-expect-error
paintEvent.changedElements.push(element);
// For generator parity; at runtime createEvent() may throw NotSupportedError for this interface.
document.createEvent("CanvasPaintEvent"); // $ExpectType CanvasPaintEvent
// @ts-expect-error readonly
paintEvent.changedElements = [];
// @ts-expect-error changedElements must be an array
new CanvasPaintEvent("paint", { changedElements: element });
canvas.dispatchEvent(new CanvasPaintEvent("paint", { changedElements: [element] })); // $ExpectType boolean
CanvasPaintEvent.prototype; // $ExpectType CanvasPaintEvent
if (someEvent instanceof CanvasPaintEvent) {
    someEvent.changedElements; // $ExpectType readonly Element[]
}

// api.ElementGeometryUpdateEvent, .ElementGeometryUpdateEvent, .elements
const geometryEvent = new ElementGeometryUpdateEvent("elementgeometryupdate"); // $ExpectType ElementGeometryUpdateEvent
new ElementGeometryUpdateEvent("elementgeometryupdate", { elements: [element] });
geometryEvent.elements; // $ExpectType readonly Element[]
document.createEvent("ElementGeometryUpdateEvent"); // $ExpectType ElementGeometryUpdateEvent
// @ts-expect-error type is required
new ElementGeometryUpdateEvent();
// @ts-expect-error readonly array
geometryEvent.elements.push(element);
canvas.dispatchEvent(new ElementGeometryUpdateEvent("elementgeometryupdate")); // $ExpectType boolean
ElementGeometryUpdateEvent.prototype; // $ExpectType ElementGeometryUpdateEvent
if (someEvent instanceof ElementGeometryUpdateEvent) {
    someEvent.elements; // $ExpectType readonly Element[]
}

// api.CanvasRenderingContext2D.drawElementImage
const ctx = canvas.getContext("2d")!;
ctx.drawElementImage(element, 0, 0); // $ExpectType void
ctx.drawElementImage(image, 0, 0, { preserveElementGeometry: true });
ctx.drawElementImage(element, 0, 0, 10, 10);
ctx.drawElementImage(element, 0, 0, 10, 10, { preserveElementGeometry: false });
ctx.drawElementImage(element, 0, 0, 10, 10, 0, 0);
ctx.drawElementImage(element, 0, 0, 10, 10, 0, 0, {});
ctx.drawElementImage(element, 0, 0, 10, 10, 0, 0, 20, 20);
ctx.drawElementImage(element, 0, 0, 10, 10, 0, 0, 20, 20, {});
// @ts-expect-error
ctx.drawElementImage(element, 0);
// @ts-expect-error
ctx.drawElementImage(canvas.getContext("2d"), 0, 0);
// @ts-expect-error 4th arg must be options
ctx.drawElementImage(element, 0, 0, 10);
// @ts-expect-error no 6-number overload
ctx.drawElementImage(element, 0, 0, 10, 10, 0);

// api.OffscreenCanvasRenderingContext2D.drawElementImage
const offscreenCtx = offscreen.getContext("2d")!;
offscreenCtx.drawElementImage(image, 0, 0); // $ExpectType void
offscreenCtx.drawElementImage(image, 0, 0, 10, 10, 0, 0, 20, 20, { preserveElementGeometry: true });
// @ts-expect-error dy is required
offscreenCtx.drawElementImage(image, 0);

// api.OffscreenCanvas.getElementImageDefaultSize / updateElementGeometry / clearElementGeometry
offscreen.getElementImageDefaultSize(image); // $ExpectType ElementImageDefaultSize
offscreen.updateElementGeometry(image, { preserveHitTestOrder: true }); // $ExpectType void
offscreen.clearElementGeometry(image); // $ExpectType void

// api.WebGLRenderingContext.texElementSubImage2D
gl.texElementSubImage2D(gl.TEXTURE_2D, 0, 0, 0, element); // $ExpectType void
gl.texElementSubImage2D(gl.TEXTURE_2D, 0, 0, 0, image, {
    sx: 0,
    sy: 0,
    swidth: 10,
    sheight: 10,
    width: 10,
    height: 10,
});
// @ts-expect-error unknown config member
gl.texElementSubImage2D(gl.TEXTURE_2D, 0, 0, 0, element, { unknown: 1 });

// api.WebGL2RenderingContext.texElementSubImage2D
gl2.texElementSubImage2D(gl2.TEXTURE_2D, 0, 0, 0, element, {}); // $ExpectType void
// @ts-expect-error
gl2.texElementSubImage2D(gl2.TEXTURE_2D, 0, 0, 0);

// api.GPUQueue.drawElementImageToTexture
queue.drawElementImageToTexture({ source: element }, { texture }); // $ExpectType void
queue.drawElementImageToTexture(
    { source: image, sourceX: 0, sourceY: 0, sourceWidth: 10, sourceHeight: 10 },
    { texture, origin: [0, 0], size: [10, 10], premultipliedAlpha: true },
);
// @ts-expect-error
queue.drawElementImageToTexture({}, { texture });
// @ts-expect-error destination.texture is required
queue.drawElementImageToTexture({ source: element }, {});
