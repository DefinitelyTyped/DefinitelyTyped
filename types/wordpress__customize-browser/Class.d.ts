export abstract class Class {
    static applicator: object;
    static extend(protoProps: object, classProps: object): Class;
    constructor(applicator: object, argsArray: object, options?: object);
    abstract initialize(..._: any[]): void;
    extended(constructor: object): boolean;
}
