import { fabric } from "fabric";

// Canvas
new fabric.Canvas("C");

// Image
new fabric.Image(new HTMLImageElement());
new fabric.Image(new HTMLCanvasElement());
new fabric.Image(new HTMLVideoElement());
new fabric.Image("img");
new fabric.Image("img", {});
