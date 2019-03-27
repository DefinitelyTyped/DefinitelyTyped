// Type definitions for dat.GUI 0.7.2
// Project: https://github.com/dataarts/dat.gui
// Definitions by: Satoru Kimura <https://github.com/gyohk>, ZongJing Lu <https://github.com/sonic3d>, Richard Roylance <https://github.com/rroylance>, Nahuel Scotti <https://github.com/singuerinc>
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
    destroy(): void;

    // Controller
    onChange: (value?: any) => GUIController;
    onFinishChange: (value?: any) => GUIController;

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

    // augmentController in dat/gui/GUI.js
    options(option:any):GUIController;
    name(s: string): GUIController;
    listen(): GUIController;
    remove(): GUIController;
}
