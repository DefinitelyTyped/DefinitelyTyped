import { POOL_MAX } from "../constants";
import { Emitter } from "../emitter";
import EventDispatcher from "../events/EventDispatcher";
import { JSONObject } from "../initializer/Rate";
import { INTEGRATION_TYPE_EULER } from "../math/constants";
import { CustomRenderer, GPURenderer, MeshRenderer, SpriteRenderer } from "../renderer";
import Particle from "./Particle";
import Pool from "./Pool";

/**
 * The core of the three-system particle engine.
 * A System instance can contain multiple emitters, each with their own initializers
 * and behaviours.
 */
export default class System {
    /**
     * Constructs a System instance.
     */
    constructor(preParticles?: number | typeof POOL_MAX, integrationType?: string | typeof INTEGRATION_TYPE_EULER);
    /**
     * @description The class type.
     */
    type: string;
    /**
     * @description Determines if the system can update or not. Set to false when destroying
     * to ensure that external calls to update do not throw errors.
     */
    canUpdate: boolean;
    /**
     * @description The number of particles to start with.
     */
    preParticles: number;
    /**
     * @description The integration algorithm type to use.
     */
    integrationType: string;
    /**
     * @description The emitters in the particle system.
     */
    emitters: Emitter[];
    /**
     * @description The renderers for the system.
     */
    renderers: Array<THREE.Renderer | CustomRenderer | GPURenderer | MeshRenderer | SpriteRenderer>;
    /**
     * @description A pool used to manage the internal system cache of objects
     */
    pool: Pool;
    /**
     * @description Internal event dispatcher
     */
    eventDispatcher: EventDispatcher;
    /**
     * Creates a System instance from a JSON object.
     *
     * @deprecated use fromJSONAsync instead
     */
    static fromJSON(json: JSONObject, THREE: object): System;
    /**
     * Loads a System instance from JSON asynchronously. Ensures all textures are
     * fully loaded before resolving with the instantiated System instance.
     */
    static fromJSONAsync(json: JSONObject, THREE: object, options?: object): Promise<System>;
    /**
     * Proxy method for the internal event dispatcher's dispatchEvent method.
     */
    dispatchEvent(event: string, target?: System | Emitter | Particle): void;
    /**
     * Adds a renderer to the System instance and initializes it.
     */
    addRenderer(renderer: RendererUnion): System;
    /**
     * Removes a renderer from the System instance.
     */
    removeRenderer(renderer: RendererUnion): System;
    /**
     * Adds an emitter to the System instance.
     * Dispatches the EMITTER_ADDED event.
     */
    addEmitter(emitter: Emitter): System;
    /**
     * Removes an emitter from the System instance.
     * Dispatches the EMITTER_REMOVED event.
     */
    removeEmitter(emitter: Emitter): System;
    /**
     * Wires up life cycle methods and causes a system's emitters to emit particles.
     * Expects emitters to have their totalEmitTimes and life set already.
     * Inifnite systems will resolve immediately.
     */
    emit(hooks: { onStart: () => void; onUpdate: () => void; onEnd: () => void }): Promise<void>;
    /**
     * Updates the particle system based on the delta passed.
     *
     * @example
     * animate = () => {
     *   threeRenderer.render(threeScene, threeCamera);
     *   system.update();
     *   requestAnimationFrame(animate);
     * }
     * animate();
     */
    update(delta?: number): Promise<void>;
    /**
     * Gets a count of the total number of particles in the system.
     */
    getParticleCount(): number;
    /**
     * Destroys all emitters, renderers and the Nebula pool.
     * Ensures that this.update will not perform any operations while the system
     * is being destroyed.
     */
    destroy(): void;
}

export type RendererUnion = THREE.Renderer | GPURenderer | SpriteRenderer | CustomRenderer | MeshRenderer;
