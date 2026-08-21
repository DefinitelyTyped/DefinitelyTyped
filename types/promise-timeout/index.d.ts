export function timeout<T>(promise: Promise<T>, timeoutMillis: number): Promise<T>;

export class TimeoutError extends Error {}
