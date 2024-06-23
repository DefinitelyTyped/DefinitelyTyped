import { ByteArray } from "../types";

export default class FLACTagContents {
    blocks: MetadataBlock[];

    constructor(blocks?: MetadataBlock[]);

    toArray(): ByteArray;

    static createBlock(type: number, data: ByteArray): MetadataBlock;

    static createStreamBlock(): MetadataBlock;

    static createCommentBlock(...data: string[][]): MetadataBlock;

    static createPictureBlock(): void;
}

export class MetadataBlock {
    _data: number[];
    _final: boolean;
    _type: number;

    constructor(type: number, data: ByteArray);

    setFinal(): void;

    toArray(): void;
}
