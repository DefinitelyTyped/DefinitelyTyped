import LiveSocket from "./live_socket";
import View from "./view";

export interface LiveViewFile extends File {
    meta?: () => object;
    _phxRef?: string;
}

export type Uploader = (
    entries: UploadEntry[],
    onError: (cb: () => void) => void,
    resp: any,
    liveSocket: LiveSocket,
) => any;

export type UploadersOptions = Record<string, Uploader>;

export default class UploadEntry {
    static isActive(fileEl: HTMLInputElement, file: LiveViewFile): boolean;
    static isPreflighted(fileEl: HTMLInputElement, file: LiveViewFile): boolean;
    static isPreflightInProgress(file: LiveViewFile): boolean;
    static markPreflightInProgress(file: LiveViewFile): void;
    constructor(fileEl: HTMLInputElement, file: LiveViewFile, view: View, autoUpload: any);

    ref: string; // DT
    fileEl: HTMLInputElement; // DT
    file: LiveViewFile; // DT
    view: View; // DT
    meta: any;
    _isCancelled: boolean;
    _isDone: boolean;
    _progress: number;
    _lastProgressSent: number;
    _onDone: () => void;
    _onElUpdated: () => void;
    autoUpload: any;
    metadata(): any;
    progress(progress: number): void; // DT
    isCancelled(): boolean;
    cancel(): void;
    isDone(): boolean;
    error(reason?: string): void;
    isAutoUpload(): any;
    onDone(callback: any): void;
    onElUpdated(): void;
    toPreflightPayload(): {
        last_modified: number;
        name: string;
        relative_path: string;
        size: number;
        type: string;
        ref: string;
        meta: any;
    };
    uploader(uploaders: UploadersOptions): {
        name: string;
        callback: Uploader;
    };
    zipPostFlight(resp: any): void;
}
