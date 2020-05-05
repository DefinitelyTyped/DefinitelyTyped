export function clear(object: any): void;
export function getValues<V>(object: { [key in string | number]: V }): V[];
export function isEmpty(object: any): boolean;
