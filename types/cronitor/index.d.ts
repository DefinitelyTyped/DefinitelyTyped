declare namespace Cronitor {
    type MonitorState = "run" | "complete" | "fail" | "ok";

    type MonitorType = "job" | "heartbeat" | "check";

    interface CronitorConfig {
        config?: string; // Path to config file
        apiVersion?: string;
        timeout?: number;
        environment?: string;
    }

    /**
     * https://cronitor.io/docs/telemetry-api#parameters
     */
    interface TelemetryEvent {
        state: MonitorState; // Indicate a state change for a monitor
        env?: string; // The environment the telemetry event is being sent from
        message?: string; // A URL-encoded message of up to 2000 characters
        metrics?: {
            duration?: number;
            count?: number;
            error_count?: number;
        };
        host?: string; // The hostname of the server sending the telemetry event
        series?: string; // A unique user-supplied ID to collate related pings
        status_code?: number; // Exit code returned from a background job
    }

    /**
     * https://cronitor.io/docs/monitor-api#attributes
     */
    interface MonitorAttributes {
        type: MonitorType; // Monitor type (required)
        key: string; // Monitor's unique identifier (required)
        schedule?: string; // Schedule for monitoring
        assertions?: string[]; // Array containing strings
        group?: string; // Group name
        metadata?: Record<string, any>; // JSON serializable key/value pairs
        name?: string; // Display name of the monitor
        note?: string; // Additional context/troubleshooting information
        notify?: string[] | { alerts: string[]; events: Record<string, boolean> }; // Notification settings
        paused?: boolean; // Monitoring/alerting status
        platform?: string; // Platform information
        grace_seconds?: number; // Number of seconds for grace period
        tags?: string[]; // Array of tags
        timezone?: string; // Timezone
        schedule_tolerance?: number; // Schedule tolerance
        failure_tolerance?: number; // Failure tolerance
        created?: string; // Timestamp when the monitor was created
        disabled?: boolean; // Current disabled status
        initialized?: boolean; // Whether the monitor has received a telemetry event
        passing?: boolean; // Whether the monitor is currently passing or failing
        running?: boolean; // Whether a job is running (only applicable for type: job)
        defaultName?: string; // Default name for provisioning
        defaultNote?: string; // Default note for provisioning
        realert_interval?: number | string; // Interval for follow-up alerts
        request?: {
            url: string;
            method?: string;
            body?: string;
            headers?: Record<string, string>;
            cookies?: Record<string, string>;
            timeout_seconds?: number;
            follow_redirects?: boolean;
            verify_ssl?: boolean;
        }; // required by type: check
    }

    class Cronitor {
        constructor(apiKey: string, config?: CronitorConfig);
        generateConfig(): Promise<void>;
        applyConfig(rollback?: boolean): Promise<void>;
        validateConfig(): Promise<void>;
        readConfig(path: string | null, output?: boolean): void;
        wrap(key: string, callback: () => Promise<any>): () => Promise<any>;
        wraps(lib: any): void;
        newSeries(): string;
        schedule(key: string, schedule: string, cb: () => void, options?: any): any;

        Monitor: typeof Monitor;
        Event: typeof Event;
    }
}

declare class Monitor {
    constructor(key: string);
    static get State(): {
        RUN: "run";
        COMPLETE: "complete";
        FAIL: "fail";
        OK: "ok";
    };
    static put(
        data: Cronitor.MonitorAttributes | Cronitor.MonitorAttributes[],
        rollback?: boolean,
    ): Promise<Monitor | Monitor[]>;
    data(): Promise<any>;
    pause(hours: number): Promise<boolean>;
    unpause(): Promise<boolean>;
    ok(params?: Cronitor.TelemetryEvent): Promise<boolean>;
    delete(): Promise<boolean>;
    ping(params?: Cronitor.TelemetryEvent): Promise<boolean>;
}

declare class Event {
    constructor(key: string, options?: { intervalSeconds?: number });
    tick(count?: number): void;
    error(count?: number): void;
    stop(): Promise<void>;
    fail(message?: string | null): Promise<void>;
}

declare function Cronitor(apiKey: string, config?: Cronitor.CronitorConfig): Cronitor.Cronitor;

export = Cronitor;
