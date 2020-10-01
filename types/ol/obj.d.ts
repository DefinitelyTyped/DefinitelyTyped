export const assign: (target: any, ...var_sources: any[]) => any;
export function clear(object: any): void;
export function getValues<V>(object: { [key in string | number]: V }): V[];
export function isEmpty(object: any): boolean;
