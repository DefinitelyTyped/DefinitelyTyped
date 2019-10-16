// Type definitions for dat.GUI 0.7
// Project: https://github.com/dataarts/dat.gui
// Definitions by: Satoru Kimura <https://github.com/gyohk>, ZongJing Lu <https://github.com/sonic3d>, Richard Roylance <https://github.com/rroylance>, Nahuel Scotti <https://github.com/singuerinc>, Teoxoy <https://github.com/teoxoy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace dat;

export interface GUIParams {
    /**
     * Handles GUI's element placement for you.
     * @default true
     */
    autoPlace?: boolean;
    /**
     * If true, starts closed.
     * @default false
     */
    closed?: boolean;
    /**
     * If true, close/open button shows on top of the GUI.
     * @default false
     */
    closeOnTop?: boolean;
    /**
     * If true, GUI is closed by the "h" keypress.
     * @default false
     */
    hideable?: boolean;
    /**
     * JSON object representing the saved state of this GUI.
     */
    load?: any;
    /**
     * The name of this GUI.
     */
    name?: string;
    /**
     * The identifier for a set of saved values.
     */
    preset?: string;
    /**
     * The width of GUI element.
     */
    width?: number;
}

export class GUI {
    static CLASS_AUTO_PLACE: string
    static CLASS_AUTO_PLACE_CONTAINER: string
    static CLASS_MAIN: string
    static CLASS_CONTROLLER_ROW: string
    static CLASS_TOO_TALL: string
    static CLASS_CLOSED: string
    static CLASS_CLOSE_BUTTON: string
    static CLASS_CLOSE_TOP: string
    static CLASS_CLOSE_BOTTOM: string
    static CLASS_DRAG: string
    static DEFAULT_WIDTH: number
    static TEXT_CLOSED: string
    static TEXT_OPEN: string

    constructor(option?: GUIParams);

    __controllers: GUIController[];
    __folders: GUI[];
    domElement: HTMLElement;

    add(target: Object, propName:string, min?: number, max?: number, step?: number): GUIController;
    add(target: Object, propName:string, status: boolean): GUIController;
    add(target: Object, propName:string, items:string[]): GUIController;
    add(target: Object, propName:string, items:number[]): GUIController;
    add(target: Object, propName:string, items:Object): GUIController;

    addColor(target: Object, propName:string): GUIController;

    remove(controller: GUIController): void;
    destroy(): void;

    addFolder(propName:string): GUI;
    removeFolder(subFolder:GUI):void;

    open(): void;
    close(): void;
    hide(): void;
    show(): void;

    remember(target: Object, ...additionalTargets: Object[]): void;
    getRoot(): GUI;

    getSaveObject(): Object;
    save(): void;
    saveAs(presetName:string): void;
    revert(gui:GUI): void;

    listen(controller: GUIController): void;
    updateDisplay(): void;

    // gui properties in dat/gui/GUI.js
    readonly parent: GUI;
    readonly scrollable: boolean;
    readonly autoPlace: boolean;
    preset: string;
    width: number;
    name: string;
    closed: boolean;
    readonly load: Object;
    useLocalStorage: boolean;
}

export class GUIController {
    domElement: HTMLElement;
    object: Object;
    property: string;

    constructor(object: Object, property: string);

    options(option: any): GUIController;
    name(name: string): GUIController;

    listen(): GUIController;
    remove(): GUIController;

    onChange(fnc: (value?: any) => void): GUIController;
    onFinishChange(fnc: (value?: any) => void): GUIController;

    setValue(value: any): GUIController;
    getValue(): any;

    updateDisplay(): GUIController;
    isModified(): boolean;

    // NumberController
    min(n: number): GUIController;
    max(n: number): GUIController;
    step(n: number): GUIController;

    // FunctionController
    fire(): GUIController;
}
