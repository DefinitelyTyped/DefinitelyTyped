import type { Renderer } from 'three';
import { POOL_MAX } from '../constants';
import { Emitter } from '../emitter';
import EventDispatcher from '../events/EventDispatcher';
import { JSONObject } from '../initializer/Rate';
import { INTEGRATION_TYPE_EULER } from '../math/constants';
import { CustomRenderer, GPURenderer, MeshRenderer, SpriteRenderer } from '../renderer';
import Particle from './Particle';
import Pool from './Pool';

/**
 * The core of the three-system particle engine.
 * A System instance can contain multiple emitters, each with their own initializers
 * and behaviours.
 *
 */
export default class System {
    /**
     * Constructs a System instance.
     *
     * @param {?number} [preParticles=POOL_MAX] - The number of particles to start with
     * @param {?string} [integrationType=INTEGRATION_TYPE_EULER] - The integration type to use
     * @return void
     */
    constructor(preParticles?: number | typeof POOL_MAX, integrationType?: string | typeof INTEGRATION_TYPE_EULER);
    /**
     * @description The class type.
     * @type {string}
     */
    type: string;
    /**
     * @description Determines if the system can update or not. Set to false when destroying
     * to ensure that external calls to update do not throw errors.
     * @type {boolean}
     */
    canUpdate: boolean;
    /**
     * @description The number of particles to start with.
     * @type {number}
     */
    preParticles: number;
    /**
     * @description The integration algorithm type to use.
     * @param {string}
     */
    integrationType: string;
    /**
     * @description The emitters in the particle system.
     * @type {array<Emitter>}
     */
    emitters: Emitter[];
    /**
     * @description The renderers for the system.
     * @type {array<Renderer>}
     */
    renderers: Array<Renderer | CustomRenderer | GPURenderer | MeshRenderer | SpriteRenderer>;
    /**
     * @description A pool used to manage the internal system cache of objects
     * @type {Pool}
     */
    pool: Pool;
    /**
     * @description Internal event dispatcher
     * @type {EventDispatcher}
     */
    eventDispatcher: EventDispatcher;
    /**
     * Creates a System instance from a JSON object.
     *
     * @param {object} json - The JSON to create the System instance from
     * @param {object} THREE - The Web GL Api to use eg., THREE
     * @return {System}
     *
     * @deprecated use fromJSONAsync instead
     */
    static fromJSON(json: JSONObject, THREE: object): System;
    /**
     * Loads a System instance from JSON asynchronously. Ensures all textures are
     * fully loaded before resolving with the instantiated System instance.
     *
     * @param {object} json - The JSON to create the System instance from
     * @param {object} THREE - The Web GL Api to use eg., THREE
     * @param {?object} options - Optional config options
     * @return {Promise<System>}
     */
    static fromJSONAsync(json: JSONObject, THREE: object, options?: object): Promise<System>;
    /**
     * Proxy method for the internal event dispatcher's dispatchEvent method.
     *
     * @param {string} event - The event to dispatch
     * @param {object<System|Emitter|Particle>} [target=this] - The event target
     */
    dispatchEvent(event: string, target?: System | Emitter | Particle): void;
    /**
     * Adds a renderer to the System instance and initializes it.
     *
     * @param {Renderer} renderer - The renderer to add
     * @return {System}
     */
    addRenderer(renderer: RendererUnion): System;
    /**
     * Removes a renderer from the System instance.
     *
     * @param {Renderer} renderer
     * @return {System}
     */
    removeRenderer(renderer: RendererUnion): System;
    /**
     * Adds an emitter to the System instance.
     * Dispatches the EMITTER_ADDED event.
     *
     * @param {Emitter} emitter - The emitter to add
     * @return {System}
     */
    addEmitter(emitter: Emitter): System;
    /**
     * Removes an emitter from the System instance.
     * Dispatches the EMITTER_REMOVED event.
     *
     * @param {Emitter} emitter - The emitter to remove
     * @return {System}
     */
    removeEmitter(emitter: Emitter): System;
    /**
     * Wires up life cycle methods and causes a system's emitters to emit particles.
     * Expects emitters to have their totalEmitTimes and life set already.
     * Inifnite systems will resolve immediately.
     *
     * @param {object} hooks - Functions to hook into the life cycle API
     * @param {function} hooks.onStart - Called when the system starts to emit particles
     * @param {function} hooks.onUpdate - Called each time the system updates
     * @param {function} hooks.onEnd - Called when the system's emitters have all died
     * @return {Promise}
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
     *
     * @param {number} delta - Delta time
     * @return {Promise}
     */
    update(delta?: number): Promise<void>;
    /**
     * Gets a count of the total number of particles in the system.
     *
     * @return {integer}
     */
    getParticleCount(): number;
    /**
     * Destroys all emitters, renderers and the Nebula pool.
     * Ensures that this.update will not perform any operations while the system
     * is being destroyed.
     *
     * @return void
     */
    destroy(): void;
}

type RendererUnion = Renderer | GPURenderer | SpriteRenderer | CustomRenderer | MeshRenderer;
