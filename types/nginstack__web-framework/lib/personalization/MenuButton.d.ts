export = MenuButton;
declare function MenuButton(key: any, label: any): void;
declare class MenuButton {
    constructor(key: any, label: any);
    nodeId: string;
    label: any;
    cssActiveClassName: string;
    cssHoverClassName: string;
    cssLabelClassName: string;
    icon: any;
    clickAction: any;
    treeRoot: any;
    processKey: any;
    cssClassName: string;
    order: number;
    toHtml(): string;
}
declare namespace MenuButton {
    const NONE_ACTION: number;
    const SHOW_TREE: number;
    const PRINT: number;
    const HELP: number;
    const TASK: number;
    const SEARCH: number;
    const LOGOUT: number;
    const CALL_PROCESS: number;
}
