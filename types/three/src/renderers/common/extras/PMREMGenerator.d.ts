import { RenderTarget } from "../../../core/RenderTarget.js";
import { Scene } from "../../../scenes/Scene.js";
import Renderer from "../Renderer.js";

declare class PMREMGenerator {
    constructor(renderer: Renderer);

    fromScene(
        scene: Scene,
        sigma?: number,
        near?: number,
        far?: number,
        renderTarget?: RenderTarget | null,
    ): RenderTarget;

    fromSceneAsync(
        scene: Scene,
        sigma?: number,
        near?: number,
        far?: number,
        renderTarget?: RenderTarget | null,
    ): Promise<RenderTarget>;

    dispose(): void;
}

export default PMREMGenerator;
