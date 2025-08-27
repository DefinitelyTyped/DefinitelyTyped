export interface CommitAction {
    action: "commit";
}
export interface ChainAction {
    action: "chain";
    param: EditorAction[];
}
export interface DeleteAction {
    action: "delete";
    param: { elementId: string };
}
export interface DragAction {
    action: "drag";
    param: {
        elementId: string;
        x: number;
        y: number;
    };
}
export interface KeyDownAction {
    action: "keyDown";
    param: {
        elementId: string;
        key: number;
        shiftKey: boolean;
        ctrlKey: boolean;
    };
}
export interface InsertAction {
    action: "insert";
    param: {
        elementType: string;
        startid: string;
        endid: string;
    };
}
export interface SetAction {
    action: "set";
    param: {
        elementId: string;
        attribute: string;
        value: string;
    };
}
export type EditorAction =
    | CommitAction
    | ChainAction
    | DeleteAction
    | DragAction
    | KeyDownAction
    | InsertAction
    | SetAction;
