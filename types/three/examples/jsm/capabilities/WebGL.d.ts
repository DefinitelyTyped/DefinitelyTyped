export default class WebGL {
    static isWebGL2Available(): boolean;
    static isColorSpaceAvailable(colorSpace: PredefinedColorSpace): boolean;
    static getWebGL2ErrorMessage(): HTMLElement;
    static getErrorMessage(version: number): HTMLElement;
}
