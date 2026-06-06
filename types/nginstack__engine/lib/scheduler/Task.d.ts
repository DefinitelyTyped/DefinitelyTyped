export = Task;
declare function Task(): void;
declare class Task {
    name: string;
    id: string;
    status: string;
    period: string;
    day: number;
    hour: string | number;
    date: Date;
    scriptKey: number;
    scriptName: string;
    scriptURI: string;
    dbName: string;
    textParameters: string;
    scheduled: Date;
    lastExecution: Date;
    nextExecution: Date;
    preRequisiteTask: string;
    enabled: boolean;
    userKey: number;
    saveLocally(userId?: string, password?: string): void;
    del(): void;
    start(): void;
    stop(): void;
    setParameters(name: string, value: Array<string | number | boolean | Record<any, any>>): number;
}
