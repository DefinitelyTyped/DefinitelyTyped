export = PermissionField;
/**
 * Classe que representa um campo de permissão. Os campos de permissão são
 * vinculados à ideia de uma unidade de permissão. Um exemplo seria a permissão
 * de poder alterar uma determinada classe de dados. Ou seja, um campo controla
 * uma permissão previamente especificada.
 *
 * @constructor
 * @extends Field
 */
declare function PermissionField(...args: any[]): void;
declare class PermissionField {
    /**
     * Classe que representa um campo de permissão. Os campos de permissão são
     * vinculados à ideia de uma unidade de permissão. Um exemplo seria a permissão
     * de poder alterar uma determinada classe de dados. Ou seja, um campo controla
     * uma permissão previamente especificada.
     *
     * @constructor
     * @extends Field
     */
    constructor(...args: any[]);
    scope: PermissionFieldScope;
    /**
     * Determina como a permissão deve ser lida. Os valores permitidos neste campo
     * são os presentes no enumerável {@link module:@nginstack/engine/lib/security/PermissionMode}.
     * @type {string}
     * @default PermissionMode.NO_INHERITANCE
     * @see Security#getPermission
     * @see PermissionMode
     */
    readMode: string;
    /**
     * Determina se este campo deve ser utilizado como um filtro extra.<br>
     * Por padrão, uma permissão é associada a uma classe ou a um registro. Filtros
     * extras permitem determinar uma permissão de forma mais específica que apenas
     * uma classe. Exemplo: o grupo X possui permissão de "Ver" na classe
     * "Vendas" e tem permissão de "Ver" e "Inserir" na classe "Vendas" no
     * "Estabelecimento Y", sendo este último, um filtro extra.
     * @type {boolean}
     * @default false
     * @see Security#getPermission
     */
    useAsExtraFilter: boolean;
}
import PermissionFieldScope = require('./PermissionFieldScope.js');
