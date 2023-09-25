import { StatusEntry } from "./status-entry";

export interface StatusFileOptions {
    path?: string | undefined;
    status?: number | undefined;
    entry?: StatusEntry | undefined;
    [key: string]: any;
}
