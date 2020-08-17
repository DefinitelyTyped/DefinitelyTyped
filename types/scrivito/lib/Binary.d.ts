import { MetadataCollection } from './MetadataCollection';
import { Obj } from './Obj';

export interface OptimizeDefinition {
    width: number | string;
    height: number | string;
    fit: "resize" | "crop";
    // Fix this being able to be filled when using fit = resize
    crop: "center" | "top" | "left" | "right" | "bottom";
}

export class Binary {
    private constructor();
    static upload(source: Blob | File, options: { filename: string, contentType?: string }): FutureBinary;
    static uplload(source: File, options?: { filename?: string, contentType?: string }): FutureBinary;
    contentLength(): number;
    contentType(): string;
    copy(options?: { filename?: string; contentType?: string }): FutureBinary;
    filename(): string;
    isPrivate(): boolean;
    metadata(): MetadataCollection;
    optimizeFor(definition: OptimizeDefinition): Binary;
    original(): Binary;
    raw(): Binary;
    url(): string;
}

export class FutureBinary {
    private constructor();
    into(target: Obj): Promise<Binary>;
}
