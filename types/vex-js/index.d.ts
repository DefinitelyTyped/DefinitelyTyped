// Type definitions for Vex v2.3.2
// Project: https://github.com/HubSpot/vex
// Definitions by: Greg Cohan <https://github.com/gdcohan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

///<reference types="jquery" />

export = vex;
export as namespace vex;

declare namespace vex {

  interface ICSSAttributes {
    [property: string]: string | number;
  }

  interface IVexOptions {
    afterClose?: (() => void);
    afterOpen?: ((vexContent: JQuery) => void);
    content?: string;
    showCloseButton?: boolean;
    escapeButtonCloses?: boolean;
    overlayClosesOnClick?: boolean;
    appendLocation?: HTMLElement | JQuery | string;
    className?: string;
    css?: ICSSAttributes;
    overlayClassName?: string;
    overlayCSS?: ICSSAttributes;
    contentClassName?: string;
    contentCSS?: ICSSAttributes;
    closeClassName?: string;
    closeCSS?: ICSSAttributes;
  }

  interface Vex {
    open(options: IVexOptions): JQuery;
    close(id?: number): boolean;
    closeAll(): boolean;
    closeByID(id: number): boolean;
    defaultOptions?: IVexOptions;
  }

}

declare var vex: vex.Vex;
