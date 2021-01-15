export function getMenuOffset(
    menuBody: any,
    direction: any,
    trigger: any,
):
    | {
          left: number;
          top: number;
      }
    | undefined;
declare const OverflowMenu_base: any;
declare class OverflowMenu extends OverflowMenu_base {
    constructor(element: any, options: any);
    changeState(state: any, detail: any, callback: any): void;
    _handleDocumentClick(event: any): void;
    getCurrentNavigation: () => any;
    navigate: (direction: any) => void;
    _handleKeyPress(event: any): void;
    static components: WeakMap<object, any>;
    static get options(): {
        selectorInit: string;
        selectorOptionMenu: string;
        selectorTrigger: string;
        selectorContent: string;
        selectorItem: string;
        classShown: string;
        classMenuShown: string;
        classMenuFlip: string;
        objMenuOffset: (
            menuBody: any,
            direction: any,
            trigger: any,
        ) =>
            | {
                  left: number;
                  top: number;
              }
            | undefined;
        objMenuOffsetFlip: (
            menuBody: any,
            direction: any,
            trigger: any,
        ) =>
            | {
                  left: number;
                  top: number;
              }
            | undefined;
    };
}
export default OverflowMenu;
