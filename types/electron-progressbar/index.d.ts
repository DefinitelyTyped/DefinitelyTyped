import { app, BrowserWindowConstructorOptions } from "electron";

declare class ProgressBar {
    constructor(options: ProgressBarOptions, electronApp?: typeof app);

    getOptions(): ProgressBarOptions;

    on(eventName: "ready" | "progress" | "completed" | "aborted", listener: () => void): this;
    on(eventName: "progress" | "completed" | "aborted", listener: (value: number) => void): this;

    setCompleted(): void;

    close(): void;

    isInProgress(): boolean;

    isCompleted(): boolean;

    value: number;
    text: string;
    detail: string;
}

interface ProgressBarOptions {
    abortOnError?: boolean | undefined;
    indeterminate?: boolean | undefined;
    initialValue?: number | undefined;
    maxValue?: number | undefined;
    closeOnComplete?: boolean | undefined;
    title?: string | undefined;
    text?: string | undefined;
    detail?: string | undefined;
    style?: StyleOptions | undefined;
    browserWindow?: BrowserWindowConstructorOptions | undefined;
}

interface StyleOptions {
    text?: object | undefined;
    detail?: object | undefined;
    bar?: object | undefined;
    value?: object | undefined;
}

export = ProgressBar;
