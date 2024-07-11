declare const shimmer: {
    (options: { logger?(msg: string): void }): void;
    wrap<Nodule extends object, FieldName extends keyof Nodule>(
        nodule: Nodule,
        name: FieldName,
        wrapper: (original: Nodule[FieldName]) => Nodule[FieldName],
    ): void;
    massWrap<Nodule extends object, FieldName extends keyof Nodule>(
        nodules: Nodule[],
        names: FieldName[],
        wrapper: (original: Nodule[FieldName]) => Nodule[FieldName],
    ): void;
    unwrap<Nodule extends object>(
        nodule: Nodule,
        name: keyof Nodule,
    ): void;
    massUnwrap<Nodule extends object>(
        nodules: Nodule[],
        names: Array<keyof Nodule>,
    ): void;
};

export = shimmer;
