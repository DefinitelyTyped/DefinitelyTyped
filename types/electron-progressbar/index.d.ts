// Type definitions for electron-progressbar 1.2
// Project: https://github.com/AndersonMamede/electron-progressbar
// Definitions by: Samuel Corsi-House <https://github.com/xenfo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { BrowserWindow, app } from 'electron';

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
    browserWindow?: BrowserWindowOptions;
}

interface StyleOptions {
    text?: object;
    detail?: object;
    bar?: object;
    value?: object;
}

interface BrowserWindowOptions {
    parent?: BrowserWindow;
    modal?: boolean;
    resizable?: boolean;
    closable?: boolean;
    minimizable?: boolean;
    maximizable?: boolean;
    width?: number;
    height?: number;
}

export = ProgressBar;
