export class LoaderUtils {
    /**
     * @deprecated decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead.
     */
    static decodeText(array: BufferSource): string;

    static extractUrlBase(url: string): string;

    static resolveURL(url: string, path: string): string;
}
