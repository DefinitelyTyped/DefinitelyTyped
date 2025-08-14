import { CubeTexture, LightProbe, WebGLCubeRenderTarget, WebGLRenderer } from "three";
import { WebGPURenderer } from "three/webgpu";

export namespace LightProbeGenerator {
    function fromCubeTexture(cubeTexture: CubeTexture): LightProbe;
    function fromCubeRenderTarget(
        renderer: WebGLRenderer | WebGPURenderer,
        cubeRenderTarget: WebGLCubeRenderTarget,
    ): Promise<LightProbe>;
}
