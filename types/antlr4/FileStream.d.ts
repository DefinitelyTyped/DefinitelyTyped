import InputStream from './InputStream';

/**
 * This is an InputStream that is loaded from a file all at once
 * when you construct the object.
 */
export default class FileStream extends InputStream {
    fileName: string;

    constructor(fileName: string, decodeToUnicodeCodePoints?: boolean);
}
