// Type definitions for Ladda 0.9.4
// Project: https://github.com/hakimel/Ladda
// Definitions by: Danil Flores <https://github.com/dflor003/>, Michael Lee <https://github.com/leemicw>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

interface ILaddaButton {
    start(): ILaddaButton;
    startAfter(delay: number): ILaddaButton
    stop(): ILaddaButton;
    toggle(): ILaddaButton;
    setProgress(progress: number): ILaddaButton;
    enable(): ILaddaButton;
    disable(): ILaddaButton;
    isLoading(): boolean;
    remove(): void;
}

interface ILaddaOptions {
    timeout?: number;
    callback?: (instance: ILaddaButton) => void;
}

interface ILadda {
    bind(target: HTMLElement, options?: ILaddaOptions): void;
    bind(cssSelector: string, options?: ILaddaOptions): void;

    create(button: Element): ILaddaButton;

    stopAll(): void;
}

declare var Ladda: ILadda;

declare module "ladda" {
    export = Ladda;
}


interface JQuery {
    /**
    * Creates a new instance of ladda for the selected button
    */
    ladda(): JQuery;

    /**
    * The action controls or checks the state of the ladda button.  
    * Possible actions are 'start', 'stop', 'toggle', 'stopAll'
    * Possible check 'isLoading'
    */
    ladda(action: string): JQuery;

    /**
    * When the action is 'setProgress' you can pass a number between
    * 0 and 1 for the options to represent the progress.  For example .5 would be 50%
    * When the action is 'bind' you can pass an object with a property
    * called timeout with the timeout value in milliseconds. 
    * For example { timeout: 2000 }
    */
    ladda(action: string, options: any): JQuery;
}


interface JQueryStatic {
    ladda(action: string): JQuery;
}
