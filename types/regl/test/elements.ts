/*
  tags: basic, lines
<p> This example demonstrates how you can use `elements` to draw lines. </p>
 */

import REGL = require('regl');
const regl = REGL();

regl.clear({
  color: [0, 0, 0, 1],
  depth: 1
});

let lineWidth = 3;
if (lineWidth > regl.limits.lineWidthDims[1]) {
  lineWidth = regl.limits.lineWidthDims[1];
}

interface Uniforms {
  color: REGL.Vec4;
}

interface Attributes {
  position: REGL.Vec2[];
}

regl<Uniforms, Attributes>({
  frag: `
    precision mediump float;
    uniform vec4 color;
    void main() {
      gl_FragColor = color;
    }`,

  vert: `
    precision mediump float;
    attribute vec2 position;
    void main() {
      gl_Position = vec4(position, 0, 1);
    }`,

  attributes: {
    position: (new Array(5)).fill(undefined).map((x, i): [number, number] => {
      const theta = 2.0 * Math.PI * i / 5;
      return [ Math.sin(theta), Math.cos(theta) ];
    })
  },

  uniforms: {
    color: [1, 0, 0, 1]
  },

  elements: [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [3, 4]
  ],

  lineWidth,
})();
