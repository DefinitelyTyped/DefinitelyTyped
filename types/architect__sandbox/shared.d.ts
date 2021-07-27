export interface StartOptions {
  port?: string | undefined;
  quiet?: boolean | undefined;
}

export type Callback = (err: null | Error, data: string|undefined) => void;
