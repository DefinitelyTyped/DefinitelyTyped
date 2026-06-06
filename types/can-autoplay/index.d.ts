export interface Options {
    inline?: boolean | undefined;
    muted?: boolean | undefined;
    timeout?: number | undefined;
}

export interface CheckResponseTrue {
    result: true;
    error: null;
}

export interface CheckResponseFalse {
    result: false;
    error: Error;
}

export type CheckResponse = CheckResponseTrue | CheckResponseFalse;

export function audio(options?: Options): Promise<CheckResponse>;
export function video(options?: Options): Promise<CheckResponse>;
