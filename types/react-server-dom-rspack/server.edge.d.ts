export * from "./server.browser";

import type { TemporaryReferenceSet } from "./server.browser";

export function decodeReplyFromAsyncIterable<T>(
    iterable: AsyncIterable<[name: string, value: string | File]>,
    options?: { temporaryReferences?: TemporaryReferenceSet | undefined },
): Promise<T>;
