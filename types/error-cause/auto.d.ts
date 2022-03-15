interface Error {
    cause: unknown;
}

interface ErrorConstructor {
    new (reason: string, options?: { cause?: unknown }): Error;
}
