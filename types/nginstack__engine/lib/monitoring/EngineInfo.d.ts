export = EngineInfo;
/**
 * @typedef {import('../dataset/DataSet')} DataSet
 * @private
 */
/**
 * @typedef {SeverityLevel.SeverityLevelType} SeverityLevelType
 * @private
 */
/**
 * @typedef {Object} CpuInfo Informações da CPU do servidor do Engine.
 * @property {string} modelName Nome do modelo da CPU.
 * @property {string} vendorId Identificação do fabricante da CPU.
 * @property {number} family Identificação numérica da família da CPU.
 * @property {number} model Identificação numérica do modelo da CPU.
 * @property {number} stepping Variação (stepping) da CPU.
 * @property {number} physicalCores Quantidade de cores físicos da CPU.
 * @property {number} logicalCores Quantidade de cores lógicos da CPU.
 * @property {number} addressWidth Tamanho do endereçamento da CPU em bits.
 */
/**
 * @typedef {Object} MemoryStats Estatísticas de consumo de memória do Engine.
 * @property {number} usedVirtual Quantidade de memória virtual privada alocada pelo Engine,
 * seja ela física ou paginada. A memória virtual privada pode ser eventualmente menor que
 * a alocada, pois essa última considera os recursos compartilhados com outros processos.
 * @property {number} usedPhysical Quantidade total (privada e compartilhada) de memória física
 * alocada pelo Engine que não pode ser utilizada por outros processos.
 * @property {number} totalPhysical Quantidade de memória física total instalada no servidor,
 * disponível para o Engine e para os demais processos.
 * @property {number} availablePhysical Quantidade de memória física não alocada que ainda está
 * livre para ser utilizada pelos processos.
 * @property {number} totalPageFile Quantidade total de memória do servidor que pode ser
 * utilizada pelo Engine, podendo ser memória física ou paginada em disco.
 * @property {number} availablePageFile Quantidade total de memória do servidor que ainda
 * pode ser utilizada pelo Engine, podendo ser memória física ou paginada em disco.
 * @property {number} statefulSessionsCount Quantidade de sessões JavaScript com preservação de
 * estado, utilizadas normalmente por aplicações com interfaces ricas onde há o conceito de
 * usuário logado, como a interface Web padrão do sistema.
 * @property {number} statelessSessionsCount Quantidade de sessões JavaScript sem preservação
 * de estado. Sessões Stateless são utilizadas por rotinas, agendamento de scripts e APIs HTTP
 * que não precisam manter o estado da sessão após o término do processamento.
 * @property {number} standaloneSessionsCount Quantidade de sessões JavaScript que são criadas
 * internamente pelo Engine em cenários onde não haverá reaproveitamento da sessão após o
 * término do seu uso. Normalmente são utilizadas para processamentos internos do Engine de
 * curta duração.
 */
/**
 * @typedef {Object} DBCacheInfo Informações e estatísticas do cache local do Engine.
 * @property {number} version Versão sincronizada pelo cache local.
 * @property {string} lastSyncError Erro no último sincronismo, caso ele tenha falhado.
 * @property {number} lastSyncDuration Duração do último sincronismo do cache local.
 * @property {boolean} syncing Indica se o Engine estava sincronizado o cache no momento da
 * coleta das estatísticas.
 * @property {number} size Tamanho em bytes do arquivo do banco de dados utilizado pelo cache local.
 * @property {number} pageSize Tamanho em bytes da página de dados utilizada pelo cache local.
 * @property {number} idoCacheSize Quantidade de memória reservada para o cache dos dados
 * gerenciados pelo IDO. O IDO é a API interna do Engine responsável por armazenar os
 * dados do Cache Local e dos DataSets temporários.
 * @property {number} tableCount Quantidade de tabelas no cache local.
 */
/**
 * @typedef {Object} SchedulerInfo Informações e estatísticas do agendador de scripts do Engine.
 * @property {number} taskCount Quantidade de tarefas agendadas.
 * @property {number} runningTaskCount Quantidade de tarefas que estão em execução.
 * @property {number} failingTaskCount Quantidade de tarefas agendadas que falharam
 * na última execução.
 * @property {number} maxConcurrentTaskCount Quantidade máxima de tarefas que podem ser
 * executadas concorrentemente.
 */
