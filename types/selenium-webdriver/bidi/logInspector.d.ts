import type { FilterBy } from "./filterBy";
import type { ConsoleLogEntry, GenericLogEntry, JavascriptLogEntry } from "./logEntries";

declare class LogInspector {
    private _driver: any;
    private _browsingContextIds: any;
    private listener: Record<string, Function[]>;
    private bidi: any;
    private ws: { on: Function };

    constructor(driver: any, browsingContextIds: any);

    init(): Promise<void>;
    logListener(kind: string): void;
    onConsoleEntry(callback: (entry: ConsoleLogEntry) => void, filterBy?: FilterBy): Promise<void>;
    onJavascriptLog(callback: (entry: JavascriptLogEntry) => void, filterBy?: FilterBy): Promise<void>;
    onJavascriptException(callback: (entry: JavascriptLogEntry) => void): Promise<void>;
    onLog(
        callback: (entry: ConsoleLogEntry | JavascriptLogEntry | GenericLogEntry) => void,
        filterBy?: FilterBy,
    ): Promise<void>;
    close(): Promise<void>;
}

declare function getLogInspectorInstance(driver: any, browsingContextIds?: any): Promise<LogInspector>;

export = getLogInspectorInstance;
