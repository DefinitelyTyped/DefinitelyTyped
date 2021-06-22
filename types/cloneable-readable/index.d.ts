// Type definitions for cloneable-readable 2.0
// Project: https://github.com/mcollina/cloneable-readable#readme
// Definitions by: Nikita Volodin <https://github.com/qlonik>
//                 Oleg Vaskevich <https://github.com/vaskevich>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node"/>

import { Readable } from 'stream';

declare namespace cloneable {
    type Cloneable<T extends Readable> = T & { clone(): Cloneable<T> };
}

interface CloneableFn {
    <T extends Readable>(x: T): cloneable.Cloneable<T>;
    isCloneable(x: Readable): x is cloneable.Cloneable<Readable>;
}

declare const cloneable: CloneableFn;

export = cloneable;
