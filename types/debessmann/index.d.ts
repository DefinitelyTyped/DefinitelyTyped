export class EventId {
    time: Date;
    seq: number;
}

export class Event {
    _id: EventId;
    timestamp?: string | undefined;
    id?: string | undefined;
    payload?: any;
    headers: { [key: string]: string };
    metrics?: { [key: string]: number } | undefined;
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
