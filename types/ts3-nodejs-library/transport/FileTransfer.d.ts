declare class FileTransfer {
    constructor(host: string, port?: number, timeout?: number);

    /**
     * Starts the download of a File
     * @param - The Filetransfer Key
     * @param- The Data Length
     * @returns a buffer with the binary data
     */
    download(ftkey: string, size: number): Promise<Buffer>;

    /**
     * Starts the upload of a File
     * @param - the Filetransfer Key
     * @param - the data to send
     */
    upload(ftkey: string, data: string | Buffer): Promise<void>;
}

export = FileTransfer;
