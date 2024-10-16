declare class DataMap<
    M extends {
        [key: string]: {
            key: object;
            value: unknown;
        };
    },
> {
    data: WeakMap<M[keyof M]["key"], M[keyof M]["value"]>;
    constructor();
    get<K extends M[keyof M]["key"]>(object: K): Extract<M[keyof M], {
        key: K;
    }>["value"];
    delete<K extends M[keyof M]["key"]>(object: K): Extract<M[keyof M], {
        key: K;
    }>["value"];
    has(object: M[keyof M]["key"]): boolean;
    dispose(): void;
}
export default DataMap;
