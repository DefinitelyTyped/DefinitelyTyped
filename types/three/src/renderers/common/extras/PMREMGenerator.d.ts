import { RenderTarget } from "../../../core/RenderTarget.js";
import { Vector3 } from "../../../math/Vector3.js";
import { Scene } from "../../../scenes/Scene.js";
import { Texture } from "../../../textures/Texture.js";
import Renderer from "../Renderer.js";

export interface PMREMGeneratorOptions {
    size?: number | undefined;
    position?: Vector3 | undefined;
    renderTarget?: RenderTarget | null | undefined;
}

declare class PMREMGenerator {
    constructor(renderer: Renderer);

    fromScene(
        scene: Scene,
        sigma?: number,
        near?: number,
        far?: number,
        options?: PMREMGeneratorOptions,
    ): RenderTarget;
    /**
     * @deprecated ".fromSceneAsync()" is deprecated. Use "await renderer.init()" instead.
     */
    fromSceneAsync(
        scene: Scene,
        sigma?: number,
        near?: number,
        far?: number,
        options?: PMREMGeneratorOptions,
    ): Promise<RenderTarget>;

    fromEquirectangular(equirectangular: Texture, renderTarget?: RenderTarget | null): RenderTarget;
    /**
     * @deprecated ".fromEquirectangularAsync()" is deprecated. Use "await renderer.init()" instead.
     */
    fromEquirectangularAsync(equirectangular: Texture, renderTarget?: RenderTarget | null): Promise<RenderTarget>;

    fromCubemap(cubemap: Texture, renderTarget?: RenderTarget | null): RenderTarget;
    /**
     * @deprecated ".fromCubemapAsync()" is deprecated. Use "await renderer.init()" instead.
     */
    fromCubemapAsync(cubemap: Texture, renderTarget?: RenderTarget | null): Promise<RenderTarget>;

    compileCubemapShader(): Promise<void>;
    compileEquirectangularShader(): Promise<void>;

    dispose(): void;
}

export default PMREMGenerator;
