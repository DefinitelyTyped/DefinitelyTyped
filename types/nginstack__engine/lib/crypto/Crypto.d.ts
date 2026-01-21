export = Crypto;
/**
 * @typedef {Object} EncryptOptions Opções adicionais das funções de criptografia.
 * @property {Uint8Array|ArrayBuffer} [aad] Dados adicionais que não são encriptados, mas são
 * autenticados pela tag de autenticação gerada na encriptação dos dados. Atualmente, apenas o
 * algoritmo `Crypto.AES_GCM` suporta a autenticação de dados adicionais.
 * @property {number} [authTagLength] Tamanho da tag de autenticação que deve ser gerada. Caso
 * não seja informado, será utilizada uma tag de 16 bytes para o algoritmo `Crypto.AES_GCM`.
 */
/**
 * @typedef {Object} DecryptOptions Opções adicionais das funções de descriptografia.
 * @property {Uint8Array|ArrayBuffer} [aad] Dados adicionais que não são encriptados, mas são
 * autenticados pela tag de autenticação gerada na encriptação dos dados. Atualmente, apenas o
 * algoritmo `Crypto.AES_GCM` suporta a autenticação de dados adicionais.
 * @property {Uint8Array|ArrayBuffer} [authTag] Tag de autenticação gerada na encriptação dos
 * dados com autenticação que garante que os dados encriptados e os dados adicionais de
 * autenticação (`aad`) estão corretos. Ver a função `Crypto.encryptBytesWithAuth` para mais
 * detalhes da geração da tag de autenticação.
 * @property {number} [authTagLength] Tamanho da tag de autenticação que deve ser verificada. Caso
 * não seja informado, será utilizada uma tag de 16 bytes para o algoritmo `Crypto.AES_GCM`.
 */
/**
 * Classe que agrupa funções de criptografia simétricas, geradores de chaves e de valores
 * aleatórios. Não devem ser construídas instâncias de Crypto, devendo ser utilizados os métodos
 * e propriedades estáticas desta classe.
 * @constructor
 */
declare function Crypto(): void;
declare class Crypto {}
declare namespace Crypto {
    export {
        encrypt,
        encryptBytes,
        encryptBytesWithAuth,
        decrypt,
        decryptBytes,
        randomBytes,
        scrypt,
        AES_ECB,
        AES_CBC,
        AES_GCM,
        DES_ECB,
        DES_CBC,
        DES_CFB,
        DES_OFB,
        DES3_ECB,
        DES3_CBC,
        DES3_CFB,
        DES3_OFB,
        BLOWFISH_ECB,
        BLOWFISH_CBC,
        BLOWFISH_CFB,
        BLOWFISH_OFB,
        RC2_ECB,
        RC2_CBC,
        RC2_CFB,
        RC2_OFB,
        EncryptOptions,
        DecryptOptions,
    };
}
/**
 * Realiza uma operação de encriptação usando um algoritmo de criptografia simétrica. A encriptação
 * dos dados é realizada em uma única chamada, sendo recomendado o uso deste método
 * apenas para pequenos volumes de dados, que possam ser alocados totalmente em memória.
 *
 * Esta função trata as *strings* como se fossem uma sequência de bytes no formato conhecido
 * por "Binary String", onde cada caractere da *string* representa um byte do conteúdo binário.
 * Para encriptar conteúdos binários ou textos que não sejam ASCII, é recomendado o uso da função
 * `Crypto.encryptBytes`. Para encriptar *strings*, utilize a classe `TextEncoder` para converter
 * uma string em um Uint8Array, tornando explícita a codificação adotada.
 * @param {string} data O dado a ser encriptado.
 * @param {string|Uint8Array|ArrayBuffer} key A chave de criptografia.
 * @param {string} [cipher] O nome da cifra, sendo *AES_ECB* o valor padrão.
 * @param {string|Uint8Array|ArrayBuffer} [iv] Vetor de inicialização.
 * @returns {string} O dado encriptado
 * @see #decrypt
 */
declare function encrypt(
    data: string,
    key: string | Uint8Array | ArrayBuffer,
    cipher?: string,
    iv?: string | Uint8Array | ArrayBuffer
): string;
/**
 * Realiza uma operação de encriptação usando um algoritmo de criptografia simétrica.
 * A encriptação dos dados é realizada em uma única chamada, sendo recomendado o uso deste método
 * apenas para pequenos volumes de dados, que possam ser alocados totalmente em memória.
 * @param {string} cipher Algoritmo de criptografia que deve ser utilizado.
 * @param {Uint8Array|ArrayBuffer} data O dado a ser encriptado.
 * @param {Uint8Array|ArrayBuffer} key A chave de criptografia.
 * @param {Uint8Array|ArrayBuffer} iv Vetor de inicialização.
 * @param {EncryptOptions} [options] Opções adicionais do algoritmo de criptografia.
 * @returns {Uint8Array} O dado encriptado.
 * @see #decryptBytes
 */
