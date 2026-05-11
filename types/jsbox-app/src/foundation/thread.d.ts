// JSBox Thread API TypeScript Declaration

declare namespace ThreadTypes {
    interface BackgroundTask {
        delay?: number;
        handler: () => void;
    }

    interface MainTask {
        delay?: number;
        handler: () => void;
    }
}

interface JBThread {
    background(task: ThreadTypes.BackgroundTask | (() => void)): void;
    main(task: ThreadTypes.MainTask | (() => void)): void;
}

declare const $thread: JBThread;
