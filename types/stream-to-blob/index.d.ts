/// <reference types="node" />

export = streamToBlob;

declare function streamToBlob(stream: Readonly<NodeJS.ReadableStream>, mimeType?: string | null): Promise<Blob>;
