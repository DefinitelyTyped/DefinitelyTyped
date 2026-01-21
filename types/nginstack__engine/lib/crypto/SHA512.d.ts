export = SHA512;
/**
 * @typedef { import('./DigestType') } DigestType
 * @private
 */
/**
 * Implementação do algoritmo de hash SHA512.
 *
 * Esta classe trata as *strings* como se fossem uma sequência de bytes no formato conhecido
 * por "Binary String", onde cada caractere da *string* representa um byte do conteúdo binário. É
 * importante observar que a codificação adotada pode ser diferente em outras plataformas, como o
 * Node.js. Para garantir compatibilidade com o hash calculado em outras plataformas, prefira
 * sempre informar valores do tipo `Uint8Array` ou `ArrayBuffer`, evitando a codificação
 * implícita das *strings*.
 * @example
 * var SHA512 = require('@nginstack/engine/lib/crypto/SHA512');
 * var SHA512 = new SHA512();
 * SHA512.update('dados001');
 * SHA512.update('dados002');
 * SHA512.update('dados003');
 * SHA512.hexDigest(); // => 'bc428589ba06e369f9bfd21009d5d210c09cf469eaa84945bcb93ab4dc3cbd...'
 * @constructor
 */
declare function SHA512(): void;
declare class SHA512 {
    /**
     * Produz o mesmo resultado que o método {@link #hexDigest}.
     * @return {string} Hash SHA512 em formato hexadecimal em caixa baixa dos dados acumulados.
     */
    toString(): string;
    /**
     * Retorna o hash em formato binário.
     * @param {string|DigestType} [resultType] O tipo do *digest* gerado. Os valores possíveis são
     * "binarystring", "arraybuffer" e "uint8array". Caso não seja informado, será retornada uma string
     * no formato "Binary String", onde cada caractere da *string* representa um byte do conteúdo
     * binário.
     * @return {string|Uint8Array|ArrayBuffer} Hash SHA512 em formato binário dos dados acumulados.
     */
    digest(resultType?: string | DigestType): string | Uint8Array | ArrayBuffer;
    /**
     * Retorna o hash em formato hexadecimal.
     * @return {string} Hash SHA512 em formato hexadecimal em caixa baixa dos dados acumulados.
     */
    hexDigest(): string;
    /**
     * Método responsável por fazer o acúmulo de dados para cálculo do hash.
     * @param {string|Uint8Array|ArrayBuffer} data Dados que serão acumulados para cálculo do hash.
     * @return {SHA512} Instância desta classe.
     */
    update(data: string | Uint8Array | ArrayBuffer): SHA512;
}
declare namespace SHA512 {
    export { digest, hexDigest, DigestType };
}
/**
 * Método de classe que calcula o hash em binário a partir de um determinado dado.
 * @param {string|Uint8Array|ArrayBuffer} data Dado que será usado no cálculo do hash.
 * @param {string|DigestType} [resultType] O tipo do *digest* gerado. Os valores possíveis são
 * "binarystring", "arraybuffer" e "uint8array". Caso não seja informado, será retornada uma string
 * no formato "Binary String", onde cada caractere da *string* representa um byte do conteúdo
 * binário.
 * @return {string|Uint8Array|ArrayBuffer} Hash SHA512 em formato binário do dado informado.
 */
declare function digest(
    data: string | Uint8Array | ArrayBuffer,
    resultType?: string | DigestType
): string | Uint8Array | ArrayBuffer;
/**
 * Método de classe que calcula o hash em formato hexadecimal a partir de um determinado dado.
 * @param {string|Uint8Array|ArrayBuffer} data Dado que será usado no cálculo do hash.
 * @return {string} Hash SHA512 em formato hexadecimal em caixa baixa do dado informado.
 */
declare function hexDigest(data: string | Uint8Array | ArrayBuffer): string;
type DigestType = typeof import('./DigestType');
