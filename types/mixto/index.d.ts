declare namespace Mixto {
    interface IMixinStatic {
        includeInto(constructor: any): void;
        extend(object: any): void;
    }
}

declare module "mixto" {
    var _tmp: Mixto.IMixinStatic;
    export = _tmp;
}
