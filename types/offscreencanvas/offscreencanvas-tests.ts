// Test constructor
const offscreenCanvas: OffscreenCanvas = new OffscreenCanvas(20, 10);

// Test OffscreenCanvas properties
let width: number = offscreenCanvas.width;
let height: number = offscreenCanvas.height;

// Test OffscreenCanvas methods
const context2D: OffscreenCanvasRenderingContext2D | null = offscreenCanvas.getContext("2d");
const webglContext: WebGLRenderingContext | null = offscreenCanvas.getContext("webgl");
const otherContext: OffscreenCanvasRenderingContext2D | WebGLRenderingContext | null =
    offscreenCanvas.getContext("foobar");
const imageBitmap: ImageBitmap = offscreenCanvas.transferToImageBitmap();
const blob1: Promise<Blob> = offscreenCanvas.convertToBlob();
const blob2: Promise<Blob> = offscreenCanvas.convertToBlob({ type: "image/jpeg" });
const blob3: Promise<Blob> = offscreenCanvas.convertToBlob({ type: "image/jpeg", quality: 0.92 });

// Test OffscreenCanvasRenderingContext2D properties
const canvasRef: OffscreenCanvas = context2D!.canvas;

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
