/// <reference types="node" />
import { Transform } from "stream";

export = UniqueFactory;

declare function UniqueFactory(hashingFn?: (doc: any) => string): Transform;

declare namespace UniqueFactory {
    const Unique: typeof Transform;
    function calculate(doc: any): string;
}
