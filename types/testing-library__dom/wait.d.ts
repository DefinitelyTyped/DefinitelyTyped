export function wait(
    callback?: () => void,
    options?: {
        timeout?: number;
        interval?: number;
    },
): Promise<void>;
