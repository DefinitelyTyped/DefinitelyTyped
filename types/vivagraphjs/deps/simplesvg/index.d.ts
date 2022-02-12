export = svg;
declare function svg(element: any, attrBag?: any): any;
declare namespace svg {
    const compile: typeof import("./lib/compile");
    const compileTemplate: typeof import("./lib/compile_template");
}
