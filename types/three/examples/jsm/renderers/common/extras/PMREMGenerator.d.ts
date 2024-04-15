import { RenderTarget, Scene } from "three";
import Renderer from "../Renderer.js";

export default class PMREMGenerator {
    constructor(renderer: Renderer);

    fromScene(scene: Scene, sigma?: number, near?: number, far?: number): RenderTarget;
}
