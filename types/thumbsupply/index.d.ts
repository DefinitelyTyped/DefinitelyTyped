interface Options {
    forceCreate?: boolean;
    size?: Size;
    timestamp?: string;
    cacheDir?: string;
    mimetype?: string;
}

interface Size {
    name?: string;
    width: number;
    height: number;
}

interface AvailableSize {
    MEDIUM: Size;
    LARGE: Size;
}

declare class ThumbSupply {
    _thumbSuppliers: ThumbnailSupplier;
    _defaultOptions: Options;
    ThumbSize: AvailableSize;

    constructor();
    _registerThumbSupplier(mimetype: string, Thumbsupplier: ThumbnailSupplier): void;
    _fetchThumbnailSupplier(file: string, options?: Options): ThumbnailSupplier;
    generateThumbnail(file: string, options?: Options): Promise<string>;
    lookupThumbnail(file: string, options?: Options): Promise<string>;
}

declare class ThumbnailSupplier {
    filetype(): string;
    hashFile(file: string): string;
    getThumbnailFileName(file: string): string;
    constructor(options: Options);
    createThumbnail(file: string): void;
    getThumbnailLocation(file: string): string;
}

declare const thumbsupply: ThumbSupply;

export = thumbsupply;
