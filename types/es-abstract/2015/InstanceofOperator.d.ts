declare function InstanceofOperator(
    O: object,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    C: Function | { [Symbol.hasInstance](O: unknown): boolean },
): boolean;
export = InstanceofOperator;
