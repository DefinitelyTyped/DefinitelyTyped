/// <reference types="node" />
import * as stream from "stream";

export = Stringify;

declare const Stringify: StringifyFactory;

interface StringifyFactory {
    (options?: Stringify.Options): Stringify.Instance & stream.Transform;
    new(options?: Stringify.Options): Stringify.Instance & stream.Transform;
}

declare namespace Stringify {
    interface Instance {
        replacer: Replacer;
        space: string | number;
        opener: string;
        seperator: string;
        closer: string;
        stringifier(value: any, replacer: Replacer, space: string | number): string;
    }

    type Replacer = (key: string, value: any) => any;

    type Options = Partial<Instance> & stream.TransformOptions;
}
