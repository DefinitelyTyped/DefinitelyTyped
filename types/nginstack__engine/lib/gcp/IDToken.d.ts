export = IDToken;
/**
 * Classe usada para gerar um Google OpenID Connect token de autenticação válido no Google Cloud
 * @constructor
 */
declare function IDToken(): void;
declare class IDToken {
    /**
     * Armazena o path do último arquivo lido com as credenciais de acesso do Google Cloud
     * @type {string}
     * @private
     */
    private credentialsPathCache_;
    /**
     * Armazena um plain object gerado do conteúdo JSON do último arquivo lido com as credenciais de
     * acesso do Google Cloud
     * @type {object}
     * @private
     */
    private credentialsContentCache_;
    /**
     * Obtém um Google ID Token associado à conta de serviço da máquina. Deve ser usado apenas
     * quando a aplicação está sendo executada dentro de um servidor no Google Compute Engine.
     * @param {string} targetAudience Conteúdo do campo aud a ser preenchido no token
     * @return {string} O ID Token gerado
     */
    fetchFromComputeEngine(targetAudience: string): string;
    private formatJWT_;
    private getResponsePlainObject_;
    /**
     * Obtém um Google ID Token associado à conta de serviço obtido a partir do arquivo de credenciais
     * definido na variável de ambiente GOOGLE_APPLICATION_CREDENTIALS
     * @param {string} targetAudience Conteúdo do campo *aud* a ser preenchido no token, usualmente uma
     * URL
     * @return {string} O IDToken gerado, com expiração em sessenta minutos após a hora corrente
     */
    fetchFromServiceAccount(targetAudience: string): string;
}
