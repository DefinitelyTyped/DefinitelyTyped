import {
    Anchor,
    Shape,
    Group,
    Dragger,
    Illustration,
    Vector,
    TAU,
    easeInOut,
    lerp,
    modulo,
    Rect,
    RoundedRect,
    Ellipse,
    Polygon,
    Cone,
    Cylinder,
    Box,
} from 'zdog';

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d')!;

const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

const anchor = new Anchor();

new Anchor({});
new Anchor({ addTo: anchor });
new Anchor({ translate: {} });
new Anchor({ translate: { x: 1, y: 1, z: 1 } });
new Anchor({ rotate: {} });
new Anchor({ rotate: { x: 1, y: 1, z: 1 } });
new Anchor({ scale: 1 });
new Anchor({ scale: {} });
new Anchor({ scale: { x: 1, y: 1, z: 1 } });

anchor.copy(); // $ExpectType Anchor
anchor.copy({});
anchor.copy({ translate: {} });
anchor.copy({ translate: { x: 1, y: 1, z: 1 } });
anchor.copy({ rotate: {} });
anchor.copy({ rotate: { x: 1, y: 1, z: 1 } });
anchor.copy({ scale: 1 });
anchor.copy({ scale: {} });
anchor.copy({ scale: { x: 1, y: 1, z: 1 } });

anchor.copyGraph(); // $ExpectType Anchor
anchor.copyGraph({});
anchor.copyGraph({ translate: {} });
anchor.copyGraph({ translate: { x: 1, y: 1, z: 1 } });
anchor.copyGraph({ rotate: {} });
anchor.copyGraph({ rotate: { x: 1, y: 1, z: 1 } });
anchor.copyGraph({ scale: 1 });
anchor.copyGraph({ scale: {} });
anchor.copyGraph({ scale: { x: 1, y: 1, z: 1 } });

anchor.addChild(anchor);

anchor.removeChild(anchor);

anchor.remove();

anchor.updateGraph();

anchor.renderGraphCanvas(ctx);

anchor.renderGraphSvg(svg);

anchor.normalizeRotate();

const shape = new Shape();

new Shape({});
new Shape({ color: '#000000' });
new Shape({ stroke: 1 });
new Shape({ stroke: false });
new Shape({ fill: false });
new Shape({ closed: false });
new Shape({ visible: false });
new Shape({ backface: false });
new Shape({ backface: '#000' });
new Shape({ front: {} });
new Shape({ front: { x: 1, y: 1, z: 1 } });
new Shape({
    path: [
        {},
        { x: 1, y: 1, z: 1 },
        { line: { x: 1, y: 1, z: 1 } },
        { move: { x: 1, y: 1, z: 1 } },
        { arc: [{ x: 1, y: 1, z: 1 }, { x: 1, y: 1, z: 1 }] },
        { bezier: [{ x: 1, y: 1, z: 1 }, { x: 1, y: 1, z: 1 }, { x: 1, y: 1, z: 1 }] },
    ],
});
new Shape({ closed: false });

const group = new Group();

new Group({});
new Group({ visible: false });
new Group({ updateSort: false });

const dragger = new Dragger();

new Dragger({});
new Dragger({ startElement: '.foo' });
new Dragger({ startElement: canvas });
new Dragger({ startElement: svg });
new Dragger({
    onDragStart(pointer) {
        this; // $ExpectType Dragger
        pointer; // $ExpectType PointerPosition
    },
});
new Dragger({
    onDragMove(pointer, moveX, moveY) {
        this; // $ExpectType Dragger
        pointer; // $ExpectType PointerPosition
        moveX; // $ExpectType number
        moveY; // $ExpectType number
    },
});
new Dragger({
    onDragMove() {
        this; // $ExpectType Dragger
    },
});

const illustration = new Illustration({ element: '.foo' });

