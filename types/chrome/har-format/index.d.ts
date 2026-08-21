import { Entry, Log } from "har-format";

declare global {
    type HARFormatEntry = Entry;
    type HARFormatLog = Log;
}
