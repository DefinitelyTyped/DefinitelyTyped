export = EntityKeySet;
declare function EntityKeySet(classKey: number, opt_values: (number[] | string) | null): void;
declare class EntityKeySet {
    constructor(classKey: number, opt_values: (number[] | string) | null);
    private classKey_;
    private values_;
    values: number[];
    classKey: number;
    toJSONString(): string;
    toJSONSchema(): any;
}
