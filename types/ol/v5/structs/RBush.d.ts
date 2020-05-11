import { Extent } from '../extent';

export interface Entry {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
    value?: any;
}
export default class RBush<T> {
    constructor(opt_maxEntries?: number);
    clear(): void;
    concat(rbush: RBush<T>): void;
    forEach<S>(callback: (this: S, p0: T) => any, opt_this?: S): any;
    forEachInExtent<S>(extent: Extent, callback: (this: S, p0: T) => any, opt_this?: S): any;
    getAll(): T[];
    getExtent(opt_extent?: Extent): Extent;
    getInExtent(extent: Extent): T[];
    insert(extent: Extent, value: T): void;
    isEmpty(): boolean;
    load(extents: Extent[], values: T[]): void;
    remove(value: T): boolean;
    update(extent: Extent, value: T): void;
}
