type RestoreFunction = () => void;

declare function mockProperty(
    obj: object,
    prop: PropertyKey,
    options?:
        | { delete: true }
        | (
            & { nonEnumerable?: boolean; delete?: false }
            & (
                | { nonWritable?: boolean; value?: unknown }
                | { get?: (() => unknown) | undefined; set?: ((v: unknown) => void) | undefined }
            )
        ),
): RestoreFunction;

export = mockProperty;
