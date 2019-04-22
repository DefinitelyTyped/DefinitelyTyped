// Type definitions for cloneable-readable 1.1
// Project: https://github.com/mcollina/cloneable-readable#readme
// Definitions by: Nikita Volodin <https://github.com/qlonik>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node"/>

import { Readable } from 'stream';

type Cloneable<T> = T & { clone(): Cloneable<T> };
interface CloneableFn {
    <T extends Readable>(x: T): Cloneable<T>;
    isCloneable(x: Readable): boolean;
}
declare const cloneable: CloneableFn;
export = cloneable;
