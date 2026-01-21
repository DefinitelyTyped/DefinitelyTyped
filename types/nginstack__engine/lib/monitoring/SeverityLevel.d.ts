/**
 * Utilizado para mensagens informacionais sobre recursos ou configurações que não impedem o
 * funcionamento do sistema.
 */
export const INFO = 'info';

/**
 * Situações não esperadas que foram detectadas pelo sistema, podendo ser necessária uma
 * intervenção do administrador do sistema para evitar problemas futuros.
 */
export const WARNING = 'warning';

/**
 * Indica que uma funcionalidade do sistema está apresentando erros ou está com degradação
 * significativa de performance. Requer atenção do administrador do sistema.
 */
export const ERROR = 'error';

/**
 * Sinaliza uma falha total no sistema, perda de dados ou indisponibilidade. Requer ação
 * imediata do administrador do sistema.
 */
export const CRITICAL = 'critical';

/**
 * Níveis de severidade dos alertas gerados pelo monitoramento do sistema.
 * @enum {string}
 */
export type SeverityLevelType = typeof INFO | typeof WARNING | typeof ERROR | typeof CRITICAL;
