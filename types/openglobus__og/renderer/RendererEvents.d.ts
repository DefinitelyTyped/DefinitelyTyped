/**
 * Renderer events handler.
 * @class
 * @param {og.Renderer} renderer - Renderer object, events that works for.
 */
export class RendererEvents extends Events {
    constructor(renderer: any);
    /**
     * Assigned renderer.
     * @public
     * @type {og.Renderer}
     */
    public renderer: any;
    /**
     * Low level touch events handler.
     * @private
     * @type {og.input.TouchHandler}
     */
    private _touchHandler;
    /**
     * Low level mouse events handler.
     * @private
     * @type {og.input.MouseHandler}
     */
    private _mouseHandler;
    /**
     * Low level keyboard events handler.
     * @private
     * @type {og.input.KeyboardHandler}
     */
    private _keyboardHandler;
    _active: boolean;
    clickRadius: number;
    /**
     * Current mouse state.
     * @public
     * @enum {Object}
     */
    public mouseState: {
        anyEvent: () => boolean;
        /** Current mouse X position. */
        x: number;
        /** Current mouse Y position. */
        y: number;
        /** Current mouse X position from 0 to 1 */
        nx: number;
        /** Current mouse Y position from 0 to 1 */
        ny: number;
        /** Previous mouse X position. */
        prev_x: number;
        /** Previous mouse Y position. */
        prev_y: number;
        /** Screen mouse position world direction. */
        direction: Vec3;
        /** Left mouse button has stopped pushing down right now.*/
        leftButtonUp: boolean;
        /** Right mouse button has stopped pushing down right now.*/
        rightButtonUp: boolean;
        /** Middle mouse button has stopped pushing down right now.*/
        middleButtonUp: boolean;
        /** Left mouse button has pushed now.*/
        leftButtonDown: boolean;
        /** Right mouse button has pushed now.*/
        rightButtonDown: boolean;
        /** Middle mouse button has pushed now.*/
        middleButtonDown: boolean;
        /** Left mouse button is pushing.*/
        leftButtonHold: boolean;
        /** Right mouse button is pushing.*/
        rightButtonHold: boolean;
        /** Middle mouse button is pushing.*/
        middleButtonHold: boolean;
        /** Left mouse button has clicked twice now.*/
        leftButtonDoubleClick: boolean;
        /** Right mouse button has clicked twice now.*/
        rightButtonDoubleClick: boolean;
        /** Middle mouse button has clicked twice now.*/
        middleButtonDoubleClick: boolean;
        /** Left mouse button has clicked now. */
        leftButtonClick: boolean;
        /** Right mouse button has clicked now. */
        rightButtonClick: boolean;
        /** Middle mouse button has clicked now. */
        middleButtonClick: boolean;
        /** Mouse is moving now. */
        moving: boolean;
        /** Mouse has just stopped now. */
        justStopped: boolean;
        /** Mose double click delay response time.*/
        doubleClickDelay: number;
        /** Mose click delay response time.*/
        clickDelay: number;
        /** Mouse wheel. */
        wheelDelta: number;
        /** JavaScript mouse system event message. */
        sys: any;
        /** Current picking object. */
        pickingObject: any;
        /** Renderer instanve. */
        renderer: any;
    };
    /**
     * Current touch state.
     * @public
     * @enum {Object}
     */
    public touchState: {
        /** Touching is moving now. */
        moving: boolean;
        /** Touch has ended right now.*/
        touchEnd: boolean;
        /** Touch has started right now.*/
        touchStart: boolean;
        /** Touch canceled.*/
        touchCancel: boolean;
        /** Touched twice.*/
        doubleTouch: boolean;
        /** Double touching responce delay.*/
        doubleTouchDelay: number;
        /** Double touching responce radius in screen pixels.*/
        doubleTouchRadius: number;
        /** Current touch X - coordinate. */
        x: number;
        /** Current touch Y - coordinate. */
        y: number;
        /** Current touch X - coordinate from 0 to 1 */
        nx: number;
        /** Current touch Y - coordinate from 0 to 1 */
        ny: number;
        /** Previous touch X coordinate. */
        prev_x: number;
        /** Previous touch Y coordinate. */
        prev_y: number;
        /** JavaScript touching system event message. */
        sys: any;
        /** Current touched(picking) object. */
        pickingObject: any;
        /** Renderer instanve. */
        renderer: any;
    };
    _dblTchCoords: Vec2;
    _oneTouchStart: boolean;
    _dblTchBegins: number;
    _mousestopThread: NodeJS.Timeout;
    _ldblClkBegins: number;
    _rdblClkBegins: number;
    _mdblClkBegins: number;
    _lClkBegins: number;
    _rClkBegins: number;
    _mClkBegins: number;
    _lclickX: number;
    _lclickY: number;
    _rclickX: number;
    _rclickY: number;
    _mclickX: number;
    _mclickY: number;
    set active(arg: boolean);
    get active(): boolean;
    /**
     * Used in render node frame.
     * @public
     */
    public handleEvents(): void;
    /**
     * Check key is pressed.
     * @public
     * @param {number} keyCode - Key code
     * @return {boolean}
     */
    public isKeyPressed(keyCode: number): boolean;
    releaseKeys(): void;
    /**
     * Renderer events initialization.
     * @public
     */
    public initialize(): void;
    /**
     * @private
     */
    private onMouseWheel;
    /**
     * @protected
     */
    protected updateButtonsStates(buttons: any): void;
    /**
     * @private
     */
    private onMouseMove;
    onMouseLeave(event: any): void;
    onMouseEnter(event: any): void;
    /**
     * @private
     */
    private onMouseDown;
    /**
     * @private
     */
    private onMouseUp;
    /**
     * @private
     */
    private onTouchStart;
    /**
     * @private
     */
    private onTouchEnd;
    /**
     * @private
     */
    private onTouchCancel;
    /**
     * @private
     */
    private onTouchMove;
    /**
     * @private
     */
    private entityPickingEvents;
    /**
     * @private
     */
    private handleMouseEvents;
    /**
     * @private
     */
    private handleTouchEvents;
}
import { Events } from "../Events.js";
import { Vec3 } from "../math/Vec3.js";
import { Vec2 } from "../math/Vec2.js";
