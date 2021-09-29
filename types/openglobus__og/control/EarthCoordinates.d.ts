export function earthCoordinates(options: any): EarthCoordinates;
/**
 * Control displays mouse or screen center Earth coordinates.
 * @class
 * @extends {og.control.Control}
 * @param {Object} [options] - Options:
 * @param {Boolean} [options.center] - Earth coordiantes by screen center otherwise mouse pointer. False is default.
 * @param {Boolean} [options.type] - Coordinates shown: 0 - is decimal degrees, 1 - degrees, 2 - mercator geodetic coordinates.
 */
export class EarthCoordinates {
    constructor(options: any);
    /**
     * Display type.
     * @private
     * @type {Boolean}
     */
    private _displayType;
    /**
     * Current coordinates type converter.
     * @private
     * @function
     */
    private _converter;
    /**
     * Display dom element.
     * @private
     * @type {Object}
     */
    private _display;
    _center: any;
    /**
     * Current position.
     * @public
     * @type {og.Vec3}
     */
    public position: any;
    oninit(): void;
    /**
     * Sets coordinates capturing type.
     * @public
     * @param {Boolean} center - True - capture screen center, false - mouse pointer.
     */
    public setCenter(center: boolean): void;
    _showPosition(): void;
    _grabCoordinates(): void;
    _onMouseMove(): void;
}
