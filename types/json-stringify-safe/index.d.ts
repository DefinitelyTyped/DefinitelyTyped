export = stringify;

declare function stringify(
    obj: any,
    serializer?: stringify.EntryProcessor | null,
    indent?: string | number | null,
    decycler?: stringify.EntryProcessor,
): string;

declare namespace stringify {
    function getSerialize(serializer: EntryProcessor | null, decycler?: EntryProcessor): EntryProcessor;

    type EntryProcessor = (key: string, value: any) => any;
}
