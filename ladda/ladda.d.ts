// Type definitions for Ladda 0.9.4
// Project: https://github.com/hakimel/Ladda
// Definitions by: Danil Flores <https://github.com/dflor003/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

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
