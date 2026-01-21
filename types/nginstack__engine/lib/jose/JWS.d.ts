export = JWS;
/**
 * Classe utilizada para geração, leitura e validação de tokens JWS.
 *
 * A versão atual não suporta tokens com conteúdo binário, apenas tokens formados por um conjunto de
 * declarações.
 *
 * O formato de serialização utilizado é o formato {@link https://tools.ietf.org/html/rfc7515#section-7.1 compacto}.
 * @constructor
 */
declare function JWS(): void;
declare class JWS {
    /** @private */
    private registeredHeaders_;
    headers: Record<string, string | number | boolean>;
    claims: Record<string, string | number | boolean>;
    /** @private */
    private registeredClaims_;
    algorithm: string;
    /**
     * Identifica o emissor do token.
     *
     * Esta propriedade corresponde à declaração "iss" em
     * {@link module:@nginstack/engine/lib/jose/JWS~JWS#claims claims}. Ao ler ou atribuir esta
     * propriedade, o valor será lido ou atribuído em
     * {@link module:@nginstack/engine/lib/jose/JWS~JWS#claims claims}.
     * @example
     * const jws = new JWS();
     * jws.issuer = 'NGINSTACK';
     * jws.claims.iss // => 'NGINSTACK'
     * @type {string}
     */
    issuer: string;
    /**
     * Identifica o assunto ao qual o token se refere.
     *
     * Esta propriedade corresponde à declaração "sub" em
     * {@link module:@nginstack/engine/lib/jose/JWS~JWS#claims claims}. Ao ler ou atribuir esta
     * propriedade, o valor será lido ou atribuído em
     * {@link module:@nginstack/engine/lib/jose/JWS~JWS#claims claims}.
     * @example
     * const jws = new JWS();
     * jws.subject = 'test';
     * jws.claims.sub // => 'test'
     * @type {string}
     */
    subject: string;
    /**
     * Identifica a quem esse token se destina. O token deverá ser rejeitado se o valor informado não
     * for o esperado por quem for processar o token.
     *
     * Esta propriedade corresponde à declaração "aud" em
     * {@link module:@nginstack/engine/lib/jose/JWS~JWS#claims claims}. Ao ler ou atribuir esta
     * propriedade, o valor será lido ou atribuído em
     * {@link module:@nginstack/engine/lib/jose/JWS~JWS#claims claims}.
     * @example
     * const jws = new JWS();
     * jws.audience = 'test';
     * jws.claims.aud // => 'test'
     * @type {string}
     */
    audience: string;
    /**
     * Identifica o momento em que esse token foi emitido. No momento da assinatura, se essa propriedade
     * não estiver preenchida, ela será preenchida automaticamente. Esse comportamento pode ser desativado
     * informando a propriedade 'disableDefaultTimestamp' com valor 'true' nas opções de assinatura.
     *
     * Esta propriedade corresponde à declaração "iat" em
     * {@link module:@nginstack/engine/lib/jose/JWS~JWS#claims claims}. Ao ler ou atribuir esta
     * propriedade, o valor será lido ou atribuído em
     * {@link module:@nginstack/engine/lib/jose/JWS~JWS#claims claims}.
     * @example
     * const jws = new JWS();
     * jws.issuedAt = new Date();
     * jws.claims.iat // => (date in seconds)
     * @type {Date}
     */
    issuedAt: Date;
    /**
     * Identifica o momento em que esse token passa a valer. Ao ler um token, se essa propriedade
     * estiver definida e corresponder a um momento no futuro, o token deve ser rejeitado.
     *
     * Esta propriedade corresponde à declaração "nbf" em
     * {@link module:@nginstack/engine/lib/jose/JWS~JWS#claims claims}. Ao ler ou atribuir esta
     * propriedade, o valor será lido ou atribuído em
     * {@link module:@nginstack/engine/lib/jose/JWS~JWS#claims claims}.
     * @example
     * const jws = new JWS();
     * jws.notBefore = new Date();
     * jws.notBefore  // => (date object)
     * jws.claims.nbf // => (date in seconds)
     * @type {Date}
     */
    notBefore: Date;
    /**
     * Identifica o momento a partir do qual esse token deve ser considerado expirado. Ao ler um token,
     * se essa propriedade estiver definida e corresponder a um momento no passado, o token deve ser
     * rejeitado.
     *
     * Esta propriedade corresponde à declaração "exp" em
     * {@link module:@nginstack/engine/lib/jose/JWS~JWS#claims claims}. Ao ler ou atribuir esta
     * propriedade, o valor será lido ou atribuído em
     * {@link module:@nginstack/engine/lib/jose/JWS~JWS#claims claims}.
     * @example
     * const jws = new JWS();
     * jws.expiresAt = incDate(new Date());
     * jws.expiresAt  // => (date object)
     * jws.claims.exp // => (date in seconds)
     * @type {Date}
     */
    expiresAt: Date;
    /**
     * Identificador único do token. O emissor do token deve garantir que dois tokens não possuam um
     * mesmo valor para essa propriedade.
     *
     * Esta propriedade corresponde à declaração "jti" em
     * {@link module:@nginstack/engine/lib/jose/JWS~JWS#claims claims}.
     * Ao ler ou atribuir esta propriedade, o valor será lido ou atribuído em
     * {@link module:@nginstack/engine/lib/jose/JWS~JWS#claims claims}.
     * @example
     * const jws = new JWS();
     * jws.jwtId = 'A unique ID';
     * jws.claims.jti // => 'A unique ID'
     * @type {string}
     */
    jwtId: string;
    /**
     * Identifica a chave que foi utilizada para assinar este token.
     *
     * Esta propriedade corresponde à declaração "kid" em
     * {@link module:@nginstack/engine/lib/jose/JWS~JWS#headers headers}. Ao ler ou atribuir esta
     * propriedade, o valor será lido ou atribuído em
     * {@link module:@nginstack/engine/lib/jose/JWS~JWS#headers headers}.
     * @example
     * const jws = new JWS();
     * jws.keyId = 'A unique ID';
     * jws.headers.kid // => 'A unique ID'
     * @type {string}
     */
    keyId: string;
    /**
     * Identifica os cabeçalhos críticos. Cabeçalhos críticos precisam ser suportados pelo receptor do
     * token.
     * @type {Array}
     */
    criticalHeaders: any[];
    /**
     * Realiza a assinatura deste token, retornando uma string com a sua representação compacta.
     *
     * Se o conteúdo for um objeto e não houver a propriedade 'iat' preenchida, ela será preenchida
     * automaticamente com data e hora corrente. Esse comportamento pode ser desativado informando a
     * propriedade 'disableDefaultTimestamp' com valor 'true' nas opções de assinatura.
     * @example
     * const jws = new JWS();
     * jws.issuer = 'NGINSTACK';
     * jws.claims.name = 'José';
     * const token = jws.sign('password');
     * @example
     * const privateKey = CryptoPKey.importPrivateKey('der', File.stringFromFile('filename'), 'RSA');
     * const jws = new JWS();
     * jws.issuer = 'NGINSTACK';
     * jws.claims.name = 'José';
     * jws.algorithm = Algorithm.RS256;
     * const token = jws.sign(privateKey);
     * @param {string|CryptoPKey} key Chave de criptografia utilizada na assinatura. Se for uma
     * instância de CryptoPKey, nela deve haver uma chave privada criada ou importada.
     * @param {Object} [options] Parâmetros adicionais.
     * @param {boolean} [options.disableDefaultTimestamp] Informa que a propriedade 'iat' do token
     * gerado não deve ser preenchida com a data atual, caso não tenha sido informada.
     * @returns {string} Token montado e assinado.
     */
    sign(
        key: string | CryptoPKey,
        options?: {
            disableDefaultTimestamp?: boolean;
        }
    ): string;
}
declare namespace JWS {
    export { sign, parse, parseHeader, verify, VerifyOptions };
}
import CryptoPKey = require('../crypto/CryptoPKey.js');
/**
 * Realiza a assinatura dos dados do token. Se o conteúdo for um objeto e não houver a propriedade
 * 'iat' preenchida, ela será preenchida automaticamente com data e hora corrente. Esse comportamento
 * pode ser desativado informando a propriedade 'disableDefaultTimestamp' com valor 'true' nas opções
 * de assinatura.
 * @param {Object} payload Objeto com as declarações.
 * @param {string|ArrayBuffer|Uint8Array|CryptoPKey} key Chave de criptografia utilizada na assinatura.
 * Se for uma instância de CryptoPKey, nela deve haver uma chave privada criada ou importada.
 * Se for uma String, será utilizada a sua representação binária em UTF-8.
 * @param {Object} [options] Parâmetros adicionais.
 * @param {string} [options.algorithm] Identifica o algoritmo criptográfico utilizado para assinar
 * este token.
 * @param {string} [options.issuer] Identifica o emissor do token.
 * @param {string} [options.subject] Identifica o assunto ao qual o token se refere.
 * @param {string} [options.audience] Identifica a quem esse token se destina.
 * @param {Date} [options.issuedAt] Identifica o momento em que esse token foi emitido.
 * @param {Date} [options.notBefore] Identifica o momento em que esse token passa a valer.
 * @param {Date} [options.expiresAt] Identifica o momento a partir do qual esse token deve ser
 * considerado expirado.
 * @param {string} [options.jwtId] Identificador único do token.
 * @param {string} [options.keyId] Identifica a chave que foi utilizada para assinar este token.
 * @param {Object} [options.customHeaders] Identifica os cabeçalhos customizados.
 * @param {Array} [options.criticalHeaders] Identifica os cabeçalhos críticos.
 * @param {boolean} [options.disableDefaultTimestamp] Informa que a propriedade 'iat' do token
 * gerado não deve ser preenchida com a data atual, caso não tenha sido informada.
 * @returns {string} Token JWS assinado.
 */
