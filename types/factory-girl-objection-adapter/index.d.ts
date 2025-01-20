export = ObjectionAdapter;

interface ObjectionModelConstructor<T extends { id: unknown }> {
    new(): T;
    query(): ObjectionQueryBuilder<T>;
}

interface ObjectionQueryBuilder<T extends { id: unknown }> {
    insert(model: T): PromiseLike<T>;
    deleteById(id: T["id"]): PromiseLike<number>;
}

declare class ObjectionAdapter {
    build<T extends { id: unknown }>(Model: ObjectionModelConstructor<T>, props: Partial<T>): T;
    save<T extends { id: unknown }>(model: T, Model: ObjectionModelConstructor<T>): Promise<T>;
    destroy<T extends { id: unknown }>(model: T, Model: ObjectionModelConstructor<T>): Promise<number>;
    get<T, K extends keyof T>(model: T, attr: K): T[K];
}
