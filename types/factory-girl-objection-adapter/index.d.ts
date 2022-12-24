// Type definitions for factory-girl 5.0
// Project: https://github.com/smooth-code/factory-girl-objection-adapter
// Definitions by: Mike Wu <https://github.com/mkwu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = ObjectionAdapter;
declare class ObjectionAdapter {
    build(Model: any, props: any): any;
    save(model: any, Model: any): Promise<any>;
    destroy(model: any, Model: any): Promise<any>;
    get(model: any, attr: any): any;
    set(props: any, model: any): any;
}