declare function sign(
    payload: any,
    key: string | ArrayBuffer | Uint8Array | CryptoPKey,
    options?: {
        algorithm?: string;
        issuer?: string;
        subject?: string;
        audience?: string;
        issuedAt?: Date;
        notBefore?: Date;
        expiresAt?: Date;
        jwtId?: string;
        keyId?: string;
        customHeaders?: any;
        criticalHeaders?: any[];
        disableDefaultTimestamp?: boolean;
    }
): string;
/**
 * Realiza o parse e validação do token recebido, retornando uma instância da classe JWS.
 * @example
 * const jws = JWS.parse('AAA.BBB.CCC', 'password');
 * @example
 * const publicKey = CryptoPKey.importPublicKey('der', File.stringFromFile('filename'), 'RSA');
 * const jws = JWS.parse('AAA.BBB.CCC', publicKey);
 * @param {string} token Token para leitura.
 * @param {string|ArrayBuffer|Uint8Array|CryptoPKey} key Chave de criptografia utilizada na validação da assinatura. Se
 * for uma instância de CryptoPKey, nela deve haver uma chave pública criada ou importada.
 * Se for uma String, será utilizada a sua representação binária em UTF-8.
 * @param {VerifyOptions} [options]  Opções de verificação do token.
 * @returns {JWS} Instância da classe JWS populada com os dados do token.
 */
