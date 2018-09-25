/**
 * Encodes/Decodes url parts.
 * @remarks This class shall be used to encode/decode parts of urls. Unlike {@link HttpUtility} class provided with .Net, this class encodes ' '(space) as %2b.
 */
export declare class EncodeUtil {
    /**
     * Encodes url part.
     * @param part Url part to encode.
     * @returns Encoded url part.
     */
    static EncodeUrlPart(part: string): string;
    /**
     * Decodes url part.
     * @param part Url part to decode.
     * @returns Decoded url part.
     */
    static DecodeUrlPart(part: string): string;
}
