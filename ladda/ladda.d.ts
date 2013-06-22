// Type definitions for jStorage 0.4.0
// Project: https://github.com/hakimel/Ladda
// Definitions by: Danil Flores <https://github.com/dflor003/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Ladda {

    interface ILaddaButton {
        start(): ILaddaButton;

        stop(): ILaddaButton;

        toggle(): ILaddaButton;

        setProgress(progress: number): ILaddaButton;

        enable(): ILaddaButton;

        disable(): ILaddaButton;

        isLoading(): boolean;
    }

    interface ILaddaOptions {
        timeout?: number;
        callback?: (instance: ILaddaButton) => void;
    }

    function bind(target: HTMLElement, options?: ILaddaOptions): void;
    function bind(cssSelector: string, options?: ILaddaOptions): void;

    function create(button: HTMLElement): ILaddaButton;
    
    function stopAll(): void;
}