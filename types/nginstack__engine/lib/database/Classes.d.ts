export = Classes;
/**
 * @typedef {import('./Database')} Database
 * @private
 */
/**
 * Classe que permite obter informações sobre as classes do sistema da base de dados corrente da
 * sessão de usuário.
 * @constructor
 */
declare function Classes(): void;
declare class Classes {
    /**
     * Versão do cache do resultado do método {@link #getOrphans}.
     * @private
     */
    private orphansVersion_;
    /**
     * Cache do resultado do método {@link #getOrphans}.
     * @private
     */
    private orphansCache_;
    /**
     * Obtém o nome da tabela no banco de dados que armazena os registros de uma determinada classe
     * @param {number} classKey Chave da classe que será obtido a nome da tabela que armazena os
     * seus registros.
     * @return {string} Nome da tabela que armazena os registros da classe cuja a chave é informada
     * em <b>classKey</b>.
     */
    getTableName(classKey: number): string;
    /**
     * Obtém visão de uma classe do cache local.
     * Método que substitui o connection.cloneLocalCacheByClass()
     * @param {number} classKey Chave da classe ou nome da classe.
     *   Ao usar o nome da classe e se houver mais de uma classe com o mesmo nome,
     *   será retornada a primeira que possuir vínculo com uma tabela.
     * @param {number} [userKey] Chave do usuário usada para fins de verificação de permissão de acesso.
     * @param {(string|Array.<Array.<string>>)} [securityExtraFilter]
     * @return {DataSet} DataSet com a visão da classe do cache local
     * informada em <b>classKeyOrClassName</b>.
     */
    getCachedDataSet(
        classKey: number,
        userKey?: number,
        securityExtraFilter?: string | string[][]
    ): DataSet;
    /**
     * Devolve a hierarquia de classes.
     *
     * Este método substitui o uso do connection.getHierarchicalClass()
     * @example
     * const path = classes.getHierarchyList(-1898146248, -1898187811, 5, ' > ', false);
     * path; // => 'Dados > Sistema > Grupos, papéis e usuários'
     * @param {number} startClass Chave da classe de onde deve iniciar a montagem da hierarquia.
     * @param {number} endClass Chave da classe onde deve finalizar a montagem da hierarquia.
     * @param {number} [level] Quantidade de classes que irá pegar a partir da inicial.
     * @param {string} [concatenator] String que irá separar as classes. O Valor padrão é "/".
     * @param {boolean} [returnClassesKey] Determina se trará as chaves das classes.
     * @return {string} Lista de chaves das classe.
     */
    getHierarchyList(
        startClass: number,
        endClass: number,
        level?: number,
        concatenator?: string,
        returnClassesKey?: boolean
    ): string;
    /**
     * Obtém o valor do campo de um registro.
     * @param {number} classKey Chave da classe ou nome da classe.
     * @param {number|string} keyOrCode Chave do registro ou o valor de um dos seguintes campos:
     *     iUrl, iCode, iName, CODIGO, NOME, TITULO ou URL.
     * @param {string} fieldName Nome do campo buscado.
     * @return {number|string|Date} Valor do campo buscado.
     */
    getFieldValue(
        classKey: number,
        keyOrCode: number | string,
        fieldName: string
    ): number | string | Date;
    /**
     * Pega uma propriedade de uma classe de forma hierárquica.
     * @example
     * // Obtém o valor da propriedade 'ajuda' da classe 'Entidades'.
     * // Neste caso, se a classe "Entidade" não possuir valor para a propriedade "ajuda",
     * // busca na classe mãe, e assim sucessivamente.
     *
     * var helpDeEntidades = classes.getHierarchicalProperty( "Entidades", "ajuda" )
     * @param {number} classKey Chave ou nome da classe.
     * @param {string} propertyName Nome da propriedade.
     * @return {string|number|Date|Record<*,*>} Valor da propriedade dentro da hierarquia
     *              da classe informada em classKey.
     */
    getHierarchicalProperty(
        classKey: number,
        propertyName: string
    ): string | number | Date | Record<any, any>;
    /**
     * Traz as chaves das classes filhas da classe informada, bem como a própria classe. Podendo
     * fazer um filtro por usuário.
     * @example
     *   var classKeys = classes.getChildren(123456, session.userKey);
     * @param {number|string} classKeyOrClassKeys Chave de uma classe ou lista de chaves de classes
     * separadas por vírgula ou ponto e vírgula.
     * @param {number} [userKey] Chave do usuário para fins de validação de permissão de acesso.
     * @param {string} [permissionFieldName] Nome do campo onde estão as permissões dos usuários.
     * @return {string} Chaves das classes filhas da classe informada e a própria classe separados
     * por vírgula.
     */
    getChildren(
        classKeyOrClassKeys: number | string,
        userKey?: number,
        permissionFieldName?: string
    ): string;
    /**
     * Verifica se a chave informada é filha ou igual a classe especificada.
     * São verificadas as seguintes situações:<br>
     *   - Se uma classe "key" é filha de "parent";<br>
     *   - Se a classe do registro "key" é filho de "parent";<br>
     *   - Se um registro iVfs "key" é filho de "parent".
     * @example
     * // Se a classe "Pessoas" é filha da classe "Entidades"
     * if ( classes.isChildOf( -2007890000, -2007900000 ) ){
     *    ...
     * }
     *
     * // Se o cliente "Consumidor Final" é filho da classe "Clientes"
     * if ( classes.isChildOf( -1899931617, -2007889000 ) ) {
     *    ...
     * }
     *
     * // Se o usuário "administrator" é filho da classe "Users"
     * if ( classes.isChildOf( -1898186559, -1898187809 ) ) {
     *    ...
     * }
     * @param {number} key Chave da classe ou do registro a qual deseja verificar
     * a hierarquia.
     * @param {number} parent Chave da classe a qual se deseja verificar se é mãe
     * da chave passado no parâmetro "key".
     * @return {boolean}
     */
    isChildOf(key: number, parent: number): boolean;
    /**
     * Obtém o código fonte das definições, model, x-class, view, e config de uma determinada classe.
     * Existe uma ordem pré definida das definições retornadas:
     * 1 - Todo o conteúdo dos arquivos do tipo model
     * 2 - Todo o conteúdo dos arquivos do tipo x-class
     * 3 - Todo o conteúdo dos arquivos do tipo view
     * O conteúdo será avaliado na ordem acima.
     * @param {number} classKey Chave da classe de onde serão obtidas as definições dos
     * arquivos model, x-class, view e config.
     * @param {SourceType} type Definirá o modo utilizado para retorno das
     * definições,
     * são eles: SourceType.MODEL, que trará as definições de arquivos
     * x-model e x-class. SourceType.VIEW, que trará as definições dos
     * arquivos x-model, x-class e x-view. SourceType.CONFIG, que trará as definições
     * dos arquivos x-config.
     * @param {DataSet} [vfs] DataSet usado para buscar os arquivos de definição de uma
     * classe. Se não for informado, será usada toda a tabela iVFS.
     * @param {DataSet} [classes] DataSet usado para validar a classe passada. Se não for
     * informado, será usada toda a tabela Classe.
     * @param {Array<number>} [ignoredClassKeys] Array de chaves de x-class, x-model ou
     * x-view que devem ser ignorados.
     * @return {string} Retorna um código-fonte contendo uma função _func com as definições dos arquivos
     * que estão na VFS (model, x-class, view ou config) dentro da classe referenciada por classKey.
     * A função _func deve atuar como um construtor a fim de obter instâncias que possuem por padrão as
     * propriedades abaixo:<br>
     *     currentLicenseKey - Possui a chave da licença da classe ou null caso seja uma classe
     * positiva.<br>
     *     sourceFile - Possui a chave do arquivo da classe.<br>
     *     key - Chave da classe, semelhante ao parâmetro "classKey" informado.<br>
     *     parent - Chave da classe mãe informada, semelhante a "DBKey.num(classKey, 'MAE')".
     */
    getClassDefinitionSource(
        classKey: number,
        kind: any,
        vfs?: DataSet,
        classes?: DataSet,
        ignoredClassKeys?: number[]
    ): string;
    /**
     * Dada a chave de uma classe, retorna seu caminho completo, seguido da chave
     * entre parênteses.
     * @param {number} classKey A chave da classe que deve ser formatada para uma
     * mensagem.
     * @return {string} Uma string contendo o caminho completo da classe seguido de
     * sua chave entre parênteses.
     */
    formatToMessage(classKey: number): string;
    /**
     * Avalia se a classe de dados informada faz parte do cache local, ou seja, se os registros
     * desta classe podem ser acessado por meio do <em>dbCache</em>.
     * @param {number} classKey Classe de dados a ser verificada.
     * @return {boolean} True se a classe informada fizer parte do cache local.
     */
    hasCachedData(classKey: number): boolean;
    /**
     * Calcula em qual nível de hierarquia (profundidade) a classe se encontra.
     * @param {number} classKey Chave da classe.
     * @return {number} Nível em que a classe se encontra.
     */
    getLevel(classKey: number): number;
    /**
     * Verifica se o caminho da classe informada até a Raiz é válido. Será gerado
     * caso a classe seja órfã, esteja em um ramo órfão ou em um ramo com uma
     * referência circular inválida.
     * @param {number} classKey Classe que será verificada.
     */
    checkClassPath(classKey: number): void;
    /**
     * Busca todas as classes órfãs no sistema. Caso uma classe seja descendente
     * de uma classe órfã, ela também será considerada.
     * @return {Array<number>} Lista ordenada das chaves das classes órfãs do
     * sistema.
     */
    getOrphans(): number[];
    /**
     * Faz uma busca completa em uma classe retornando um DataSet com a relação de
     * todas as classes descendentes e a própria classe informada.
     * @param {number} rootClassKey Classe que é o ponto de partida para o início da
     * busca.
     * @param {Object} [opt_filters] Filtros que podem ser aplicados no resultado
     * desta função.
     * @param {Array.<number>|number} opt_filters.licenses Licenças que serão
     * exibidas nesta montagem.
     * @param {boolean} opt_filters.justProducts Indica que o dataset resultante só
     * deverá conter registros negativos.
     * @param {boolean} opt_filters.excludeOrphans Indica que as classes órfãs e suas
     * filhas não serão incluídos no dataset resultante.
     * @return {DataSet} Reproduz a árvore hierárquica completa do campo passado
     * como raiz de forma tabulada. Os campos deste DataSet são:
     *   iKey {number} Chave da classe;
     *   iParent {number} Mãe da classe (Virá nulo quando for a classe raiz);
     *   iName {string} Nome da classe;
     *   iOrder {string} Ordem de exibição das classes. Esse campo virá no formato:
     *     "0001/0006" o que significa que essa classe é a sexta filha da
     *     primeira classe. O DataSet vem ordenado por este campo.
     */
    getTabularHierarchy(
        rootClassKey: number,
        opt_filters?: {
            licenses: number[] | number;
            justProducts: boolean;
            excludeOrphans: boolean;
        }
    ): DataSet;
    /**
     * Obtém o ancestral comum de duas classes.
     * @param {number} classA Uma das classes para a qual se deseja obter o
     * ancestral comum.
     * @param {number} classB A outra classe para a qual se deseja obter o ancestral
     * comum.
     * @return {number} A chave da classe que é o ancestral comum das duas classes
     * informadas.
     */
    getCommonAncestor(classA: number, classB: number): number;
    /**
     * Dada uma classe e uma conexão, este método pesquisará por uma classe e suas
     * filhas em uma outra base. Semelhante ao getChildren do cache local.
     *
     * No pior dos casos essa função executará uma query para cada nível de
     * profundidade das filhas. Isso vai ocorrer quando a base de destino tiver
     * classes filhas que não estão na base de origem.
     * @param {number} classKey Chave da classe a ser pesquisado os filhos.
     * @param {Database} database Conexão com o banco onde deverá ser realizada a busca.
     * @return {string} Chaves das classes filhas da classe informada e a própria classe separados
     * por vírgula.
     */
    getRemoteChildren(classKey: number, database: Database): string;
}
declare namespace Classes {
    export { getInstance, Database };
}
import DataSet = require('../dataset/DataSet.js');
/**
 * Obtém uma instância compartilhada desta classe.
 * @return {Classes}
 */
declare function getInstance(): Classes;
type Database = import('./Database');
