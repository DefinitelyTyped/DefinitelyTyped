import { RenderTarget } from "../../../core/RenderTarget.js";
import { Scene } from "../../../scenes/Scene.js";
import Renderer from "../Renderer.js";

export default class PMREMGenerator {
    constructor(renderer: Renderer);

    fromScene(scene: Scene, sigma?: number, near?: number, far?: number): RenderTarget;
}
