declare module "favico.js" {
    interface FavicoJsStatic {
        new(opt?: FavicoJsOptions): Favico;
    }

    interface FavicoJsOptions {
        bgColor?: string | undefined;
        textColor?: string | undefined;
        fontFamily?: string | undefined;
        fontStyle?: string | undefined;
        type?: string | undefined;
        position?: string | undefined;
        animation?: string | undefined;
        elementId?: string | undefined;
        element?: HTMLElement | undefined;
        dataUrl?: ((url: string) => any) | undefined;
    }

    class Favico {
        constructor(options?: FavicoOptions);
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
