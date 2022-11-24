export interface Options {
    timeout?: number | undefined;
    timeoutMessage?: string | undefined;
}

export default function waitUntil<T>(callback: () => T, options?: Options): Promise<T>;
