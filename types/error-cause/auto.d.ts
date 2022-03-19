interface Error {
    cause: Error | undefined;
}

interface ErrorConstructor {
    new (reason: string, options?: { cause?: Error | undefined }): Error;
}
