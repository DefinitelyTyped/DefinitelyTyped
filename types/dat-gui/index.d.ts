// Type definitions for dat.GUI 0.6
// Project: https://github.com/dataarts/dat.gui
// Definitions by: Satoru Kimura <https://github.com/gyohk>, ZongJing Lu <https://github.com/sonic3d>, Richard Roylance <https://github.com/rroylance>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace dat;

export class GUI {
    constructor(option?: GUIParams);

    __controllers: GUIController[];
    __folders: GUI[];
    domElement: HTMLElement;

    add(target: Object, propName:string): GUIController;
    add(target: Object, propName:string, min: number, max: number): GUIController;
    add(target: Object, propName:string, status: boolean): GUIController;
    add(target: Object, propName:string, items:string[]): GUIController;
    add(target: Object, propName:string, items:number[]): GUIController;
    add(target: Object, propName:string, items:Object): GUIController;

    addColor(target: Object, propName:string): GUIController;
    addColor(target: Object, propName:string, color: string): GUIController;
    addColor(target: Object, propName:string, rgba: number[]): GUIController; // rgb or rgba
    addColor(target: Object, propName:string, hsv:{h:number; s:number; v:number}): GUIController;

    remove(controller: GUIController): void;
    destroy(): void;

    addFolder(propName:string): GUI;

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

export interface GUIParams{
    autoPlace?: boolean;
    closed?: boolean;
    closeOnTop?: boolean;
    load?: any;
    name?: string;
    preset?: string;
    width?: number;
}

export class GUIController {
    destroy(): void;

    // Controller
    onChange: (value?: any) => void;
    onFinishChange: (value?: any) => void;

    setValue(value: any): GUIController;
    getValue(): any;
    updateDisplay(): void;
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
