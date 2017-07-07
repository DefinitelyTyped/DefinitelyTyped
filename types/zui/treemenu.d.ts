interface TreeNode {
    title?: string,
    url?: string,
    html?: string,
    children?: Array<TreeNode>;
    open?: boolean,
    id?: string
}
interface TreeMenuOption {
    animate?: boolean,
    initialState?: string,
    data?: Array<TreeNode>
    itemCreator?(li: JQuery | object, item: TreeNode): any,
    itemWrapper?: boolean
}

interface TreeMenu {
    expand(): void;
    expand(params: JQuery): void;
    expand(params: JQuery, disableAnimate: boolean): void;

    collapse(): void;
    collapse(params: JQuery): void;
    collapse(params: JQuery, disableAnimate: boolean): void;

    toggle(): void;
    toggle(params: JQuery): void;
    toggle(params: JQuery, disableAnimate: boolean): void;

    show(): void;
    show(params: JQuery): void;
    show(params: JQuery, disableAnimate: boolean): void;

    add(element: JQuery, items: Array<TreeNode>, expand?: boolean, disabledAnimate?: boolean): void;
    toData($ul?: JQuery, filter?: string): object;

    reload(data: Array<TreeNode>):void;
    remove(): void;
    empty(): void;
}
interface JQuery {
    tree(option?: TreeMenuOption): JQuery
}