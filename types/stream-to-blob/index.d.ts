/// <reference types="node" />

declare function streamToBlob(stream: NodeJS.ReadableStream, mimeType?: string | null): Promise<Blob>

export default streamToBlob;
