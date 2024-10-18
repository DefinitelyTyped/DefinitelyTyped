declare class BaseLogEntry {
    constructor(level: string, text: string, timeStamp: Date, stackTrace: string);

    readonly level: string;
    readonly text: string;
    readonly timeStamp: Date;
    readonly stackTrace: string;
}

declare class GenericLogEntry extends BaseLogEntry {
    constructor(level: string, text: string, timeStamp: Date, type: string, stackTrace: string);

    readonly type: string;
}

declare class ConsoleLogEntry extends GenericLogEntry {
    constructor(
        level: string,
        text: string,
        timeStamp: Date,
        type: string,
        method: string,
        realm: string,
        args: any[],
        stackTrace: string,
    );

    readonly method: string;
    readonly realm: string;
    readonly args: any[];
}

declare class JavascriptLogEntry extends GenericLogEntry {}

export { BaseLogEntry, ConsoleLogEntry, GenericLogEntry, JavascriptLogEntry };
