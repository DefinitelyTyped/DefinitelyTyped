export = PermissionManager;
/**
 * Classe responsável pela gestão de permissões de grupos, papéis e usuários do sistema.
 *
 * Em vez de construir essa classe diretamente, utilize o método
 * {@link PermissionManager.getInstance}.
 * @constructor
 */
declare function PermissionManager(): void;
declare class PermissionManager {
    /** @private */
    private schema_;
    /** @private */
    private classDefManager_;
    /** @private */
    private mimeTypesWithPermissionControl_;
    /**
     * Logger utilizando por esta classe.
     * @type {Logger}
     * @private
     */
    private logger_;
    /**
     * Lista separada por ";" com os nomes dos campos que estão presentes na tabela de
     * permissões, mas que não controlam permissões efetivamente.
     * @private
     * @type {string}
     * @const
     */
    private NON_PERMISSION_FIELDS_LIST_;
    private checkIfUserCanManagePermissions_;
    /**
     * Pega dataset do cache local com os registros de uma tabela.
     * @param {string} tableName Nome da tabela.
     * @return {!DataSet} Dataset com todos os registros de uma tabela do cache
     * local.
     * @protected
     */
    protected getTable_(tableName: string): DataSet;
    private smartCopyPermissions_;
    private hardCopyPermissions_;
    private mergePermissions_;
    private getPermissionsForUpdate_;
    private getPermissionValue_;
    /** @private */
    private tableCacheForGetFieldValue_;
    private findPermission_;
    private findAllPermissions_;
    private replicateValuesToDescendants_;
    private replicateValuesToAscendants_;
    private removeInheritance_;
    private removeDependents_;
    private checkIfPermissionWasNotInherited_;
    private checkDuplicates_;
    private checkExtraFiltersUsageOnRolePermissions_;
    /**
     * Replica os valores da permissão informada para as classes e arquivos filhos da classe
     * associada a permissão. Serão criados registros de permissão para as
     * classes e arquivos filhos que não tenham permissão associado ao mesmo grupo.
     *
     * Caso a classe associada a *key* tenha filtros extras e eles estejam
     * configurados, serão criados registros de permissão com a mesma configuração de filtros
     * extras.
     *
     * Não é permitido replicar os valores de uma permissão herdada ou que defina uma herança, pois
     * essa replicação é automática na atualização dos valores dessa permissão.
     * @param {number} key Chave da permissão da qual deseja-se replicar as
     * informações para as suas descendentes.
     * @param {Object} options Opções de como devem ser replicadas as permissões.
     * @param {number[]} [options.classKeys] Chaves das classes filhas que devem ser
     * atualizadas. Os arquivos das classes informadas também serão atualizados, portanto,
     * a classe indicada em `assignment.resource` deve estar presente nesse array para que os arquivos
     * dela sejam atualizados. Caso esse parâmetro não seja informado, a replicação será realizada
     * para todas as classes e arquivos filhos de `assignment.resource` recursivamente.
     * @return {number} Versão das alterações realizadas no banco de dados ou zero caso não tenha
     * ocorrida nenhuma.
     */
    replicateToDescendants(
        key: number,
        options: {
            classKeys?: number[];
        }
    ): number;
    /**
     * Adiciona uma atribuição de permissões no sistema.
     * @param {PermissionAssignment} assignment Permissões que deverão ser inseridas.
     * @return {number} Versão das alterações realizadas no banco de dados ou zero caso não tenha
     * ocorrida nenhuma.
     */
    insert(assignment: PermissionAssignment): number;
    /**
     * Atualiza um registro de permissão existente com os valores informados.
     * @param {number} key Chave da permissão que será atualizada.
     * @param {PermissionAssignment} assignment Permissões que deverão ser inseridas.
     * @return {number} Versão das alterações realizadas no banco de dados ou zero caso não tenha
     * ocorrida nenhuma.
     */
    update(key: number, assignment: PermissionAssignment): number;
    /**
     * Remove a permissão informada e todas as permissões que dependem da existência
     * dessa permissão.
     *
     * Uma permissão será considerada dependente se estiver em de uma classe ou arquivo
     * filho concedido para o mesmo Grupo, Papel ou Usuário e se estiver associada às classes
     * e arquivos filhos da classe associada a permissão. Também serão consideradas
     * dependentes as permissões herdadas a partir da permissão informada, ou seja, as
     * permissões cujo campo iInheritedFrom seja igual à chave informada.
     *
     * Caso a classe associada à permissão tenha filtros extras e eles estejam
     * configurados, serão removidas apenas as permissões descendentes que possuam a mesma
     * configuração de filtros extras.
     *
     * Também serão removidas permissões filhas caso não haja uma outra permissão na classe
     * associada a *permission* para o mesmo Grupo, Papel ou Usuário. Na prática isso significa
     * que todas as permissões com ou sem filtros extras nas classes e arquivos filhos serão
     * removidas se a permissão informada for a última para o Grupo, Papel ou Usuário.
     *
     * Permissões herdadas não serão removidas por este método, exceto se ele for chamado para
     * a permissão que definiu inicialmente a herança. Tentar remover os dependentes de uma
     * permissão herdada a partir de outra permissão produzirá um erro.
     * @param {number} key Chave da permissão que será atualizada.
     * @return {number} Versão das alterações realizadas no banco de dados ou zero caso não tenha
     * ocorrida nenhuma.
     */
    remove(key: number): number;
    /**
     * Remove registros de permissões órfãs, ou seja, que não concedem permissão a
     * nenhum diretório ou arquivo e que não pertencem a nenhum grupo, papel ou
     * usuário, por motivo de exclusão.
     * @return {number} Versão da exclusão das permissões órfãs.
     */
    removeOrphans(): number;
    /**
     * Garante que todos os registros da tabela de permissões possuem a classe preenchida
     * com a classe /Dados/Sistema/Permissões (-1898187812).
     * @return {number} Versão das alterações realizadas no banco de dados ou zero caso não tenha
     * ocorrida nenhuma.
     */
    fixClasses(): number;
    /**
     * Verifica e corrige erros de integridade nas permissões com herança.
     *
     * Após a execução deste método será garantindo que todas as classes e arquivos filhos
     * de uma permissão com herança terão registros de permissão iguais à permissão que
     * definiu a herança. Também serão excluídos registros de permissão herdados órfãos ou
     * associados à permissões que não definem mais uma herança.
     * @param {Object} [options] Opções do ajuste das permissões herdadas.
     * @param {Transaction} [options.transaction] Transação onde serão adicionadas as alterações
     * realizadas por este método. Caso não seja informado, as alterações serão gravadas imediatamente.
     * @param {number[]} [options.resources] Chaves de arquivos ou diretórios que devem ter
     * as permissões herdadas ajustadas.
     * @param {number[]} [options.ignoredKeys] Chaves das permissões que não devem ser modificadas
     * por este método. Pode ser utilizado para indicar as chaves que foram removidas ou alteradas
     * previamente para evitar conflito na atualização.
     * @return {?number} Versão das alterações caso não seja informado *transaction* nas opções
     * ou *null* no caso contrário.
     * @see module:@nginstack/engine/lib/dataset/Transaction
     */
    fixInheritance(options?: {
        transaction?: Transaction;
        resources?: number[];
        ignoredKeys?: number[];
    }): number | null;
    /**
     * Copia permissões de um usuário, grupo ou papel para outro usuário, grupo ou
     * papel.
     * @param {number} source Chave de um usuário, grupo ou papel que será a fonte
     * da cópia.
     * @param {number} target Chave de um usuário, grupo ou papel que será o destino
     * da cópia.
     * @param {Object} [opt_options] Opções para a cópia.
     * @param {string} [opt_options.mergeAction] Quando se copia permissões,
     * haverá momentos em que existe valores preenchidos nos dois lados. Neste
     * caso esta opção pode determinar se os valores serão substituídos ou
     * complementados. As opções de preenchimento são:
     *
     * * **replace**: Todas as permissões de *source* serão copiadas por
     * cima das permissões de *target*. Esta é a opção padrão no caso deste
     * parâmetro vir vazio.
     * * **extend**: Neste caso as permissões de *target* serão
     * complementadas pelas contidas em *source*. No caso de comparação com
     * booleanos será utilizado o operador booleano "OU", ou seja, o resultado só
     * será falso se os dois lados forem falsos. No caso de lista de strings os
     * valores de *source* serão adicionados aos valores de *target*,
     * em todos os outros casos os valores contidos em *target* serão
     * substituídos pelos de *source*.
     * @param {string} [opt_options.copyMode] Determina qual será a estratégia de
     * cópia. As opções são:
     *
     * * **smart**: Neste modo serão calculados os valores respeitando toda a
     * hierarquia aplicada à entidade *source*, ou seja, todas as permissões
     * aplicadas aos grupos e papéis de *source* serão passadas à
     * * **target**: Este é o modo padrão caso não seja especificado.
     * * **hard**: Neste modo apenas os registros da tabela de permissões de
     * *source* serão copiados para *target*.
     * @return {number} Versão das alterações. Retornará 0 caso não haja
     * alterações.
     */
    copyPermissions(
        source: number,
        target: number,
        opt_options?: {
            mergeAction?: string;
            copyMode?: string;
        }
    ): number;
    /**
     * Cria permissões para as classes ou arquivos informados, copiando as permissões existentes
     * das classes-mãe. Não serão copiadas as permissões caso já exista alguma permissão
     * para a classe ou arquivo informado, sem serão copiadas permissões com herança ou
     * definidas para Papéis.
     * @param {Array<Number>} keys Chaves dos arquivos ou classes para criar as
     * permissões na hierarquia.
     * @param {Array<Number>} [opt_groupUsers] Grupos, papéis e usuários que terão
     * as permissões herdadas.
     * @return {DataSet} Registros de permissões novas para os diretórios e arquivos.
     */
    copyFromParent(keys: number[], opt_groupUsers?: number[]): DataSet;
    /**
     * Pega registros de permissões órfãs, ou seja, que não concedem permissão a
     * nenhum diretório ou arquivo e que não pertencem a nenhum grupo, papel ou
     * usuário, por motivo de exclusão.
     * @return {DataSet} DataSet com a chave e versão dos arquivos órfãos.
     */
    getOrphans(): DataSet;
}
declare namespace PermissionManager {
    export { getInstance, Transaction };
}
import DataSet = require('../dataset/DataSet.js');
import PermissionAssignment = require('./PermissionAssignment.js');
/**
 * Retorna a instância global do {@link PermissionManager} compartilhada com toda a
 * sessão.
 * @return {PermissionManager}
 */
declare function getInstance(): PermissionManager;
type Transaction = import('../dataset/Transaction');
