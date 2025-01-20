declare var Blazy: Blazy;

interface Blazy {
    new(options: BlazyOptions): BlazyInstance;
}

interface BlazyOptions {
    breakpoints?: Breakpoint[] | undefined;

    container?: string | undefined;

    error?: ((ele: Element | HTMLElement, msg: string) => void) | undefined;

    errorClass?: string | undefined;

    loadInvisible?: boolean | undefined;

    offset?: number | undefined;

    saveViewportOffsetDelay?: number | undefined;

    selector?: string | undefined;

    separator?: string | undefined;

    src?: string | undefined;

    success?: ((ele: Element | HTMLElement) => void) | undefined;

    successClass?: string | undefined;

    validateDelay?: number | undefined;
}

interface BlazyInstance {
    /**
     * Revalidates document for visible images. Useful if you add images with scripting or ajax.
     */
    revalidate(): void;

    /**
     * Forces the given element(s) to load if not collapsed. If you also want to load a collapsed/hidden elements you can add true as the second parameter.
     * You can pass a single element or a list of elements. Tested with getElementById, getElementsByClassName, querySelectorAll, querySelector and jQuery selector.
     */
    load(elements: Element | Element[] | HTMLElement | HTMLElement[] | HTMLCollection | NodeList, force: boolean): void;

    /**
     * Unbind events and resets image array.
     */
    destroy(): void;
}

interface Breakpoint {
    width: number;
    src: string;
}

declare module "blazy" {
    export = Blazy;
}