/**
 * @typedef {Object} TransactionLoggerInfo Informações e estatísticas do gerenciador de logs
 * transacionais assíncrono.
 * @property {number} pendingLogs Quantidade de logs transacionais assíncronos pendentes
 * de gravação no banco de dados.
 * @property {number} sendingError Erro ocorrido no último envio dos logs transacionais pendentes.
 */
/**
 * @typedef {Object} PathsConfig Configuração dos diretórios utilizados pelo Engine para
 * gravar os dados, logs e arquivos temporários.
 * @property {string} mainProgram Caminho para o executável principal do Engine.
 * @property {string} dataDir Caminho para o diretório de dados do sistema.
 * @property {string} programDir Caminho para o diretório onde está o executável principal do
 * sistema.
 * @property {string} logDir Caminho para o diretório de logs do sistema.
 * @property {string} tempDir Caminho para o diretório de arquivos temporários do sistema.
 */
/**
 * @typedef {Object} PortConfig Configuração de uma porta HTTP ou HTTPS no Engine.
 * @property {number} port Porta TCP que está sendo atendida pelo Engine.
 * @property {string} protocol Protocolo atendido nesta porta. Valores possíveis: 'http' e
 * 'https'.
 * @property {string} address Endereço IP da interface de rede na qual a porta TCP foi aberta
 * pelo Engine. Um valor vazio indicará que o Engine atenderá o tráfego nesta porta em todas
 * interfaces de rede do servidor.
 * @property {string} cipherList Lista de algoritmos de criptografia habilitados caso o
 * protocolo seja HTTPS. Um valor vazio indica que a configuração padrão do OpenSSL será adotada.
 * Veja https://www.openssl.org/docs/manmaster/man1/openssl-ciphers.html para mais detalhes do
 * formato dessa lista.
 * @property {boolean} disabledOnStartup Indica que esta porta deve ser mantida desabilitada
 * pelo Engine enquanto o cache local da base de dados não for inicializado e o Engine não
 * estiver pronto para atender requisições.
 * @property {boolean} enabled Indica se esta configuração de porta TCP está habilitada no Engine.
 */
/**
 * @typedef {Object} DatabaseConfig Configuração da conexão do Engine com um banco de dados.
 * @property {string} name Nome da base de dados servida por este Engine.
 * @property {string} type Sistema gerenciador de banco de dados objeto relacional utilizado
 * para servir a base de dados. Valores possíveis: 'pgsql', 'oracle' e 'mssql'.
 * @property {string} reference Configuração de conexão da base de dados.
 * @property {string} userName Nome do usuário utilizado na conexão com o banco de dados.
 * @property {number} maxConnections Quantidade máxima de conexões que serão estabelecidas com
 * o SGBD.
 * @property {boolean} enabled Indica se esta configuração está habilitada no Engine.
 */
/**
 * @typedef {Object} EngineConfig Configuração do Engine.
 * @property {boolean} syncToDisk Indica se o IDO força a gravação dos buffers em memória para
 * disco a cada transação efetivada.
 * @property {boolean} automaticUpgrade Indica se o Engine está configurado para atualizar
 * automaticamente a partir do servidor a cada reinício.
 * @property {number} timeZoneBias Diferença em minutos da hora local do Engine para a UTC.
 */
/**
 * @typedef {Object} EngineAlert Alerta sobre um Engine gerado pelo monitoramento do
 * sistema.
 * @property {SeverityLevelType} severity Nível de severidade do
 * alerta para o funcionamento do sistema.
 * @property {string} code Código que permite identificar este alerta programaticamente. A relação
 * dos códigos dos alertas emitidos pelo sistema pode ser obtida em
 * {@link module:@nginstack/engine/lib/monitoring/AlertCodes}.
 * @property {string} message Mensagem descritiva do alerta.
 * @property {string} engineId Identificador único do Engine que emitiu o alerta.
 */
/**
 * Informações e estatísticas de um Engine coletadas pela API
 * de monitoramento do sistema.
 * @constructor
 */
