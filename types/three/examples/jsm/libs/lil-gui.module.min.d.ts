export type KeyToValueOfType<T, V> = { [K in keyof T]: T[K] extends V ? K : never }[keyof T];

export default GUI;
export class GUI {
    /**
     * Creates a panel that holds controllers.
     * @example
     * new GUI();
     * new GUI( { container: document.getElementById( 'custom' ) } );
     *
     * @param [options]
     * @param [options.autoPlace=true]
     * Adds the GUI to `document.body` and fixes it to the top right of the page.
     *
     * @param [options.container]
     * Adds the GUI to this DOM element. Overrides `autoPlace`.
     *
     * @param [options.width=245]
     * Width of the GUI in pixels, usually set when name labels become too long. Note that you can make
     * name labels wider in CSS with `.lil‑gui { ‑‑name‑width: 55% }`
     *
     * @param [options.title=Controls]
     * Name to display in the title bar.
     *
     * @param [options.injectStyles=true]
     * Injects the default stylesheet into the page if this is the first GUI.
     * Pass `false` to use your own stylesheet.
     *
     * @param [options.touchStyles=true]
     * Makes controllers larger on touch devices. Pass `false` to disable touch styles.
     *
     * @param [options.parent]
     * Adds this GUI as a child in another GUI. Usually this is done for you by `addFolder()`.
     *
     */
    constructor({
        parent,
        autoPlace,
        container,
        width,
        title,
        injectStyles,
        touchStyles,
    }?: {
        autoPlace?: boolean;
        container?: HTMLElement;
        width?: number;
        title?: string;
        injectStyles?: boolean;
        touchStyles?: number;
        parent?: GUI;
    });
    /**
     * The GUI containing this folder, or `undefined` if this is the root GUI.
     */
    parent: GUI;
    /**
     * The top level GUI containing this folder, or `this` if this is the root GUI.
     */
    root: GUI;
    /**
     * The list of controllers and folders contained by this GUI.
     */
    children: Array<GUI | Controller>;
    /**
     * The list of controllers contained by this GUI.
     */
    controllers: Controller[];
    /**
     * The list of folders contained by this GUI.
     */
    folders: GUI[];
    /**
     * Used to determine if the GUI is closed. Use `gui.open()` or `gui.close()` to change this.
     */
    _closed: boolean;
    /**
     * Used to determine if the GUI is hidden. Use `gui.show()` or `gui.hide()` to change this.
     */
    _hidden: boolean;
    /**
     * The outermost container element.
     */
    domElement: HTMLElement;
    /**
     * The DOM element that contains the title.
     */
    $title: HTMLElement;
    /**
     * The DOM element that contains children.
     */
    $children: HTMLElement;
    /**
     * Adds a controller to the GUI, inferring controller type using the `typeof` operator.
     * @example
     * gui.add( object, 'property' );
     * gui.add( object, 'number', 0, 100, 1 );
     * gui.add( object, 'options', [ 1, 2, 3 ] );
     *
     * @param object The object the controller will modify.
     * @param property Name of the property to control.
     * @param [$1] Minimum value for number controllers, or the set of
     * selectable values for a dropdown.
     * @param [max] Maximum value for number controllers.
     * @param [step] Step value for number controllers.
     */
    add<T, K extends keyof T>(
        object: T,
        property: K,
        options: ReadonlyArray<T[K]> | Record<string, T[K]>,
    ): OptionController<T, K>;
    add<T, K extends KeyToValueOfType<T, number>>(
        object: T,
        property: K,
        min?: number,
        max?: number,
        step?: number,
    ): NumberController<T, K>;
    add<T, K extends KeyToValueOfType<T, boolean>>(object: T, property: K, options?: never): BooleanController<T, K>;
    add<T, K extends KeyToValueOfType<T, string>>(object: T, property: K, options?: never): StringController<T, K>;
    add<T, K extends KeyToValueOfType<T, (this: T) => void>>(
        object: T,
        property: K,
        options?: never,
    ): FunctionController<T, K>;
    /**
     * Adds a color controller to the GUI.
     * @example
     * params = {
     *   cssColor: '#ff00ff',
     *   rgbColor: { r: 0, g: 0.2, b: 0.4 },
     *   customRange: [ 0, 127, 255 ],
     * };
     *
     * gui.addColor( params, 'cssColor' );
     * gui.addColor( params, 'rgbColor' );
     * gui.addColor( params, 'customRange', 255 );
     *
     * @param object The object the controller will modify.
     * @param property Name of the property to control.
     * @param rgbScale Maximum value for a color channel when using an RGB color. You may
     * need to set this to 255 if your colors are too bright.
     */
    addColor<T, K extends keyof T>(object: T, property: K, rgbScale?: number): ColorController<T, K>;
    /**
     * Adds a folder to the GUI, which is just another GUI. This method returns
     * the nested GUI so you can add controllers to it.
     * @example
     * const folder = gui.addFolder( 'Position' );
     * folder.add( position, 'x' );
     * folder.add( position, 'y' );
     * folder.add( position, 'z' );
     *
     * @param title Name to display in the folder's title bar.
     */
    addFolder(title: string): GUI;
    /**
     * Recalls values that were saved with `gui.save()`.
     * @param obj
     * @param recursive Pass false to exclude folders descending from this GUI.
     */
    load(obj: object, recursive?: boolean): this;
    /**
     * Returns an object mapping controller names to values. The object can be passed to `gui.load()` to
     * recall these values.
     * @example
     * {
     *   controllers: {
     *     prop1: 1,
     *     prop2: 'value',
     *     ...
     *   },
     *   folders: {
     *     folderName1: { controllers, folders },
     *     folderName2: { controllers, folders }
     *     ...
     *   }
     * }
     *
     * @param recursive Pass false to exclude folders descending from this GUI.
     */
    save(recursive?: boolean): object;
    /**
     * Opens a GUI or folder. GUI and folders are open by default.
     * @param open Pass false to close
     * @example
     * gui.open(); // open
     * gui.open( false ); // close
     * gui.open( gui._closed ); // toggle
     */
    open(open?: boolean): this;
    /**
     * Closes the GUI.
     */
    close(): this;
    /**
     * Shows the GUI after it's been hidden.
     * @param show
     * @example
     * gui.show();
     * gui.show( false ); // hide
     * gui.show( gui._hidden ); // toggle
     */
    show(show?: boolean): this;
    /**
     * Hides the GUI.
     */
    hide(): this;
    openAnimated(open?: boolean): GUI;
    /**
     * Change the title of this GUI.
     * @param title
     */
    title(title: string): this;
    /**
     * Current title of the GUI. Use `gui.title( 'Title' )` to modify this value.
     */
    _title: string;
    /**
     * Resets all controllers to their initial values.
     * @param recursive Pass false to exclude folders descending from this GUI.
     */
    reset(recursive?: boolean): this;
    /**
     * Pass a function to be called whenever a controller in this GUI changes.
     * @param callback
     * @example
     * gui.onChange( event => {
     *   event.object     // object that was modified
     *   event.property   // string, name of property
     *   event.value      // new value of controller
     *   event.controller // controller that was modified
     * } );
     */
    onChange(
        callback: (arg0: { object: object; property: string; value: unknown; controller: Controller }) => void,
    ): this;
    /**
     * Used to access the function bound to `onChange` events. Don't modify this value
     * directly. Use the `gui.onChange( callback )` method instead.
     */
    _onChange: (arg0: { object: object; property: string; value: unknown; controller: Controller }) => void;
    _callOnChange(controller: Controller): void;
    /**
     * Pass a function to be called whenever a controller in this GUI has finished changing.
     * @param callback
     * @example
     * gui.onFinishChange( event => {
     *   event.object     // object that was modified
     *   event.property   // string, name of property
     *   event.value      // new value of controller
     *   event.controller // controller that was modified
     * } );
     */
    onFinishChange(
        callback: (arg0: { object: object; property: string; value: unknown; controller: Controller }) => void,
    ): this;
    /**
     * Used to access the function bound to `onFinishChange` events. Don't modify this value
     * directly. Use the `gui.onFinishChange( callback )` method instead.
     */
    _onFinishChange: (arg0: { object: object; property: string; value: unknown; controller: Controller }) => void;
    _callOnFinishChange(controller: Controller): void;
    /**
     * Destroys all DOM elements and event listeners associated with this GUI
     */
    destroy(): void;
    /**
     * Returns an array of controllers contained by this GUI and its descendents.
     */
    controllersRecursive(): Controller[];
    /**
     * Returns an array of folders contained by this GUI and its descendents.
     */
    foldersRecursive(): GUI[];
}
export class BooleanController<
    T = Record<string, unknown>,
    K extends KeyToValueOfType<T, boolean> = KeyToValueOfType<T, boolean>,
