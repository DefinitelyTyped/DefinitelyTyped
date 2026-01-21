export = SHA1;
/**
 * @typedef { import('./DigestType') } DigestType
 * @private
 */
/**
 * Implementação do algoritmo de hash SHA1.
 *
 * Esta classe trata as *strings* como se fossem uma sequência de bytes no formato conhecido
 * por "Binary String", onde cada caractere da *string* representa um byte do conteúdo binário. É
 * importante observar que a codificação adotada pode ser diferente em outras plataformas, como o
 * Node.js. Para garantir compatibilidade com o hash calculado em outras plataformas, prefira
 * sempre informar valores do tipo `Uint8Array` ou `ArrayBuffer`, evitando a codificação
 * implícita das *strings*.
 *
 * **Observação**: diferentemente das classes `SHA256` e `SHA512`, a classe `SHA1` retorna
 * a representação hexadecimal utilizando letras maiúsculas. Essa diferença de comportamento
 * foi preservada a fim de garantir o funcionamento dos códigos existentes, mas ela pode ser
 * eliminada no futuro. É recomendado que o resultado do método `hexDigest` seja convertido
 * para o formato desejado utilizando os métodos `toUpperCase()` ou `toLowerCase()`.
 * @example
 * var SHA1 = require('@nginstack/engine/lib/crypto/SHA1');
 * var sha1 = new SHA1();
 * sha1.update("dados001");
 * sha1.update("dados002");
 * sha1.update("dados003");
 * sha1.hexDigest().toLowerCase(); // => '1a3ad9dc8cc634be3890289b51ec9c0ac451364c'
 * @constructor
 */
declare function SHA1(): void;
declare class SHA1 {
    /**
     * Produz o mesmo resultado que o método hexDigest()
     * @return {string} Hash SHA1 em formato hexadecimal dos dados acumulados.
     */
    toString(): string;
    /**
     * Retorna o hash em formato binário.
     * @param {string|DigestType} [resultType] O tipo do *digest* gerado. Os valores possíveis são
     * "binarystring", "arraybuffer" e "uint8array". Caso não seja informado, será retornada uma string
     * no formato "Binary String", onde cada caractere da *string* representa um byte do conteúdo
     * binário.
     * @return {string|Uint8Array|ArrayBuffer} Hash SHA1 em formato binário dos dados acumulados.
     */
    digest(resultType?: string | DigestType): string | Uint8Array | ArrayBuffer;
    /**
     * Retorna o hash em formato hexadecimal.
     * @return {string} Hash SHA1 em formato hexadecimal dos dados acumulados.
     */
    hexDigest(): string;
    /**
     * Método responsável por fazer o acúmulo de dados para cálculo do hash.
     * @param {string|Uint8Array|ArrayBuffer} data Dados que serão acumulados para cálculo do hash.
     * @returns {SHA1} Instância desta classe.
     */
    update(data: string | Uint8Array | ArrayBuffer): SHA1;
}
declare namespace SHA1 {
    export { digest, hexDigest, DigestType };
}
/**
 * Método de classe que calcula o hash em binário a partir de um determinado dado.
 * @param {string|Uint8Array|ArrayBuffer} data Dado que será usado no cálculo do hash.
 * @param {string|DigestType} [resultType] O tipo do *digest* gerado. Os valores possíveis são
 * "binarystring", "arraybuffer" e "uint8array". Caso não seja informado, será retornada uma string
 * no formato "Binary String", onde cada caractere da *string* representa um byte do
 * conteúdo binário.
 * @return {string|Uint8Array|ArrayBuffer} Hash SHA1 em formato binário do dado informado
 */
declare function digest(
    data: string | Uint8Array | ArrayBuffer,
    resultType?: string | DigestType
): string | Uint8Array | ArrayBuffer;
/**
 * Método de classe que calcula o hash em formato hexadecimal a partir de um determinado dado.
 * @param {string|Uint8Array|ArrayBuffer} data Dado que será usado no cálculo do hash.
 * @return {string} Hash SHA1 em formato hexadecimal do dado informado
 */
declare function hexDigest(data: string | Uint8Array | ArrayBuffer): string;
type DigestType = typeof import('./DigestType');
