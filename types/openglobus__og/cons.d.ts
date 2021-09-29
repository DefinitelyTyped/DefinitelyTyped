/**
 * Console logging singleton object.
 * @class
 */
export class Cons {
    _container: HTMLDivElement;
    _visibility: boolean;
    getVisibility(): boolean;
    setVisibility(visibility: any): void;
    /**
     * Show console panel.
     * @public
     */
    public show(): void;
    /**
     * Hide console panel.
     * @public
     */
    public hide(): void;
    /**
     * Adds error text in the console.
     * @public
     * @param {string} str - Error text.
     */
    public logErr(str: string): void;
    /**
     * Adds warning text in the console.
     * @public
     * @param {string} str - Warning text.
     */
    public logWrn(str: string): void;
    /**
     * Adds log text in the console.
     * @public
     * @param {string} str - Log text.
     * @param {Object} [style] - HTML style.
     */
    public log(str: string, style?: any): void;
}
export const cons: Cons;
