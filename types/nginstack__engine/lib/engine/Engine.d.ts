export = Engine;
/**
 * @typedef {import('../progress/ProgressMonitor')} ProgressMonitor
 * @private
 */
/**
 * @typedef {import('../session/SessionManager')} SessionManager
 * @private
 */
/**
 * Representa o Engine em execução. Tem a finalidade de agrupar os componentes
 * globais e comuns a todos os ambientes JavaScript.
 *
 * Esta classe não possui construtor, estando disponível apenas através da variável
 * global "engine".
 * @constructor
 */
declare function Engine(): void;
declare class Engine {
    /**
     * Monitor do progresso das tarefas em execução dos threads ativos.
     * @type {ProgressMonitor}
     * @see ProgressMonitor
     */
    progressMonitor: ProgressMonitor;
    /**
     * Gerenciador de sessões JavaScript do Engine.
     * @type {SessionManager}
     * @see SessionManager
     */
    sessionManager: SessionManager;
    /**
     * Id que identifica de forma única o servidor Engine que está executando
     * este script.
     * @type {string}
     */
    instanceId: string;
    /**
     * Identificador do processo do servidor engine em execução.
     * @type {number}
     */
    processId: number;
    /**
     * Informa o tamanho dos blocos de chaves reservados. O Engine mantém localmente
     * uma reserva de chaves novas para serem usadas na criação de novos registros.
     * Quando essa reserva fica menor do que o valor de keyCacheRange,
     * o Engine aloca no Servidor da Base um novo bloco de chaves
     * @type {number}
     */
    keyCacheRange: number;
    /**
     * O número da versão do servidor Engine.
     * @type {string}
     */
    version: string;
    /**
     * Objeto com propriedades da versão do Engine.
     * @typedef {Object} VersionInfo
     * @property {string} fileVersion
     * @property {string} legalCopyright
     * @property {string} companyName
     */
    /**
     * Propriedades da versão definidas no resource do executável.
     * @type {VersionInfo}
     * @see module:@nginstack/engine/lib/engine/Engine~VersionInfo
     */
    versionInfo: VersionInfo;
    /**
     * Objeto com informações do ambiente Java integrado ao Engine via JNI.
     * @typedef {Object} JavaInfo
     * @property {string} version Versão do runtime Java obtido a partir da propriedade de sistema
     * "java.version".
     * @property {string} home  Diretório de instalação do Java obtido a partir da propriedade de
     * sistema "java.home".
     * @property {string} vendor Fornecedor do runtime Java obtido a partir da propriedade de
     * sistema "java.vendor".
     */
    /**
     * Objeto contendo informações do ambiente Java integrado ao Engine via JNI.
     *
     * As propriedades do objeto estarão vazias caso não haja um Java instalado no sistema operacional
     * ou se a versão instalada não for compatível com o sistema.
     * @example
     * if (engine.java.version) {
     *   logger.info('Java "%s" do fornecedor "%s" detectado pelo Engine em "%s", [
     *     engine.java.version, engine.java.vendor, engine.java.home]);
     * } else {
     *   logger.info('Não foi encontrada uma instalação do Java compatível com o sistema.')
     * }
     * @type {JavaInfo}
     * @see module:@nginstack/engine/lib/engine/Engine~JavaInfo
     */
    java: JavaInfo;
    /**
     * Nome de identificação da plataforma. Possíveis valores são 'win32' e 'linux'.
     * @type {string}
     */
    platform: string;
    /**
     * Nome de identificação da arquitetura alvo de processador do executável. Possíveis valores são
     * 'x64' e 'ia32'.
     * @type {string}
     */
    arch: string;
    /**
     * Diretório onde são armazenados os arquivos de dados permanentes do Engine.
     * Nos cenários mais comuns, equivale ao diretório onde o Engine está instalado, mas isso não é
     * obrigatório em cenários de uso mais avançadas. O caminho retornado
     * é terminado por um caractere separador de Paths.
     * @type {string}
     * @deprecated Utilize {@link #dataDir} ou {@link #programDir}.
     */
    applicationPath: string;
    /**
     * Diretório onde são armazenados os arquivos de dados permanentes do Engine. Ele é definido por
     * meio do parâmetro de linha de comando passado na inicialização do Engine `--appdatadir` ou
     * da variável de ambiente `NGIN_APP_DATA_DIR`. Se não for informado, é usado o diretório
     * onde o Engine está instalado. Também ele será o diretório corrente do Engine.
     * @type {string}
     */
    dataDir: string;
    /**
     * Objeto representando um mapa com as variáveis de ambiente do sistema. Uma eventual alteração em
     * uma de suas propriedades por um script fica restrita a sessão em execução, não se refletindo nas
     * variáveis de ambiente do processo do Engine no sistema operacional nem no objeto *env* das demais
     * sessões ativas.
     * @type {Object}
     */
    env: any;
    /**
     * Array contendo os argumentos informados ao executável "engine" quando ele foi iniciado,
     * normalmente passados via linha de comando.
     * @example
     * // Command line: ./engine https://example.com EXAMPLE -nu
     * engine.args[0]; // => 'https://example.com'
     * engine.args[1]; // => 'EXAMPLE'
     * engine.args[2]. // => '-nu'
     * @type {string[]}
     */
    args: string[];
    /**
     * Diretório onde são armazenados os arquivos de logs do Engine. Ele é definido por meio
     * do parâmetro de linha de comando passado na inicialização do Engine `--applogdir` ou
     * da variável de ambiente `NGIN_APP_LOG_DIR`. Se não for informado, é usado o subdiretório logs
     * do diretório definido em {@link #dataDir}.
     * @type {string}
     */
    logDir: string;
    /**
     * Diretório onde estão instalados o Engine, suas bibliotecas e executáveis complementares.
     * Observe que em alguns cenários de uso, ela pode ser diferente de {@link #dataDir}.
     * @type {string}
     */
    programDir: string;
    /**
     * Diretório onde são armazenados os arquivos temporários do Engine. Ele é definido por meio
     * do parâmetro de linha de comando passado na inicialização do Engine `--apptempdir` ou
     * da variável de ambiente `NGIN_APP_TEMP_DIR`. Se não for informado, no Windows é usado
     * o subdiretório *tmp* do diretório definido em {@link #dataDir}, e no Linux é usado
     * um subdiretório de `/var/tmp`.
     * @type {string}
     * @see #smallTempDir
     */
    tempDir: string;
    /**
     * Diretório onde são armazenados os arquivos temporários de tamanho reduzido do Engine.
     * Ele é definido através da mesma configuração de {@link #tempDir}.
     * Se não for informado, seu valor default no Windows é o mesmo de {@link #tempDir},
     * porém no Linux ele é diferente, sendo este um subdiretório de `/tmp`.
     * @type {string}
     * @see #tempDir
     */
    smallTempDir: string;
    /**
     * Nome do arquivo executável do Servidor Engine.
     * @type {string}
     */
    applicationFileName: string;
    /**
     * Data/Hora que o Servidor Engine iniciou.
     * @type {Date}
     */
    startTime: Date;
    /**
     * Endereço IP do Servidor Engine.
     * @type {string}
     */
    localAddress: string;
    /**
     * Nome de Rede do Servidor Engine.
     * @type {string}
     */
    localHost: string;
    /**
     * Porta HTTP do Servidor Engine.
     * @type {number}
     */
    localPort: number;
    /**
     * Retorna um array de objetos com as portas disponíveis no engine, onde,
     * cada objeto informa a porta, endereço e o protocolo usado. As propriedades do objeto são:
     * "port" que retorna a porta, address que retorna o endereço associado a porta
     * e "protocol" que retorna o protocolo daquela porta.
     * @return {Object[]}
     * @example
     *  const ports = engine.getPorts();
     *  if (ports.length > 0) {
     *    return ar[0].port + ' ' + ar[0].protocol + ' ' + ar[0].address
     *  }
     */
    getPorts(): any[];
    /**
     * Cria um novo processo do S.O., executando o aplicativo
     * @param {string} command Comando a ser executado
     * @param {boolean} opt_wait Se "true", a função retorna apenas depois que o processo
     * termina a sua execução.
     * @param {string} opt_commandShow Indica a forma como a janela do processo criado
     * deve ser exibida. Os valores possíveis são HIDE, SHOW, MINIMIZE e MAXIMIZE
     * @return {number} Se wait = true, retorna o código de retorno do processo. Caso
     * contrário, retorna 0 se falhou e diferente de 0 se foi sucesso.
     * @deprecated Utilize {@link module:@nginstack/engine/lib/os/OSApplication}.
     */
    osRun(command: string, opt_wait: boolean, opt_commandShow: string): number;
    /**
     * Configura o engine para chamar o browser em modo kiosk. Por padrão
     * ele está desabilitado.
     * @param {boolean} kioskMode Se true habilita o modo kiosk.
     */
    setKioskMode(kioskMode: boolean): void;
    /**
     * Solicita o reinício do Engine após o delay informado em segundos.
     * @param {number} [delay] Atraso em milissegundos para reiniciar o Engine. Caso não seja
     * informado, será solicitado o reinício imediato.
     */
    restart(delay?: number): void;
    /**
     * Encerra o Engine após o delay informado em segundos.
     * @param {number} [exitCode] Código de saída do Engine para o sistema operacional.
     * @param {number} [delay]  Atraso em milissegundos solicitar o encerramento do Engine. Caso não
     * seja informado, será finalizado imediatamente.
     */
    exit(exitCode?: number, delay?: number): void;
    /**
     * Descarta o cache de informações das capacidades conhecidas dos outros Engines aos quais
     * este Engine se conectou.
     *
     * Este é um método avançado que em situações normais de uso não deve ser utilizado. Ele
     * deve ser empregado apenas quando for conhecido que um Engine remoto tenha sido atualizado e
     * quando as capacidades da nova versão desse Engine são requeridas imediatamente.
     */
    discardEndpointInfoCache(): void;
    /**
     * Verifica se o Engine corrente foi configurado como servidor de borda.
     *
     * Todos os Engines sem acesso direto ao SGBD são considerados servidores de borda por este
     * método, inclusive os Engines clientes instalados em computadores pessoais.
     * @return {boolean} Indica se o Engine remoto está configurado como servidor de borda.
     */
    isEdgeServer(): boolean;
}
declare namespace Engine {
    export { ProgressMonitor, SessionManager, VersionInfo, JavaInfo };
}
type ProgressMonitor = import('../progress/ProgressMonitor');
type SessionManager = import('../session/SessionManager');
/**
 * Objeto com propriedades da versão do Engine.
 */
interface VersionInfo {
    fileVersion: string;
    legalCopyright: string;
    companyName: string;
}
/**
 * Objeto com informações do ambiente Java integrado ao Engine via JNI.
 */
interface JavaInfo {
    /**
     * Versão do runtime Java obtido a partir da propriedade de sistema
     * "java.version".
     */
    version: string;
    /**
     * Diretório de instalação do Java obtido a partir da propriedade de
     * sistema "java.home".
     */
    home: string;
    /**
     * Fornecedor do runtime Java obtido a partir da propriedade de
     * sistema "java.vendor".
     */
    vendor: string;
}
