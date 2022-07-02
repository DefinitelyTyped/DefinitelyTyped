export class CompressPDFOptions {
    static get CompressionLevel(): CompressionLevel;
    /**
     * Returns a builder for {@link CompressPDFOptions}.
     */
    static get Builder(): any;
    constructor(builder: any);
    compressionLevel: any;
    validate(): any;
}
export interface CompressionLevel {
    /**
     * Reduces the file size of pdf by reducing resolution of the coloured and grayscale images above 100 dpi to 72 dpi (dots per inch).
     * This option uses JPEG medium quality compression.
     * Output pdf will not contain hidden layers, document structure, metadata, javascript, user properties and print settings.
     */
    HIGH: 'HIGH';
    /**
     * Reduces the file size of pdf by reducing resolution of the coloured and grayscale images above 200 dpi to 144 dpi (dots per inch).
     * This option uses JP2K medium quality compression.
     */
    MEDIUM: 'MEDIUM';
    /**
     * Reduces the file size of pdf by reducing resolution of the coloured and grayscale images above 250 dpi to 200 dpi (dots per inch).
     * This option uses JP2K high quality compression.
     */
    LOW: 'LOW';
}
