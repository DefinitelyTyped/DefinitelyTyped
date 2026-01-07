export {};
type UpdaterMethods = Record<
    | "start"
    | "status"
    | "done"
    | "cancel"
    | "err"
    | "warn"
    | "raw"
    | "update"
    | "stop"
    | "error"
    | "fail"
    | "warning",
    (...args: unknown[]) => void
>;
export type Updater = UpdaterMethods & Record<"verbose" | "debug", UpdaterMethods>;
export function updater(name: string): Updater;
