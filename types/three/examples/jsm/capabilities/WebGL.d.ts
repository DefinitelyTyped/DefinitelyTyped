// tslint:disable-next-line:no-unnecessary-class
export default class WebGL {
    static isWebGLAvailable(): boolean;
    static isWebGL2Available(): boolean;
    static isColorSpaceAvailable(colorSpace: PredefinedColorSpace): boolean;
    static getWebGLErrorMessage(): HTMLElement;
    static getWebGL2ErrorMessage(): HTMLElement;
    static getErrorMessage(version: number): HTMLElement;
}
