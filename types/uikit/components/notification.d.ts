export type UIkitNotificationOptions = {
    message?: string;
    status?: 'primary' | 'success' | 'warning' | 'danger';
    timeout?: number;
    group?: string;
    pos?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
}

interface UIkitNotificationElement {
    close(immediate: boolean): void;
}

export interface Notification {
    (options: UIkitNotificationOptions): UIkitNotificationElement;
    (message: string, status?: string): UIkitNotificationElement;
    (message: string, options?: UIkitNotificationOptions): UIkitNotificationElement;
}