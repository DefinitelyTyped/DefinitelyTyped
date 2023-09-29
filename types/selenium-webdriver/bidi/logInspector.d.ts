import { FilterBy } from './filterBy';
import { ConsoleLogEntry, JavascriptLogEntry, GenericLogEntry } from './logEntries';

export const LOG: {
    TYPE_CONSOLE: string;
    TYPE_JS_LOGS: string;
};

export class LogInspector {
    private _driver: any;
    private _browsingContextIds: any;
    public listener: Record<string, Function[]>;
    public bidi: any;
    public ws: { on: Function };

    constructor(driver: any, browsingContextIds: any);

    init(): Promise<void>;
    logListener(kind: string): void;
    onConsoleEntry(callback: (entry: ConsoleLogEntry) => void, filterBy?: FilterBy): Promise<void>;
    onJavascriptLog(callback: (entry: JavascriptLogEntry) => void, filterBy?: FilterBy): Promise<void>;
    onJavascriptException(callback: (entry: JavascriptLogEntry) => void): Promise<void>;
    onLog(callback: (entry: ConsoleLogEntry | JavascriptLogEntry | GenericLogEntry) => void, filterBy?: FilterBy): Promise<void>;
    close(): Promise<void>;
}

const getLogInspectorInstance: (driver: any, browsingContextIds: any) => Promise<LogInspector>;

export = getLogInspectorInstance;
