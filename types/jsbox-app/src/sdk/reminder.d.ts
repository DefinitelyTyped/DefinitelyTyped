// JSBox Reminder API TypeScript Declaration

declare namespace ReminderTypes {
    interface ReminderItem {
        title: string;
        location?: string;
        notes?: string;
        url?: string;
        priority?: number;
        completed: boolean;
        readonly completionDate?: Date;
        alarmDate?: Date;
        readonly modifiedDate?: Date;
        readonly creationDate?: Date;
    }

    interface FetchOptions {
        startDate: Date;
        hours: number;
        handler: (resp: { status: number; events: ReminderItem[] }) => void;
    }

    interface CreateOptions {
        title: string;
        alarmDate?: Date;
        alarmDates?: Date[];
        notes?: string;
        url?: string;
        handler: (resp: { status: number; error?: NSError }) => void;
    }

    interface SaveOptions {
        event: ReminderItem;
        handler: (resp: { status: number; error?: NSError }) => void;
    }

    interface DeleteOptions {
        event: ReminderItem;
        handler: (resp: { status: number; error?: NSError }) => void;
    }
}

interface JBReminder {
    fetch(options: ReminderTypes.FetchOptions): void;
    create(options: ReminderTypes.CreateOptions): void;
    save(options: ReminderTypes.SaveOptions): void;
    delete(options: ReminderTypes.DeleteOptions): void;
}

declare const $reminder: JBReminder;
