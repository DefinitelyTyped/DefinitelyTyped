import { CubeTexture, LightProbe, WebGLCubeRenderTarget, WebGLRenderer } from "three";
import { CubeRenderTarget, WebGPURenderer } from "three/webgpu";

declare class LightProbeGenerator {
    static fromCubeTexture(cubeTexture: CubeTexture): LightProbe;
    static fromCubeRenderTarget(
        renderer: WebGLRenderer,
        cubeRenderTarget: WebGLCubeRenderTarget,
    ): Promise<LightProbe>;
    static fromCubeRenderTarget(
        renderer: WebGPURenderer,
        cubeRenderTarget: CubeRenderTarget,
    ): Promise<LightProbe>;
}

export { LightProbeGenerator };
