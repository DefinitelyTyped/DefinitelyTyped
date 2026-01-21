export = HMAC;
/**
 * @typedef { import('./DigestType') } DigestType
 * @private
 */
/**
 * Implementação do algoritmo de código de autenticação de mensagem
 * [HMAC](https://en.wikipedia.org/wiki/HMAC). Como os demais algoritmos de geração de códigos
 * de autenticação de mensagens (MAC), ele pode ser utilizado para verificar simultaneamente a
 * integridade e a autenticidade dos dados de uma mensagem.
 *
 * Esta classe trata as *strings* como se fossem uma sequência de bytes no formato conhecido
 * como "Binary String", onde cada caractere da *string* representa um byte do conteúdo binário. É
 * importante observar que a codificação adotada pode ser diferente em outras plataformas, como o
 * Node.js. Para garantir compatibilidade com o hash calculado em outras plataformas, prefira
 * sempre informar valores do tipo `Uint8Array` ou `ArrayBuffer`, evitando a codificação
 * implícita das *strings*.
 * @example
 * var HMAC = require('@nginstack/engine/lib/crypto/HMAC.js');
 * const hmac = new HMAC('sha256', 'secret');
 * hmac.update(new Uint8Array([0, 1, 2]));
 * hmac.update(new Uint8Array([3, 4]));
 * hmac.hexDigest(); // => '454327ac7188bad3eb738ec24d7830a748779568ffe432594aa56acee0416d2f'
 * @param {string} hash Função hash que deve ser utilizada pelo algoritmo HMAC. Valores
 * possíveis: 'md5', 'sha1', 'sha224', 'sha256', 'sha384' e 'sha512'.
 * @param {string|Uint8Array|ArrayBuffer} key Chave criptográfica secreta.
 * @constructor
 */
declare function HMAC(hash: string, key: string | Uint8Array | ArrayBuffer): void;
declare class HMAC {
    /**
     * @typedef { import('./DigestType') } DigestType
     * @private
     */
    /**
     * Implementação do algoritmo de código de autenticação de mensagem
     * [HMAC](https://en.wikipedia.org/wiki/HMAC). Como os demais algoritmos de geração de códigos
     * de autenticação de mensagens (MAC), ele pode ser utilizado para verificar simultaneamente a
     * integridade e a autenticidade dos dados de uma mensagem.
     *
     * Esta classe trata as *strings* como se fossem uma sequência de bytes no formato conhecido
     * como "Binary String", onde cada caractere da *string* representa um byte do conteúdo binário. É
     * importante observar que a codificação adotada pode ser diferente em outras plataformas, como o
     * Node.js. Para garantir compatibilidade com o hash calculado em outras plataformas, prefira
     * sempre informar valores do tipo `Uint8Array` ou `ArrayBuffer`, evitando a codificação
     * implícita das *strings*.
     * @example
     * var HMAC = require('@nginstack/engine/lib/crypto/HMAC.js');
     * const hmac = new HMAC('sha256', 'secret');
     * hmac.update(new Uint8Array([0, 1, 2]));
     * hmac.update(new Uint8Array([3, 4]));
     * hmac.hexDigest(); // => '454327ac7188bad3eb738ec24d7830a748779568ffe432594aa56acee0416d2f'
     * @param {string} hash Função hash que deve ser utilizada pelo algoritmo HMAC. Valores
     * possíveis: 'md5', 'sha1', 'sha224', 'sha256', 'sha384' e 'sha512'.
     * @param {string|Uint8Array|ArrayBuffer} key Chave criptográfica secreta.
     * @constructor
     */
    constructor(hash: string, key: string | Uint8Array | ArrayBuffer);
    /**
     * Acumula os dados para o cálculo do código de verificação.
     * @param {string|Uint8Array|ArrayBuffer} data Dados que serão acumulados para cálculo do código
     * de verificação.
     * @return {HMAC} Instância desta classe.
     */
    update(data: string | Uint8Array | ArrayBuffer): HMAC;
    /**
     * Retorna o código de autenticação em formato binário.
     * @param {string|DigestType} [resultType] O tipo do *digest* gerado. Os valores possíveis são
     * "binarystring", "arraybuffer" e "uint8array". Caso não seja informado, será retornada uma string
     * no formato "Binary String", onde cada caractere da *string* representa um byte do conteúdo
     * binário.
     * @return {string} HMAC dos dados acumulados.
     */
    digest(digestType: any): string;
    /**
     * Retorna o código de autenticação em formato hexadecimal.
     * @return {string} HMAC dos dados acumulados em codificação hexadecimal em caixa baixa.
     */
    hexDigest(): string;
}
declare namespace HMAC {
    export { digest, hexDigest, DigestType };
}
/**
 * Método de classe que calcula o HMAC dos dados de uma mensagem e retorna o código de autenticação
 * em sua representação binária.
 * @param {string} hash Função hash que deve ser utilizada pelo algoritmo HMAC. Valores
 * possíveis: 'md5', 'sha1', 'sha224', 'sha256', 'sha384' e 'sha512'.
 * @param {string|Uint8Array|ArrayBuffer} key Chave criptográfica secreta.
 * @param {string|Uint8Array|ArrayBuffer} data Dados que serão usados no cálculo do código de
 * verificação.
 * @param {string|DigestType} [resultType] O tipo do *digest* gerado. Os valores possíveis são
 * "binarystring", "arraybuffer" e "uint8array". Caso não seja informado, será retornada uma string
 * no formato "Binary String", onde cada caractere da *string* representa um byte do conteúdo
 * binário.
 * @return {string|Uint8Array|ArrayBuffer} HMAC dos dados acumulados.
 */
declare function digest(
    hash: string,
    key: string | Uint8Array | ArrayBuffer,
    data: string | Uint8Array | ArrayBuffer,
    resultType?: string | DigestType
): string | Uint8Array | ArrayBuffer;
/**
 * Método de classe que calcula o HMAC dos dados de uma mensagem e retorna o código de autenticação
 * no formato hexadecimal.
 * @param {string} hash Função hash que deve ser utilizada pelo algoritmo HMAC. Valores
 * possíveis: 'md5', 'sha1', 'sha224', 'sha256', 'sha384' e 'sha512'.
 * @param {string|Uint8Array|ArrayBuffer} key Chave criptográfica secreta.
 * @param {string|Uint8Array|ArrayBuffer} data Dados que serão usados no cálculo do código de
 * verificação.
 * @return {string} HMAC dos dados acumulados em codificação hexadecimal em caixa baixa.
 */
declare function hexDigest(
    hash: string,
    key: string | Uint8Array | ArrayBuffer,
    data: string | Uint8Array | ArrayBuffer
): string;
type DigestType = typeof import('./DigestType');
