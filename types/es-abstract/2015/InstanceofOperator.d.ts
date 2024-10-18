declare function InstanceofOperator(
    O: object,
    // eslint-disable-next-line @typescript-eslint/ban-types
    C: Function | { [Symbol.hasInstance](O: unknown): boolean },
): boolean;
export = InstanceofOperator;
