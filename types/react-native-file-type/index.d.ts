export interface FileTypeResult {
    ext: string;
    mime: string;
}

export default function FileType(uri: string): Promise<FileTypeResult | null>;
