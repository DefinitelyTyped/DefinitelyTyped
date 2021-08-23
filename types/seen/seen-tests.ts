/**
 * Converted to TypeScript from: http://seenjs.io/demo-noisy-sphere.html
 */

import { Shapes, Colors, Scene, Models, Viewports, Context, Simplex3D, Drag, Quaternion, RenderContext, Shape, Point, Surface, Matrix } from 'seen';

const width = 900;
const height = 500;

const shape: Shape = Shapes.sphere(2).scale(150);
Colors.randomSurfaces2(shape);

const scene: Scene = new Scene({
    fractionalPoints: true,
    cullBackfaces: false,
    model: Models["default"]().add(shape),
    viewport: Viewports.center(width, height)
});

const context: RenderContext = Context('seen-canvas', scene).render();

const ref: Surface[] = shape.surfaces;
const originals: Point[][] = [];
let surf: Surface;
for (let j = 0, len: number = ref.length; j < len; j++) {
    surf = ref[j];
    originals.push(surf.points.map(p => {
        return p.copy();
    }));
    surf.fillMaterial.color.a = 150;
}

const noiser: Simplex3D = new Simplex3D(Math.random());

context.animate().onBefore((t, dt) => {
    let n: number;
    let p: Point;
    let ref2: Point[];
    const ref1: Surface[] = shape.surfaces;
    for (let k  = 0, len1 = ref1.length; k < len1; k++) {
        surf = ref1[k];
        ref2 = surf.points;
        for (let i = 0, l = 0, len2 = ref2.length; l < len2; i = ++l) {
            p = ref2[i];
            n = noiser.noise(p.x, p.y, p.z + t * 1e-4);
            surf.points[i] = originals[k][i].copy().multiply(1 + n / 3);
        }
        surf.dirty = true;
    }
    return shape.rotx(dt * 1e-4).rotz(-dt * 1e-4);
}).start();

const dragger: Drag = new Drag(document.getElementById('seen-canvas')!, {
    inertia: true
});

dragger.on('drag.rotate', (e) => {
    const xform: Matrix = Quaternion.xyToTransform(e.offsetRelative[0], e.offsetRelative[1]);
    shape.transform(xform);
    return context.render();
});
