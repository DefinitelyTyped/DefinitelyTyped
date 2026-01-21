export = Base32;
/**
 * @typedef { import('../io/File') } File
 * @private
 */
/**
 * @typedef { import('../io/MemoryStream') } MemoryStream
 * @private
 */
/**
 * Variantes suportadas do Base32.
 * @typedef {'base32'|'base32_nopad'|'base32hex'|'base32hex_nopad'|'base32_dnssec'|'base32_dnscurve'} Base32Variant
 */
/**
 * Classe que permite a codificação e decodificação de conteúdos binários em Base32.
 *
 * Não devem ser construídas instâncias da classe Base32, devendo ser utilizados os seus métodos
 * de classe.
 * @constructor
 */
declare function Base32(): void;
declare class Base32 {}
declare namespace Base32 {
    export {
        encode,
        decode,
        encodeStream,
        decodeStream,
        BASE32,
        BASE32_NOPAD,
        BASE32HEX,
        BASE32HEX_NOPAD,
        BASE32_DNSSEC,
        BASE32_DNSCURVE,
        File,
        MemoryStream,
        Base32Variant,
    };
}
/**
 * Codifica um conteúdo binário em Base32.
 *
 * @example
 * const Base32 = require('@nginstack/engine/lib/encoding/Base32.js');
 * Base32.encode('example'); // => 'MV4GC3LQNRSQ===='
 * @param {string|ArrayBuffer|Uint8Array} bin Dados a serem codificados,
 * podendo ser um binário codificado como string no formato "Binary String", onde cada
 * caractere da *string* representa um byte do conteúdo binário.
 * @param {Base32Variant} [variant] Informa a variante da codificação Base32 desejada. Os
 * valores possíveis são: Base32.BASE32 (`'base32'`), Base32.BASE32_NOPAD (`'base32_nopad'`),
 * Base32.BASE32HEX (`'base32hex'`), Base32.BASE32HEX_NOPAD (`'base32hex_nopad'`),
 * Base32.BASE32_DNSSEC (`'base32_dnssec'`) e Base32.BASE32_DNSCURVE (`'base32_dnscurve'`).
 * Caso não seja informado, será utilizado o formato padrão `'base32'`.
 * @return {string} String codificada em Base32.
 */
declare function encode(bin: string | ArrayBuffer | Uint8Array, variant?: Base32Variant): string;
/**
 * Decodifica uma string de dados que foi codificada anteriormente em Base32.
 *
 * @example
 * const Base32 = require('@nginstack/engine/lib/encoding/Base32.js');
 * Base32.decode('MV4GC3LQNRSQ===='); // => 'example'
 * @param {string} str String em Base32 a ser decodificada.
 * @param {Base32Variant} [variant] Informa a variante do Base32 que foi utilizada
 * na codificação dos dados. Os valores possíveis são: Base32.BASE32 (`'base32'`),
 * Base32.BASE32_NOPAD (`'base32_nopad'`), Base32.BASE32HEX (`'base32hex'`),
 * Base32.BASE32HEX_NOPAD (`'base32hex_nopad'`), Base32.BASE32_DNSSEC (`'base32_dnssec'`) e
 * Base32.BASE32_DNSCURVE (`'base32_dnscurve'`). Caso não seja informado, será utilizado o
 * formato padrão `'base32'`.
 * @param {string} [resultType] O tipo do resultado gerado por esta função. Os valores possíveis são
 * "uint8array", "arraybuffer" e "binarystring". Caso não seja informado, será retornada uma string
 * no formato "Binary String", onde cada caractere da *string* representa um byte do conteúdo
 * binário.
 * @return {string|Uint8Array|ArrayBuffer} Um binário codificado como string ou um ArrayBuffer.
 */
declare function decode(
    str: string,
    variant?: Base32Variant,
    resultType?: string
): string | Uint8Array | ArrayBuffer;
/**
 * Lê um conteúdo binário de um stream e escreve como Base32 em outro stream. Faz a operação
 * inversa do método `decodeStream`.
 * @param {File|MemoryStream} input Conteúdo binário a ser codificado
 * @param {File|MemoryStream} output Stream que recebe o conteúdo em formato Base85
 * @param {Base32Variant} [variant] Informa a variante da codificação Base32 desejada. Os valores
 * possíveis são: Base32.BASE32 (`'base32'`), Base32.BASE32_NOPAD (`'base32_nopad'`),
 * Base32.BASE32HEX (`'base32hex'`), Base32.BASE32HEX_NOPAD (`'base32hex_nopad'`),
 * Base32.BASE32_DNSSEC (`'base32_dnssec'`) e Base32.BASE32_DNSCURVE (`'base32_dnscurve'`).
 * Caso não seja informado, será utilizado o formato padrão `'base32'`.
 */
declare function encodeStream(
    input: File | MemoryStream,
    output: File | MemoryStream,
    variant?: Base32Variant
): void;
/**
 * Lê um conteúdo Base32 de um stream e escreve como binário em outro stream. Faz a operação inversa
 * do método `encodeStream`.
 * @param {File|MemoryStream} input Conteúdo Base32 a ser decodificado.
 * @param {File|MemoryStream} output Stream que recebe o conteúdo em formato binário.
 * @param {Base32Variant} [variant] Informa a variante do Base32 que foi utilizada
 * na codificação dos dados. Os valores possíveis são: Base32.BASE32 (`'base32'`),
 * Base32.BASE32_NOPAD (`'base32_nopad'`), Base32.BASE32HEX (`'base32hex'`),
 * Base32.BASE32HEX_NOPAD (`'base32hex_nopad'`), Base32.BASE32_DNSSEC (`'base32_dnssec'`) e
 * Base32.BASE32_DNSCURVE (`'base32_dnscurve'`). Caso não seja informado, será utilizado o
 * formato padrão `'base32'`.
 */
declare function decodeStream(
    input: File | MemoryStream,
    output: File | MemoryStream,
    variant?: Base32Variant
): void;
declare let BASE32: string;
declare let BASE32_NOPAD: string;
declare let BASE32HEX: string;
declare let BASE32HEX_NOPAD: string;
declare let BASE32_DNSSEC: string;
declare let BASE32_DNSCURVE: string;
type File = import('../io/File');
type MemoryStream = import('../io/MemoryStream');
/**
 * Variantes suportadas do Base32.
 */
type Base32Variant =
    | 'base32'
    | 'base32_nopad'
    | 'base32hex'
    | 'base32hex_nopad'
    | 'base32_dnssec'
    | 'base32_dnscurve';
