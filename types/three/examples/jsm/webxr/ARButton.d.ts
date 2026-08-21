import { WebGLRenderer } from "three";

export interface ARButtonSessionInit extends XRSessionInit {
    domOverlay: { root: HTMLElement };
}

export namespace ARButton {
    function createButton(renderer: WebGLRenderer, sessionInit?: Partial<ARButtonSessionInit>): HTMLElement;
}
