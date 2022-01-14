declare class YGFloatOptional {
    private value_;
    private isUndefined_;
    constructor(value?: number | YGFloatOptional);
    unwrap(): number;
    clone(): YGFloatOptional;
    getValue(): number;
    setValue(value: number): void;
    isUndefined(): boolean;
    add(op: YGFloatOptional): YGFloatOptional;
    isBigger(op: YGFloatOptional): boolean;
    isSmaller(op: YGFloatOptional): boolean;
    isBiggerEqual(op: YGFloatOptional): boolean;
    isSmallerEqual(op: YGFloatOptional): boolean;
    isEqual(op: YGFloatOptional): boolean;
    isDiff(op: YGFloatOptional): boolean;
    isEqualValue(val: number): boolean;
    isDiffValue(val: number): boolean;
}
export { YGFloatOptional };