> extends Controller<T, K> {
    constructor(parent: GUI, object: T, property: K);
    $input: HTMLInputElement;
}
export class ColorController<T = Record<string, unknown>, K extends keyof T = keyof T> extends Controller<T, K> {
    constructor(parent: GUI, object: T, property: K, rgbScale: number);
    $input: HTMLInputElement;
    $text: HTMLInputElement;
    $display: HTMLDivElement;
    _format:
        | {
              isPrimitive: boolean;
              match: (v: unknown) => boolean;
              fromHexString: typeof normalizeColorString;
              toHexString: typeof normalizeColorString;
          }
        | {
              isPrimitive: boolean;
              match: (arg: unknown) => arg is unknown[];
              fromHexString(string: unknown, target: unknown, rgbScale?: number): void;
              toHexString([r, g, b]: [unknown, unknown, unknown], rgbScale?: number): string;
          }
        | {
              isPrimitive: boolean;
              match: (v: unknown) => boolean;
              fromHexString(string: unknown, target: unknown, rgbScale?: number): void;
              toHexString(
                  {
                      r,
                      g,
                      b,
                  }: {
                      r: unknown;
                      g: unknown;
                      b: unknown;
                  },
                  rgbScale?: number,
              ): string;
          };
    _rgbScale: number;
    _initialValueHexString: string | boolean;
    _textFocused: boolean;
    _setValueFromHexString(value: unknown): void;
}
/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */
/**
 * Base class for all controllers.
 */
