interface Notification {
    alert(message: string, alertCallback: Function, title?: string, buttonName?: string): void;
    confirm(message: string, confirmCallback: Function, title?: string, buttonLabels?: string): void;
    beep(times: number): void;
}

interface Navigator {
    notification: Notification;
}
