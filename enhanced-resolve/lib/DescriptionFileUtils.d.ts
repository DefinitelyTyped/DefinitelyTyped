import Resolver = require('./Resolver');
declare function loadDescriptionFile(
    resolver: Resolver, directory: string, filenames: string[],
    callback: (...args: any[]) => any
): void;
declare function getField(content: any, field: string): any;
declare function cdUp(directory: string): string | null;
export { loadDescriptionFile, getField, cdUp };
