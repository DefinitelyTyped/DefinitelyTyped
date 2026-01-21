export = Job;
/**
 * @typedef {import('../io/File')} File
 * @private
 */
/**
 * @typedef {import('../io/MemoryStream')} MemoryStream
 * @private
 */
/**
 * @typedef {import('../dataset/DataSet')} DataSet
 * @private
 */
/**
 * Esta classe é responsável por criar jobs que permitem a execução agendada
 * de scripts.
 * @param {DataSet|File|MemoryStream} [source] Objeto opcional utilizado
 * para restaurar a tabela. Utilize-o quando quiser recuperar um Job persistido
 * anteriormente pelos métodos {@link #saveToStream} ou {@link saveToTable}.<br>
 * <b>Importante:</b> classe em construção. Não a utilize.
 * @see Scheduler
 * @constructor
 */
declare function Job(source?: DataSet | File | MemoryStream): void;
declare class Job {
    /**
     * @typedef {import('../io/File')} File
     * @private
     */
    /**
     * @typedef {import('../io/MemoryStream')} MemoryStream
     * @private
     */
    /**
     * @typedef {import('../dataset/DataSet')} DataSet
     * @private
     */
    /**
     * Esta classe é responsável por criar jobs que permitem a execução agendada
     * de scripts.
     * @param {DataSet|File|MemoryStream} [source] Objeto opcional utilizado
     * para restaurar a tabela. Utilize-o quando quiser recuperar um Job persistido
     * anteriormente pelos métodos {@link #saveToStream} ou {@link saveToTable}.<br>
     * <b>Importante:</b> classe em construção. Não a utilize.
     * @see Scheduler
     * @constructor
     */
    constructor(source?: DataSet | File | MemoryStream);
    /**
     * Calcula quando será a próxima execução do job e define a propriedade
     * {@link #nextExecution} com a data e hora calculada.
     * @example
     * var job = new Job();
     * job.time = '06:00';
     * job.frequency = 'daily';
     * job.calcNextExecution();
     * var nextExecution = job.nextExecution;
     */
    calcNextExecution(): void;
    /**
     * Carrega um job a partir de um objeto do tipo MemoryStream ou File.
     * @param {MemoryStream|File} stream Objeto a partir do qual o job será criado.
     */
    loadFromStream(stream: MemoryStream | File): void;
    /**
     * Persiste este job em um objeto do tipo MemoryStream ou File.
     * @param {MemoryStream|File} stream Objeto onde o job será gravado.
     */
    saveToStream(stream: MemoryStream | File): void;
    /**
     * Restaura o job a partir de um DataSet.
     * @param {DataSet} table DataSet a partir do qual o job será restaurado.
     */
    loadFromTable(table: DataSet): void;
    /**
     * Persiste este job em um DataSet. O dataSet deve ter a mesma estrutura da
     * tabela definida pela classe Script Agendados (-1898145133).
     * @param {DataSet} table DataSet no qual o job será persistido.
     */
    saveToTable(table: DataSet): void;
    /**
     * Chave identificadora do job no banco de dados.
     * @type {number}
     * @readonly
     */
    readonly key: number;
    /**
     * Chave da classe do job.
     * @type {number}
     */
    classKey: number;
    /**
     * Código identificador e único do job.
     * @type {string}
     * @readonly
     */
    readonly id: string;
    /**
     * Nome da job.
     * @type {string}
     */
    name: string;
    /**
     * String contendo o estado atual do job. Valores possíveis:
     * <ul>
     * <li>'aborting'</li>
     * <li>'running'</li>
     * <li>'stopped'</li>
     * </ul>
     * @type {string}
     * @readonly
     */
    readonly status: string;
    /**
     * Chave do estado em que o job se encontra. Será retornado um registro da
     * classe Status de scripts agendados (-1898145055).
     * @type {number}
     * @readonly
     */
    readonly statusKey: number;
    /**
     * Indica a frequência em que o job deverá ser executado. Valores possíveis:
     * <ul>
     * <li>'once'</li>
     * <li>'interval'</li>
     * <li>'daily'</li>
     * <li>'weekly'</li>
     * <li>'monthly'</li>
     * <li>'yearly'</li>
     * </ul><br>
     * <b>Importante:</b> jobs com frequência once serão excluídos automaticamente após
     * uma execução bem sucedida.
     * @type {string}
     * @example
     *  var job = new Job();
     *  job.frequency = 'daily';
     */
    frequency: string;
    /**
     * Chave da frequência em que o job será executado. Será retornado um
     * registro da classe Frequências de scripts agendados (-1898145108).
     * @type {number}
     * @example
     *  var job = new Job();
     *  job.frequencyKey = -1898145061; // Diário;
     */
    frequencyKey: number;
    /**
     * Dia da semana em que o job será executado. Valores possíveis:
     * <ul>
     * <li>0: Domingo</li>
     * <li>1: Segunda</li>
     * <li>2: Terça</li>
     * <li>3: Quarta</li>
     * <li>4: Quinta</li>
     * <li>5: Sexta</li>
     * <li>6: Sábado</li>
     * </ul>
     * @type {number}
     * @example
     *  var job = new Job();
     *  job.weekDay = (new Date).getDay();
     */
    weekDay: number;
    /**
     * Dia do mês em que o job deve ser executado. Caso o mês não possua
     * o dia informado o job será executado no ultimo dia do mês.
     * @type {number}
     * @example
     *  var job = new Job();
     *  job.monthDay = 15;
     */
    monthDay: number;
    /**
     * Data e hora da próxima execução do job.
     * @type {Date}
     * @example
     *  var job = new Job();
     *  job.dateTime = (new Date) + 31;
     */
    dateTime: Date;
    /**
     * Data da próxima execução do job.
     * @type {Date}
     */
    date: Date;
    /**
     * Hora em que o job será executado.
     * @type {string}
     * @example
     *  var job = new Job();
     *  job.hour = '06:00';
     */
    hour: string;
    /**
     * Chave ou URI do script a ser executado.
     * @type {string|number}
     * @example
     *  var job = new Job();
     *  job.scriptURI = -1898145715; //Engine/scripts/system/echo.js;
     */
    scriptURI: string | number;
    /**
     * Chave do usuário utilizado na execução do job. Todas as consultas e
     * alterações no banco de dados serão registrados em nome deste usuário.
     * @type {number}
     * @readonly
     */
    readonly userKey: number;
    /**
     * Id do token de autenticação utilizado para autorizar este Job. O Job deve
     * ser autorizado pelos métodos {@link Security#authorizeJob} ou
     * {@link Session#authorizeJob}.
     * @type {string}
     * @readonly
     */
    readonly authTokenId: string;
    /**
     * Id do job que deve ser concluído com sucesso antes de iniciar este job.
     * @type {string}
     */
    prerequisiteTask: string;
    /**
     * Indica qual Engine deve executar este Job. Deve ser informada uma chave da
     * classe Engines (-1898145089).
     * @type {number}
     */
    host: number;
    /**
     * Data e hora em que o job foi criado.
     * @type {Date}
     * @readonly
     */
    readonly creation: Date;
    /**
     * Data e hora em que o job foi agendado.
     * @type {Date}
     * @readonly
     */
    readonly scheduled: Date;
    /**
     * Data e hora de quando ocorrerá a próxima execução.
     * @type {Date}
     * @readonly
     */
    readonly nextExecution: Date;
    /**
     * Data e hora em que a execução foi iniciada.
     * @type {Date}
     * @readonly
     */
    readonly started: Date;
    /**
     * Data e hora em que a execução foi concluída.
     * @type {Date}
     * @readonly
     */
    readonly finished: Date;
    /**
     * Indica se a ultima execução foi concluída com sucesso. True, se concluiu com
     * sucesso.
     * @type {boolean}
     * @readonly
     */
    readonly finishedSuccessfully: boolean;
    /**
     * Resultado da ultima execução do job. O resultado de um job será o último
     * valor deixado na pilha pelo script.
     * @type {string}
     * @readonly
     */
    readonly lastResult: string;
    /**
     * Define se o job está habilitado para execução. True, se estiver habilitada.
     * @type {boolean}
     */
    enabled: boolean;
}
declare namespace Job {
    export { File, MemoryStream, DataSet };
}
type File = import('../io/File');
type MemoryStream = import('../io/MemoryStream');
type DataSet = import('../dataset/DataSet');
