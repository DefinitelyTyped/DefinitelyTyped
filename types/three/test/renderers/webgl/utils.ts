import { WebGLUtils, WebGLRenderer, RGBAFormat } from 'three';

const renderer = new WebGLRenderer();

// WebGLUtils Tests.

const glUtils = new WebGLUtils(renderer.getContext(), renderer.extensions, renderer.capabilities);
glUtils.convert(RGBAFormat);
