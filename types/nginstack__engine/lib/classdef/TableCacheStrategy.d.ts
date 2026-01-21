/**
 * Enumera as opções que indicam se os dados de uma tabela são gravados no cache local.
 * @enum {string}
 */

/**
 * Indica que os dados sempre devem ser replicados no cache local de todos os Engines.
 */
export const ALWAYS = 'T';

/**
 * Indica que os dados nunca devem ser replicados no cache local de todos os Engines.
 */
export const NEVER = 'F';

/**
 * Indica que os dados não serão replicados no cache local dos Engines por padrão, mas que
 * eles serão guardados em cache sob demanda.
 *
 * Atualmente apenas a tabela iVfsLob permite essa estratégia de cache. Opcionalmente a
 * replicação completa desta tabela pode ser habilitada para Engines específicos informando a
 * flag "-lavfsc" na linha de comando.
 */
export const ON_DEMAND = 'O';