export class Controller<T = Record<string, unknown>, K extends keyof T = keyof T> {
    constructor(parent: GUI, object: T, property: K, className: string, widgetTag?: string);
    /**
     * The GUI that contains this controller.
     */
    parent: GUI;
    /**
     * The object this controller will modify.
     */
    object: object;
    /**
     * The name of the property to control.
     */
    property: string;
    /**
     * Used to determine if the controller is disabled.
     * Use `controller.disable( true|false )` to modify this value
     */
    _disabled: boolean;
    /**
     * Used to determine if the Controller is hidden.
     * Use `controller.show()` or `controller.hide()` to change this.
     */
    _hidden: boolean;
    /**
     * The value of `object[ property ]` when the controller was created.
     */
    initialValue: T[K];
    /**
     * The outermost container DOM element for this controller.
     */
    domElement: HTMLElement;
    /**
     * The DOM element that contains the controller's name.
     */
    $name: HTMLElement;
    /**
     * The DOM element that contains the controller's "widget" (which differs by controller type).
     */
    $widget: HTMLElement;
    /**
     * The DOM element that receives the disabled attribute when using disable()
     */
    $disable: HTMLElement;
    _listenCallback(): void;
    /**
     * Sets the name of the controller and its label in the GUI.
     * @param name
     */
    name(name: string): this;
    /**
     * The controller's name. Use `controller.name( 'Name' )` to modify this value.
     */
    _name: string;
    /**
     * Pass a function to be called whenever the value is modified by this controller.
     * The function receives the new value as its first parameter. The value of `this` will be the
     * controller.
     * @param callback
     * @example
     * const controller = gui.add( object, 'property' );
     *
     * controller.onChange( function( v ) {
     *   console.log( 'The value is now ' + v );
     *   console.assert( this === controller );
     * } );
     */
    onChange(callback: (value: T[K]) => void): this;
    /**
     * Used to access the function bound to `onChange` events. Don't modify this value directly.
     * Use the `controller.onChange( callback )` method instead.
     */
    _onChange: (value: T[K]) => void;
    /**
     * Calls the onChange methods of this controller and its parent GUI.
     */
    protected _callOnChange(): void;
    _changed: boolean;
    /**
     * Pass a function to be called after this controller has been modified and loses focus.
     * @param callback
     * @example
     * const controller = gui.add( object, 'property' );
     *
     * controller.onFinishChange( function( v ) {
     *   console.log( 'Changes complete: ' + v );
     *   console.assert( this === controller );
     * } );
     */
    onFinishChange(callback: (value: T[K]) => void): this;
    /**
     * Used to access the function bound to `onFinishChange` events. Don't modify this value
     * directly. Use the `controller.onFinishChange( callback )` method instead.
     */
    _onFinishChange: (value: T[K]) => void;
    /**
     * Should be called by Controller when its widgets lose focus.
     */
    protected _callOnFinishChange(): void;
    /**
     * Sets the controller back to its initial value.
     */
    reset(): this;
    /**
     * Enables this controller.
     * @param enabled
     * @example
     * controller.enable();
     * controller.enable( false ); // disable
     * controller.enable( controller._disabled ); // toggle
     */
    enable(enabled?: boolean): this;
    /**
     * Disables this controller.
     * @param disabled
     * @example
     * controller.disable();
     * controller.disable( false ); // enable
     * controller.disable( !controller._disabled ); // toggle
     */
    disable(disabled?: boolean): this;
    /**
     * Shows the Controller after it's been hidden.
     * @param show
     * @example
     * controller.show();
     * controller.show( false ); // hide
     * controller.show( controller._hidden ); // toggle
     */
    show(show?: boolean): this;
    /**
     * Hides the Controller.
     */
    hide(): this;
    /**
     * Destroys this controller and replaces it with a new option controller. Provided as a more
     * descriptive syntax for `gui.add`, but primarily for compatibility with dat.gui.
     *
     * Use caution, as this method will destroy old references to this controller. It will also
     * change controller order if called out of sequence, moving the option controller to the end of
     * the GUI.
     * @example
     * // safe usage
     *
     * gui.add( object1, 'property' ).options( [ 'a', 'b', 'c' ] );
     * gui.add( object2, 'property' );
     *
     * // danger
     *
     * const c = gui.add( object1, 'property' );
     * gui.add( object2, 'property' );
     *
     * c.options( [ 'a', 'b', 'c' ] );
     * // controller is now at the end of the GUI even though it was added first
     *
     * assert( c.parent.children.indexOf( c ) === -1 )
     * // c references a controller that no longer exists
     *
     * @param options
     */
    options(options: object | unknown[]): Controller;
    /**
     * Calls `updateDisplay()` every animation frame. Pass `false` to stop listening.
     * @param listen
     */
    listen(listen?: boolean): this;
    /**
     * Used to determine if the controller is currently listening. Don't modify this value
     * directly. Use the `controller.listen( true|false )` method instead.
     */
    _listening: boolean;
    _listenCallbackID: number;
    _listenPrevValue: unknown;
    /**
     * Returns `object[ property ]`.
     */
    getValue(): T[K];
    /**
     * Sets the value of `object[ property ]`, invokes any `onChange` handlers and updates the display.
     * @param value
     */
    setValue(value: T[K]): this;
    /**
     * Updates the display to keep it in sync with the current value. Useful for updating your
     * controllers when their values have been modified outside of the GUI.
     */
    updateDisplay(): this;
    load(value: T[K]): this;
    save(): T[K];
    /**
     * Destroys this controller and removes it from the parent GUI.
     */
    destroy(): void;
}
export class FunctionController<
    T = Record<string, unknown>,
    K extends KeyToValueOfType<T, (this: T) => void> = KeyToValueOfType<T, (this: T) => void>,
