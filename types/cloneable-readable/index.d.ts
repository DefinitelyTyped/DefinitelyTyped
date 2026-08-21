/// <reference types="node"/>

import { Readable } from "stream";

declare namespace cloneable {
    type Cloneable<T extends Readable> = T & { clone(): Cloneable<T> };
}

interface CloneableFn {
    <T extends Readable>(x: T): cloneable.Cloneable<T>;
    isCloneable(x: Readable): x is cloneable.Cloneable<Readable>;
}

declare const cloneable: CloneableFn;

export = cloneable;
