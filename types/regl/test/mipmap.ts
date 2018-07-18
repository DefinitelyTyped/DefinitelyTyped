/*
  tags: basic

  <p>This example shows how you can use mipmaps in regl.</p>

 */

import REGL = require('regl');
const regl = REGL();

interface Uniforms {
  texture: REGL.Texture2D;
  tick: number;
}

interface Attributes {
  position: number[];
}

const drawCheckerboard = regl<Uniforms, Attributes>({
  frag: `
  precision mediump float;
  uniform sampler2D texture;
  uniform float tick;
  varying vec2 uv;
  void main () {
    mat3 m = mat3(
      cos(tick), sin(tick), -1.1 + cos(tick),
      -sin(tick), cos(tick), 0,
      0, 0, 1);
    vec3 p = m * vec3(uv, 1);
    gl_FragColor = texture2D(texture, p.xy / p.z);
  }`,

  vert: `
  precision mediump float;
  attribute vec2 position;
  varying vec2 uv;
  void main () {
    uv = position;
    gl_Position = vec4(1.0 - 2.0 * position, 0, 1);
  }`,

  attributes: {
    position: [
      -2, 0,
      0, -2,
      2, 2]
  },

  uniforms: {
    tick: ({tick}) => 0.005 * tick,

    texture: regl.texture({
      min: 'linear mipmap linear',
      mag: 'nearest',
      wrap: 'repeat',
      data: [
        [255, 255, 255, 255, 0, 0, 0, 0],
        [255, 255, 255, 255, 0, 0, 0, 0],
        [255, 255, 255, 255, 0, 0, 0, 0],
        [255, 255, 255, 255, 0, 0, 0, 0],
        [0, 0, 0, 0, 255, 255, 255, 255],
        [0, 0, 0, 0, 255, 255, 255, 255],
        [0, 0, 0, 0, 255, 255, 255, 255],
        [0, 0, 0, 0, 255, 255, 255, 255]
      ]
    })
  },

  count: 3
});

regl.frame(() => {
  drawCheckerboard();
});
