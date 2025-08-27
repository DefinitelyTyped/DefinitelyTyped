interface FloatingMenuOptions {
    selectorContainer: string;
    selectorPrimaryFocus: string;
    attribDirection: string;
    attribAvoidFocusOnOpen: string;
    classShown: string;
    classRefShown: string;
    eventBeforeShown: string;
    eventAfterShown: string;
    eventBeforeHidden: string;
    eventAfterHidden: string;
    refNode: HTMLElement;
    offset: Partial<{
        left: number;
        top: number;
    }>;
}

export const DIRECTION_LEFT = "left";
export const DIRECTION_TOP = "top";
export const DIRECTION_RIGHT = "right";
export const DIRECTION_BOTTOM = "bottom";
export function getFloatingPosition({
    menuSize,
    refPosition,
    offset,
    direction,
    scrollX,
    scrollY,
}: {
    menuSize: {
        width: number;
        height: number;
    };
    refPosition: Partial<{
        top: number;
        right: number;
        bottom: number;
        left: number;
    }>;
    offset?:
        | Partial<{
            left: number;
            top: number;
        }>
        | undefined;
    direction?: string | undefined;
    scrollX?: number | undefined;
    scrollY?: number | undefined;
}): any;
declare const FloatingMenu_base: any;
declare class FloatingMenu extends FloatingMenu_base {
    constructor(element: HTMLElement, options?: Partial<FloatingMenuOptions>);
    _handleKeydown(event: KeyboardEvent): void;
    handleBlur(event: FocusEvent): void;
    _getContainer(): HTMLElement;
    _getPos(): {
        left: number;
        top: number;
    };
    _testStyles(): void;
    _place(): void;
    shouldStateBeChanged(state: string): boolean;
    _changeState(state: string, detail: object, callback: () => void): void;
    release(): void;
    static options: FloatingMenuOptions;
    static components: WeakMap<object, any>;
}
export default FloatingMenu;
