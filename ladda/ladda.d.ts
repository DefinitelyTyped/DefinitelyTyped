// Type definitions for Ladda 0.7.0
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

    function create(button: Element): ILaddaButton;
    
    function stopAll(): void;
}
