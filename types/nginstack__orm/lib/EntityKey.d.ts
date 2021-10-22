export = EntityKey;
declare function EntityKey(classKey: number, opt_value: number | null): void;
declare class EntityKey {
    constructor(classKey: number, opt_value: number | null);
    private classKey_;
    private value_;
    value: number | null;
    classKey: number;
    toJSONString(): string;
    toJSONSchema(): any;
}
