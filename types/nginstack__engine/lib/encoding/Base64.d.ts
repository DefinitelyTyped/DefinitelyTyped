export = Base64;
/**
 * @typedef { import('../io/File') } File
 * @private
 */
/**
 * @typedef { import('../io/MemoryStream') } MemoryStream
 * @private
 */
/**
 * Classe que possibilita codificar e decodificar um dado na base 64.
 *
 * Não devem ser construídas instâncias de Base64, e sim utilizar os métodos de classe.
 *
 * Essa classe também é publicada no objeto global, mas seu uso é desencorajado.
 * @constructor
 */
declare function Base64(): void;
declare class Base64 {}
declare namespace Base64 {
    export {
        encode,
        decode,
        STRING_DECODING,
        ARRAY_BUFFER_DECODING,
        STANDARD_ENCODING,
        MIME_ENCODING,
        URL_ENCODING,
        File,
        MemoryStream,
    };
}
/**
 * Codifica um dado para a base 64.
 * @param {string|ArrayBuffer|Uint8Array|MemoryStream|File} bin conteúdo a ser codificado. Os tipos
 * MemoryStream e File não são suportados na codificação Base64.URL_ENCODING.
 * @param {number} [encodeFormat] Informa a variação de codificação base 64 desejada. Os valores
 * possíveis são Base64.URL_ENCODING, Base64.STANDARD_ENCODING e Base64.MIME_ENCODING, sendo
 * este último o valor default. Se for informado um boolean (API antiga), é usado o
 * Base64.MIME_ENCODING se verdadeiro e Base64.STANDARD_ENCODING se falso.
 * @return {string} String codificada em base 64.
 */
declare function encode(
    bin: string | ArrayBuffer | Uint8Array | MemoryStream | File,
    encodeFormat?: number
): string;
/**
 * Decodifica uma string de base 64 para binário, sem quebra de linha.
 * @param {string|ArrayBuffer} str String em base 64 a ser decodificada.
 * @param {string} [resultType] O tipo do resultado gerado por esta função. Os valores possíveis são
 * "uint8array", "arraybuffer" e "binarystring". Caso não seja informado, será retornada uma string
 * no formato "Binary String", onde cada caractere da *string* representa um byte do conteúdo
 * binário. Para fins de compatibilidade, este parâmetro também aceita os valores
 * Base64.STRING_DECODING e Base64.ARRAY_BUFFER_DECODING.
 * @return {string|Uint8Array|ArrayBuffer} Conteúdo decodificado.
 */
declare function decode(
    str: string | ArrayBuffer,
    resultType?: string
): string | Uint8Array | ArrayBuffer;
declare let STRING_DECODING: number;
declare let ARRAY_BUFFER_DECODING: number;
declare let STANDARD_ENCODING: number;
declare let MIME_ENCODING: number;
declare let URL_ENCODING: number;
type File = import('../io/File');
type MemoryStream = import('../io/MemoryStream');
