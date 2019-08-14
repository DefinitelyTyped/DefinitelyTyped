// Test constructor
const offscreenCanvas: OffscreenCanvas = new OffscreenCanvas(20, 10);

// Test OffscreenCanvas properties
let width: number = offscreenCanvas.width;
let height: number = offscreenCanvas.height;

// Test OffscreenCanvas methods
const ctx2d: OffscreenCanvasRenderingContext2D | null = offscreenCanvas.getContext("2d");
const ctxBitmaprenderer: ImageBitmapRenderingContext | null = offscreenCanvas.getContext("bitmaprenderer");
const ctxWebgl: WebGLRenderingContext | null = offscreenCanvas.getContext("webgl");
const ctxWebgl2: WebGL2RenderingContext | null = offscreenCanvas.getContext("webgl2");
const imageBitmap: ImageBitmap = offscreenCanvas.transferToImageBitmap();
const blob1: Promise<Blob> = offscreenCanvas.convertToBlob();
const blob2: Promise<Blob> = offscreenCanvas.convertToBlob({type: "image/jpeg"});
const blob3: Promise<Blob> = offscreenCanvas.convertToBlob({type: "image/jpeg", quality: 0.92});

// Test OffscreenCanvasRenderingContext2D properties
const canvasRef: OffscreenCanvas = ctx2d!.canvas;

// Test HTMLCanvasElement methods
const canvas: HTMLCanvasElement = document.createElement("canvas");
const transferredCanvas: OffscreenCanvas = canvas.transferControlToOffscreen();

// Test CanvasRenderingContext2D methods
const ctx = canvas.getContext("2d")!;
ctx.drawImage(offscreenCanvas, 0, 0);
ctx.drawImage(offscreenCanvas, 0, 0, 20, 10);
ctx.drawImage(offscreenCanvas, 0, 0, 20, 10, 0, 0, 20, 10);

// Test createImageBitmap function with offscreen canvas
const imageBitmap1 = createImageBitmap(offscreenCanvas);
const imageBitmap2 = createImageBitmap(offscreenCanvas, 1, 2, 3, 4);

// Test postMessage
const worker = new Worker("offscreencanvas.js");
worker.postMessage({canvas: offscreenCanvas}, [offscreenCanvas]);

const serviceWorker = new ServiceWorker();
serviceWorker.postMessage({canvas: offscreenCanvas}, [offscreenCanvas]);

const channel = new MessageChannel();
channel.port1.postMessage({canvas: offscreenCanvas}, [offscreenCanvas]);

window.postMessage({canvas: offscreenCanvas}, "http://example.org:8080", [offscreenCanvas]);
