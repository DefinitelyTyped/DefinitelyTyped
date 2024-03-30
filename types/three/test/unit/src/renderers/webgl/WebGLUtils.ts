import { RGBAFormat, WebGLRenderer, WebGLUtils } from "three";

const renderer = new WebGLRenderer();

// WebGLUtils Tests.

const glUtils = new WebGLUtils(renderer.getContext(), renderer.extensions);
glUtils.convert(RGBAFormat);
