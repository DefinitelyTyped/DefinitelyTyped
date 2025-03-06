import { RenderTarget } from "../../../core/RenderTarget.js";
import { Vector3 } from "../../../math/Vector3.js";
import { Scene } from "../../../scenes/Scene.js";
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

    fromSceneAsync(
        scene: Scene,
        sigma?: number,
        near?: number,
        far?: number,
        options?: PMREMGeneratorOptions,
    ): Promise<RenderTarget>;

    dispose(): void;
}

export default PMREMGenerator;
