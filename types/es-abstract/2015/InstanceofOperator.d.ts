declare function InstanceofOperator(
    O: object,
    // tslint:disable-next-line: ban-types
    C: Function | { [Symbol.hasInstance](O: unknown): boolean },
): boolean;
export = InstanceofOperator;
