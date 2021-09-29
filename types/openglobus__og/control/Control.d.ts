/**
 * Base control class for implementing renderer controls.
 * All other controls extend from this class.
 * @class
 * @param {Object} [options] - Control activation options:
 * @param {Boolean} [options.autoActivated=true] - If true - calls initialize function after the renderer assigning.
 */
export class Control {
    static set __staticCounter(arg: any);
    static get __staticCounter(): any;
    constructor(options: any);
    _id: number;
    _name: any;
    /**
     * Control initialized.
     * @protected
     * @type {Boolean}
     */
    protected _initialized: boolean;
    /**
     * Assigned renderer.
     * @public
     * @type {og.Renderer}
     */
    public renderer: any;
    /**
     * Auto activation flag.
     * @public
     * @type {Boolean}
     */
    public autoActivate: boolean;
    /**
     * Control activity.
     * @protected
     * @type {Boolean}
     */
    protected _active: boolean;
    /**
     * Returns control name.
     * @public
     * @virtual
     */
    public get name(): any;
    /**
     * Control initialization function have to be overriden.
     * @public
     * @virtual
     */
    public oninit(): void;
    /**
     * Control renderer assigning function have to be overriden.
     * @public
     * @virtual
     */
    public onadd(): void;
    /**
     * Control remove function have to be overriden.
     * @public
     * @virtual
     */
    public onremove(): void;
    /**
     * Control activation function have to be overriden.
     * @public
     * @virtual
     */
    public onactivate(): void;
    /**
     * Control deactivation function have to be overriden.
     * @public
     * @virtual
     */
    public ondeactivate(): void;
    /**
     * Assign renderer to the control.
     * @public
     * @type {og.Renderer}
     */
    public addTo(renderer: any): void;
    /**
     * Assign renderer to the control.
     * @public
     */
    public remove(): void;
    /**
     * Activate control.
     * @public
     */
    public activate(): void;
    /**
     * Deactivate control.
     * @public
     */
    public deactivate(): void;
    /**
     * Is control active.
     * @public
     */
    public isActive(): boolean;
    isEqual(control: any): boolean;
}
