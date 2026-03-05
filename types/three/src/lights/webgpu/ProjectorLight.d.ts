import { SpotLight } from "../SpotLight.js";

/**
 * A projector light version of {@link SpotLight}. Can only be used with {@link WebGPURenderer}.
 */
declare class ProjectorLight extends SpotLight {
    /**
     * Aspect ratio of the light. Set to `null` to use the texture aspect ratio.
     *
     * @default null
     */
    aspect: number | null;
    copy(source: ProjectorLight, recursive?: boolean): this;
}

export default ProjectorLight;
