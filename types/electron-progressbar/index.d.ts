// Type definitions for electron-progressbar 1.2
// Project: https://github.com/AndersonMamede/electron-progressbar
// Definitions by: Samuel Corsi-House <https://github.com/xenfo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { BrowserWindowConstructorOptions, app } from 'electron';

declare class ProgressBar {
    constructor(options: ProgressBarOptions, electronApp?: typeof app)

    getOptions(): ProgressBarOptions;

    on(eventName: 'ready' | 'progress' | 'completed' | 'aborted', listener: () => void): this;

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
