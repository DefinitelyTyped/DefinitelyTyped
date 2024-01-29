export interface Link {
    itemType: "front" | "contents" | "main";
    link: string;
    title: string;
}

export type GenerateContentsCallback = (links: Link[]) => string;

export interface Metadata {
    author: string;
    cover: string;
    id: number | string;
    title: string;

    contents?: string;
    copyright?: string;
    description?: string;
    fileAs?: string;
    genre?: string;
    images?: string[];
    language?: string;
    published?: string;
    publisher?: string;
    sequence?: number;
    series?: string;
    showContents?: boolean;
    source?: string;
    tags?: string;
}

export interface File {
    compress: boolean;
    content: string;
    folder: string;
    name: string;
}

export interface Document {
    CSS: string;
    coverImage: string;
    filesForTOC: string[];
    generateContentsCallback?: GenerateContentsCallback;
    images: string[];
    metadata: Metadata;
    sections: string[];
    showContents: boolean;
    addCSS(content: string): void;
    addSection(
        title: string,
        content: string,
        excludeFromContents?: boolean,
        isFrontMatter?: string,
        overrideFilename?: string,
    ): void;
    getFilesForEPUB(): Promise<File>;
    getSectionCount(): number;
    writeEPUB(folder: string, filename: string): Promise<void>;
    writeFilesForEPUB(folder: string): Promise<void>;
}

export function document(metadata: Metadata, generateContentsCallback?: GenerateContentsCallback): Document;
