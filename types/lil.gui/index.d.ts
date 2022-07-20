// Type definitions for lil.gui 0.17
// Project: https://github.com/georgealways/lil-gui
// Definitions by: George Michael Brower <https://github.com/georgealways>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
export default GUI;
export class GUI {
    constructor({ parent, autoPlace, container, width, title, injectStyles, touchStyles }?: {
        autoPlace?: boolean;
        container?: HTMLElement;
        width?: number;
        title?: string;
        injectStyles?: boolean;
        touchStyles?: number;
        parent?: GUI;
    });
    parent: GUI;
    root: GUI;
    children: Array<GUI | Controller>;
    controllers: Controller[];
    folders: GUI[];
    _closed: boolean;
    _hidden: boolean;
    domElement: HTMLElement;
    $title: HTMLElement;
    $children: HTMLElement;
    add(object: object, property: string, $1?: number | object | any[], max?: number, step?: number): Controller;
    addColor(object: object, property: string, rgbScale?: number): Controller;
    addFolder(title: string): GUI;
    load(obj: object, recursive?: boolean): this;
    save(recursive?: boolean): object;
    open(open?: boolean): this;
    close(): this;
    show(show?: boolean): this;
    hide(): this;
    openAnimated(open?: boolean): GUI;
    title(title: string): this;
    _title: string;
    reset(recursive?: boolean): this;
    onChange(callback: (arg0: {
        object: object;
        property: string;
        value: any;
        controller: Controller;
    }) => any): this;
    _onChange: (controller: any) => void;
    onFinishChange(callback: (arg0: {
        object: object;
        property: string;
        value: any;
        controller: Controller;
    }) => any): this;
    _onFinishChange: (controller: any) => void;
    destroy(): void;
    controllersRecursive(): Controller[];
    foldersRecursive(): GUI[];
}
export class BooleanController extends Controller {
    constructor(parent: any, object: any, property: any);
    $input: HTMLInputElement;
}
export class ColorController extends Controller {
    constructor(parent: any, object: any, property: any, rgbScale: any);
    $input: HTMLInputElement;
    $text: HTMLInputElement;
    $display: HTMLDivElement;
    _format: {
        isPrimitive: boolean;
        match: (v: any) => boolean;
        fromHexString: typeof normalizeColorString;
        toHexString: typeof normalizeColorString;
    } | {
        isPrimitive: boolean;
        match: (arg: any) => arg is any[];
        fromHexString(string: any, target: any, rgbScale?: number): void;
        toHexString([r, g, b]: [any, any, any], rgbScale?: number): string;
    } | {
        isPrimitive: boolean;
        match: (v: any) => boolean;
        fromHexString(string: any, target: any, rgbScale?: number): void;
        toHexString({ r, g, b }: {
            r: any;
            g: any;
            b: any;
        }, rgbScale?: number): string;
    };
    _rgbScale: any;
    _initialValueHexString: string | boolean;
    _textFocused: boolean;
    _setValueFromHexString(value: any): void;
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
export class Controller {
    constructor(parent: any, object: any, property: any, className: any, widgetTag?: string);
    parent: GUI;
    object: object;
    property: string;
    _disabled: boolean;
    _hidden: boolean;
    initialValue: any;
    domElement: HTMLElement;
    $name: HTMLElement;
    $widget: HTMLElement;
    $disable: HTMLElement;
    _listenCallback(): void;
    name(name: string): this;
    _name: string;
    onChange(callback: () => { }): this;
    _onChange: (() => { });
    protected _callOnChange(): void;
    _changed: boolean;
    onFinishChange(callback: () => { }): this;
    _onFinishChange: () => { };
    protected _callOnFinishChange(): void;
    reset(): this;
    enable(enabled?: boolean): this;
    disable(disabled?: boolean): this;
    show(show?: boolean): this;
    hide(): this;
    options(options: object | any[]): Controller;
    min(min: number): this;
    max(max: number): this;
    step(step: number): this;
    decimals(decimals: number): this;
    listen(listen?: boolean): this;
    _listening: boolean;
    _listenCallbackID: number;
    _listenPrevValue: any;
    getValue(): any;
    setValue(value: any): this;
    updateDisplay(): this;
    load(value: any): Controller;
    save(): any;
    destroy(): void;
}
export class FunctionController extends Controller {
    constructor(parent: any, object: any, property: any);
    $button: HTMLButtonElement;
}
export class NumberController extends Controller {
    constructor(parent: any, object: any, property: any, min: any, max: any, step: any);
    _decimals: any;
    _min: any;
    _max: any;
    _step: any;
    _stepExplicit: boolean;
    _initInput(): void;
    $input: HTMLInputElement;
    _inputFocused: boolean;
    _initSlider(): void;
    _hasSlider: boolean;
    $slider: HTMLDivElement;
    $fill: HTMLDivElement;
    _setDraggingStyle(active: any, axis?: string): void;
    _getImplicitStep(): number;
    _onUpdateMinMax(): void;
    _normalizeMouseWheel(e: any): any;
    _arrowKeyMultiplier(e: any): number;
    _snap(value: any): number;
    _clamp(value: any): any;
    _snapClampSetValue(value: any): void;
    get _hasScrollBar(): boolean;
    get _hasMin(): boolean;
    get _hasMax(): boolean;
}
export class OptionController extends Controller {
    constructor(parent: any, object: any, property: any, options: any);
    $select: HTMLSelectElement;
    $display: HTMLDivElement;
    _values: any[];
    _names: any[];
}
export class StringController extends Controller {
    constructor(parent: any, object: any, property: any);
    $input: HTMLInputElement;
}
declare function normalizeColorString(string: any): string | false;
