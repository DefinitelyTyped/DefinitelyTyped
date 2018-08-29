declare namespace oj {  
  class OffcanvasUtils {
    constructor();
    static close(offcanvas: {selector: string}): Promise<any>;
    static open(offcanvas: {selector: string, content: string, edge: string, displayMode: string, autoDismiss: string, size: string, modality: string}): Promise<any>;
    static setupPanToReveal(offcanvas: {selector: string, edge?: string, size?: string}): void;
    static setupResponsive(offcanvas: {selector: string, edge: string, query: string}): void;
    static tearDownPanToReveal(offcanvas: {selector: string}): void;
    static tearDownResponsive(offcanvas: {selector: string}): void;
    static toggle(offcanvas: {selector: string, content: string, edge: string, displayMode: string, autoDismiss: string, size: string, modality: string}): Promise<any>;
  }

}
