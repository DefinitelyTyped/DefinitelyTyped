export = SHA256;
/**
 * @typedef { import('./DigestType') } DigestType
 * @private
 */
/**
 * Implementação do algoritmo de hash SHA256.
 *
 * Esta classe trata as *strings* como se fossem uma sequência de bytes no formato conhecido
 * por "Binary String", onde cada caractere da *string* representa um byte do conteúdo binário. É
 * importante observar que a codificação adotada pode ser diferente em outras plataformas, como o
 * Node.js. Para garantir compatibilidade com o hash calculado em outras plataformas, prefira
 * sempre informar valores do tipo `Uint8Array` ou `ArrayBuffer`, evitando a codificação
 * implícita das *strings*.
 * @example
 * var SHA256 = require('@nginstack/engine/lib/crypto/SHA256');
 * SHA256.hexDigest(new Uint8Array([0, 1, 2, 3, 4])); // => '08bb5e5d6eaac1049ede...71f51c9cb35283d'
 * @example
 * var SHA256 = require('@nginstack/engine/lib/crypto/SHA256');
 * var SHA256 = new SHA256();
 * SHA256.update('dados001');
 * SHA256.update('dados002');
 * SHA256.update('dados003');
 * SHA256.hexDigest(); // => 'd3e50ee7291f6585467d0aaab5fa665d30decf792dffd336b75ab64257c88b2b'
 * @constructor
 */
declare function SHA256(): void;
declare class SHA256 {
    /**
     * Produz o mesmo resultado que o método {@link #hexDigest}.
     * @return {string} Hash SHA256 em formato hexadecimal em caixa baixa dos dados acumulados.
     */
    toString(): string;
    /**
     * Retorna o hash em formato binário.
     * @param {string|DigestType} [resultType] O tipo do *digest* gerado. Os valores possíveis são
     * "binarystring", "arraybuffer" e "uint8array". Caso não seja informado, será retornada uma string
     * no formato "Binary String", onde cada caractere da *string* representa um byte do conteúdo
     * binário.
     * @return {string|Uint8Array|ArrayBuffer} Hash SHA256 em formato binário dos dados acumulados.
     */
    digest(resultType?: string | DigestType): string | Uint8Array | ArrayBuffer;
    /**
     * Retorna o hash em formato hexadecimal.
     * @return {string} Hash SHA256 em formato hexadecimal em caixa baixa dos dados acumulados.
     */
    hexDigest(): string;
    /**
     * Método responsável por fazer o acúmulo de dados para cálculo do hash.
     * @param {string|Uint8Array|ArrayBuffer} data Dados que serão acumulados para cálculo do hash.
     * @return {SHA256} Instância desta classe.
     */
    update(data: string | Uint8Array | ArrayBuffer): SHA256;
}
declare namespace SHA256 {
    export { digest, hexDigest, DigestType };
}
/**
 * Método de classe que calcula o hash em binário a partir de um determinado dado.
 * @param {string|Uint8Array|ArrayBuffer} data Dado que será usado no cálculo do hash.
 * @param {string|DigestType} [resultType] O tipo do *digest* gerado. Os valores possíveis são
 * "binarystring", "arraybuffer" e "uint8array". Caso não seja informado, será retornada uma string
 * no formato "Binary String", onde cada caractere da *string* representa um byte do conteúdo
 * binário.
 * @return {string|Uint8Array|ArrayBuffer} Hash SHA256 em formato binário do dado informado.
 */
declare function digest(
    data: string | Uint8Array | ArrayBuffer,
    resultType?: string | DigestType
): string | Uint8Array | ArrayBuffer;
/**
 * Método de classe que calcula o hash em formato hexadecimal a partir de um determinado dado.
 * @param {string|Uint8Array|ArrayBuffer} data Dado que será usado no cálculo do hash.
 * @return {string} Hash SHA256 em formato hexadecimal em caixa baixa do dado informado.
 */
declare function hexDigest(data: string | Uint8Array | ArrayBuffer): string;
type DigestType = typeof import('./DigestType');
