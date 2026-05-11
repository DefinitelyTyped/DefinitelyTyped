import { C2SOptions, CanvasGradient, CanvasPattern, Context, Element } from "svgcanvas";

// Test Context construction
// $ExpectType Context
const ctx1 = new Context();
// $ExpectType Context
const ctx2 = new Context({ width: 800, height: 600 });
// $ExpectType Context
const ctx3 = new Context(500, 500);

// Test drawing state
ctx1.save();
ctx1.restore();

// Test transformations
ctx1.scale(2, 2);
ctx1.scale(2); // single argument
ctx1.rotate(Math.PI / 4);
ctx1.translate(10, 20);
ctx1.transform(1, 0, 0, 1, 0, 0);
ctx1.setTransform(1, 0, 0, 1, 0, 0);
ctx1.resetTransform();
// $ExpectType DOMMatrix
const matrix = ctx1.getTransform();
ctx1.setTransform(matrix);

// Test style properties
ctx1.fillStyle = "red";
ctx1.strokeStyle = "#00FF00";
ctx1.lineWidth = 5;
ctx1.lineCap = "round";
ctx1.lineJoin = "bevel";
ctx1.miterLimit = 10;
ctx1.globalAlpha = 0.5;
ctx1.font = "16px Arial";
ctx1.textAlign = "center";
ctx1.textBaseline = "middle";
ctx1.shadowColor = "black";
ctx1.shadowBlur = 10;
ctx1.shadowOffsetX = 5;
ctx1.shadowOffsetY = 5;

// Test path methods
ctx1.beginPath();
ctx1.moveTo(0, 0);
ctx1.lineTo(100, 100);
ctx1.closePath();
ctx1.bezierCurveTo(0, 0, 50, 50, 100, 100);
ctx1.quadraticCurveTo(50, 50, 100, 100);
ctx1.arc(50, 50, 25, 0, Math.PI * 2);
ctx1.arc(50, 50, 25, 0, Math.PI * 2, true);
ctx1.arcTo(0, 0, 50, 50, 25);
ctx1.ellipse(50, 50, 30, 20, 0, 0, Math.PI * 2);
ctx1.rect(10, 10, 80, 80);
ctx1.roundRect(10, 10, 80, 80, 5);
ctx1.roundRect(10, 10, 80, 80, [5, 10, 15, 20]);

// Test drawing methods
ctx1.fill();
ctx1.stroke();
ctx1.clip();
ctx1.fillRect(10, 10, 100, 100);
ctx1.strokeRect(10, 10, 100, 100);
ctx1.clearRect(10, 10, 100, 100);

// Test text methods
ctx1.fillText("Hello", 50, 50);
ctx1.strokeText("World", 50, 100);
// $ExpectType TextMetrics
const metrics = ctx1.measureText("Test");

// Test gradients and patterns
// $ExpectType CanvasGradient
const linearGradient = ctx1.createLinearGradient(0, 0, 100, 100);
linearGradient.addColorStop(0, "red");
linearGradient.addColorStop(1, "blue");
ctx1.fillStyle = linearGradient;

// $ExpectType CanvasGradient
const radialGradient = ctx1.createRadialGradient(50, 50, 0, 50, 50, 50);

// Test line dash
ctx1.setLineDash([5, 10]);
ctx1.setLineDash(null);

// Test SVG-specific methods
// $ExpectType SVGSVGElement
const svg = ctx1.getSvg();
// $ExpectType string
const serialized = ctx1.getSerializedSvg();
// $ExpectType string
const serializedFixed = ctx1.getSerializedSvg(true);

// Test Element class
// $ExpectType Element
const elem1 = new Element();
// $ExpectType Element
const elem2 = new Element({ width: 800, height: 600 });

// $ExpectType Context
const elemCtx = elem1.getContext("2d");
elem1.width = 500;
elem1.height = 400;
elem1.className = "my-canvas";
// $ExpectType string
const tagName: string = elem1.tagName;

// $ExpectType string
const objectUrl = elem1.toObjectURL();
// $ExpectType string | Promise<string>
const dataUrl = elem1.toDataURL();
// $ExpectType Promise<string>
const dataUrlJpegAsync = elem1.toDataURL("image/jpeg", 0.8, { async: true }) as Promise<string>;
// $ExpectType string | Promise<string>
const dataUrlSvg = elem1.toDataURL("image/svg+xml");

// $ExpectType HTMLDivElement
const wrapper = elem1.getElement();
// $ExpectType DOMRect
const rect = elem1.getBoundingClientRect();

elem1.addEventListener("click", () => console.log("clicked"));
elem1.setAttribute("data-test", "value");
// $ExpectType string | null
const attr = elem1.getAttribute("data-test");

// Test drawImage with Context
const ctx4 = new Context({ width: 100, height: 100 });
ctx1.drawImage(ctx4, 0, 0);

// Test createPattern with Context
// $ExpectType CanvasPattern | null
const pattern = ctx1.createPattern(ctx4, "repeat");
