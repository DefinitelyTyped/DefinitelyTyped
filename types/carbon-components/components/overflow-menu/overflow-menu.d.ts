interface OverflowMenuOptions {
    selectorInit: string;
    selectorOptionMenu: string;
    selectorTrigger: string;
    selectorContent: string;
    selectorItem: string;
    classShown: string;
    classMenuShown: string;
    classMenuFlip: string;
    objMenuOffset: typeof getMenuOffset;
    objMenuOffsetFlip: typeof getMenuOffset;
}

export function getMenuOffset(
    menuBody: Element,
    direction: string,
    trigger: Element,
):
    | {
        left: number;
        top: number;
    }
    | undefined;
declare const OverflowMenu_base: any;
declare class OverflowMenu extends OverflowMenu_base {
    constructor(element: HTMLElement, options?: Partial<OverflowMenuOptions>);
    changeState(state: string, detail: object, callback: () => void): void;
    _handleDocumentClick(event: MouseEvent): void;
    getCurrentNavigation: () => null | Element;
    navigate: (direction: number) => void;
    _handleKeyPress(event: KeyboardEvent): void;
    static components: WeakMap<object, any>;
    static get options(): OverflowMenuOptions;
}
export default OverflowMenu;
