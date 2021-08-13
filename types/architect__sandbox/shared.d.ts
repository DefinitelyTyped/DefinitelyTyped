export interface StartOptions {
  port?: string | undefined;
  quiet?: boolean | undefined;
  cwd?: string | undefined;
  logLevel?: 'normal' | 'verbose' | 'debug' | undefined;
  symlink?: boolean | undefined;
}

export type Callback = (err: null | Error, data: string|undefined) => void;
