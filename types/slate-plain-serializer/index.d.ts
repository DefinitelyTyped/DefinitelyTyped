import { BlockProperties, MarkProperties, Value } from "slate";

interface DeserializeOptions {
    toJson?: boolean | undefined;
    defaultBlock?: BlockProperties | undefined;
    defaultMarks?: MarkProperties[] | Set<MarkProperties> | undefined;
    delimiter?: string | undefined;
}

interface SerializeOptions {
    delimiter?: string | undefined;
}

declare namespace Plain {
    export function deserialize(string: string, options?: DeserializeOptions): Value;
    export function serialize(value: Value, options?: SerializeOptions): string;

    const _default: typeof Plain;
    export { _default as default, DeserializeOptions, SerializeOptions };
}

// compatibility with NodeNext
// eslint-disable-next-line @definitelytyped/export-just-namespace
export = Plain;
