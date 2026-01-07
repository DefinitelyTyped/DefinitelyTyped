import { ColorRepresentation } from "../../math/Color.js";
import { SpotLight } from "../SpotLight.js";

declare class ProjectorLight extends SpotLight {
    aspect: number | null;

    constructor(
        color?: ColorRepresentation,
        intensity?: number,
        distance?: number,
        angle?: number,
        penumbra?: number,
        decay?: number,
    );
}

export default ProjectorLight;
