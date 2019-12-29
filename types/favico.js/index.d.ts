// Type definitions for favico.js
// Project: http://lab.ejci.net/favico.js/
// Definitions by: Yu Matsushita <https://github.com/drowse314-dev-ymat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


declare namespace favicojs {

    interface FavicoJsStatic {
        new (opt?: FavicoJsOptions): Favico;
    }

    interface FavicoJsOptions {
        bgColor?: string;
        textColor?: string;
        fontFamily?: string;
        fontStyle?: string;
        type?: string;
        position?: string;
        animation?: string;
        elementId?: string;
        element?: HTMLElement;
        dataUrl?: (url: string) => any;
    }

    interface Favico {

        badge(number: number): void;
        badge(number: number, animation: string): void;
        badge(number: number, opts: FavicoJsOptions): void;

        reset(): void;

        image(imageElement: HTMLElement): void;

        video(imageElement: HTMLElement): void;

        webcam(): void;
    }
}


declare var Favico: favicojs.FavicoJsStatic;
