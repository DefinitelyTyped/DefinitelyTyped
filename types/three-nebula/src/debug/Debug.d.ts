import { System } from "../core";
import { BoxZone, LineZone, MeshZone, PointZone, ScreenZone, SphereZone } from "../zone";
import Zone from "../zone/Zone";

export type Zones = BoxZone | LineZone | MeshZone | PointZone | ScreenZone | SphereZone;

export namespace Debug {
    /**
     * Adds an event listener to the system instance's SYSTEM_UPDATE event.
     */
    function addEventListener(system: System, onSystemUpdated: (...args: any) => any): typeof Debug;

    /**
     * Appends the info element into the dom.
     */
    function addInfo(style: number): void;

    /**
     * Draws a mesh for each particle emitted in order to help debug particles.
     */
    function drawEmitter(THREE: object, system: object, container: object, emitter: object, color: string): void;

    /**
     * Draws a wireframe mesh around the zone for debugging purposes.
     */
    function drawZone(THREE: object, system: System, container: object, zone?: Zones | Zone): void;

    /**
     * Renders emitter / particle information into the info element.
     */
    function renderInfo(system: object, style: number): void;
}

export default Debug;
