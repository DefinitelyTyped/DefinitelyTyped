export = declareProperty;
declare function declareProperty(obj: any, prop: string, descriptor: PropertyDescriptor): void;
declare namespace declareProperty {
    export { PropertyDescriptor };
}
interface PropertyDescriptor {
    get: (() => any) | undefined;
    set: ((arg0: any) => any) | undefined;
    value: any;
}
