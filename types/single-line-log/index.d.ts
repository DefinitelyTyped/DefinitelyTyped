export interface SingleLineLog {
    (data: string): void;
    clear(): void;
    write(data: string): void;
}

export const stdout: SingleLineLog;
export const stderr: SingleLineLog;
