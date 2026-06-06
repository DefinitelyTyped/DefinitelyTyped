export = ImageCompressorProfile;
declare function ImageCompressorProfile(profile: number): void;
declare class ImageCompressorProfile {
    constructor(profile: number);
    private rules_;
    private mimeTypes_;
    private profileKey_;
    profileKey: number;
    private findRuleForMimeType_;
    getCompressor(mimeType: number | string): ImageCompressor | null;
    getCompressorFromFile(filePath: string): ImageCompressor | null;
    getCompressorFromBytes(content: ArrayBuffer | Uint8Array | string): ImageCompressor | null;
}
import ImageCompressor = require('./ImageCompressor.js');
