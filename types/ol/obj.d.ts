export function clear(object: { [key: string]: any }): void;
export function getValues<V>(obj: { [key: string]: V }): V[];
export function getValues<V>(obj: { [key: number]: V }): V[];
export function isEmpty(object: { [key: string]: any }): boolean;
