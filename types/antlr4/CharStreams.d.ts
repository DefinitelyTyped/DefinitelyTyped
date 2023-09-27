import InputStream from "./InputStream";

declare namespace CharStreams {
    /**
     * Creates an InputStream from a string.
     */
    function fromString(str: string): InputStream;

    /**
     * Asynchronously creates an InputStream from a blob given the
     * encoding of the bytes in that blob (defaults to 'utf8' if
     * encoding is null).
     *
     * Invokes onLoad(result) on success, onError(error) on
     * failure.
     */
    function fromBlob(
        blob: any,
        encoding: string,
        onLoad: (is: InputStream) => void,
        onError: ((event: any) => any) | null,
    ): void;

    /**
     * Creates an InputStream from a Buffer given the
     * encoding of the bytes in that buffer (defaults to 'utf8' if
     * encoding is null).
     */
    function fromBuffer(buffer: any, encoding: string): InputStream;

    /**
     * Asynchronously creates an InputStream from a file on disk given
     * the encoding of the bytes in that file (defaults to 'utf8' if
     * encoding is null).
     *
     * Invokes callback(error, result) on completion.
     */
    function fromPath(path: any, encoding: string, callback: (err: any, is: InputStream) => void): void;

    /**
     * Synchronously creates an InputStream given a path to a file
     * on disk and the encoding of the bytes in that file (defaults to
     * 'utf8' if encoding is null).
     */
    function fromPathSync(path: any, encoding: string): InputStream;
}

export default CharStreams;
