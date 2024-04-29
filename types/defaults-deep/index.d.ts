interface Obj {
    [k: string]: any;
}

declare function defaultsDeep(...objs: Obj[]): Obj;

export = defaultsDeep;