> extends Controller<T, K> {
    constructor(parent: GUI, object: T, property: K);
    $button: HTMLButtonElement;
}
export class NumberController<
    T = Record<string, unknown>,
    K extends KeyToValueOfType<T, number> = KeyToValueOfType<T, number>,
> extends Controller<T, K> {
    constructor(
        parent: GUI,
        object: T,
        property: K,
        min: number | undefined,
        max: number | undefined,
        step: number | undefined,
    );
    _decimals: unknown;
    _min: unknown;
    _max: unknown;
    _step: unknown;
    _stepExplicit: boolean;
    _initInput(): void;
    $input: HTMLInputElement;
    _inputFocused: boolean;
    _initSlider(): void;
    _hasSlider: boolean;
    $slider: HTMLDivElement;
    $fill: HTMLDivElement;
    _setDraggingStyle(active: unknown, axis?: string): void;
    _getImplicitStep(): number;
    _onUpdateMinMax(): void;
    _normalizeMouseWheel(e: unknown): unknown;
    _arrowKeyMultiplier(e: unknown): number;
    _snap(value: unknown): number;
    _clamp(value: unknown): unknown;
    _snapClampSetValue(value: unknown): void;
    get _hasScrollBar(): boolean;
    get _hasMin(): boolean;
    get _hasMax(): boolean;
    /**
     * Sets the minimum value. Only works on number controllers.
     * @param min
     */
    min(min: number): this;
    /**
     * Sets the maximum value. Only works on number controllers.
     * @param max
     */
    max(max: number): this;
    /**
     * Values set by this controller will be rounded to multiples of `step`. Only works on number
     * controllers.
     * @param step
     */
    step(step: number): this;
    /**
     * Rounds the displayed value to a fixed number of decimals, without affecting the actual value
     * like `step()`. Only works on number controllers.
     * @example
     * gui.add( object, 'property' ).listen().decimals( 4 );
     * @param decimals
     */
    decimals(decimals: number): this;
}
export class OptionController<T = Record<string, unknown>, K extends keyof T = keyof T> extends Controller<T, K> {
    constructor(parent: GUI, object: T, property: K, options: ReadonlyArray<T[K]> | Record<string, T[K]>);
    $select: HTMLSelectElement;
    $display: HTMLDivElement;
    _values: Array<T[K]>;
    _names: unknown[];
}
export class StringController<
    T = Record<string, unknown>,
    K extends KeyToValueOfType<T, string> = KeyToValueOfType<T, string>,
> extends Controller<T, K> {
    constructor(parent: GUI, object: T, property: K);
    $input: HTMLInputElement;
}
declare function normalizeColorString(string: unknown): string | false;
