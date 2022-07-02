export = Job;
declare function Job(source?: DataSet | File | MemoryStream): void;
declare class Job {
    constructor(source?: DataSet | File | MemoryStream);
    calcNextExecution(): void;
    loadFromStream(stream: MemoryStream | File): void;
    saveToStream(stream: MemoryStream | File): void;
    loadFromTable(table: DataSet): void;
    saveToTable(table: DataSet): void;
    readonly key: number;
    classKey: number;
    readonly id: string;
    name: string;
    readonly status: string;
    readonly statusKey: number;
    frequency: string;
    frequencyKey: number;
    weekDay: number;
    monthDay: number;
    dateTime: Date;
    date: Date;
    hour: string;
    scriptURI: string | number;
    readonly userKey: number;
    readonly authTokenId: string;
    prerequisiteTask: string;
    host: number;
    readonly creation: Date;
    readonly scheduled: Date;
    readonly nextExecution: Date;
    readonly started: Date;
    readonly finished: Date;
    readonly finishedSuccessfully: boolean;
    readonly lastResult: string;
    enabled: boolean;
}
declare namespace Job {
    export { File, MemoryStream, DataSet };
}
type DataSet = import('../dataset/DataSet');
type File = import('../io/File');
type MemoryStream = import('../io/MemoryStream');
