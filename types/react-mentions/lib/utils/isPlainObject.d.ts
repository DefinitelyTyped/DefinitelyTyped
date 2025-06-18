export function isPlainObject<T>(obj: T): T extends any[] ? false : T extends object ? true : false;
