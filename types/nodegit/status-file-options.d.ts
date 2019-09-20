import { StatusEntry } from './status-entry';

export interface StatusFileOptions {
    path?: string;
    status?: number;
    entry?: StatusEntry;
    [key: string]: any;
}
