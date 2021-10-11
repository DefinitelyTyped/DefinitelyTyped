// Type definitions for focus-trap 6.7
// Project: https://github.com/focus-trap/focus-trap
// Definitions by: grgr-dkrk <https://github.com/grgr-dkrk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function createFocusTrap(
    element: string | HTMLElement | string[] | HTMLElement[],
    createOptions: CreateOptions,
): Trap;

export interface Trap {
    activate(activateOptions?: ActivateOptions): Trap;
    deactivate(deactivateOptions?: DeactivateOptions): Trap;
    pause(): Trap;
    unpause(): Trap;
    updateContainerElements(): Trap;
}

export interface CreateOptions {
    onActivate?(): void;
    onPostActivate?(): void;
    checkCanFocusTrap?(containers: Array<HTMLElement | SVGElement>): Promise<void>;
    onDeactivate?(): void;
    onPostDeactivate?(): void;
    checkCanReturnFocus?(trigger: HTMLElement | SVGElement): Promise<void>;
    initialFocus?: HTMLElement | SVGElement | string | false | (() => HTMLElement | SVGElement | false);
    fallbackFocus?: (() => HTMLElement) | (() => SVGElement) | HTMLElement | SVGElement | string;
    escapeDeactivates?: boolean | ((e: KeyboardEvent) => boolean);
    clickOutsideDeactivates?: boolean | ((e: MouseEvent | TouchEvent) => boolean);
    allowOutsideClick?: boolean | ((e: MouseEvent | TouchEvent) => boolean);
    returnFocusOnDeactivate?: boolean;
    setReturnFocus?:
        | HTMLElement
        | SVGElement
        | string
        | ((previousActiveElement: HTMLElement | SVGElement) => HTMLElement | SVGElement | false);
    preventScroll?: boolean;
    delayInitialFocus?: boolean;
    document?: Document;
}

export interface ActivateOptions {
    onActivate?(): void;
    onPostActivate?(): void;
    checkCanFocusTrap?(containers: Array<HTMLElement | SVGElement>): Promise<void>;
}

export interface DeactivateOptions {
    returnFocus?: boolean;
    onDeactivate?(): void;
    onPostDeactivate?(): void;
    checkCanReturnFocus?(trigger: HTMLElement | SVGElement): Promise<void>;
}
