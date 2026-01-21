export = LicenseManager;
/**
 * Classe que permite criação e o controle das licenças de uso do sistema.
 * @constructor
 */
declare function LicenseManager(): void;
declare class LicenseManager {
    /**
     * Cria uma licença de uso para um produto.
     * @param {Object} licenseInfo Dados da licença a ser criada.
     * @param {number} licenseInfo.product Chave do produto que será licenciado.
     * @param {number} [licenseInfo.licenserKey] Chave única do licenciador que identificará esta
     * licença. É importante que ao atualizar o licenciamento de uma base de dados seja
     * informado o mesmo valor de `licenserKey` do licenciamento original. Caso seja informado um valor
     * diferente, o sistema entenderá como uma nova instalação e invalidará as senhas dos usuários
     * cadastrados.
     * @param {number} [licenseInfo.licenseVersion] Número inteiro que identifica o formato da licença
     * a ser gerada. Deve ser informado apenas quando for necessário gerar licenças para bases de dados
     * que não estejam utilizando a última versão da plataforma. Atualmente, são suportadas as seguintes
     * versões de licença:
     *
     *  **4**: versão padrão, utilizada quando não é uma informada uma versão específica. Suportada
     * pelo Engine 44 ou superior.
     *  **3**: versão que utiliza chaves de 32 bits. Suportada pelo Engine 43 ou inferior.
     * @param {string} licenseInfo.licenseType Flag que define como será controlado o uso do produto:
     *
     * - "C" (connection): pela quantidade de conexões simultâneas ao banco de dados.
     * - "U" (user): pela quantidade de usuários nominais na base de dados.
     * - "S" (simultaneous user): pela quantidade de usuários simultâneos na base de dados.
     * - "P" (processor): pela quantidade de processadores dos Engine que possuam
     * acesso direto ao banco de dados.
     * - "X" (custom): não será controlado pelo sistema. O produto deverá possuir um
     * mecanismo próprio para controlar o uso da licença.
     * @param {number} licenseInfo.quantity Quantidade máxima de acessos permitida. Seu significado
     * irá variar de acordo com o parâmetro licenseType.
     * @param {number|Array<number>} licenseInfo.extensions Chave ou uma lista de chaves das extensões
     * do produto que devem ser habilitadas na base licenciada. Extensões são recursos opcionais de
     * um produto que podem ser ativados ou não em um cliente dependendo da natureza da sua operação.
     * Ver a documentação da classe "Extensões de produto" (-1898140325) para mais detalhes.
     * @param {Date} licenseInfo.expiration Data de validade da licença.
     * @param {string} licenseInfo.licenseeName Nome da empresa que está sendo licenciada.
     * @param {string} licenseInfo.licenseeId Identificação legal da empresa que está sendo licenciada.
     * @param {string} [userId] Nome ou e-mail do usuário que está criando a licença. O usuário tem que
     * ter permissão de licenciar o produto informado. Caso não seja informado, será utilizado
     * o usuário da sessão corrente.
     * @param {string} [password] Senha do usuário informado em userId.
     * @return {string} Texto codificado com a nova licença. Esta string deve ser passada como
     * parâmetro para o método addLicense() na base de dados que será licenciada.
     * @see #addLicense
     * @see #setIssuableLicenses
     */
    createLicense(
        licenseInfo: {
            product: number;
            licenserKey?: number;
            licenseVersion?: number;
            licenseType: string;
            quantity: number;
            extensions: number | number[];
            expiration: Date;
            licenseeName: string;
            licenseeId: string;
        },
        userId?: string,
        password?: string
    ): string;
    /**
     * Adiciona uma licença de uso.
     * @param {string} license Licença criada pelo método createLicense.
     * @param {string} [administratorPassword] Senha do usuário administrator. Caso não seja
     * informada, será verificado se o usuário da sessão corrente possui o escopo de autorização
     * para adicionar licenças.
     * @see #createLicense
     */
    addLicense(license: string, administratorPassword?: string): void;
    /**
     * Remove uma licença de uso.
     * @param {number} product Chave do produto licenciado.
     * @param {string} [administratorPassword] Senha do usuário administrator. Caso não seja
     * informada, será verificado se o usuário da sessão corrente possui o escopo de autorização
     * para remover licenças.
     * @return {number} Versão das alterações ou zero caso não existam licenças a serem removidas
     * para aquele produto.
     * @see #createLicense
     */
    removeLicense(product: number, administratorPassword?: string): number;
    /**
     * Obtém as chaves dos produtos que podem ser licenciados pelo usuário informado.
     * @param {number} userKey Chave do usuário
     * @return {Array} Chaves dos produtos que podem ser licenciados.
     * @see #setIssuableLicenses
     */
    getIssuableLicenses(userKey: number): any[];
    /**
     * Define os produtos que poderão ser licenciados pelo usuário informado.
     * @param {number} userKey Chave do usuário
     * @param {Array} productKeys Array com as chaves dos produtos. Informe "null"
     * para retirar o poder de licenciamento do usuário.
     * @param {Array} passwords Array com as senhas dos produtos
     * @see #getIssuableLicenses
     */
    setIssuableLicenses(userKey: number, productKeys: any[], passwords: any[]): void;
    /**
     * Obtém as chaves do produtos utilizados por um usuário. Utilizado pelo controle
     * de licenciamento para definir quais licenças devem ser consumidas quando o usuário
     * realiza um login no sistema.
     *
     * Este método verifica apenas se o usuário tem acesso de visão às classes filhas de "/products" o
     * que é um conceito incompleto do que é o consumo de um produto. Há códigos mais relevantes
     * no diretório "/Menu" quando o Web Framework é utilizado ou consumo de APIs HTTP que são
     * desconsiderados por este método. Por esse motivo, o seu uso não é recomendado.
     * @param {number} userKey Chave do usuário
     * @return {Array} Chaves dos produtos que o usuário utiliza.
     * @deprecated Utilize lógicas especializadas para os produtos que terão o uso controlado.
     */
    getUsedProductsByUser(userKey: number): any[];
    /**
     * Determina se um produto e opcionalmente uma extensão foram licenciadas para uso na base corrente.
     * @param {number} product Chave do produto a verifica se encontra-se licenciado.
     * @param {number} [opt_extension] Chave da extensão a verificar se encontra-se licenciada.
     */
    isLicensed(product: number, opt_extension?: number): boolean;
    /**
     * Criptografa uma string que somente poderá ser descriptografada em uma base de dados
     * licenciada com os dados de licenciamento requeridos.
     * @param {string} data Dado a ser criptografado.
     * @param {Object} requirements Dados de licenciamento exigidos na base de dados para que o dado
     * pode ser descriptografado.
     * @param {number} requirements.product Chave do produto que deverá estar licenciado
     * para que o dado seja descriptografado.
     * @param {number} [requirements.extension] Chave da extensão de produto que deverá estar licenciado
     * para que o dado seja descriptografado.
     * @param {string} [requirements.licenseeName] Nome da empresa licenciada que poderá descriptografar
     * o dado.
     * @param {string} [requirements.licenseeId] Identificação legal da empresa licenciada que poderá
     * descriptografar o dado.
     * @param {number} [requirements.licenserKey] Chave da licença que deve estar registrada na
     * base licenciada.
     * @param {number|Array<number>} [requirements.licensedProducts] Chaves dos produtos que devem
     * estar licenciados além do produto utilizado para encriptar os dados.
     * @param {string} productPrivateKey Chave privada RSA associada ao produto. A chave é gerada na
     * criação do produto e é de conhecimento exclusivo da empresa desenvolvedora do produto.
     * @return {string} Dado criptografado que poderá ser lido apenas em uma base de dados que
     * satisfaça os requerimentos de licenciamento.
     */
    encryptLicensedData(
        data: string,
        requirements: {
            product: number;
            extension?: number;
            licenseeName?: string;
            licenseeId?: string;
            licenserKey?: number;
            licensedProducts?: number | number[];
        },
        productPrivateKey: string
    ): string;
    /**
     * Descriptografa um dado previamente criptografado pelo método {@link #encryptLicensedData} apenas
     * se a base de dados corrente satisfizer os requerimentos de licenciamento solicitados no
     * momento da encriptação. Será gerado um erro caso a base não satisfaça os requerimentos de
     * licenciamento.
     * @param {string} data Dado a ser descriptografado.
     * @param {number} product Produto ao qual os dados criptografados estão associados. Será gerado
     * um erro se os dados tiverem sido criptografados pela chave de um outro produto.
     * @param {number} [opt_extension] Extensão do produto ao qual os dados criptografados estão
     * associados. Será gerado um erro se os dados tiverem sido criptografados associados a uma outra
     * extensão.
     * @return {string} Dado descriptografado.
     */
    decryptLicensedData(data: string, product: number, opt_extension?: number): string;
}
declare namespace LicenseManager {
    let defaultLicenseVersion: number;
    /**
     * Obtém uma instância compartilhada desta classe.
     * @return {LicenseManager}
     */
    function getInstance(): LicenseManager;
}
