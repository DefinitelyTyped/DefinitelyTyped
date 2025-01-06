import View from "./view";

export interface LiveViewFile extends File {
  _phxRef?: string | undefined;
}

export default class UploadEntry {
  static isActive(fileEl: any, file: any): boolean;
  static isPreflighted(fileEl: any, file: any): boolean;
  static isPreflightInProgress(file: any): boolean;
  static markPreflightInProgress(file: any): void;
  constructor(fileEl: HTMLInputElement, file: LiveViewFile, view: View, autoUpload: any);

  ref: any;
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
    last_modified: any;
    name: any;
    relative_path: any;
    size: any;
    type: any;
    ref: any;
    meta: any;
  };
  uploader(uploaders: any): {
    name: any;
    callback: any;
  };
  zipPostFlight(resp: any): void;
}
