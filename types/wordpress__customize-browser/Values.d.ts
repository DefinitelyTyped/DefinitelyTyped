import { Class } from './Class';
import { Events } from './Events';

export class Values<T> extends Class {
    defaultConstructor: T;
    _value: Record<string, T>;
    _deferreds: Record<string, JQuery.Deferred<any>>;
    initialize(options?: object): void;
    instance(arg: string): T;
    instance(...args: Array<string | ((...values: T[]) => void)>): JQuery.Promise<any>;
    value(id: string): T;
    has(id: string): boolean;
    add(item: string | T, itemObject?: T): T;
    create(id: string, value: object): T;
    each<T>(callback: (context: T, obj: T, key: string) => void, context?: T): void;
    remove(id: string): void;
    when(...args: Array<string | ((...values: T[]) => void)>): JQuery.Promise<any>;
    _change(): void;
}

export interface Values<T> extends Events<string> {
    (arg: string): T;
    (...args: Array<string | ((...values: T[]) => void)>): JQuery.Promise<any>;
}