declare function parse(
    token: string,
    key: string | ArrayBuffer | Uint8Array | CryptoPKey,
    options?: VerifyOptions
): JWS;
/**
 * Realiza o parse apenas do cabeçalho, sem realizar qualquer validação. Este método é util, por
 * exemplo, para obter o identificador da chave JWK utilizada na assinatura do token.
 * @param {string} token Token JWS que se deseja inspecionar os dados do cabeçalho.
 * @returns {Object} Objeto javascript com as propriedades correspondendo aos campos do cabeçalho.
 */
declare function parseHeader(token: string): any;
/**
 * Verifica a assinatura e demais informações contidas no token.
 * Entre as opções passadas pode haver opções de desativação de verificação de algum ponto como
 * data de expiração, por exemplo.
 * @param {string} token Conteúdo do token a ser validado.
 * @param {string|CryptoPKey} key Chave de criptografia que deve ser utilizada na validação. Se
 * for uma instância de CryptoPKey, nela deve haver uma chave pública criada ou importada.
 * @param {VerifyOptions} [options] Opções de verificação do token.
 * @returns {Object} Objeto que representa o conteúdo do token.
 */
declare function verify(token: string, key: string | CryptoPKey, options?: VerifyOptions): any;
/**
 * Opções de verificação do token.
 */
interface VerifyOptions {
    /**
     * Informa o valor, ou conjunto de valores esperados para
     * propriedade 'sub' do token lido.
     */
    subject?: string | any[];
    /**
     * Informa o valor, ou conjunto de valores esperados para
     * propriedade 'aud' do token lido.
     */
    audience?: string | any[];
    /**
     * Informa o valor, ou conjunto de valores esperados para
     * propriedade 'iss' do token lido.
     */
    issuer?: string | any[];
    /**
     * Informa se a data de início da validade do token ('nbf')
     * deve ser ignorada durante a validação.
     */
    ignoreNotBefore?: boolean;
    /**
     * Informa se a data de expiração do token ('exp') deve ser
     * ignorada durante a validação.
     */
    ignoreExpiresAt?: boolean;
    /**
     * Informa se a data de emissão do token ('iat') deve ser
     * ignorada durante a validação.
     */
    ignoreIssuedAt?: boolean;
    /**
     * Data que deve ser utilizada como base durante as validações
     * de marca de tempo do token('iat', 'exp', 'nbf').
     */
    currentDate?: Date;
    /**
     * Informa o tempo de tolerância, em segundos, a ser considerado
     * durante as validações de marca de tempo do token('iat', 'exp', 'nbf').
     */
    clockTolerance?: number;
    /**
     * Lista de nomes dos cabeçalhos críticos que são suportados.
     */
    criticalHeaders?: any[];
    /**
     * Nome do algoritmo esperado para o token.
     */
    algorithm?: string;
}
