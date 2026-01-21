export = ProductManager;
/**
 * Classe que permite criação e o controle dos produtos/módulos desenvolvidos no sistema.
 *
 * Ao criar um produto é reservada uma faixa única de chaves negativas que é associada ao
 * nome do produto. O registro de um produto é público, global e distribuído em conjunto com Engine.
 *
 * Após a criação do produto, a empresa desenvolvedora deve escolher uma base para ativar o seu
 * desenvolvimento. Essa base será responsável por criar os registros de chave negativa que irão
 * compor o produto desenvolvido e também será utilizada para criar licenças de uso para os
 * eventuais clientes usuários desse produto.
 * @constructor
 */
declare function ProductManager(): void;
declare class ProductManager {
    /**
     * Cria um novo produto do sistema.
     * @param {Object} productIndo Dados do produto a ser criado.
     * @param {string} productIndo.name Nome do produto.
     * @param {number} productIndo.keyQuantity Quantidade de chaves negativas reservadas ao produto.
     * @param {string} [productIndo.keyList] Lista de chaves que fazem parte do produto, mas não compõem
     * a faixa de chaves.
     * @param {number|string} [productInfo.requiredProducts] Chave ou uma lista de chaves separada por
     * "," dos produtos que são requeridos para o funcionamento do produto a ser criado.
     * @param {number} [productInfo.key] A chave do produto a ser criado. Ela deve ser informada
     * apenas quando se deseja reaproveitar ou recriar um produto existente.
     * @param {number} [productInfo.baseKey] Menor chave da faixa de chaves a ser
     * reservada para o produto. Ela deve ser informada apenas quando se deseja reaproveitar
     * ou recriar um produto existente.
     * @param {string} [productInfo.publicKey] Chave pública RSA no formato PEM associada ao produto.
     * Uma par de chaves RSA pode ser gerada para permitir a encriptação de dados que podem ser
     * descriptografados apenas se uma base estiver licenciada com este produto. A chave privada
     * é secreta e de conhecimento exclusivo do desenvolvedor do produto. A chave pública deve ser
     * informada nesta propriedade no momento da criação do produto. A chave privada do desenvolvedor
     * deve ser guardada em segurança, pois ela será exigida pelo método
     * {@link module:@nginstack/engine/lib/license/LicenseManager~LicenseManager#encryptLicensedData} ao
     * criptografar um dado associado ao licenciamento do produto.
     * @param {string} userId Nome ou e-mail do usuário com permissão para criar registros no produto
     * **Engine**.
     * @param {string} password Senha do usuário com permissão para criar registros no produto
     * **Engine**.
     * @return {string} Texto codificado com os dados sobre o produto criado. Essa string deve ser
     * guardada com segurança, pois será requerida como parâmetro para o método
     * {@link #enableDevelopment} na base de dados que será utilizada para desenvolver o produto.
     * @see #enableDevelopment
     * @see #setChangeableProducts
     */
    createProduct(productInfo: any, userId: string, password: string): string;
    /**
     * Ativa o desenvolvimento de um produto na base de dados corrente. Essa base se tornará responsável
     * por controlar a geração de chaves negativas associada a esse produto.
     *
     * **Importante**: um produto pode ser ativo em uma única base de dados. Caso um produto seja ativo
     * em mais de uma base de dados, poderão ocorrer problemas de geração de chaves negativas
     * duplicadas.
     * @param {string} productStream Texto codificado contendo detalhes sobre o produto a ser
     * habilitado. Ele é gerado pelo método {@link #createProduct}.
     * @param {string} password Senha mestre do produto que será habilitado. Guarde essa senha com
     * segurança, pois ela será exigida ao configurar os desenvolvedores habilitados a modificar o
     * produto e na criação de licenças de uso.
     * @see #createProduct
     * @see #changePassword
     * @see #isDevelopmentEnabled
     */
    enableDevelopment(productStream: string, password: string): void;
    /**
     * Verifica se o desenvolvimento do produto informado está ativo na base de dados corrente.
     * @param {number|DBKey} product Chave do produto a ser verificado.
     * @return {boolean} True se o desenvolvimento do produto informado está ativo na base de dados
     * @see #enableDevelopment
     */
    isDevelopmentEnabled(product: number | DBKey): boolean;
    /**
     * Obtém as chaves dos produtos que podem ser modificados pelo usuário informado.
     * @param {number} userKey Chave do usuário.
     * @return {Array} Chaves dos produtos que podem ser modificados.
     * @see #setChangeableProducts
     */
    getChangeableProducts(userKey: number): any[];
    /**
     * Define os produtos que poderão ser modificados pelo usuário informado.
     * @param {number} userKey Chave do usuário.
     * @param {Array} products Array com as chaves dos produtos. Informe "null"
     * para retirar o poder de alteração do usuário.
     * @param {Array} passwords Array com as senhas mestres dos produtos.
     * @see #getChangeableProducts
     */
    setChangeableProducts(userKey: number, products: any[], passwords: any[]): void;
    /**
     * Verifica se a senha mestre de um produto habilitado para desenvolvimento está correta.
     * @param {number} product Chave do produto a ser verificado.
     * @param {string} password Senha mestre do produto.
     * @return {boolean} True se a senha informada está correta.
     */
    authenticatePassword(product: number, password: string): boolean;
    /**
     * Altera a senha mestre de um produto habilitado para desenvolvimento.
     * @param {number} product Chave do produto a ser ter a senha mestre alterada.
     * @param {string} currentPassword Senha mestre atual do produto.
     * @param {string} newPassword Nova senha mestre do produto.
     */
    changePassword(product: number, currentPassword: string, newPassword: string): void;
    /**
     * Obtém a chave do produto ao qual uma chave pertence.
     * @param {number} key A chave cujo produto se deseja obter.
     * @return {number|null} A chave do produto ao qual a chave pertence. Se a chave
     * informada for positiva, será retornado um valor nulo.
     */
    getProductFromKey(key: number): number | null;
    /**
     * Obtém o nome do produto ao qual uma chave pertence.
     * @param {number} key A chave cujo produto se deseja obter.
     * @return {string} Nome do produto ao qual a chave pertence. Será retornada uma string vazia se
     * a chave informada for positiva ou se ela não estiver associada a um produto.
     */
    getProductNameFromKey(key: number): string;
    /**
     * Verifica se o registro associado a um produto do sistema pode ser alterado pelo usuário.
     *
     * Este método não verifica as permissões associadas às classes de dados do sistema, se
     * restringindo apenas à verificar se o usuário é um desenvolvedor autorizado a modificar o
     * produto associado à chave.
     *
     * Chaves associadas aos produtos do sistema são valores inteiros negativos. Este método sempre
     * retornará `true` se for informada uma chave positiva.
     * @param {number|DBKey} recordKey Chave do registro associado a um produto do sistema.
     * @param {number|DBKey} userKey Chave do usuário que terá a permissão verificada.
     * @return {boolean} True se o usuário informado for um desenvolvedor autorizado a modificar
     * o registro ou se a chave for um valor positivo.
     */
    userCanChangeRecord(recordKey: number | DBKey, userKey: number | DBKey): boolean;
}
declare namespace ProductManager {
    export { getInstance, DBKey };
}
/**
 * Obtém uma instância compartilhada desta classe.
 * @return {ProductManager}
 */
declare function getInstance(): ProductManager;
type DBKey = import('../dbkey/DBKey');
