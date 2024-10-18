import { BlockProperties, MarkProperties, Value } from "slate";

export interface DeserializeOptions {
    toJson?: boolean | undefined;
    defaultBlock?: BlockProperties | undefined;
    defaultMarks?: MarkProperties[] | Set<MarkProperties> | undefined;
    delimiter?: string | undefined;
}

export interface SerializeOptions {
    delimiter?: string | undefined;
}

declare namespace Plain {
    function deserialize(string: string, options?: DeserializeOptions): Value;
    function serialize(value: Value, options?: SerializeOptions): string;
}

export default Plain;
