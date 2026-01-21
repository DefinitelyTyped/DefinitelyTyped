export = HOTP;
/**
 * @typedef {Object} HOTPOptions Opções de geração e verificação de senhas de uso único.
 * @property {number} [digits] Quantidade de dígitos. Caso não seja informado, será
 * utilizada uma senha de 6 dígitos.
 * @property {string} [algorithm] Algoritmo de hash que será utilizado pelo HMAC para gerar a
 * senha de uso único. São suportados os seguintes algoritmos: `'sha1'`, `'sha256'` e `'sha512'`.
 * Caso não seja informado, será utilizado o `'sha1'`.
 */
/**
 * Classe que agrupa funções de geração e verificação de senhas de uso único baseadas em hash
 * HOTP (Hash-based One-Time Password), conforme [RFC 4226](http://tools.ietf.org/html/rfc4226).
 *
 * As chaves informadas nos métodos desta classe devem ser uma sequência de bytes aleatórios ou
 * devem ser geradas por algoritmos de derivação de chaves para fins criptográficos. Elas devem
 * ter um tamanho adequado para o algoritmo de hash adotado e devem ser mantidas em segredo,
 * devendo ser compartilhadas apenas com o gerador e o verificador de senhas.
 *
 * Esta classe trata as *strings* como se fossem uma sequência de bytes no formato conhecido
 * como "Binary String", onde cada caractere da *string* representa um byte do conteúdo binário. É
 * importante observar que a codificação adotada pode ser diferente em outras plataformas, como o
 * Node.js. Para garantir compatibilidade com as senhas geradas por outras plataformas, prefira
 * sempre informar valores do tipo `Uint8Array` ou `ArrayBuffer`, evitando a codificação
 * implícita das *strings*.
 * @example
 * const HOTP = require('@nginstack/engine/lib/otp/HOTP.js');
 * const Crypto = require('@nginstack/engine/lib/crypto/Crypto.js');
 *
 * const secret = Crypto.randomBytes(20, 'uint8array');
 * const counter = 20;
 * const token = HOTP.generate(secret, counter);
 * HOTP.verify(token, secret, counter); // >= true
 * @constructor
 */
declare function HOTP(): void;
declare class HOTP {}
declare namespace HOTP {
    export { generate, verify, HOTPOptions };
}
/**
 * Cria uma senha de uso único que pode ser verificada pelo método {@link #verify} ou por outros
 * aplicativos que implementem o algoritmo HOTP.
 * @param {string|Uint8Array|ArrayBuffer} key Chave única que deve ser mantida em segredo e será
 * utilizada pelo algoritmo HMAC para gerar a senha de uso único.
 * @param {number} counter Contador, tempo ou outro valor que é alterado a cada senha gerada.
 * Valores negativos não são suportados pelo algoritmo HOTP e são tratados como zero.
 * @param {HOTPOptions} [options] Parâmetros opcionais do algoritmo HOTP.
 * @returns {string} Senha de utilização única.
 */
declare function generate(
    key: string | Uint8Array | ArrayBuffer,
    counter: number,
    options?: HOTPOptions
): string;
/**
 * Verifica se uma senha de uso único é válida.
 *
 * Como o contador é incrementado a cada senha gerada e verificada, eventualmente pode ocorrer
 * uma dessincronização entre o contador do cliente que está gerando a senha e do servidor
 * que está verificando. Por esse motivo, é recomendado que esta função seja chamada
 * para o valor do contador esperado pelo servidor e para alguns valores seguintes.
 * Caso algum deles satisfaça a verificação, o servidor deve ajustar o contador para o
 * valor que resultou o teste bem sucedido acrescido de um.
 * @param {string} otp Senha de uso único que deverá ser verificada.
 * @param {string|Uint8Array|ArrayBuffer} key Chave única que deve ser mantida em segredo e será
 * utilizada pelo algoritmo HMAC para gerar a senha de uso único.
 * @param {number} counter Contador, tempo ou outro valor que é alterado a cada senha gerada.
 * Valores negativos não são suportados pelo algoritmo HOTP e são tratados como zero.
 * @param {HOTPOptions} [options] Parâmetros opcionais do algoritmo HOTP.
 * @return {boolean} True se a senha informada for válida.
 */
declare function verify(
    otp: string,
    key: string | Uint8Array | ArrayBuffer,
    counter: number,
    options?: HOTPOptions
): boolean;
/**
 * Opções de geração e verificação de senhas de uso único.
 */
interface HOTPOptions {
    /**
     * Quantidade de dígitos. Caso não seja informado, será
     * utilizada uma senha de 6 dígitos.
     */
    digits?: number;
    /**
     * Algoritmo de hash que será utilizado pelo HMAC para gerar a
     * senha de uso único. São suportados os seguintes algoritmos: `'sha1'`, `'sha256'` e `'sha512'`.
     * Caso não seja informado, será utilizado o `'sha1'`.
     */
    algorithm?: string;
}
