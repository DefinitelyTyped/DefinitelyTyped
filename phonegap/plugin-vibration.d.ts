interface Notification {
    vibrate(milliseconds: number): void;
}

interface Navigator {
    notification: Notification;
}