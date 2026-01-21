/**
 * Tipos de lookup que um campo pode realizar.
 *
 * Um lookup é uma relação de chave estrangeira. Um campo lookup guarda a chave de uma outra
 * tabela relacionado por meio da propriedade **classKey** do campo.
 * @enum {number}
 */

/**
 * Indica que o campo não é lookup.
 */
export const NONE = 0;

/**
 * Indica que o campo se relaciona com os registros da classe indicada por **classKey**.
 */
export const RECORD = 1;

/**
 * Indica que o campo se relaciona com os classes de dados filhas de **classKey**.
 */
export const CLASS = 2;

/**
 * Indica que o campo se relaciona com os arquivos da Virtual File System contidos no
 * diretório indicado **classKey** ou um dos seus subdiretórios.
 */
export const FILE = 3;
