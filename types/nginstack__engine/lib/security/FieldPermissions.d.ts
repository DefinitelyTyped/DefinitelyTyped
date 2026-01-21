export = FieldPermissions;
/**
 * Permite a consulta de permissões de visibilidade e alterabilidade
 * dos campos das classes. Este tipo verifica apenas as configurações permissões
 * dos campos - mesmo com essas configurações, o campo ainda pode ser ocultado
 * através de sua propriedade visible, e impedir alterações através de sua
 * propriedade readOnly.
 * @param {number} classKey A chave da classe a ser avaliada.
 * @param {number} userKey A chave do usuário a ser avaliado.
 * @param {Object} [opt_options] Opções de avaliação de permissões
 * @param {boolean} opt_options.allowNonClassFields Determina se serão
 * consideradas válidas permissões para campos declarados fora de classes.<br>
 * Quando um campo é declarado fora de uma classe (i.e.: por um processo
 * ou outro script), o processo de permissões não tem como avaliar se o campo
 * realmente existe. Por isso o controle de permissão desses campos "externos" à
 * classe, através do processo de permissões, é considerada uma má prática.<br>
 * Por padrão, se essa variável não for informada explicitamente com valor
 * verdadeiro, campos declarados fora de classe serão considerados inválidos.
 * @constructor
 */
declare function FieldPermissions(
    classKey: number,
    userKey: number,
    opt_options?: {
        allowNonClassFields: boolean;
    }
): void;
declare class FieldPermissions {
    /**
     * Permite a consulta de permissões de visibilidade e alterabilidade
     * dos campos das classes. Este tipo verifica apenas as configurações permissões
     * dos campos - mesmo com essas configurações, o campo ainda pode ser ocultado
     * através de sua propriedade visible, e impedir alterações através de sua
     * propriedade readOnly.
     * @param {number} classKey A chave da classe a ser avaliada.
     * @param {number} userKey A chave do usuário a ser avaliado.
     * @param {Object} [opt_options] Opções de avaliação de permissões
     * @param {boolean} opt_options.allowNonClassFields Determina se serão
     * consideradas válidas permissões para campos declarados fora de classes.<br>
     * Quando um campo é declarado fora de uma classe (i.e.: por um processo
     * ou outro script), o processo de permissões não tem como avaliar se o campo
     * realmente existe. Por isso o controle de permissão desses campos "externos" à
     * classe, através do processo de permissões, é considerada uma má prática.<br>
     * Por padrão, se essa variável não for informada explicitamente com valor
     * verdadeiro, campos declarados fora de classe serão considerados inválidos.
     * @constructor
     */
    constructor(
        classKey: number,
        userKey: number,
        opt_options?: {
            allowNonClassFields: boolean;
        }
    );
    /** @private */
    private allowNonClassFields_;
    /** @private */
    private classKey_;
    /** @private */
    private userKey_;
    /** @private */
    private visibilityPermissions_;
    /** @private */
    private changeabilityPermissions_;
    /**
     * Verifica se um determinado campo é visível dentro de uma classe, para um
     * usuário.
     * @param {string} fieldName Nome do campo.
     * @return {boolean} A visibilidade do campo, para o usuário.
     */
    isVisible(fieldName: string): boolean;
    /**
     * Verifica se um determinado campo é alterável dentro de uma classe, para um
     * usuário.
     * @param {string} fieldName Nome do campo.
     * @return {boolean} A alterabilidade do campo, para o usuário.
     */
    isChangeable(fieldName: string): boolean;
    private getFieldPermission_;
    private buildPermissionsMap_;
    /**
     * Recupera, da base de dados, as permissões do campo indicado.
     *
     * @param {string} fieldName O nome do campo (da tabela iPermission) cujas
     * permissões se deseja avaliar.
     * @return {string} As permissões do campo.
     * @protected
     */
    protected getPermission_(fieldName: string): string;
    private load_;
}
