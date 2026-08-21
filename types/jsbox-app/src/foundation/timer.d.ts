// JSBox Timer API TypeScript Declaration

declare namespace TimerTypes {
    interface TimerTask {
        interval: number;
        handler: () => void;
    }

    interface Timer {
        invalidate(): void;
    }
}

interface JBTimer {
    schedule(task: TimerTypes.TimerTask): TimerTypes.Timer;
}

declare const $timer: JBTimer;
