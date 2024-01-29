export class base {
    constructor();
    check(value: any, rule: string, sample: any): boolean;
    tests(testIn: object): boolean;
    equal(value: any, sample: any): boolean;
    equalType(value: any, sample: any): boolean;
    equalJson(value: any, sample: any): boolean;
    notEqual(value: any, sample: any): boolean;
    greater(value: any, sample: any): boolean;
    less(value: any, sample: any): boolean;
    length(value: any, sample: number): boolean;
    valueEqual(value: any, sample: string): boolean;
    valueEqualType(value: any, sample: string): boolean;
    valueNotEqual(value: any, sample: string): boolean;
    valueNotEqualType(value: any, sample: string): boolean;
}
