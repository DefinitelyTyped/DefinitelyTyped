export interface ConfigHead {
    style?: "merge" | "append" | "morph" | "none";
    block?: boolean;
    ignore?: boolean;
    shouldPreserve?: (element: Element) => boolean;
    shouldReAppend?: (element: Element) => boolean;
    shouldRemove?: (element: Element) => boolean;
    afterHeadMorphed?: (element: Element, data: { added: Node[]; kept: Element[]; removed: Element[] }) => void;
}

export interface ConfigCallbacks {
    beforeNodeAdded?: (node: Node) => boolean;
    afterNodeAdded?: (node: Node) => void;
    beforeNodeMorphed?: (oldNode: Node, newNode: Node) => boolean;
    afterNodeMorphed?: (oldNode: Node, newNode: Node) => void;
    beforeNodeRemoved?: (node: Node) => boolean;
    afterNodeRemoved?: (node: Node) => void;
    beforeAttributeUpdated?: (attributeName: string, element: Element, updateType: "update" | "remove") => boolean;
}

export interface Config {
    morphStyle?: "outerHTML" | "innerHTML";
    ignoreActive?: boolean;
    ignoreActiveValue?: boolean;
    restoreFocus?: boolean;
    callbacks?: ConfigCallbacks;
    head?: ConfigHead;
}

export type NoOp = () => void;

export interface ConfigHeadInternal {
    style: "merge" | "append" | "morph" | "none";
    block?: boolean;
    ignore?: boolean;
    shouldPreserve: ((element: Element) => boolean) | NoOp;
    shouldReAppend: ((element: Element) => boolean) | NoOp;
    shouldRemove: ((element: Element) => boolean) | NoOp;
    afterHeadMorphed:
        | ((element: Element, data: { added: Node[]; kept: Element[]; removed: Element[] }) => void)
        | NoOp;
}

export interface ConfigCallbacksInternal {
    beforeNodeAdded: ((node: Node) => boolean) | NoOp;
    afterNodeAdded: ((node: Node) => void) | NoOp;
    beforeNodeMorphed: ((oldNode: Node, newNode: Node) => boolean) | NoOp;
    afterNodeMorphed: ((oldNode: Node, newNode: Node) => void) | NoOp;
    beforeNodeRemoved: ((node: Node) => boolean) | NoOp;
    afterNodeRemoved: ((node: Node) => void) | NoOp;
    beforeAttributeUpdated:
        | ((attributeName: string, element: Element, updateType: "update" | "remove") => boolean)
        | NoOp;
}

export interface ConfigInternal {
    morphStyle: "outerHTML" | "innerHTML";
    ignoreActive?: boolean;
    ignoreActiveValue?: boolean;
    restoreFocus?: boolean;
    callbacks: ConfigCallbacksInternal;
    head: ConfigHeadInternal;
}

export interface IdSets {
    persistentIds: Set<string>;
    idMap: Map<Node, Set<string>>;
}

export type Morph = (
    oldNode: Element | Document,
    newContent: Element | Node | HTMLCollection | Node[] | string | null,
    config?: Config,
) => Promise<Node[]> | Node[];

export const Idiomorph: {
    defaults: ConfigInternal;
    morph: Morph;
};
