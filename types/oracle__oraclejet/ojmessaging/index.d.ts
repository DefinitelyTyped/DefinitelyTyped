declare class Message {
    detail: string;
    severity: Message.SEVERITY_TYPE | Message.SEVERITY_LEVEL;
    summary: string;
    constructor(summary: string, detail: string, severity?: Message.SEVERITY_TYPE | Message.SEVERITY_LEVEL);
    static getMaxSeverity(messages?: Message[]): Message.SEVERITY_LEVEL | -1;
    static getSeverityLevel(severity?: Message.SEVERITY_TYPE | Message.SEVERITY_LEVEL): Message.SEVERITY_LEVEL;
    static getSeverityType(level?: Message.SEVERITY_TYPE | Message.SEVERITY_LEVEL): Message.SEVERITY_TYPE;
    static isValid(messages: Message[]): boolean;
}
declare namespace Message {
    type SEVERITY_LEVEL = 5 | 4 | 3 | 2 | 1;
    type SEVERITY_TYPE = "confirmation" | "info" | "warning" | "error" | "fatal";
}
export = Message;
