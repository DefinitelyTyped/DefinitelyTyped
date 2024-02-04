import { CubeTexture, LightProbe, WebGLCubeRenderTarget, WebGLRenderer } from "../../../src/Three.js";

export namespace LightProbeGenerator {
    function fromCubeTexture(cubeTexture: CubeTexture): LightProbe;
    function fromCubeRenderTarget(renderer: WebGLRenderer, cubeRenderTarget: WebGLCubeRenderTarget): LightProbe;
}
