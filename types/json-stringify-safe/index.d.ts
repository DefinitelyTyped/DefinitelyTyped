// Type definitions for json-stringify-safe 5.0
// Project: https://github.com/isaacs/json-stringify-safe
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = stringify;

declare function stringify(obj: any, serializer?: stringify.EntryProcessor | null, indent?: string | number | null, decycler?: stringify.EntryProcessor): string;

declare namespace stringify {
    function getSerialize(serializer: EntryProcessor | null, decycler?: EntryProcessor): EntryProcessor;

    type EntryProcessor = (key: string, value: any) => any;
}
