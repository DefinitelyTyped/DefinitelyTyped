export function writeSnapshot(
    dumpFileName?: string,
    callback?: (err: Error | null, filename: string | undefined) => void,
): void;
export function writeSnapshot(callback: (err: Error | null, filename: string | undefined) => void): void;
