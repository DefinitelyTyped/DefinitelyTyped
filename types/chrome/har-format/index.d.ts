import { Entry, Log } from "har-format";

declare global {
    export type HARFormatEntry = Entry;
    export type HARFormatLog = Log;
}