declare function EngineInfo(): void;
declare class EngineInfo {
    cpuInfo: CpuInfo;
    memoryStats: MemoryStats;
    dbCache: DBCacheInfo;
    scheduler: SchedulerInfo;
    transactionLogger: TransactionLoggerInfo;
    paths: PathsConfig;
    ports: PortConfig[];
    databases: DatabaseConfig[];
    config: EngineConfig;
    applicationSessions: ApplicationSessionInfo[];
    alerts: EngineAlert[];
    /**
     * Nome da instância do Engine. Por padrão, será sugerido o nome do computador na rede. Esse
     * nome pode ser posteriormente modificado pelo administrador para indicar mais claramente
     * o propósito do Engine.
     * @type {string}
     */
    name: string;
    /**
     * Quantidade de memória virtual em uso pelo Engine.
     * @type {number}
     */
    usedVirtualMemory: number;
    /**
     * Data e hora em que o Engine foi iniciado, representada pela quantidade de milissegundos a
     * partir de 1 de Janeiro de 1970 00:00:00 UTC.
     * @type {number}
     */
    startedAt: number;
    /**
     * Data e hora da coleta destas informações do Engine, representada pela quantidade de
     * milissegundos a partir de 1 de Janeiro de 1970 00:00:00 UTC.
     * @type {number}
     */
    updatedAt: number;
    /**
     * Versão do Engine.
     * @type {string}
     */
    version: string;
    /**
     * Id único que identifica a instância do Engine.
     * @type {string}
     */
    instanceId: string;
    /**
     * Indica a arquitetura do Engine, se é um aplicativo 64 bits ou 32 bits. Valores possíveis:
     * `'x64'` e `'ia32'`.
     * @type {string}
     */
    arch: string;
    /**
     * Plataforma para a qual o Engine foi compilado. Valores possíveis: `'win32'` e `'linux'`.
     * @type {string}
     */
    platform: string;
    /**
     * Indica se o Engine está sendo executado como servidor de aplicação ou de borda. Valores
     * possíveis: `'application'` e `'edge'`.
     * @type {string}
     */
    serverExecutionMode: string;
    /**
     * Nome da empresa fornecedora do Engine.
     * @type {string}
     */
    providerName: string;
    /**
     * Base de dados principal servida por este Engine. Nos Engines configurados como servidores
     * de borda, será a base de dados configurada via linha de comando. Nos Engines servidores de
     * base de dados, será a primeira base configurada e ativa no Manage.
     * @type {string}
     */
    mainDatabase: string;
    /**
     * Nome do servidor na rede.
     * @type {string}
     */
    hostName: string;
    /**
     * Endereço IP do servidor na rede local.
     * @type {string}
     */
    hostAddress: string;
    /**
     * Porta HTTP padrão que deve ser utilizada para se comunicar com este Engine na rede local.
     * @type {number}
     */
    mainHttpPort: number;
    /**
     * Nome do sistema operacional do servidor.
     * @type {string}
     */
    osName: string;
    /**
     * Espaço livre no disco do diretório de dados do Engine.
     * @type {number}
     */
    freeDisk: number;
    /**
     * Quantidade de sockets abertos pelo Engine.
     * @type {number}
     */
    openSocketCount: number;
    /**
     * Quantidade de arquivos abertos pelo Engine.
     * @type {number}
     */
    openFileCount: number;
    /**
     * Determina o nível mínimo de severidade dos alertas que são emitidos pelo Engine. Essa
     * configuração pode ser realizada no processo de monitoramento dos Engines, no parâmetro
     * de linha de comando `--alertLevel` ou na variável de ambiente `NGIN_ALERT_LEVEL`.
     * @type {SeverityLevelType}
     */
    alertLevel: SeverityLevelType;
}
declare namespace EngineInfo {
    export {
        fromDataSet,
        DataSet,
        SeverityLevelType,
        CpuInfo,
        MemoryStats,
        DBCacheInfo,
        SchedulerInfo,
        TransactionLoggerInfo,
        PathsConfig,
        PortConfig,
        DatabaseConfig,
        EngineConfig,
        EngineAlert,
    };
}
import ApplicationSessionInfo = require('./ApplicationSessionInfo.js');
/**
 * Cria uma instância de `EngineInfo` a partir de um registro da tabela iEngine.
 * @param {DataSet} engines DataSet com registros da tabela iEngine. Será criada uma instância
 * de `EngineInfo` com as informações do registro corrente.
 * @param {DataSet} [sessions] DataSet com registros da tabela iApplicationSession.
 * @return {EngineInfo} Instância criada a partir das informações contidas no DataSet.
 */
declare function fromDataSet(engines: DataSet, sessions?: DataSet): EngineInfo;
type DataSet = import('../dataset/DataSet');
type SeverityLevelType = SeverityLevel.SeverityLevelType;
/**
 * Informações da CPU do servidor do Engine.
 */
