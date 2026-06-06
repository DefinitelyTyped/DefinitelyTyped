import { ColorRepresentation, Scene } from "three";

declare class ColorEnvironment extends Scene {
    constructor(color?: ColorRepresentation);

    dispose(): void;
}

export { ColorEnvironment };
