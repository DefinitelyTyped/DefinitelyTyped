import { System } from '../core';
import { BoxZone, LineZone, MeshZone, PointZone, ScreenZone, SphereZone } from '../zone';
import Zone from '../zone/Zone';

type Zones = BoxZone | LineZone | MeshZone | PointZone | ScreenZone | SphereZone;

/**
 * @exports Debug - methods and helpers for debugging System emitters, zones and particles.
 * @requires THREE - { SphereGeometry, BoxGeometry, MeshBasicMaterial, OctahedronGeometry, Mesh }
 */
export namespace Debug {
    /**
     * Adds an event listener to the system instance's SYSTEM_UPDATE event.
     *
     * @param {System} system - the system instance
     * @param {function} onSystemUpdated - the function to call when system has been updated
     * @return {Debug}
     */
    function addEventListener(system: System, onSystemUpdated: (...args: any) => any): typeof Debug;

    /**
     * Appends the info element into the dom.
     *
     * @param {integer} style - the style type to apply
     * @return void
     */
    function addInfo(style: number): void;

    /**
     * Draws a mesh for each particle emitted in order to help debug particles.
     *
     * @param {object} THREE - ThreeJS
     * @param {object} system - the system instance
     * @param {object} container - a three Object3D (usually the scene)
     * @param {object} emitter - the emitter to debug
     * @param {string} color - the color for the debug mesh material
     * @return void
     */
    function drawEmitter(THREE: object, system: object, container: object, emitter: object, color: string): void;

    /**
     * Draws a wireframe mesh around the zone for debugging purposes.
     *
     * @param {System} system - the system instance
     * @param {object} container - a three Object3D (usually the scene)
     * @param {Zone} zone - a Zone instance
     * @return void
     */
    function drawZone(THREE: object, system: System, container: object, zone?: Zones | Zone): void;

    /**
     * Renders emitter / particle information into the info element.
     *
     * @param {object} system - the system instance
     * @param {integer} style - style to apply (see the addInfo method's switch statement)
     * @return void
     */
    function renderInfo(system: object, style: number): void;
}

export default Debug;
