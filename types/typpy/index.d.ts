export = Typpy;

declare const Typpy: Typpy.TyppyFn;

declare namespace Typpy {
    type TyppyFn =
        & IsFn
        & CompareFn
        & {
            is: CompareFn;
            get: GetFn;
        };

    interface IsFn {
        (input?: undefined): "undefined";
        (input: null): "null";
        (input: string): "string";
        (input: boolean): "boolean";
        (input: any[]): "array";
        (input: RegExp): "regexp";
        (input: Function): "function"; // tslint:disable-line:ban-types
        (input: number): "number" | "nan";
        (input: any): string;
    }

    interface CompareFn {
        (input: undefined, compareTo: "undefined" | undefined): true;
        (input: null, compareTo: "null" | null): true;
        (input: string, compareTo: "string" | StringConstructor): true;
        (input: boolean, compareTo: "boolean" | BooleanConstructor): true;
        (input: any[], compareTo: "array" | ArrayConstructor): true;
        (input: RegExp, compareTo: "regexp" | RegExpConstructor): true;
        (input: Function, compareTo: "function" | FunctionConstructor): true; // tslint:disable-line:ban-types
        (input: number, compareTo: "number" | "nan" | NumberConstructor | number): boolean;
        (input: object, compareTo: "object" | ObjectConstructor): boolean;
        (input: any, compareTo: any): boolean;
    }

    interface GetFn {
        (input?: undefined, asString?: false): void;
        (input: null, asString?: false): null;
        (input: string, asString?: false): StringConstructor;
        (input: number, asString?: false): NumberConstructor | number;
        (input: boolean, asString?: false): BooleanConstructor;
        (input: any[], asString?: false): ArrayConstructor;
        (input: RegExp, asString?: false): RegExpConstructor;
        (input: Function, asString?: false): FunctionConstructor; // tslint:disable-line:ban-types
        (input: any, asString?: false): ConstructorFn;

        (input: undefined, asString: true): "undefined";
        (input: null, asString: true): "null";
        (input: string, asString: true): "string";
        (input: number, asString: true): "number" | "nan";
        (input: boolean, asString: true): "boolean";
        (input: any[], asString: true): "array";
        (input: RegExp, asString: true): "regexp";
        (input: Function, asString: true): "function"; // tslint:disable-line:ban-types
        (input: any, asString: true): string;
    }

    interface ConstructorFn {
        new(...args: any[]): any;
    }
}
