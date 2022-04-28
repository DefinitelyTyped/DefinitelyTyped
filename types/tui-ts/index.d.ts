// Type definitions for tui-ts 1.0
// Project: https://github.com/thijmver/tui-ts
// Definitions by: thijm <https://github.com/thijmver>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type ContextMenuParentId = string | null | undefined;

export type ContextMenuId = string;

export type UserInput = string | null;

export type ContextMenuRun = (userInput: UserInput) => void | Promise<void>;

export type ContextMenuIdentifier = string;

export type BuilderState = State;

export type Listener = ContextMenuRun;

// Minimum TypeScript Version: 4.4
export interface ContextMenuChildren {
    [key: ContextMenuIdentifier]: ContextMenuId;
}

// Minimum TypeScript Version: 4.4
export interface State {
    [key: PropertyKey]: unknown;
}

export interface ContextMenuConfig {
    parentId?: ContextMenuParentId;
    id: ContextMenuId;
    run: ContextMenuRun;
}

export interface BuilderSelected {
    id: ContextMenuId;
    run: ContextMenuRun;
    children: Readonly<ContextMenuChildren>;
}

export interface Builder {
    contextMenus: ContextMenu[];
    selected: Readonly<BuilderSelected> | null;
    state: Readonly<BuilderState>;
    frozen: boolean;
    DEFAULT_CONTEXT_MENU_ID: ContextMenuId;
    createContextMenu(contextMenuConfig: Readonly<ContextMenuConfig>): ContextMenu;
    select(contextMenuId: ContextMenuId): ContextMenu | null;
    build(): void;
    getState(): Readonly<State>;
    setState(state: State): void;
    listener(userInput: UserInput): Promise<void>;
    formatContextMenus(contextMenus: Readonly<ContextMenu[]>): ContextMenuChildren;
    listenForUserInput(listener: Listener): void;
}

export class ContextMenu {
    private readonly parentId: ContextMenuParentId;
    private readonly id: ContextMenuId;
    private readonly run: ContextMenuRun;
    constructor(contextMenuConfig: Readonly<ContextMenuConfig>);
    getParentId(): ContextMenuParentId;
    getId(): ContextMenuId;
    getRun(): ContextMenuRun;
}

export const createContextMenu: Builder["createContextMenu"];

export const select: Builder["select"];

export const build: Builder["build"];

export const getState: Builder["getState"];

export const setState: Builder["setState"];
