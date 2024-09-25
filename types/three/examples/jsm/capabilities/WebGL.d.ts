export default class WebGL {
    static isWebGL2Available(): boolean;
    static isColorSpaceAvailable(colorSpace: PredefinedColorSpace): boolean;
    static getWebGL2ErrorMessage(): HTMLElement;
    static getErrorMessage(version: number): HTMLElement;

    /**
     * @deprecated isWebGLAvailable() has been deprecated and will be removed in r178. Use isWebGL2Available() instead.
     */
    static isWebGLAvailable(): boolean;

    /**
     * @deprecated getWebGLErrorMessage() has been deprecated and will be removed in r178. Use getWebGL2ErrorMessage()
     * instead.
     */
    static getWebGLErrorMessage(): HTMLElement;
}
