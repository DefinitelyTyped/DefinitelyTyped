export as namespace dat;

export interface GUIParams {
    /**
     * Handles GUI's element placement for you.
     * @default true
     */
    autoPlace?: boolean | undefined;
    /**
     * If true, starts closed.
     * @default false
     */
    closed?: boolean | undefined;
    /**
     * If true, close/open button shows on top of the GUI.
     * @default false
     */
    closeOnTop?: boolean | undefined;
    /**
     * If true, GUI is closed by the "h" keypress.
     * @default true
     */
    hideable?: boolean | undefined;
    /**
     * JSON object representing the saved state of this GUI.
     */
    load?: any;
    /**
     * The name of this GUI.
     */
    name?: string | undefined;
    /**
     * The identifier for a set of saved values.
     */
    preset?: string | undefined;
    /**
     * The width of GUI element.
     */
    width?: number | undefined;
}

export class GUI {
    static CLASS_AUTO_PLACE: string;
    static CLASS_AUTO_PLACE_CONTAINER: string;
    static CLASS_MAIN: string;
    static CLASS_CONTROLLER_ROW: string;
    static CLASS_TOO_TALL: string;
    static CLASS_CLOSED: string;
    static CLASS_CLOSE_BUTTON: string;
    static CLASS_CLOSE_TOP: string;
    static CLASS_CLOSE_BOTTOM: string;
    static CLASS_DRAG: string;
    static DEFAULT_WIDTH: number;
    static TEXT_CLOSED: string;
    static TEXT_OPEN: string;

    constructor(option?: GUIParams);

    __controllers: GUIController[];
    __folders: { [folderName: string]: GUI };
    domElement: HTMLElement;

    add<T extends object>(
        target: T,
        propName: keyof T,
        min?: number,
        max?: number,
        step?: number,
    ): GUIController;
    add<T extends object>(target: T, propName: keyof T, status: boolean): GUIController;
    add<T extends object>(target: T, propName: keyof T, items: string[]): GUIController;
    add<T extends object>(target: T, propName: keyof T, items: number[]): GUIController;
    add<T extends object>(target: T, propName: keyof T, items: Object): GUIController;

    addColor(target: Object, propName: string): GUIController;

    remove(controller: GUIController): void;
    destroy(): void;

    addFolder(propName: string): GUI;
    removeFolder(subFolder: GUI): void;

    open(): void;
    close(): void;
    hide(): void;
    show(): void;

    remember(target: Object, ...additionalTargets: Object[]): void;
    getRoot(): GUI;

    getSaveObject(): Object;
    save(): void;
    saveAs(presetName: string): void;
    revert(gui: GUI): void;

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

export class GUIController<T extends object = object> {
    domElement: HTMLElement;
    object: Object;
    property: string;

    constructor(object: T, property: keyof T);

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
