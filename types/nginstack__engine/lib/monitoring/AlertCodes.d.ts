/**
 * Códigos dos alertas gerados pelo monitoramento do sistema.
 * @enum {string}
 */

/**
 * O sistema operacional utilizado não é suportado pelo Engine.
 */
export const UNSUPPORTED_OS = 'unsupported_os';

/**
 * O Engine em execução utiliza uma arquitetura que não é mais suportada (32 bits).
 */
export const UNSUPPORTED_ARCH = 'unsupported_arch';

/**
 * Há pouco espaço livre no disco do diretório de dados do sistema.
 */
export const LOW_FREE_DISK = 'low_free_disk';

/**
 * Há pouca memória física disponível no servidor.
 */
export const LOW_PHYSICAL_MEMORY = 'low_physical_memory';

/**
 * A quantidade de memória virtual utilizada pelo Engine está elevada.
 */
export const HIGH_MEMORY_USAGE = 'high_memory_usage';

/**
 * A quantidade de sessões de usuários ativas no Engine está elevada.
 */
export const HIGH_SESSION_COUNT = 'high_session_count';

/**
 * O sincronismo do cache local está demorando mais que o normal. Essa demora pode
 * ter sido provocada pela geração de um grande volume de alterações a serem sincronizadas ou
 * pode existir alguma anomalia no funcionamento do cache local ou no disco do servidor.
 */
export const SLOW_DBCACHE_SYNC = 'slow_dbcache_sync';

/**
 * Ocorreu um erro ao tentar sincronizar o cache local do Engine.
 */
export const DBCACHE_SYNC_ERROR = 'dbcache_sync_error';

/**
 * Ocorreu um erro ao tentar enviar os logs transacionais do Engine.
 */
export const TRANSACTION_LOG_SENDING_ERROR = 'transaction_log_sending_error';

/**
 * O Engine está em execução há muito tempo sem ser reiniciado. O reinício periódico do Engine é
 * importante para que o sistema possa atualizar o esquema das tabelas que estão no cache local,
 * além de reduzir a perda de eficiência provocada pela fragmentação da memória gerenciada pelo
 * alocador padrão do sistema operacional, HeapAlloc no Windows e glibc malloc no Linux.
 */
export const HIGH_ENGINE_UPTIME = 'high_engine_uptime';

/**
 * A versão do Engine está desatualizada.
 */
export const OUTDATED_ENGINE = 'outdated_engine';
