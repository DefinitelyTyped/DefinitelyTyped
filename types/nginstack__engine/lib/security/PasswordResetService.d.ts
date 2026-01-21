export = PasswordResetService;
/**
 * @typedef {import('../dbkey/DBKey')} DBKey
 * @private
 */
/**
 * @typedef {import('./AdministratorPasswordResetRequest')} AdministratorPasswordResetRequest
 * @private
 */
/**
 * Classe responsável por criar e concluir requisições de redefinição de senhas dos usuários do
 * sistema.
 * @constructor
 */
declare function PasswordResetService(): void;
declare class PasswordResetService {
    /**
     * Solicita a redefinição de senha do usuário administrator
     *
     * Este método criará na classe "Solicitação de redefinição de senha do administrator" (-1898140299)
     * da tabela iSysEvent um registro desta solicitação.
     * @param {number} expiresIn Quantidade de milissegundos a partir da data e hora atual do banco de
     * dados em que a requisição continuará válida.
     * @return {AdministratorPasswordResetRequest} Requisição de definição do usuário administrator.
     */
    requestAdministratorPasswordReset(expiresIn: number): AdministratorPasswordResetRequest;
    /**
     * Conclui a solicitação da redefinição de senha do usuário administrator.
     *
     * Na versão atual, é exigido que o fornecedor do sistema autorize a redefinição da senha do
     * usuário administrator.
     * @param {number} requestKey Chave da solicitação gerada pelo método
     * `requestAdministratorPasswordReset`. Para obter a chave da solicitação, acesse a propriedade
     * `AdministratorPasswordResetRequest.prototype.key`.
     * @param {string} authCode Código de autorização gerado pelo método
     * `AdministratorPasswordResetRequest.prototype.authorize`.
     * @param {string} newPassword Nova senha do usuário.
     */
    resetAdministratorPassword(requestKey: number, authCode: string, newPassword: string): void;
    /**
     * Envia um e-mail para o usuário com um código de redefinição de senha.
     *
     * O código será enviado para a conta de e-mail informada no cadastro do usuário. Será
     * gerado um erro caso não haja uma conta de e-mail cadastrada ou se a política de autenticação
     * não permitir a redefinição de senhas diretamente pelos usuários.
     *
     * O código enviado no e-mail deve ser informado ao método
     * {@link module:@nginstack/engine/lib/security/PasswordResetService~PasswordResetService#resetPassword}
     * para concluir a redefinição da senha do usuário. Esse código terá uma validade estabelecida pela
     * política de autenticação associada ao usuário.
     * @example
     *  const PasswordResetService = require('@nginstack/engine/lib/security/PasswordResetService');
     *
     *  const passwordResetService = new PasswordResetService();
     *
     *  const content = 'Recebemos um pedido de redefinição da senha da ' +
     *    'conta "' + DBKey.from(userKey).str('iName') + '" no sistema. ' +
     *    'Para continuar, informe o código <b>{$confirmationCode}</b> na tela ' +
     *    'de redefinição de senha.';
     *
     *  passwordResetService.sendPasswordResetEmail(userKey, {
     *    senderName: vendor.systemName + ' ' + dbCache.dbName.toUpperCase(),
     *    htmlContent: content
     *  });
     * @param {DBKey|number} userKey Chave do usuário que terá a sua senha redefinida.
     * @param {Object} options Opções da redefinição da senha.
     * @param {string} [options.senderName] Nome do remetente do e-mail. É recomendado que o nome
     * identifique o sistema e a base de dados. Alguns servidores SMTP podem desconsiderar essa
     * configuração e utilizar o nome do usuário associado à conta SMTP.
     * @param {string} [options.htmlContent] Conteúdo HTML do e-mail. O código de redefinição de senha
     * será inserido no lugar da tag `{$confirmationCode}`.
     * @param {string} [options.content] Conteúdo textual do e-mail para os aplicativos de e-mail que
     * não suportam HTML. O código de redefinição de senha será inserido no lugar
     * da tag `{$confirmationCode}`.
     */
    sendPasswordResetEmail(
        userKey: DBKey | number,
        options: {
            senderName?: string;
            htmlContent?: string;
            content?: string;
        }
    ): void;
    /**
     * Verifica se um código de confirmação de senha gerado previamente pelo método
     * {@link module:@nginstack/engine/lib/security/PasswordResetService~PasswordResetService#sendPasswordResetEmail}
     * ainda é válido.
     *
     * Este método irá gerar um erro caso o código de confirmação não seja mais válido ou se ele não
     * tiver sido solicitado pelo usuário. Ele também será chamado automaticamente pelo método
     * `resetPassword` e deve ser utilizado apenas quando for necessário validar o código antes de
     * obter a nova senha do usuário.
     * @param {DBKey|number} userKey Chave do usuário que terá a sua senha redefinida.
     * @param {string} confirmationCode Código de confirmação enviado ao usuário por e-mail.
     */
    validateConfirmationCode(userKey: DBKey | number, confirmationCode: string): void;
    /**
     * Efetiva a redefinição de senha de um usuário iniciada previamente pelo método
     * {@link module:@nginstack/engine/lib/security/PasswordResetService~PasswordResetService#sendPasswordResetEmail}.
     *
     * Este método irá gerar um erro caso o código de confirmação não seja mais válido ou se ele não
     * tiver sido solicitado pelo usuário.
     * @param {DBKey|number} userKey Chave do usuário que terá a sua senha redefinida.
     * @param {string} confirmationCode Código de confirmação enviado ao usuário por e-mail.
     * @param {string} newPassword Nova senha do usuário.
     */
    resetPassword(userKey: DBKey | number, confirmationCode: string, newPassword: string): void;
}
declare namespace PasswordResetService {
    export { DBKey, AdministratorPasswordResetRequest };
}
type DBKey = import('../dbkey/DBKey');
type AdministratorPasswordResetRequest = import('./AdministratorPasswordResetRequest');
