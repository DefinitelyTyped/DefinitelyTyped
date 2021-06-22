export function clear(object: any): void;
export function getValues<V>(obj: { [key: string]: V }): V[];
export function getValues<V>(obj: { [key: number]: V }): V[];
export function isEmpty(object: any): boolean;