interface CpuInfo {
    /**
     * Nome do modelo da CPU.
     */
    modelName: string;
    /**
     * Identificação do fabricante da CPU.
     */
    vendorId: string;
    /**
     * Identificação numérica da família da CPU.
     */
    family: number;
    /**
     * Identificação numérica do modelo da CPU.
     */
    model: number;
    /**
     * Variação (stepping) da CPU.
     */
    stepping: number;
    /**
     * Quantidade de cores físicos da CPU.
     */
    physicalCores: number;
    /**
     * Quantidade de cores lógicos da CPU.
     */
    logicalCores: number;
    /**
     * Tamanho do endereçamento da CPU em bits.
     */
    addressWidth: number;
}
/**
 * Estatísticas de consumo de memória do Engine.
 */
interface MemoryStats {
    /**
     * Quantidade de memória virtual privada alocada pelo Engine,
     * seja ela física ou paginada. A memória virtual privada pode ser eventualmente menor que
     * a alocada, pois essa última considera os recursos compartilhados com outros processos.
     */
    usedVirtual: number;
    /**
     * Quantidade total (privada e compartilhada) de memória física
     * alocada pelo Engine que não pode ser utilizada por outros processos.
     */
    usedPhysical: number;
    /**
     * Quantidade de memória física total instalada no servidor,
     * disponível para o Engine e para os demais processos.
     */
    totalPhysical: number;
    /**
     * Quantidade de memória física não alocada que ainda está
     * livre para ser utilizada pelos processos.
     */
    availablePhysical: number;
    /**
     * Quantidade total de memória do servidor que pode ser
     * utilizada pelo Engine, podendo ser memória física ou paginada em disco.
     */
    totalPageFile: number;
    /**
     * Quantidade total de memória do servidor que ainda
     * pode ser utilizada pelo Engine, podendo ser memória física ou paginada em disco.
     */
    availablePageFile: number;
    /**
     * Quantidade de sessões JavaScript com preservação de
     * estado, utilizadas normalmente por aplicações com interfaces ricas onde há o conceito de
     * usuário logado, como a interface Web padrão do sistema.
     */
    statefulSessionsCount: number;
    /**
     * Quantidade de sessões JavaScript sem preservação
     * de estado. Sessões Stateless são utilizadas por rotinas, agendamento de scripts e APIs HTTP
     * que não precisam manter o estado da sessão após o término do processamento.
     */
    statelessSessionsCount: number;
    /**
     * Quantidade de sessões JavaScript que são criadas
     * internamente pelo Engine em cenários onde não haverá reaproveitamento da sessão após o
     * término do seu uso. Normalmente são utilizadas para processamentos internos do Engine de
     * curta duração.
     */
    standaloneSessionsCount: number;
}
/**
 * Informações e estatísticas do cache local do Engine.
 */
interface DBCacheInfo {
    /**
     * Versão sincronizada pelo cache local.
     */
    version: number;
    /**
     * Erro no último sincronismo, caso ele tenha falhado.
     */
    lastSyncError: string;
    /**
     * Duração do último sincronismo do cache local.
     */
    lastSyncDuration: number;
    /**
     * Indica se o Engine estava sincronizado o cache no momento da
     * coleta das estatísticas.
     */
    syncing: boolean;
    /**
     * Tamanho em bytes do arquivo do banco de dados utilizado pelo cache local.
     */
    size: number;
    /**
     * Tamanho em bytes da página de dados utilizada pelo cache local.
     */
    pageSize: number;
    /**
     * Quantidade de memória reservada para o cache dos dados
     * gerenciados pelo IDO. O IDO é a API interna do Engine responsável por armazenar os
     * dados do Cache Local e dos DataSets temporários.
     */
    idoCacheSize: number;
    /**
     * Quantidade de tabelas no cache local.
     */
    tableCount: number;
}
/**
 * Informações e estatísticas do agendador de scripts do Engine.
 */
interface SchedulerInfo {
    /**
     * Quantidade de tarefas agendadas.
     */
    taskCount: number;
    /**
     * Quantidade de tarefas que estão em execução.
     */
    runningTaskCount: number;
    /**
     * Quantidade de tarefas agendadas que falharam
     * na última execução.
     */
    failingTaskCount: number;
    /**
     * Quantidade máxima de tarefas que podem ser
     * executadas concorrentemente.
     */
    maxConcurrentTaskCount: number;
}
/**
 * Informações e estatísticas do gerenciador de logs
 * transacionais assíncrono.
 */
