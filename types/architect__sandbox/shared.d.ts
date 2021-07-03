export interface StartOptions {
  port?: string;
  quiet?: boolean;
}

export type Callback = (err: null | Error, data: string|undefined) => void;
