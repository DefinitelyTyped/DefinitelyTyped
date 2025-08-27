import Behaviour from "../behaviour/Behaviour";
import { Infinity } from "../behaviour/constants";
import Particle from "../core/Particle";
import { Rate } from "../initializer";
import Initializer from "../initializer/Initializer";

/**
 * Emitters are the System engine's particle factories. They cause particles to
 * be rendered by emitting them, and store all particle initializers and behaviours.
 */
export default class Emitter extends Particle {
    /**
     * Constructs an Emitter instance.
     */
    constructor(properties?: object);
    /**
     * Proxy method for the internal event dispatcher's dispatchEvent method.
     */
    dispatchEvent(event: string, target: Particle): void;
    /**
     * Sets the emitter rate.
     */
    setRate(rate: Rate): Emitter;
    /**
     * Sets the position of the emitter.
     */
    setPosition(newPosition: object): Emitter;
    /**
     * Sets the rotation of the emitter.
     */
    setRotation(newRotation: object): Emitter;
    /**
     * Sets the total number of times the emitter should emit particles as well as
     * the emitter's life. Also intializes the emitter rate.
     * This enables the emitter to emit particles.
     */
    emit(totalEmitTimes?: number, life?: number): Emitter;
    emit(): void;
    /**
     * Experimental emit method that is designed to be called from the System.emit method.
     */
    experimental_emit(): Emitter;
    /**
     * Sets the total emit times for the emitter.
     */
    setTotalEmitTimes(totalEmitTimes?: Infinity): Emitter;
    /**
     * Sets the life of the emitter.
     */
    setLife(life?: number): Emitter;

    /**
     * Stops the emitter from emitting particles.
     */
    stopEmit(): void;
    /**
     * Kills all of the emitter's particles.
     */
    removeAllParticles(): void;
    /**
     * Adds a particle initializer to the emitter.
     * Each initializer is run on each particle when they are created.
     */
    addInitializer(initializer: Initializer): Emitter;
    /**
     * Adds multiple particle initializers to the emitter.
     */
    addInitializers(initializers: Initializer[]): Emitter;
    /**
     * Sets the emitter's particle initializers.
     */
    setInitializers(initializers: Initializer[]): Emitter;
    /**
     * Removes an initializer from the emitter's initializers array.
     */
    removeInitializer(initializer: Initializer): Emitter;
    /**
     * Removes all initializers.
     */
    removeAllInitializers(): Emitter;
    /**
     * Adds a behaviour to the emitter. All emitter behaviours are added to each particle when
     * they are emitted.
     */
    addBehaviour(behaviour: Behaviour): Emitter;
    /**
     * Adds multiple behaviours to the emitter.
     */
    addBehaviours(behaviours: Behaviour[]): Emitter;
    /**
     * Sets the emitter's behaviours.
     */
    setBehaviours(behaviours: Behaviour[]): Emitter;
    /**
     * Removes the behaviour from the emitter's behaviours array.
     */
    removeBehaviour(behaviour: Behaviour): Emitter;
    /**
     * Removes all behaviours from the emitter.
     */
    removeAllBehaviours(): Emitter;
    /**
     * Adds an emitter behaviour to the emitter.
     */
    addEmitterBehaviour(behaviour: Behaviour): Emitter;
    /**
     * Adds multiple behaviours to the emitter.
     */
    addEmitterBehaviours(behaviours: Behaviour[]): Emitter;
    /**
     * Sets the emitter's behaviours.
     */
    setEmitterBehaviours(behaviours: Behaviour[]): Emitter;
    /**
     * Removes the behaviour from the emitter's behaviours array.
     */
    removeEmitterBehaviour(behaviour: Behaviour): Emitter;
    /**
     * Removes all behaviours from the emitter.
     */
    removeAllEmitterBehaviours(): Emitter;
    /**
     * Adds the event listener for the EMITTER_DEAD event.
     */
    onEmitterDead(onEmitterDead: Callback): Emitter;
    /**
     * Creates a particle by retreiving one from the pool and setting it up with
     * the supplied initializer and behaviour.
     */
    createParticle(): Emitter;
    /**
     * Sets up a particle by running all initializers on it and setting its behaviours.
     * Also adds the particle to this.particles.
     */
    setupParticle(particle: Particle): void;
    /**
     * Updates the emitter according to the time passed by calling the generate
     * and integrate methods. The generate method creates particles, the integrate
     * method updates existing particles.
     *
     * If the emitter age is greater than time, the emitter is killed.
     *
     * This method also indexes/deindexes particles.
     */
    update(time: number): void;
    /**
     * Updates the emitter's emitter behaviours.
     */
    updateEmitterBehaviours(time: number): void;
    /**
     * Runs the integration algorithm on the emitter and all particles.
     * Updates the particles with the timstamp passed.
     */
    integrate(time: number): void;
    /**
     * Generates new particles.
     */
    generate(time: number): void;
    /**
     * Kills the emitter.
     */
    destroy(): void;
}

export type Callback = (...args: any[]) => any;
