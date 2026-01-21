/**
 * Tipos de *digest* suportados pelas classes MD5, SHA1, SHA256, SHA512 e HMAC. Eles devem ser
 * utilizados no parâmetro `resultType` do método `digest`.
 * @enum {string}
 */

/**
 * Indica que o *digest* retornado será um objeto do tipo string, no formato
 * "Binary String", onde cada caractere da *string* representa um byte do conteúdo binário.
 */
export const BINARY_STRING = 'binarystring';

/**
 * Indica que o *digest* retornado será um objeto do tipo ArrayBuffer.
 */
export const ARRAY_BUFFER = 'arraybuffer';

/**
 * Indica que o *digest* retornado será um objeto do tipo Uint8Array.
 */
export const UINT8_ARRAY = 'uint8array';
