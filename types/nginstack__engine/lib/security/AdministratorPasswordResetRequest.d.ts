export = AdministratorPasswordResetRequest;
/**
 * @typedef {import('../crypto/RSACryptoPKey')} RSACryptoPKey
 * @private
 */
/**
 * Requisição da redefinição da senha do usuário "administrator".
 *
 * Este objeto é construído pelo
 * {@link module:@nginstack/engine/lib/security/PasswordResetService~PasswordResetService} e
 * suas propriedades não podem ser modificadas uma vez que a requisição tenha sido criada.
 *
 * Na versão atual, é exigido que o fornecedor do sistema autorize a redefinição da senha, sendo o
 * seu uso voltado para a redefinição da senha do usuário especial "administrator".
 * @constructor
 */
declare function AdministratorPasswordResetRequest(): void;
declare class AdministratorPasswordResetRequest {
    /**
     * Chave da requisição na tabela iSysEvent.
     * @type {number}
     */
    key: number;
    /**
     * Chave do usuário que deverá ter a senha redefinida.
     * @type {number}
     */
    userKey: number;
    /**
     * Nome do usuário que deverá ter a senha redefinida.
     * @type {string}
     */
    userName: string;
    /**
     * Chave do usuário que solicitou a redefinição da senha.
     * @type {number}
     */
    requesterKey: number;
    /**
     * Nome do usuário que solicitou a redefinição da senha.
     * @type {string}
     */
    requesterName: string;
    /**
     * Chave do licenciador do produto Engine, utilizada para identificar a base onde ocorreu a
     * requisição.
     * @type {number}
     */
    licenserKey: number;
    /**
     * Nome da empresa licenciada do produto Engine, utilizado para identificar a base onde ocorreu
     * a requisição.
     * @type {string}
     */
    licenseeName: string;
    /**
     * CNPJ da empresa licenciada do produto Engine, utilizado para identificar a base onde ocorreu
     * a requisição.
     * @type {string}
     */
    licenseeId: string;
    /**
     * Nome da base onde foi solicitada a redefinição da senha.
     * @type {string}
     */
    dbName: string;
    /**
     * Data e hora UTC da criação da requisição.
     * @type {Date}
     */
    utcCreatedAt: Date;
    /**
     * Data e hora UTC limite de até quando a requisição pode ser aceita.
     * @type {Date}
     */
    utcExpiresAt: Date;
    /**
     * Data e hora UTC em requisição foi concluída com a redefinição da senha.
     * @type {Date}
     */
    utcFinishedAt: Date;
    /**
     * Autoriza a requisição e retorna o código de autorização que poderá ser utilizada para redefinir
     * a senha no método `PasswordResetService.prototype.confirmAdministratorPasswordReset`.
     * @param {RSACryptoPKey} privateKey Chave privada representada por uma instância de RSACryptoPKey.
     * @return {string} Código de autorização que poderá ser utilizado para redefinir a senha.
     */
    authorize(privateKey: RSACryptoPKey): string;
    /**
     * Verifica se o código de autorização informado é válido.
     * @param {string} authorizationCode Código de autorização a ser verificado.
     * @return {boolean} True se o código de autorização é válido.
     */
    verifyAuthorization(authorizationCode: string): boolean;
    /**
     * Cria uma representação serializada da requisição que poderá ser restaurada posteriormente pelo
     * método {@link .fromString}.
     * @return {string} Representação serializada da requisição.
     */
    toString(): string;
}
declare namespace AdministratorPasswordResetRequest {
    export { fromString, RSACryptoPKey };
}
/**
 * Recria uma requisição a partir da sua representação serializada gerada pelo método
 * {@link #toString}.
 * @param {string} data Requisição serializada que será restaurada.
 * @return {AdministratorPasswordResetRequest} Requisição que tinha sido previamente serializada pelo método
 * {@link #toString}.
 */
declare function fromString(data: string): AdministratorPasswordResetRequest;
type RSACryptoPKey = import('../crypto/RSACryptoPKey');
