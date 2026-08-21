declare namespace universalLinks {
    function subscribe(eventName: string | null, callback: (data: EventData) => void): void;
    function unsubscribe(eventName: string | null): void;

    interface EventData {
        url: string;
        scheme: string;
        host: string;
        path: string;
        params: { [key: string]: string };
        hash: string;
    }
}
