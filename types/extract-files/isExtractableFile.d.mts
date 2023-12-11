export default function isExtractableFile(value: unknown): value is ExtractableFile;

export type ExtractableFile = File | Blob;
