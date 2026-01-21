export = PermissionSchema;
/**
 * Classe responsável pela consulta do esquema da tabela de permissões para as classes de dados
 * do sistema.
 *
 * Em vez de construir essa classe diretamente, utilize o método
 * {@link PermissionSchema.getInstance}.
 * @constructor
 */
declare function PermissionSchema(): void;
declare class PermissionSchema {
    /** @private */
    private fieldsByMimeType_;
    /** @private */
    private fieldsByClass_;
    /** @private */
    private declaredFieldsByClass_;
    /** @private */
    private databaseFieldNames_;
    /** @private */
    private classDefManager_;
    /** @private */
    private mimeTypesWithPermissionControl_;
    /**
     * Conjunto dos campos que estão presentes na tabela de permissões, mas que não controlam
     * permissões efetivamente. Os nomes dos campos são normalizados em letras minúsculas.
     * @private
     * @type {Object<boolean>}
     * @const
     */
    private NON_PERMISSION_FIELDS_;
    /**
     * Logger utilizando nesta classe.
     * @type {Logger}
     * @private
     */
    private logger_;
    /**
     * Cache da tabela iPermission utilizado pelo método {@link #getPermissionValue_}.
     * @type {DataSet}
     * @private
     */
    private tableCacheForGetFieldValue_;
    private initializeCaches_;
    private getFieldsForClass_;
    private isPermissionField_;
    private getFieldsByClass_;
    /**
     * Busca os nomes de campos de permissão para uma classe. Os nomes dos campos são normalizados
     * em letras minúsculas.
     * @param {number} classKey Chave da classe ao qual se quer obter os nomes dos
     * campos de permissão relacionados.
     * @param {({includeNonDatabaseFields: boolean}|Record<*,*>)} [opt_options] Opções na obtenção da
     * relação de campos:
     *
     *  * **includeNonDatabaseFields**: também inclui na relação de campos não existentes na
     *  tabela iPermission, como os campos calculados e grades detalhes declarados no modelo de
     *  dados.
     * @return {Array<string>} Nomes dos campos de permissão.
     */
    getFieldsForClass(
        classKey: number,
        opt_options?:
            | {
                  includeNonDatabaseFields: boolean;
              }
            | Record<any, any>
    ): string[];
    /**
     * Busca os nomes de campos de permissão que foram declarados inicialmente na classe de dados
     * informada. Não serão retornados os campos de permissão herdados da classe-mãe. Os nomes
     * dos campos são normalizados em letras minúsculas.
     * @param {number} classKey Chave da classe ao qual se quer obter os nomes dos
     * campos de permissão relacionados.
     * @param {({includeNonDatabaseFields: boolean}|Record<*,*>)} [opt_options] Opções na obtenção da
     * relação de campos:
     *
     *  * **includeNonDatabaseFields**: também inclui na relação de campos não existentes na
     *  tabela iPermission, como os campos calculados e grades detalhes declarados no modelo de
     *  dados.
     * @return {Array<string>} Nomes dos campos de permissão.
     */
    getDeclaredFieldsInClass(
        classKey: number,
        opt_options?:
            | {
                  includeNonDatabaseFields: boolean;
              }
            | Record<any, any>
    ): string[];
    /**
     * Mapeia todos os campos de permissão, utilizando a chave da classe raiz do
     * escopo como chave. Os nomes dos campos são normalizados em letras minúsculas.
     * @param {number} rootClass Classe raiz da qual será montado o mapa.
     * @param {({includeNonDatabaseFields: boolean}|Record<*,*>)} [opt_options] Opções na obtenção da
     * relação de campos:
     *
     *  * **includeNonDatabaseFields**: também inclui na relação de campos não existentes na
     *  tabela iPermission, como os campos calculados e grades detalhes declarados no modelo de
     *  dados.
     * @return {Object<Array<string>>}
     */
    getFieldsByClass(
        rootClass: number,
        opt_options?:
            | {
                  includeNonDatabaseFields: boolean;
              }
            | Record<any, any>
    ): any;
    /**
     * Mapeia de modo distinto todos os campos de permissão, utilizando a chave da
     * classe raiz do escopo como chave. Os nomes dos campos são normalizados em
     * letras minúsculas.
     * @param {number} rootClass Classe raiz da qual será montado o mapa.
     * @param {({includeNonDatabaseFields: boolean}|Record<*,*>)} [opt_options] Opções na obtenção da
     * relação de campos:
     *
     *  * **includeNonDatabaseFields**: também inclui na relação de campos não existentes na
     *  tabela iPermission, como os campos calculados e grades detalhes declarados no modelo de
     *  dados.
     * @return {Object<Array<string>>}
     */
    getDeclaredFieldsByClass(
        rootClass: number,
        opt_options?:
            | {
                  includeNonDatabaseFields: boolean;
              }
            | Record<any, any>
    ): any;
    /**
     * Busca os nomes dos campos de permissão para um arquivo. Os nomes
     * dos campos são normalizados em letras minúsculas.
     * @param {number} fileKey Chave do arquivo ao qual se quer obter os nomes dos
     * campos de permissão que estão relacionados.
     * @param {({includeNonDatabaseFields: boolean}|Record<*,*>)} [options] Opções na obtenção da
     * relação de campos:
     *
     *  * **includeNonDatabaseFields**: também inclui na relação de campos não existentes na
     *  tabela iPermission, como os campos calculados e grades detalhes declarados no modelo de
     *  dados.
     * @return {Array<string>} Nomes dos campos de permissão.
     */
    getFieldsForFile(
        fileKey: number,
        options?:
            | {
                  includeNonDatabaseFields: boolean;
              }
            | Record<any, any>
    ): string[];
    /**
     * Monta o mapa de permissões de um usuário partindo de uma classe para as suas
     * filhas.
     * @param {Array.<string>} permissionFields Nomes dos campos de permissão
     * ligados à classe.
     * @param {number} classKey Classe que servirá de base para a pesquisa.
     * @param {number} userKey Chave do usuário que terá suas permissões mapeadas.
     * @param {Object} [opt_filters] Filtros que podem ser repassados para o DataSet.
     * @param {Array<number>|number} opt_filters.licenses Licenças que serão
     * exibidas nesta montagem.
     * @param {boolean} opt_filters.hideNotVisibleClasses Retira do resultado todas
     * as classes as quais o usuário não pode visualizar.
     * @param {boolean} [opt_filters.justProducts] Retira do resultado todas
     * as classes positivas. Ou seja, serão exibidas apenas as chaves de produtos,
     * incluindo o Custom.
     * @return {DataSet} Relação da própria classe e suas descendentes com as
     * permissões. Este DataSet vem organizado desta maneira:
     *   iKey {number} Chave da classe;
     *   iParent {number} Mãe da classe (Virá nulo quando for a classe raiz);
     *   iName {string} Nome da classe;
     *   iOrder {string} Ordem de exibição das classes. Esse campo virá no formato:
     *     "0001/0006" o que significa que essa classe é a sexta filha da
     *     primeira classe. O DataSet vem ordenado por este campo.
     *   (Um campo para cada permissão contendo o seu valor.)
     *   iEqualDescendants {boolean} Indica se os descendentes desta classe possuem
     *     a mesma permissão que ela própria.
     */
    mountTabularMap(
        permissionFields: string[],
        classKey: number,
        userKey: number,
        opt_filters?: {
            licenses: number[] | number;
            hideNotVisibleClasses: boolean;
            justProducts?: boolean;
        }
    ): DataSet;
    /**
     * Obtém os nomes dos campos que são replicados automaticamente para as classes ancestrais quando
     * o usuário altera a permissão de um grupo, papel ou usuário.
     *
     * Por exemplo, a permissão "Ver" é uma permissão replicada automaticamente, pois um usuário
     * não poderá ver os dados de uma determinada classe de dados se também não tiver permissão
     * de visão nas classes mãe.
     *
     * Os campos replicados são configurados por meio da propriedade
     * *replicatedPermissionFieldNames* nos arquivos x-model da classe
     * /Dados/Sistema/Permissões (-1898187812).
     * @return {Array<string>} Nomes dos campos que devem ser replicados.
     */
    getParentReplicatedFieldNames(): string[];
    /**
     * Obtém os nomes dos campos que são replicados para as classes e arquivos filhos quando há
     * herança de permissões ou quando o usuário solicita a replicação manual de permissões.
     *
     * Os campos replicados são configurados por meio da propriedade
     * *childrenReplicationFieldNames* nos arquivos x-model da classe
     * /Dados/Sistema/Permissões (-1898187812).
     * @return {Array<string>} Nomes dos campos que devem ser replicados.
     */
    getChildrenReplicatedFieldNames(): string[];
    /**
     * Indica quais os nomes dos campos da tabela de permissões são visíveis e configurados como
     * filtros extras para a classe de dados informada. Os nomes são padronizados em letras
     * minúsculas.
     *
     * Importante: os campos retornados são da tabela de permissões, não são da tabela
     * de dados associada a classe informada. Para obter os campos da classe informada
     * que se relacionam com os campos da tabela de permissão, verifique a propriedade
     * {@link module:@nginstack/engine/lib/classdef/Field~Field#permissionFilterFieldName} dos campos da
     * classe.
     * @param {number} classKey Classe de dados para a qual serão consultados os filtros extras.
     * @return {!Array<string>} Nomes dos campos configurados como filtros extra da
     * tabela de permissões.
     */
    getExtraFiltersForClass(classKey: number): string[];
}
declare namespace PermissionSchema {
    let TARGET_FIELDS: string[];
    let PERIOD_FIELDS: string[];
    let INHERITANCE_FIELDS: string[];
    /**
     * Retorna a instância global do {@link PermissionSchema} compartilhada com toda a
     * sessão.
     * @return {PermissionSchema}
     */
    function getInstance(): PermissionSchema;
}
import DataSet = require('../dataset/DataSet.js');
