import InputStream from "./InputStream";

/**
 * This is an InputStream that is loaded from a file all at once
 * when you construct the object.
 */
export default class FileStream extends InputStream {
    constructor(fileName: string, decodeToUnicodeCodePoints?: boolean);
}
