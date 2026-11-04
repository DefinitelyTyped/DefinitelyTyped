import { Vector3 } from "../../../math/Vector3.js";
import { Scene } from "../../../scenes/Scene.js";
import { Texture } from "../../../textures/Texture.js";
import CubeRenderTarget from "../CubeRenderTarget.js";
import Renderer from "../Renderer.js";

export interface PMREMGeneratorOptions {
    size?: number | undefined;
    position?: Vector3 | undefined;
    renderTarget?: CubeRenderTarget | null | undefined;
}

declare class PMREMGenerator {
    constructor(renderer: Renderer);

    fromScene(
        scene: Scene,
        sigma?: number,
        near?: number,
        far?: number,
        options?: PMREMGeneratorOptions,
    ): CubeRenderTarget;
    /**
     * @deprecated ".fromSceneAsync()" is deprecated. Use "await renderer.init()" instead.
     */
    fromSceneAsync(
        scene: Scene,
        sigma?: number,
        near?: number,
        far?: number,
        options?: PMREMGeneratorOptions,
    ): Promise<CubeRenderTarget>;

    fromEquirectangular(equirectangular: Texture, renderTarget?: CubeRenderTarget | null): CubeRenderTarget;
    /**
     * @deprecated ".fromEquirectangularAsync()" is deprecated. Use "await renderer.init()" instead.
     */
    fromEquirectangularAsync(
        equirectangular: Texture,
        renderTarget?: CubeRenderTarget | null,
    ): Promise<CubeRenderTarget>;

    fromCubemap(cubemap: Texture, renderTarget?: CubeRenderTarget | null): CubeRenderTarget;
    /**
     * @deprecated ".fromCubemapAsync()" is deprecated. Use "await renderer.init()" instead.
     */
    fromCubemapAsync(cubemap: Texture, renderTarget?: CubeRenderTarget | null): Promise<CubeRenderTarget>;

    compileCubemapShader(): Promise<void>;
    compileEquirectangularShader(): Promise<void>;

    dispose(): void;
}

export default PMREMGenerator;
