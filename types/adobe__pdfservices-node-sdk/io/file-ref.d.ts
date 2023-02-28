/**
 * This class represents a local file. It is typically used by an SDK Operation
 * which accepts or returns files.
 * <p>
 * When a FileRef instance is created by this SDK while referring to a temporary file location, calling any of the methods
 * to save the fileRef (For example, {@link FileRef#writeToStream}, {@link FileRef#saveAsFile} etc.) will delete the
 * temporary file.
 *
 */
export class FileRef {
    /**
     * Creates a FileRef instance from a local file path. If no media type is provided, it will be inferred from the file
     * extension.
     * <p>
     */
    static createFromLocalFile(filePath: string, mediaType?: string): FileRef;
    /**
     * Creates a FileRef instance from a readable stream using the specified media type.
     * <p>
     * The stream is not read by this method but by consumers of file content i.e. the execute method of
     * an operation such as {@link CreatePDFOperation#execute} .
     *
     */
    static createFromStream(inputStream: any, mediaType: string): FileRef;
    /**
     * Creates a FileRef instance from the input URL and specified media type.
     *
     *
     */
    static createFromURL(url: string): FileRef;
    constructor(input: any);
    /**
     *
     * Saves this file to the location specified by <code>destinationFilePath</code>.
     * If this FileRef instance refers to a temporary local file created by the SDK, that temporary file is deleted.
     * <p>
     * The directories mentioned in the specified argument are created if they do not exist.
     *
     *
     */
    saveAsFile(destinationFilePath: string): Promise<void>;
    /**
     * Writes the contents of this file to <code>writableStream</code>.
     * If this FileRef instance refers to a temporary local file created by the SDK, that temporary file is deleted.
     * <br>
     * Note: This method does not close the <code>writableStream</code>.
     *
     *
     */
    writeToStream(writableStream: any): void;
}
