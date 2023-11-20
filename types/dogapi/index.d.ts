export function initialize(opts: { api_key: string; app_key: string; api_host?: string | undefined }): void;

interface event {
    create(title: string, text: string, callback: (err: Error | null, res: EventCreateResponse) => void): void;
    create(
        title: string,
        text: string,
        properties: {
            date_happened?: number | undefined;
            priority?: "normal" | "low" | undefined;
            host?: string | undefined;
            tags?: ReadonlyArray<string> | undefined;
            alert_type?: "error" | "warning" | "info" | "success" | undefined;
            aggregation_key?: string | undefined;
            source_type_name?:
                | "nagios"
                | "hudson"
                | "jenkins"
                | "user"
                | "my apps"
                | "feed"
                | "chef"
                | "puppet"
                | "git"
                | "bitbucket"
                | "fabric"
                | "capistrano"
                | undefined;
        },
        callback: (err: Error | null, res: EventCreateResponse) => void,
    ): void;
}

export const event: event;

interface metric {
    send(metric: string, points: number | number[], callback: (err: Error | null, res: "ok") => void): void;
    send(
        metric: string,
        points: number | number[],
        extra: {
            type?: "gauge" | "rate" | "count" | undefined;
            metric_type?: "gauge" | "count" | undefined;
            host?: string | undefined;
            tags?: ReadonlyArray<string> | undefined;
        },
        callback: (err: Error | null, res: "ok") => void,
    ): void;
    send_all(
        metrics: Array<{
            metric: string;
            points: number | number[] | Array<[string, number]>;
            tags?: string[] | undefined;
            type?: string | undefined;
            metric_type?: string | undefined;
        }>,
        callback: (err: Error | null, res: EventCreateResponse) => void,
    ): void;
}

export const metric: metric;

export interface EventCreateResponse {
    ok: boolean;
    event: {
        date_happened: number;
        handle: any;
        id: bigint;
        priority: "normal" | "low";
        related_event_id: number | null;
        tags: ReadonlyArray<string>;
        text: string;
        title: string;
        url: string;
    };
    status: "ok";
}

export {};