new Illustration(); // $ExpectError
new Illustration({}); // $ExpectError
new Illustration({ element: canvas });
new Illustration({ element: svg });
new Illustration({ element: canvas, zoom: 1 });
new Illustration({ element: canvas, centered: false });
new Illustration({ element: canvas, centered: false });
new Illustration({ element: canvas, dragRotate: false });
new Illustration({ element: canvas, dragRotate: anchor });
new Illustration({ element: canvas, resize: false });
new Illustration({
    element: canvas,
    onResize(width, height) {
        this; // $ExpectType Illustration
        width; // $ExpectType number
        height; // $ExpectType number
    },
});
new Illustration({
    element: canvas,
    onPrerender(context) {
        this; // $ExpectType Illustration
        context; // $ExpectType SVGSVGElement | CanvasRenderingContext2D
    },
});

illustration.renderGraph();
illustration.renderGraph(anchor);

illustration.updateRenderGraph();
illustration.updateRenderGraph(anchor);

illustration.setSize(1, 1);

const vector = new Vector();

new Vector({});
new Vector({ x: 1, y: 1, z: 1 });
new Vector(vector);

vector.set(); // $ExpectType Vector
vector.set({});
vector.set({ x: 1, y: 1, z: 1 });

vector.copy(); // $ExpectType Vector

vector.add(); // $ExpectType Vector
vector.add({});
vector.add({ x: 1, y: 1, z: 1 });

vector.add(); // $ExpectType Vector
vector.add({});
vector.add({ x: 1, y: 1, z: 1 });

vector.subtract(); // $ExpectType Vector
vector.subtract({});
vector.subtract({ x: 1, y: 1, z: 1 });

vector.multiply(); // $ExpectType Vector
vector.multiply(1);
vector.multiply({});
vector.multiply({ x: 1, y: 1, z: 1 });

vector.rotate(); // $ExpectType Vector
vector.rotate({});
vector.rotate({ x: 1, y: 1, z: 1 });

vector.magnitude(); // $ExpectType number

vector.lerp({}, 1); // $ExpectType Vector
vector.lerp({ x: 1, y: 1, z: 1 }, 1);

TAU; // $ExpectType number

easeInOut(1, 1); // $ExpectType number

lerp(1, 1, 1); // $ExpectType number

modulo(1, 1); // $ExpectType number

const rect = new Rect();

new Rect({});
new Rect({ width: 1 });
new Rect({ height: 1 });

const roundedRect = new RoundedRect();

new RoundedRect({});
new RoundedRect({ width: 1 });
new RoundedRect({ height: 1 });
new RoundedRect({ cornerRadius: 1 });

const ellipse = new Ellipse();

new Ellipse({});
new Ellipse({ diameter: 1 });
new Ellipse({ width: 1 });
new Ellipse({ height: 1 });
new Ellipse({ quarters: 0 }); // $ExpectError
new Ellipse({ quarters: 1 });
new Ellipse({ quarters: 2 });
new Ellipse({ quarters: 3 });
new Ellipse({ quarters: 4 });
new Ellipse({ quarters: 5 }); // $ExpectError

const polygon = new Polygon();

new Polygon({});
new Polygon({ radius: 1 });
new Polygon({ sides: 1 });

const cone = new Cone();

new Cone({});
new Cone({ length: 1 });

const cylinder = new Cylinder();

new Cylinder({});
new Cylinder({ diameter: 1 });
new Cylinder({ length: 1 });
new Cylinder({ frontFace: false });
new Cylinder({ frontFace: true });
new Cylinder({ frontFace: '#000000' });

const box = new Box();

new Box({});
new Box({ depth: 1 });
new Box({ frontFace: false });
new Box({ frontFace: true });
new Box({ frontFace: '#000000' });
new Box({ rearFace: false });
new Box({ rearFace: true });
new Box({ rearFace: '#000000' });
new Box({ leftFace: false });
new Box({ leftFace: true });
new Box({ leftFace: '#000000' });
new Box({ rightFace: false });
new Box({ rightFace: true });
new Box({ rightFace: '#000000' });
new Box({ topFace: false });
new Box({ topFace: true });
new Box({ topFace: '#000000' });
new Box({ bottomFace: false });
new Box({ bottomFace: true });
new Box({ bottomFace: '#000000' });
