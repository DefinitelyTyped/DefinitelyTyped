export function zoomControl(options: any): ZoomControl;
/**
 * Planet zoom buttons control.
 * @class
 * @extends {og.control.Control}
 * @params {Object} [options] - Control options.
 */
export class ZoomControl {
    constructor(options: any);
    _keyLock: Key;
    planet: any;
    _move: number;
    oninit(): void;
    /**
     * Planet zoom in.
     * @public
     */
    public zoomIn(): void;
    _targetPoint: any;
    /**
     * Planet zoom out.
     * @public
     */
    public zoomOut(): void;
    stopZoom(): void;
    _draw(e: any): void;
}
import { Key } from "../Lock.js";
