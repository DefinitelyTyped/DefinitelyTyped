export = OSApplication;
/**
 * O protótipo OSApplication representar uma aplicação do
 *    Sistema Operacional. Ela pode ser usada para criar e matar processos.
 * @param {string} command Caminho do executável. Caso o executável esteja no
 *   PATH do sistema não é necessário informar o caminho completo.
 * @constructor
 */
declare function OSApplication(command: string): void;
declare class OSApplication {
    /**
     * O protótipo OSApplication representar uma aplicação do
     *    Sistema Operacional. Ela pode ser usada para criar e matar processos.
     * @param {string} command Caminho do executável. Caso o executável esteja no
     *   PATH do sistema não é necessário informar o caminho completo.
     * @constructor
     */
    constructor(command: string);
    /**
     * Caminho do diretório de trabalho da aplicação.
     */
    workingDirectory: any;
    /**
     * Identificador do processo. Caso a aplicação não esteja sendo executada o
     * valor desta propriedade será 'undefined'.
     * @return {number} Número identificador do processo.
     */
    getPid(): number;
    /**
     * Indica se a aplicação está sendo executada.
     * @return {boolean} Retorna "true" para indicar que a aplicação está em execução,
     *   retorna "false", caso contrário.
     */
    getIsRunning(): boolean;
    /**
     * Obtém o código de erro retornado pela aplicação ao ser finalizada. Caso a
     * aplicação esteja em execução ou nunca foi executada será retornado
     * 'undefined'.
     * @return {number} código de erro retornado pela aplicação.
     */
    getExitCode(): number;
    /**
     * Caso haja algum erro na execução da aplicação, o valor dessa propriedade será
     * o código do último erro ocorrido. Caso a aplicação esteja em execução ou nunca
     * foi executada, o valor retornado será '0'.
     * @return {number} código de erro retornado pela aplicação.
     */
    getLastErrorCode(): number;
    /**
     * Executa a aplicação de forma assíncrona. A aplicação será finalizada se não houver
     * mais referências a esta instância de OSApplication ou se a sessão do usuário for
     * finalizada. Utilize o método {@link #waitFor} se desejar aguardar a conclusão da
     * execução da aplicação.
     * @param {string} parameters Parâmetros usados para executar a aplicação.
     *    Informe de maneira semelhante ao chamar via prompt do DOS, usando "(aspas)
     *    para parâmetros com espaço.
     * @param {string} commandShow Indica a forma de como a janela a aplicação será
     *    mostrada ao ser executada. Os possíveis valores são: OSApplication.SHOW,
     *    OSApplication.HIDE, OSApplication.MINIMIZE e OSApplication.MAXIMIZE.
     * @return {boolean} Retorna "true", caso a execução da aplicação for bem
     *   sucedida. Retorna "false", caso contrário.
     * @see #startDetached
     */
    start(parameters: string, commandShow: string): boolean;
    /**
     * A criação de um processo desatachado não é mais suportado por este método,
     * sendo o comportamento atual equivalente a chamar o método {@link #start}.
     * Utilize {@link OSApplication.startDetached} caso necessite criar um processo desatachado.
     * @see #start
     * @deprecated Utilize o método estático {@link OSApplication.startDetached}.
     */
    startDetached(parameters: any, commandShow: any): void;
    /**
     * Redireciona a entrada padrão da aplicação em execução para arquivos.
     * Seria o equivalente ao executar: programa.exe < entrada.txt
     * @param {string} inputFileName Nome do arquivo que será utilizado como
     *    entrada padrão para a aplicação.
     */
    redirectStdInput(inputFileName: string): void;
    /**
     * Redireciona a saída padrão da aplicação em execução para arquivos.
     * Seria o equivalente ao executar: programa.exe > saída.txt
     * @param {string} outputFileName Nome do arquivo que será utilizado como
     *    saída padrão para a aplicação.
     */
    redirectStdOutput(outputFileName: string): void;
    /**
     * Redireciona a saída padrão de erros da aplicação em execução para arquivos.
     * @param {string} outputErrorFileName Nome do arquivo que será utilizado como
     *    saída padrão de erro da aplicação.
     */
    redirectStdErrorOutput(outputErrorFileName: string): void;
    /**
     * Finaliza a execução da aplicação.
     * @param {number} [opt_timeout] Tempo limite para a aplicação ser finalizada.
     *   Ao finalizar uma aplicação, ela precisa liberar os recursos que ela aloca.
     *   Ao executar o este método é dado um tempo máximo para aplicação liberar os
     *   recursos, caso o tempo máximo seja excedido a aplicação será fechada de
     *   forma forçada.  O valor default do tempo máximo para fechamento da
     *   aplicação é 10segundos. O valor informado para o parâmetro timeout deve ser
     *   informado em milissegundos.
     * @return {boolean} Retorna "true", caso a aplicação seja finalizada dentro do
     *    tempo limite especificado. Retorna "false", caso contrário.
     */
    terminate(opt_timeout?: number): boolean;
    /**
     * Aguarda a aplicação ser finalizada.
     * Ao chamar este método, o próximo comando não é executado até que a aplicação
     * seja fechada ou exceda o tempo máximo de espera informado.
     * @param {number} [opt_timeout] Tempo máximo de espera para que a aplicação seja
     *     fechada. Se a constante OSApplication.INFINITE_TIMEOUT for informada para
     *     este parâmetro ou este parâmetro for omitido, o método waitFor irá
     *     esperar que aplicação seja fechada.
     * @return {boolean} Retorna "true", caso a aplicação seja fechada dentro do
     * tempo limite especificado. Retorna "false", caso contrário.
     */
    waitFor(opt_timeout?: number): boolean;
}
declare namespace OSApplication {
    let SHOW: string;
    let HIDE: string;
    let MAXIMIZE: string;
    let MINIMIZE: string;
    let INFINITE_TIMEOUT: number;
    /**
     * Executa a aplicação de forma assíncrona. Usando o método estático a aplicação
     * não depende da instância de OSApplication, sendo preferível este uso. Em caso
     * de falha, o valor de retorno será 'undefined'.
     * @param {string} command Caminho do executável. Caso o executável esteja no
     *   PATH do sistema não é necessário informar o caminho completo.
     * @param {string} parameters Parâmetros usados para executar a aplicação.
     *    Informe de maneira semelhante ao chamar via prompt do DOS, usando "(aspas)
     *    para parâmetros com espaço.
     * @param {string} workingDirectory Caminho do diretório de trabalho da aplicação.
     * @return {number} Número identificador do processo.
     * @see OSApplication#startDetached
     */
    function startDetached(command: string, parameters: string, workingDirectory: string): number;
}
