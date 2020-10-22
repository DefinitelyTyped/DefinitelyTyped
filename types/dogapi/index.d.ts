// Type definitions for dogapi 2.8
// Project: https://github.com/brettlangdon/node-dogapi#readme
// Definitions by: olebedev <https://github.com/olebedev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

export function initialize(opts: { api_key: string; app_key: string; api_host?: string }): void;

interface event {
    create(title: string, text: string, callback: (err: Error | null, res: EventCreateResponse) => void): void;
    create(
        title: string,
        text: string,
        properties: {
            date_happened?: number;
            priority?: 'normal' | 'low';
            host?: string;
            tags?: ReadonlyArray<string>;
            alert_type?: 'error' | 'warning' | 'info' | 'success';
            aggregation_key?: string;
            source_type_name?:
                | 'nagios'
                | 'hudson'
                | 'jenkins'
                | 'user'
                | 'my apps'
                | 'feed'
                | 'chef'
                | 'puppet'
                | 'git'
                | 'bitbucket'
                | 'fabric'
                | 'capistrano';
        },
        callback: (err: Error | null, res: EventCreateResponse) => void,
    ): void;
}

export const event: event;

interface metric {
    send(metric: string, points: number | number[], callback: (err: Error | null, res: 'ok') => void): void;
    send(
        metric: string,
        points: number | number[],
        extra: {
            type?: 'gauge' | 'rate' | 'count';
            metric_type?: 'gauge' | 'count';
            host?: string;
            tags?: ReadonlyArray<string>;
        },
        callback: (err: Error | null, res: 'ok') => void,
    ): void;
    send_all(
        metrics: Array<{
            metric: string;
            points: number | number[] | Array<[string, number]>;
            tags?: string[];
            type?: string;
            metric_type?: string;
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
        priority: 'normal' | 'low';
        related_event_id: number | null;
        tags: ReadonlyArray<string>;
        text: string;
        title: string;
        url: string;
    };
    status: 'ok';
}

export {};
