export class Injector {
    get(dep: string): {};
    invoke(fn: (context: {}, deps: Array<{}>) => {}, context: {}): {};
    instantiate({ prototype: {} }): {};
    createChild(modules: Array<{}>): Injector;
    constructor(modules?: Array<{}>, parent?: Injector);
}
