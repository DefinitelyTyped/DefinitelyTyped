/// <reference types="node" />

declare function streamToBlob(stream: Readonly<NodeJS.ReadableStream>, mimeType?: string | null): Promise<Blob>

export default streamToBlob;
