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
    abortOnError?: boolean;
    indeterminate?: boolean;
    initialValue?: number;
    maxValue?: number;
    closeOnComplete?: boolean;
    title?: string;
    text?: string;
    detail?: string;
    style?: StyleOptions;
    browserWindow?: BrowserWindowConstructorOptions;
}

interface StyleOptions {
    text?: object;
    detail?: object;
    bar?: object;
    value?: object;
}

export = ProgressBar;
