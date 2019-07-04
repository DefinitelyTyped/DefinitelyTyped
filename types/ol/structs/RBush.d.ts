import { Extent } from 'ol/extent';
export interface Entry {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
    value?: { [key: string]: any };
}
export default class RBush<T> {
    constructor(opt_maxEntries?: number);
    getInExtent(extent: Extent): T[];
    clear(): void;
    forEach<S>(callback: ((this: S, param1: T) => void), opt_this?: S): any;
    forEachInExtent<S>(extent: Extent, callback: ((this: S, param1: T) => void), opt_this?: S): any;
    getAll(): T[];
    getExtent(opt_extent?: Extent): Extent;
    concat(rbush: RBush<T>): void;
    insert(extent: Extent, value: T): void;
    isEmpty(): boolean;
    load(extents: Extent[], values: T[]): void;
    remove(value: T): boolean;
    update(extent: Extent, value: T): void;
}
