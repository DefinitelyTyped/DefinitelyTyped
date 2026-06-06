import { PerspectiveCamera } from "./PerspectiveCamera.js";

/**
 * A special type of camera that uses two perspective cameras with
 * stereoscopic projection. Can be used for rendering stereo effects
 * like [3D Anaglyph](https://en.wikipedia.org/wiki/Anaglyph_3D) or
 * [Parallax Barrier](https://en.wikipedia.org/wiki/parallax_barrier).
 */
export class StereoCamera {
    /**
     * The type property is used for detecting the object type
     * in context of serialization/deserialization.
     */
    readonly type: string;
    /**
     * The aspect.
     *
     * @default 1
     */
    aspect: number;
    /**
     * The eye separation which represents the distance
     * between the left and right camera.
     *
     * @default 0.064
     */
    eyeSep: number;
    /**
     * The camera representing the left eye. This is added to layer `1` so objects to be
     * rendered by the left camera must also be added to this layer.
     */
    cameraL: PerspectiveCamera;
    /**
     * The camera representing the right eye. This is added to layer `2` so objects to be
     * rendered by the right camera must also be added to this layer.
     */
    cameraR: PerspectiveCamera;
    /**
     * Updates the stereo camera based on the given perspective camera.
     *
     * @param {PerspectiveCamera} camera - The perspective camera.
     */
    update(camera: PerspectiveCamera): void;
}
