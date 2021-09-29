export function sun(options: any): any;
/**
 * Real Sun geocentric position control that place the Sun on the right place by the Earth.
 * @class
 * @extends {og.control.Control}
 * @param {Object} [options] - Control options.
 */
export class Sun {
    constructor(options: any);
    _name: string;
    /**
     * Earth planet node.
     * @public
     * @type {og.scene.Planet}
     */
    public planet: any;
    /**
     * Sunlight position placed in the camera eye.
     * @private
     * @type {boolean}
     */
    private offsetVertical;
    offsetHorizontal: any;
    /**
     * Light source.
     * @public
     * @type {og.LightSource}
     */
    public sunlight: any;
    /**
     * Current frame handler clock date and time.
     * @private
     * @type {Number}
     */
    private _currDate;
    /**
     * Previous frame handler clock date and time.
     * @private
     * @type {Number}
     */
    private _prevDate;
    _clockPtr: any;
    _lightOn: boolean;
    _stopped: any;
    oninit(): void;
    stop(): void;
    onactivate(): void;
    bindClock(clock: any): void;
    _draw(): void;
    _f: number;
    _k: number;
}
