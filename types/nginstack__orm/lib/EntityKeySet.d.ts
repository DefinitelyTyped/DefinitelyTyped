export = EntityKeySet;
declare function EntityKeySet(classKey: number, opt_values: (number[] | string) | null): void;
declare class EntityKeySet {
    constructor(classKey: number, opt_values: (number[] | string) | null);
    classKey_: number;
    values_: number[];
    values: number[];
    classKey: number;
    toJSONString(): string;
    toJSONSchema(): any;
}
