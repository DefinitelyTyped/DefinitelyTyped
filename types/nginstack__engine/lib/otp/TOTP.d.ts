export = TOTP;
/**
 * Classe que agrupa funções de geração e verificação de senhas de uso único baseadas em tempo
 * TOTP (Time-based One-Time Password), conforme [RFC 6238](https://www.rfc-editor.org/rfc/rfc6238).
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
 * const TOTP = require('@nginstack/engine/lib/otp/TOTP.js');
 * const Crypto = require('@nginstack/engine/lib/crypto/Crypto.js');
 *
 * const secret = Crypto.randomBytes(20, 'uint8array');
 * const token = TOTP.generate(secret);
 * TOTP.verify(token, secret); // >= true
 * @constructor
 */
declare function TOTP(): void;
declare class TOTP {}
declare namespace TOTP {
    export { generate, verify, formatKeyUri, TOTPOptions };
}
/**
 * Cria uma senha de uso único que pode ser verificada pelo método {@link #verify} ou por outros
 * aplicativos que implementem o algoritmo TOTP.
 * @param {string|Uint8Array|ArrayBuffer} key Chave única que deve ser mantida em segredo e será
 * utilizada pelo algoritmo HMAC para gerar a senha de uso único.
 * @param {TOTPOptions} [options] Parâmetros opcionais do algoritmo TOTP.
 * @returns {string} Senha de utilização única.
 */
declare function generate(key: string | Uint8Array | ArrayBuffer, options?: TOTPOptions): string;
/**
 * Verifica se uma senha de uso único é válida.
 *
 * É importante garantir que uma senha de uso único verificada por este método não seja reutilizada
 * em mais de uma autenticação, sendo necessário forçar o usuário a aguardar a geração de uma nova
 * senha para realizar uma nova autenticação.
 * @param {string} otp Senha de uso único que deverá ser verificada.
 * @param {string|Uint8Array|ArrayBuffer} key Chave única que deve ser mantida em segredo e será
 * utilizada pelo algoritmo HMAC para gerar a senha de uso único.
 * @param {TOTPOptions} [options] Parâmetros opcionais do algoritmo TOTP.
 * @return {boolean} True se a senha informada for válida.
 */
declare function verify(
    otp: string,
    key: string | Uint8Array | ArrayBuffer,
    options?: TOTPOptions
): boolean;
/**
 * Formata a chave (segredo compartilhado) em uma URI utilizando o esquema
 * [otpauth](https://github.com/google/google-authenticator/wiki/Key-Uri-Format).
 *
 * Essa URI pode ser codificada em um QRCode para que possa ser aberta por aplicativos
 * autenticadores, como o Google Authenticator ou o Microsoft Authenticator, permitindo que
 * esses aplicativos possam ser utilizados para gerar as senhas de uso único
 * associadas à chave informada.
 * @param {string|Uint8Array|ArrayBuffer} key Chave única que deve ser mantida em segredo e será
 * utilizada pelo algoritmo HMAC para gerar a senha de uso único.
 * @param {string} userName Nome do usuário que será autenticado.
 * @param {string} issuer Identificação do sistema. Caso a chave seja utilizada para autenticar
 * usuários do sistema, é recomendado que o nome da base de dados faça parte da identificação do
 * sistema, pois é comum que um usuário se conecte a mais de uma base de dados, como as de
 * produção, homologação e desenvolvimento.
 * @param {TOTPOptions} [options] Parâmetros opcionais do algoritmo TOTP.
 */
declare function formatKeyUri(
    key: string | Uint8Array | ArrayBuffer,
    userName: string,
    issuer: string,
    options?: TOTPOptions
): string;
/**
 * Opções de geração e verificação de senhas de uso único.
 */
interface TOTPOptions {
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
    /**
     * Determina o período em segundos no qual uma senha de uso único
     * permanecerá válida. O algoritmo TOTP utiliza um contador interno que é incrementado a cada
     * `timeStep` a partir do início do Unix Epoch. A cada alteração do contador, uma nova senha
     * única é gerada. O valor atual do contador pode ser obtido pela expressão:
     *
     * `counter = Math.floor((Date.now() / 1000) / timeStep)`
     *
     * Caso não seja informado, serão utilizados passos de 30 segundos. Esse é o valor sugerido pelo
     * [RFC 6238](https://www.rfc-editor.org/rfc/rfc6238) e adotado pelos principais autenticadores
     * TOTP.
     */
    timeStep?: number;
    /**
     * Quantidade de *time-steps* que serão adicionados e subtraídos
     * ao *time-step* atual na verificação de uma senha de uso único. A tolerância é necessária
     * para desconsiderar o tempo de transmissão da senha de uso único para o servidor e as eventuais
     * diferenças de relógio entre o cliente que gerou a senha e o servidor que irá validá-la. Caso
     * não seja informada, será adotada uma tolerância de 1 *time-step*, valor sugerido no
     * [RFC 6238](https://www.rfc-editor.org/rfc/rfc6238).
     */
    tolerance?: number;
    /**
     * Data e hora atual que será utilizada pelo algoritmo TOTP,
     * representada pela quantidade de milissegundos a partir de 1 de Janeiro de 1970 00:00:00 UTC.
     * Caso não seja informada, será utilizada a data e hora local do servidor da base de dados.
     * Valores de *timestamp* negativos não são suportados pelo algoritmo TOTP.
     */
    currentTimestamp?: number;
}
