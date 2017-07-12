// Type definitions for debessmann 0.1
// Project: https://github.com/fs535/debessmann#readme
// Definitions by: Vladislavs Korehovs <https://github.com/vkorehov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class EventId {
    time: Date;
    seq: number;
}

export class Event {
    _id: EventId;
    timestamp?: string;
    id?: string;
    payload?: any;
    headers: { [key: string]: string; };
    metrics?: { [key: string]: number; };
}

export class DM {
    init(endpoint: string, authkey: string): void;
    send(data: Event): void;
}

declare global {
    interface Window {
        dm: DM;
    }
}