declare function encryptBytes(
    cipher: string,
    data: Uint8Array | ArrayBuffer,
    key: Uint8Array | ArrayBuffer,
    iv: Uint8Array | ArrayBuffer,
    options?: EncryptOptions
): Uint8Array;
/**
 * Realiza uma operação de encriptação usando um algoritmo de criptografia simétrica com
 * autenticação de dados. A encriptação dos dados é realizada em uma única chamada, sendo
 * recomendado o uso deste método apenas para pequenos volumes de dados, que possam ser alocados
 * totalmente em memória.
 *
 * Este método deve ser utilizado apenas com algoritmos que suportam a autenticação dos dados
 * encriptados. Atualmente, apenas o algoritmo `Crypto.AES_GCM` é suportado.
 *
 * Diferentemente dos métodos `encrypt` e `encryptBytes`, que retornam os dados criptografados,
 * este método retorna um objeto contendo duas propriedades:
 *
 *  - `data`: dados criptografados.
 *  - `authTag`: tag de autenticação que deverá ser informada ao método decryptBytes para
 * verificar a autenticidade dos dados descriptografados.
 *
 * @example
 * const Crypto = require('@nginstack/engine/lib/crypto/Crypto.js');
 * const textEncoder = new TextEncoder();
 * const plainData = textEncoder.encode('Test');
 * const key = Crypto.randomBytes(32);
 * const iv = Crypto.randomBytes(12); // In production usage, use a 12 byte nonce
 * const aad = textEncoder.encode('auth data');
 * const result = Crypto.encryptBytesWithAuth(Crypto.AES_GCM, plainData, key, iv, {
 *   aad: aad
 * });
 *
 * const cipherData = result.data;
 * const authTag = result.authTag;
 * const originalData = Crypto.decryptBytes(Crypto.AES_GCM, cipherData, key, iv, {
 *   aad: aad,
 *   authTag: authTag
 * });
 * new TextDecoder().decode(originalData); // => 'Test'
 * @param {string} cipher Algoritmo de criptografia que deve ser utilizado.
 * @param {Uint8Array|ArrayBuffer} data O dado a ser encriptado.
 * @param {Uint8Array|ArrayBuffer} key A chave de criptografia.
 * @param {Uint8Array|ArrayBuffer} iv Vetor de inicialização.
 * @param {EncryptOptions} [options] Opções adicionais do algoritmo de criptografia.
 * @returns {{data: Uint8Array, authTag: Uint8Array}} Dados encriptados e a tag de autenticação
 * dos dados.
 * @see #decryptBytes
 * @see #encryptBytes
 */
declare function encryptBytesWithAuth(
    cipher: string,
    data: Uint8Array | ArrayBuffer,
    key: Uint8Array | ArrayBuffer,
    iv: Uint8Array | ArrayBuffer,
    options?: EncryptOptions
): {
    data: Uint8Array;
    authTag: Uint8Array;
};
/**
 * Decodifica um conteúdo encriptado usando um algoritmo de criptografia simétrica.
 *
 * Esta função trata as *strings* como se fossem uma sequência de bytes no formato conhecido
 * por "Binary String", onde cada caractere da *string* representa um byte do conteúdo binário.
 *
 * Para desencriptar conteúdos binários ou textos que não sejam ASCII, é recomendado o uso da função
 * `Crypto.decryptBytes`. Para desencriptar *strings*, utilize a classe `TextEncoder` para converter
 * uma string em um Uint8Array, tornando explícita a codificação adotada.
 * @param {string} data O dado a ser decodificado.
 * @param {string|Uint8Array|ArrayBuffer} key A chave de criptografia.
 * @param {string} [cipher] O nome da cifra, sendo *AES_ECB* o valor padrão.
 * @param {string|Uint8Array|ArrayBuffer} [iv]  Vetor de inicialização
 * @returns {string} O dado decodificado.
 * @see #encrypt
 */
declare function decrypt(
    data: string,
    key: string | Uint8Array | ArrayBuffer,
    cipher?: string,
    iv?: string | Uint8Array | ArrayBuffer
): string;
/**
 * Decodifica um conteúdo encriptado usando um algoritmo de criptografia simétrica.
 * @param {string} cipher O nome da cifra, sendo *AES_ECB* o valor padrão.
 * @param {Uint8Array|ArrayBuffer} data O dado a ser decodificado.
 * @param {Uint8Array|ArrayBuffer} key A chave de criptografia.
 * @param {Uint8Array|ArrayBuffer} iv Vetor de inicialização.
 * @param {DecryptOptions} [options] Opções adicionais do algoritmo de criptografia.
 * @returns {Uint8Array} O dado decodificado.
 * @see #encryptBytes
 */
