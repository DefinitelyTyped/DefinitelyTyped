import { Texture } from "../../textures/Texture.js";

declare class WebGLEnvironments {
    get(texture: Texture): Texture | null;
    dispose(): void;
}

export { WebGLEnvironments };
