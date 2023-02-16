declare module 'max-api' {
    export const MESSAGE_TYPES: Record<string, string>;
    export const POST_LEVELS: Record<string, string>;

    const MaxApi: {
        addHandler: (msg: MessageIdentifier, handler: MessageHandler) => void;
        addHandlers: (handlers: Record<string, MessageHandler>) => void;
        getDict(id: string): Promise<Dict>;
        outlet: (...args: any[]) => Promise<null>;
        outletBang: () => Promise<null>;
        post: (str: any) => Promise<null>;
        removeHandler: (msg: string, handler: MessageHandler) => void;
        removeHandlers: (msg?: string) => void;
        setDict: (id: string, content: Record<string, unknown>) => Promise<Dict>;
        updateDict: (id: string, path: string, value: unknown) => Promise<Dict>;
    };
    export default MaxApi;

    export type Anything = any;
    export type Dict = Record<string, unknown>;
    export type DictIdentifier = string;
    export type DictPath = string;
    export type MessageHandler = (...args: any[]) => void;
    export type MessageIdentifier = string;
}
