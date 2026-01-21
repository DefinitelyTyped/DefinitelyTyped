export = PermissionAssignment;
/**
 * Representa a atribuição de uma ou várias permissões para um usuário, grupo ou papel de usuário
 * para uma determinada classe de dados ou arquivo do sistema.
 * @constructor
 */
declare function PermissionAssignment(): void;
declare class PermissionAssignment {
    values: any;
    extraFilters: any;
    /**
     * Logger utilizando por esta classe.
     * @type {Logger}
     * @private
     */
    private logger_;
    /**
     * Esquema da tabela de permissões do sistema.
     * @type {PermissionSchema}
     * @private
     */
    private schema_;
    /**
     * Chave do usuário, grupo ou papel que está recebendo a permissão.
     * @type {number}
     */
    assignee: number;
    /**
     * Nomes dos campos da tabela de permissões válidos para {@link #resource}. Os nomes são
     * padronizados em letras minúsculas.
     * @type {Object<boolean>}
     * @private
     */
    private permissionFieldNames_;
    /**
     * Nomes dos campos da tabela de permissões que podem ser utilizados como filtros extras
     * para {@link #resource}. Os nomes são padronizados em letras minúsculas.
     * @type {Object<boolean>}
     * @private
     */
    private extraFilterFieldNames_;
    /**
     * Indica que os dados atribuídos estão sendo restaurados a partir de um registro
     * da base de dados. Nesse caso, algumas validações são relaxadas para permitir a
     * correção de uma eventual falha de integridade.
     * @type {boolean}
     * @private
     */
    private loadingFromDataSet_;
    /**
     * Chave da classe de dados ou arquivo ao qual o usuário, grupo ou papel está recebendo
     * a permissão.
     * @type {number}
     */
    resource: number;
    /**
     * Modo como essa permissão deve ser aplicada nas classes de dados filhas de {@link #resource},
     * caso ele seja uma classe de dados. Para arquivos, essa propriedade sempre será <em>null</em>.
     * Valores possíveis:
     *
     * * **PermissionApplyModes.ONLY_TO_CLASS**: permissões serão aplicadas apenas
     * na classe de dados.
     * * **PermissionApplyModes.TO_CHILDREN_CLASSES_AND_FILES**: permissões serão
     * aplicadas apenas na classe de dados e nas suas descendentes, além dos arquivos associados
     * a essas classes de dados.
     * @type {number}
     */
    applyMode: number;
    private checkAssignee_;
    private checkResource_;
    /**
     * Grava esta atribuição de permissões no registro corrente do dataSet da tabela iPermission
     * informado.
     * @param {DataSet} data DataSet onde será gravada a atribuição de permissões.
     */
    saveToDataSet(data: DataSet): void;
    /**
     * Torna esta atribuição de permissões igual a atribuição informada.
     * @param {(PermissionAssignment|Record<*,*>)} assignment Instância ou representação literal
     * da atribuição de um conjunto de permissões. Essa representação deve ter a mesma estrutura
     * da classe {@link PermissionAssignment}.
     */
    assign(assignment: PermissionAssignment | Record<any, any>): void;
    /**
     * Atualiza o valor de uma permissão ou filtro extra.
     * @param {string} name Nome da permissão ou filtro extra.
     * @param {*} value Valor da permissão ou filtro extra.
     */
    set(name: string, value: any): void;
    /**
     * Obtém o valor de uma permissão ou filtro extra.
     * @param {string} name Nome da permissão ou filtro extra.
     */
    get(name: string): any;
}
declare namespace PermissionAssignment {
    /**
     * Cria uma instância de {@link PermissionAssignment} a partir de um registro
     * existente da tabela de permissões (iPermission) identificado por `key`.
     *
     * Ao restaurar um registro do dataSet, não será gerado um erro caso o valor `assignee` seja
     * uma chave inválida, permitindo que o registro possa ser corrigido pelo usuário.
     * @param {DataSet} data Dados registro da tabela de permissão.
     * @return {PermissionAssignment} Representação da atribuição de permissão
     * contida no registro informado.
     */
    function fromDataSet(data: DataSet): PermissionAssignment;
    /**
     * Cria uma instância de {@link PermissionAssignment} a partir de um registro
     * existente da tabela de permissões (iPermission) identificado por <em>key</em>
     * @param {number} key Chave do registro da tabela de permissão.
     * @return {PermissionAssignment} Representação da atribuição de permissão
     * contida no registro informado.
     */
    function fromKey(key: number): PermissionAssignment;
}
import DataSet = require('../dataset/DataSet.js');
