// JSBox Push API TypeScript Declaration

declare namespace PushTypes {
    interface ScheduleOptions {
        title: string;
        body: string;
        id?: string;
        sound?: string;
        mute?: boolean;
        repeats?: boolean;
        script?: string;
        height?: number;
        query?: any;
        attachments?: string[];
        renew?: boolean;
        delay?: number;
        date?: Date;
        region?: {
            lat: number;
            lng: number;
            radius: number;
            notifyOnEntry?: boolean;
            notifyOnExit?: boolean;
        };
        handler?: (result: string) => void;
    }

    interface CancelOptions {
        title?: string;
        body?: string;
        id?: string;
    }
}

interface JBPush {
    schedule(options: PushTypes.ScheduleOptions): void;
    cancel(options: PushTypes.CancelOptions): void;
    clear(): void;
}

declare const $push: JBPush;
