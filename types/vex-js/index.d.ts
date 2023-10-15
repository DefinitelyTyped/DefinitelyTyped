// Type definitions for Vex v2.3.2
// Project: https://github.com/HubSpot/vex
// Definitions by: Greg Cohan <https://github.com/gdcohan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

export = vex;
export as namespace vex;

declare namespace vex {
    interface ICSSAttributes {
        [property: string]: string | number;
    }

    interface IVexOptions {
        afterClose?: (() => void) | undefined;
        afterOpen?: ((vexContent: JQuery) => void) | undefined;
        content?: string | undefined;
        showCloseButton?: boolean | undefined;
        escapeButtonCloses?: boolean | undefined;
        overlayClosesOnClick?: boolean | undefined;
        appendLocation?: HTMLElement | JQuery | string | undefined;
        className?: string | undefined;
        css?: ICSSAttributes | undefined;
        overlayClassName?: string | undefined;
        overlayCSS?: ICSSAttributes | undefined;
        contentClassName?: string | undefined;
        contentCSS?: ICSSAttributes | undefined;
        closeClassName?: string | undefined;
        closeCSS?: ICSSAttributes | undefined;
    }

    interface Vex {
        open(options: IVexOptions): JQuery;
        close(id?: number): boolean;
        closeAll(): boolean;
        closeByID(id: number): boolean;
        defaultOptions?: IVexOptions | undefined;
    }
}

declare var vex: vex.Vex;
