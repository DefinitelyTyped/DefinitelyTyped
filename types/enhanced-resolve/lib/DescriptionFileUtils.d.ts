import Resolver = require('./Resolver');
import { Dictionary, Concord } from './concord';

export interface DescriptionFileData {
    concord?: Concord | undefined;
    browser?: Dictionary<string | boolean> | undefined;
}

export interface LoadDescriptionFileResult {
    content: DescriptionFileData
    directory: string
    path: string
}

declare function loadDescriptionFile(
    resolver: Resolver,
    directory: string,
    filenames: string[],
    callback: (err?: Error | null, result?: LoadDescriptionFileResult) => any
): void;

declare function getField(content: Dictionary<any> | null, field: string): any;
declare function cdUp(directory: string): string | null;
export { loadDescriptionFile, getField, cdUp };
