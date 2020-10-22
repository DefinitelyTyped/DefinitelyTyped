export const DIRECTION_LEFT = 'left';
export const DIRECTION_TOP = 'top';
export const DIRECTION_RIGHT = 'right';
export const DIRECTION_BOTTOM = 'bottom';
export function getFloatingPosition({
    menuSize,
    refPosition,
    offset,
    direction,
    scrollX,
    scrollY,
}: {
    menuSize: any;
    refPosition: any;
    offset?: {};
    direction?: string;
    scrollX?: number;
    scrollY?: number;
}): any;
declare const FloatingMenu_base: any;
declare class FloatingMenu extends FloatingMenu_base {
    constructor(element: any, options: any);
    _handleKeydown(event: any): void;
    handleBlur(event: any): void;
    _getContainer(): any;
    _getPos(): any;
    _testStyles(): void;
    _place(): void;
    shouldStateBeChanged(state: any): boolean;
    _changeState(state: any, detail: any, callback: any): void;
    release(): void;
    static options: {
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
        refNode: null;
        offset: {
            left: number;
            top: number;
        };
    };
    static components: WeakMap<object, any>;
}
export default FloatingMenu;
