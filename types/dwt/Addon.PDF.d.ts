import { DynamsoftEnums as Dynamsoft } from "./Dynamsoft.Enum";

export interface PDF {
    /**
     * Convert the specified PDF file to image(s).
     * @param path The path of the PDF file.
     * @param successCallback A callback function that is executed if the request succeeds.
     * @param failureCallback A callback function that is executed if the request fails.
     * @argument errorCode The error code.
     * @argument errorString The error string.
     */
    ConvertToImage(
        path: string,
        resolution: number,
        successCallback: () => void,
        failureCallback: (
            errorCode: number,
            errorString: string
        ) => void
    ): void;
    /**
     * Return the convert mode.
     */
    GetConvertMode(): number;
    /**
     * Return whether the PDF module has been installed.
     */
    IsModuleInstalled(): boolean;
    /**
     * Detect whether a local PDF file is text based or not.
     * @path Specify the path of the PDF file.
     */
    IsTextBasedPDF(path: string): boolean;
    /**
     * Set the convert mode.
     * @param mode Specify the mode.
     */
    SetConvertMode(mode: Dynamsoft.EnumDWT_ConvertMode | number): boolean;
    /**
     * Set the password for reading encrypted PDF files.
     * @param password Specify the password.
     */
    SetPassword(password: string): boolean;
    /**
     * Set the resolution for rasterizing.
     * @param resolution Specify the resolution.
     */
    SetResolution(resolution: number): boolean;
    /**
     * Set up the PDF writing engine.
     */
    Write: Write;
}
export interface Write {
    /**
     * Set up the PDF writing engine.
     * @param settings Configures how the PDF is generated.
     */
    Setup(settings: PDFWSetting): void;
}
export interface PDFWSetting {
    /**
     * Specify the author.
     */
    author: string;
    /**
     * Specify the compression type.
     */
    compression: Dynamsoft.EnumDWT_PDFCompressionType | number;
    /**
     * Specify the creator.
     */
    creator: string;
    /**
     * Specify the creation date.
     * Note that the argument should start with 'D:' like 'D:20181231'.
     */
    creationDate: string;
    /**
     * Specify the key words.
     */
    keyWords: string;
    /**
     * Specify the modified date.
     * Note that the argument should start with 'D:' like 'D:20181231'.
     */
    modifiedDate: string;
    /**
     * Specify the producer.
     */
    producer: string;
    /**
     * Specify the subject.
     */
    subject: string;
    /**
     * Specify the title.
     */
    title: string;
    /**
     * Specify the PDF version. For example, '1.5'.
     */
    version: string;
    /**
     * Specify the quality of the images in the file.
     * The value ranges from 0 to 100.
     * Only valid when the {compression} is 'JPEG' or 'JPEG2000'.
     */
    quality: number;
}
