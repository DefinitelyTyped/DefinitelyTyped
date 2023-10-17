declare module "js-schema" {
    function schema(definition: any): schema.Schema;

    namespace schema {
        interface Schema {
            (obj: any): boolean; // test obj against the schema
        }
    }

    export = schema;
}

interface NumberConstructor {
    min(n: number): NumberConstructor;
    max(n: number): NumberConstructor;
    below(n: number): NumberConstructor;
    above(n: number): NumberConstructor;
    step(n: number): NumberConstructor;
}

interface StringConstructor {
    of(charset: string): StringConstructor;
    of(length: number, charset: string): StringConstructor;
    of(minLength: number, maxLength: number, charset: string): StringConstructor;
}

interface ArrayConstructor {
    like(arr: Array<any>): ArrayConstructor;
    of(pattern: any): ArrayConstructor;
    of(length: number, pattern: any): ArrayConstructor;
    of(minLength: number, maxLength: number, pattern: any): ArrayConstructor;
}

interface ObjectConstructor {
    like(obj: any): ObjectConstructor;
    reference(obj: any): ObjectConstructor;
}

interface FunctionConstructor {
    reference(func: Function): FunctionConstructor;
}