declare function decryptBytes(
    cipher: string,
    data: Uint8Array | ArrayBuffer,
    key: Uint8Array | ArrayBuffer,
    iv: Uint8Array | ArrayBuffer,
    options?: DecryptOptions
): Uint8Array;
/**
 * Produz uma sequência pseudo-aleatória de bytes.
 * @param {number} size Número de bytes.
 * @param {string} [resultType] O tipo do resultado gerado por esta função. Os valores possíveis são
 * "uint8array", "arraybuffer" e "binarystring". Caso não seja informado, será retornado um
 * ArrayBuffer.
 * @return {ArrayBuffer|Uint8Array|string} Buffer contendo a sequência pseudo-aleatória de
 * bytes gerada.
 */
declare function randomBytes(size: number, resultType?: string): ArrayBuffer | Uint8Array | string;
/**
 * Scrypt é uma função de derivação de chaves projetada para exigir um esforço computacional alto
 * com o objetivo de dificultar ataques de força bruta.
 *
 * O *salt* informado deve ser aleatório e deve ter ao menos 16 bytes, conforme recomendações em
 * [NIST SP 800-132](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-132.pdf).
 *
 * Quando valores do tipo *string* são informados em *password* e *salt*, eles são codificados
 * em UTF-8.
 *
 * Mais detalhes do algoritmo Scrypt podem ser observados em
 * [Wikipedia Scrypt](https://en.wikipedia.org/wiki/Scrypt).
 * @param {Uint8Array|ArrayBuffer|string} password Palavra chave que será digerida pela função.
 * @param {Uint8Array|ArrayBuffer|string} salt Sequência de bytes aleatórios que tem o
 * objetivo de defender o algoritmo contra ataques de dicionário e de ataques pré-computados
 * via "rainbow tables". O salt utilizado deve ser guardado juntamente com o resultado
 * desta função.
 * @param {number} keylen Tamanho em bytes da chave derivada que será gerada por esta função.
 * @param {Object} [params] Parâmetros de esforço computacional do algoritmo Scrypt.
 * @param {number} [params.N] Parâmetro que define o custo de CPU e memória. Deve ser uma potência
 * de dois, maior que um. Valor padrão: 16384.
 * @param {number} [params.r] Parâmetro que define o tamanho do bloco. Valor padrão: 8.
 * @param {number} [params.p] Parâmetro que define a paralelização. Valor padrão: 1.
 * @returns {Uint8Array} Chave derivada gerada a partir da senha informada.
 */
declare function scrypt(
    password: Uint8Array | ArrayBuffer | string,
    salt: Uint8Array | ArrayBuffer | string,
    keylen: number,
    params?: {
        N?: number;
        r?: number;
        p?: number;
    }
): Uint8Array;
declare let AES_ECB: string;
declare let AES_CBC: string;
declare let AES_GCM: string;
declare let DES_ECB: string;
declare let DES_CBC: string;
declare let DES_CFB: string;
declare let DES_OFB: string;
declare let DES3_ECB: string;
declare let DES3_CBC: string;
declare let DES3_CFB: string;
declare let DES3_OFB: string;
declare let BLOWFISH_ECB: string;
declare let BLOWFISH_CBC: string;
declare let BLOWFISH_CFB: string;
declare let BLOWFISH_OFB: string;
declare let RC2_ECB: string;
declare let RC2_CBC: string;
declare let RC2_CFB: string;
declare let RC2_OFB: string;
/**
 * Opções adicionais das funções de criptografia.
 */
interface EncryptOptions {
    /**
     * Dados adicionais que não são encriptados, mas são
     * autenticados pela tag de autenticação gerada na encriptação dos dados. Atualmente, apenas o
     * algoritmo `Crypto.AES_GCM` suporta a autenticação de dados adicionais.
     */
    aad?: Uint8Array | ArrayBuffer;
    /**
     * Tamanho da tag de autenticação que deve ser gerada. Caso
     * não seja informado, será utilizada uma tag de 16 bytes para o algoritmo `Crypto.AES_GCM`.
     */
    authTagLength?: number;
}
/**
 * Opções adicionais das funções de descriptografia.
 */
interface DecryptOptions {
    /**
     * Dados adicionais que não são encriptados, mas são
     * autenticados pela tag de autenticação gerada na encriptação dos dados. Atualmente, apenas o
     * algoritmo `Crypto.AES_GCM` suporta a autenticação de dados adicionais.
     */
    aad?: Uint8Array | ArrayBuffer;
    /**
     * Tag de autenticação gerada na encriptação dos
     * dados com autenticação que garante que os dados encriptados e os dados adicionais de
     * autenticação (`aad`) estão corretos. Ver a função `Crypto.encryptBytesWithAuth` para mais
     * detalhes da geração da tag de autenticação.
     */
    authTag?: Uint8Array | ArrayBuffer;
    /**
     * Tamanho da tag de autenticação que deve ser verificada. Caso
     * não seja informado, será utilizada uma tag de 16 bytes para o algoritmo `Crypto.AES_GCM`.
     */
    authTagLength?: number;
}
