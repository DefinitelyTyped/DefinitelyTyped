// Type definitions for factory-girl 5.0
// Project: https://github.com/smooth-code/factory-girl-objection-adapter
// Definitions by: Mike Wu <https://github.com/mkwu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = ObjectionAdapter;

declare class ObjectionAdapter {
    build<T>(Model: any, props: Partial<T>): T;
    save<T>(model: T, Model: any): Promise<T>;
    destroy<T>(model: T, Model: any): Promise<T>;
    get<T>(model: T, attr: string): T;
    set<T>(props: Partial<T>, model: T): T;
}
