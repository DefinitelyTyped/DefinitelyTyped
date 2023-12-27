export type Attr = "archive" | "hidden" | "readonly" | "system";

export type Attrs = Record<Attr, boolean>;

export function get(
    path: string,
    callback: <TError extends Error | null>(error: TError, attrs: TError extends TError ? never : Attrs) => void,
): void;
export function getSync(path: string): Attrs;

export function set(path: string, attrs: Partial<Attrs>, callback: (error: Error | null) => void): void;
export function setSync(path: string, attrs: Partial<Attrs>): void;
