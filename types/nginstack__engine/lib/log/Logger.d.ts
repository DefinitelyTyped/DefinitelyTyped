export = Logger;
/**
 * Classe responsável por tratar a geração de logs do sistema baseada
 * na biblioteca log4j (http://logging.apache.org/log4j/docs/). O link
 * "http://logging.apache.org/log4j/docs/manual.html" contém uma introdução aos
 * conceitos da biblioteca log4x. Para obter uma instância da classe `Logger`, deve ser
 * utilizado o método estático `Logger.getLogger()`.
 *
 * Esta classe também é publicada pelo Engine por meio da variável global **Logger**.
 * @constructor
 * @see #getLogger
 */
declare function Logger(): void;
declare class Logger {
    /**
     * Gera um log com a prioridade DEBUG. Este nível de prioridade deve ser utilizado
     * para informações de depuração de um processo.
     *
     * Normalmente esta prioridade é ignorada em um ambiente de produção.
     *
     * O parâmetro log pode conter parâmetros de formatação, seguindo a conversão
     * utilizada no `toFormattedString`. Os valores dos parâmetros devem ser informados após o
     * parâmetro log.
     * @example
     * const Logger = require('@nginstack/engine/lib/log/Logger.js');
     * const logger = Logger.getLogger('package.ClassName');
     * logger.debug('Método %s executado em %d milissegundos.', methodName, time);
     * @param {string} log Texto a ser escrito no log.
     * @param {...*} [formatArgs] Argumentos esperados pela expressão de formatação indicada
     */
    debug(log: string, formatArgs?: any[]): void;
    /**
     * Gera um log com a prioridade INFO. Este nível de prioridade deve ser utilizado
     * para informações que não requerem uma atenção imediata do administrador,
     * como detalhes de um processamento ou dicas de performance.
     *
     * Normalmente, esta prioridade é ativada em um ambiente de produção.
     *
     * O parâmetro log pode conter parâmetros de formatação, seguindo a conversão
     * utilizada no `toFormattedString`. Os valores dos parâmetros devem ser informados após o
     * parâmetro log.
     * @example
     * const Logger = require('@nginstack/engine/lib/log/Logger.js');
     * const logger = Logger.getLogger('package.ClassName');
     * logger.info('%d registros corrigidos pelo reprocessamento.', count);
     * @param {string} log Texto a ser escrito no log.
     * @param {...*} [formatArgs] Argumentos esperados pela expressão de formatação indicada
     * em <em>log</em>.
     */
    info(log: string, formatArgs?: any[]): void;
    /**
     * Gera um log com a prioridade WARN. Este nível de prioridade deve ser utilizado
     * para registrar situações que devem receber atenção do administrador, mas que não
     * impedem a utilização do sistema.
     *
     * Normalmente, esta prioridade é ativada em um ambiente de produção.
     *
     * O parâmetro log pode conter parâmetros de formatação, seguindo a conversão
     * utilizada no `toFormattedString`. Os valores dos parâmetros devem ser informados após o
     * parâmetro log.
     * @example
     * const Logger = require('@nginstack/engine/lib/log/Logger.js');
     * const logger = Logger.getLogger('package.ClassName');
     * if (memAllocPercentual > 70) {
     *   logger.warn('Memória em uso atingiu %d%% da capacidade.', memAllocPercentual);
     * }
     * @param {string} log Texto a ser escrito no log.
     * @param {...*} [formatArgs] Argumentos esperados pela expressão de formatação indicada
     * em <em>log</em>.
     */
    warn(log: string, formatArgs?: any[]): void;
    /**
     * Gera um log com a prioridade ERROR. Este nível de prioridade deve ser utilizado
     * para registrar um erro não esperado, o que impediu a execução de uma rotina ou
     * um processo.
     *
     * Normalmente esta prioridade é ativada em um ambiente de produção.
     *
     * O parâmetro log pode conter parâmetros de formatação, seguindo a conversão
     * utilizada no `toFormattedString`. Os valores dos parâmetros devem ser informados após o
     * parâmetro log.
     * @example
     * const Logger = require('@nginstack/engine/lib/log/Logger.js');
     * const logger = Logger.getLogger('package.ClassName');
     * logger.error('Usuário %s não tem poder de aprovação.', session.userName);
     * @param {string} log Texto a ser escrito no log.
     * @param {...*} [formatArgs] Argumentos esperados pela expressão de formatação indicada
     * em <em>log</em>.
     */
    error(log: string, formatArgs?: any[]): void;
    /**
     * Gera um log com a prioridade FATAL. Este nível de prioridade deve ser utilizado
     * apenas para registrar erros críticos irrecuperáveis que comprometem o funcionamento
     * do sistema.
     *
     * Normalmente, esta prioridade é ativada em um ambiente de produção.
     *
     * O parâmetro log pode conter parâmetros de formatação, seguindo a conversão
     * utilizada no `toFormattedString`. Os valores dos parâmetros devem ser informados após o
     * parâmetro log.
     * @example
     * const Logger = require('@nginstack/engine/lib/log/Logger.js');
     * const logger = Logger.getLogger('package.ClassName');
     * logger.fatal('Esgotamento de memória.');
     * @param {string} log Texto a ser escrito no log
     * @param {...*} [formatArgs] Argumentos esperados pela expressão de formatação indicada
     * em <em>log</em>.
     */
    fatal(log: string, formatArgs?: any[]): void;
}
declare namespace Logger {
    /**
     * Cria uma instância da classe `Logger` para a categoria informada.
     *
     * Uma categoria de log possui a finalidade de agrupar e identificar um conjunto de logs,
     * permitindo configurações como: direcionamento da saída do log (Appender),
     * layout das informações gravadas (Layout) e a prioridade habilitada. Ela pode definir
     * uma hierarquia de nomes, como em "package.domain.ClassName", simplificando configurações
     * que capturem ou direcionem os logs de um pacote ou produto específico do sistema.
     *
     * No [Guia de estilo](https://nginstack.com/developers/style-guide//#log-categories) é documentada a
     * convenção adotada para nomear as categorias de logs das bibliotecas da plataforma. A adoção
     * dessas regras não é obrigatória e produtos desenvolvidos sobre a plataforma podem
     * adotar outras que façam mais sentido para a aplicação desenvolvida.
     * @param {string} category Categoria de log que indica o pacote, módulo ou classe que estão
     * gerando as informações de log.
     * @return {Logger} Instância da classe Logger.
     */
    function getLogger(category: string): Logger;
    /**
     * Configura as categorias de log. A configuração informada irá complementar a configuração
     * padrão do sistema, que pode ser consultada na página "Logger" do Manage.
     * @param {string} config Script de configuração.
     */
    function propertyConfig(config: string): void;
}
