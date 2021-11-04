export interface StoreHandlers {
    getter?(key: string): any;
    setter?(key: string, value: any): void;
}

declare const _default: {
    setHandlers(handlers?: StoreHandlers): void;
    setNamespace(namespace: string): void;
    update(state: { [key: string]: any }): void;
    set(key: string, value: any): void;
    get(key: string): any;
};

export { _default as default };
