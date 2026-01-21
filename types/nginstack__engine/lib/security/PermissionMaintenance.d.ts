export = PermissionMaintenance;
/**
 * O objeto PermissionMaintenance tem a finalidade de realizar manutenções nas permissões de
 * acesso do sistema.
 * @constructor
 * @deprecated Utilize {@link module:@nginstack/engine/lib/security/PermissionManager}.
 */
declare function PermissionMaintenance(): void;
declare class PermissionMaintenance {
    /** @private */
    private _iPermission;
    /** @private */
    private _classe;
    /** @private */
    private _iVfs;
    /** @private */
    private _iGroupUser;
    iPermissionChanged: DataSet;
    /** @private */
    private logger_;
    /**
     * Cache da lista de campos da tabela permissão que devem ser replicados.
     * @type {Array<string>}
     * @private
     */
    private replicatedFieldNamesCache_;
    private _addPermissionChanged;
    private _getReplicatedFieldNames;
    private _replicatePermissionsToMother;
    private _replicatePermissions;
    private _createPermissionToInvisibleClasses;
    /**
     * Exclui os registros de permissão cujo campo "iParent" não é chave de uma classe
     * ou de um registro da tabela iVfs, e/ou cujo grupo ou usuário não exista na base de dados.
     */
    fixMissingPermissions(): void;
    /**
     * Altera as permissões cujas classes sejam diferentes da chave da classe Sistema > Permissões.
     */
    fixPermissionsClasses(): void;
    /**
     * O objetivo desta função é Corrige situações em que uma filha possui uma permissão que exige
     * replicação para a mãe e esta não possui a permissão. Por exemplo, uma classe é visível e
     * sua mãe não. Situações como estas ocorrem quando se muda a mãe de uma classe, pois a nova
     * mãe pode não ter as mesmas permissões da antiga.
     */
    fixReplicatedPermissions(): void;
    _iPermissionClone: DataSet;
    /** @private */
    private _replicatedClass;
    /**
     * Algumas classes podem ficar órfãs quando um upgrade é interrompido entre a criação
     * dessas classes e a criação de suas permissões. O objetivo desta função é identificar quais
     * classes estão sem quaisquer permissões e, então, criar as primeiras permissões delas
     * com base numa cópia de permissões da classe mãe.
     */
    fixInitialPermissions(): void;
    /**
     * Aplica todas as correções de permissão.
     */
    fixAll(): void;
    /**
     * Grava as correções na base de dados.
     * @returns {number}
     */
    commit(): number;
}
import DataSet = require('../dataset/DataSet.js');