interface TransactionLoggerInfo {
    /**
     * Quantidade de logs transacionais assíncronos pendentes
     * de gravação no banco de dados.
     */
    pendingLogs: number;
    /**
     * Erro ocorrido no último envio dos logs transacionais pendentes.
     */
    sendingError: number;
}
/**
 * Configuração dos diretórios utilizados pelo Engine para
 * gravar os dados, logs e arquivos temporários.
 */
interface PathsConfig {
    /**
     * Caminho para o executável principal do Engine.
     */
    mainProgram: string;
    /**
     * Caminho para o diretório de dados do sistema.
     */
    dataDir: string;
    /**
     * Caminho para o diretório onde está o executável principal do
     * sistema.
     */
    programDir: string;
    /**
     * Caminho para o diretório de logs do sistema.
     */
    logDir: string;
    /**
     * Caminho para o diretório de arquivos temporários do sistema.
     */
    tempDir: string;
}
/**
 * Configuração de uma porta HTTP ou HTTPS no Engine.
 */
interface PortConfig {
    /**
     * Porta TCP que está sendo atendida pelo Engine.
     */
    port: number;
    /**
     * Protocolo atendido nesta porta. Valores possíveis: 'http' e
     * 'https'.
     */
    protocol: string;
    /**
     * Endereço IP da interface de rede na qual a porta TCP foi aberta
     * pelo Engine. Um valor vazio indicará que o Engine atenderá o tráfego nesta porta em todas
     * interfaces de rede do servidor.
     */
    address: string;
    /**
     * Lista de algoritmos de criptografia habilitados caso o
     * protocolo seja HTTPS. Um valor vazio indica que a configuração padrão do OpenSSL será adotada.
     * Veja https://www.openssl.org/docs/manmaster/man1/openssl-ciphers.html para mais detalhes do
     * formato dessa lista.
     */
    cipherList: string;
    /**
     * Indica que esta porta deve ser mantida desabilitada
     * pelo Engine enquanto o cache local da base de dados não for inicializado e o Engine não
     * estiver pronto para atender requisições.
     */
    disabledOnStartup: boolean;
    /**
     * Indica se esta configuração de porta TCP está habilitada no Engine.
     */
    enabled: boolean;
}
/**
 * Configuração da conexão do Engine com um banco de dados.
 */
interface DatabaseConfig {
    /**
     * Nome da base de dados servida por este Engine.
     */
    name: string;
    /**
     * Sistema gerenciador de banco de dados objeto relacional utilizado
     * para servir a base de dados. Valores possíveis: 'pgsql', 'oracle' e 'mssql'.
     */
    type: string;
    /**
     * Configuração de conexão da base de dados.
     */
    reference: string;
    /**
     * Nome do usuário utilizado na conexão com o banco de dados.
     */
    userName: string;
    /**
     * Quantidade máxima de conexões que serão estabelecidas com
     * o SGBD.
     */
    maxConnections: number;
    /**
     * Indica se esta configuração está habilitada no Engine.
     */
    enabled: boolean;
}
/**
 * Configuração do Engine.
 */
interface EngineConfig {
    /**
     * Indica se o IDO força a gravação dos buffers em memória para
     * disco a cada transação efetivada.
     */
    syncToDisk: boolean;
    /**
     * Indica se o Engine está configurado para atualizar
     * automaticamente a partir do servidor a cada reinício.
     */
    automaticUpgrade: boolean;
    /**
     * Diferença em minutos da hora local do Engine para a UTC.
     */
    timeZoneBias: number;
}
/**
 * Alerta sobre um Engine gerado pelo monitoramento do
 * sistema.
 */
interface EngineAlert {
    /**
     * Nível de severidade do
     * alerta para o funcionamento do sistema.
     */
    severity: SeverityLevelType;
    /**
     * Código que permite identificar este alerta programaticamente. A relação
     * dos códigos dos alertas emitidos pelo sistema pode ser obtida em
     * {@link module :@nginstack/engine/lib/monitoring/AlertCodes}.
     */
    code: string;
    /**
     * Mensagem descritiva do alerta.
     */
    message: string;
    /**
     * Identificador único do Engine que emitiu o alerta.
     */
    engineId: string;
}
import SeverityLevel = require('./SeverityLevel.js');
