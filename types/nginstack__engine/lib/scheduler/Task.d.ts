export = Task;
/**
 * Classe que cria e agenda tarefas.
 *
 * Todas as tarefas criadas por esta classe passam a ser consideradas internas (locais).
 * Todas as tarefas são do tipo retry, ou seja, em caso de falha serão executadas novamente
 * dentro de 1(um) minuto. As tarefas criadas podem ser vistas no processo
 * "Administração do sistema > Scripts agendados > Agendador de Scripts".
 * @example
 * const task = new Task();
 * task.period = 'DAILY';
 * task.name = 'teste';
 * task.scriptKey = 12345678;
 * task.saveLocally();
 * @constructor
 */
declare function Task(): void;
declare class Task {
    /**
     * Nome da tarefa.
     * @type {string}
     */
    name: string;
    /**
     * Identificador único da tarefa no sistema.
     * @type {string}
     */
    id: string;
    /**
     * Status atual da tarefa. São eles: 'Running', 'Stopped' e 'Aborting'.
     * @type {string}
     */
    status: string;
    /**
     * Define o período em que será executado a tarefa. Função obrigatória
     * para criação da tarefa. São eles: "daily", "monthly", "weekly", "interval", "once" e "yearly".
     * @type {string}
     */
    period: string;
    /**
     * Define a propriedade dia. Se o período a ser executado for semanalmente
     * este parâmetro corresponde ao dia da semana, sendo "0" o valor de domingo,
     * se o período for "mensalmente" então o parâmetro significa o dia do mês
     * que a tarefa será executada, o valor iniciará em "1" normalmente.
     * @type {number}
     * @example
     * task.period = 'MONTHLY';
     * task.day = 1; //dia primeiro do mês
     *
     * task.period = 'WEEKLY';
     * task.day = 0; //domingo
     */
    day: number;
    /**
     * Hora quando a tarefa deverá ser executada.
     *
     * Quando informada uma `string`, atribui-se hora, minuto e segundo no formato hh:mm:ss,
     * quando um `number`, atribui-se apenas a hora.
     * @type {string|number}
     */
    hour: string | number;
    /**
     * Data quando a tarefa deverá ser executada.
     * @type {Date}
     */
    date: Date;
    /**
     * Chave do script que será executado quando a tarefa iniciar.
     * @type {number}
     */
    scriptKey: number;
    /**
     * Caminho completo do script a ser executado na Virtual File System.
     * @type {string}
     * @deprecated Utilize a propriedade {@link #scriptURI}.
     */
    scriptName: string;
    /**
     * URI do script da Virtual File System ou da Union File System que será executado por esta
     * tarefa.
     *
     * A URI deve indicar o esquema da Virtual File System por meio do prefixo "vfs:" ou da
     * Union File System com "ufs:".
     * @example
     * const Task = require('@nginstack/engine/lib/scheduler/Task');
     *
     * const task = new Task();
     * task.name = 'Echo test';
     * task.period = 'interval';
     * task.hour = '00:10';
     * task.scriptURI = 'ufs:/engine_modules/@nginstack/engine/scripts/echo.js';
     * task.setParameters('value', 'ok');
     * task.saveLocally();
     * @type {string}
     */
    scriptURI: string;
    /**
     * Base de dados ao qual esta tarefa pertence.
     * @type {string}
     */
    dbName: string;
    /**
     * Define um parâmetro ou conjunto de parâmetros que serão passados para o script da
     * seguinte forma: nome e valor em uma única string. Para passar mais de um valor
     * é necessário separá-los por \r\n ou 'enter'. Caso seja passado
     * um parâmetro de mesmo nome na função setParameters, o valor passado nessa função
     * será sobrescrito pela setParameters. Não é possível passar objetos por meio desta
     * propriedade.
     * @param {string} parameter
     * @example
     *  task.textParameters = "data = 'value'";
     * @example
     *  tarefa.textParameters = "\
     *    date='19/11/2013'\
     *    data='value'\
     *    data1='33'\
     *  ");
     * @see #setParameters
     */
    textParameters: string;
    /**
     * Data e hora em que a tarefa foi agendada.
     * @type {Date}
     */
    scheduled: Date;
    /**
     * Data e hora do fim da última execução da tarefa.
     * @type {Date}
     */
    lastExecution: Date;
    /**
     * Data e hora do início da próxima execução da tarefa.
     * @type {Date}
     */
    nextExecution: Date;
    /**
     * Id da tarefa que será pré-requisito para a execução desta tarefa.
     * @type {string}
     */
    preRequisiteTask: string;
    /**
     * Indica se a tarefa está habilitada.
     * @type {boolean}
     */
    enabled: boolean;
    /**
     * Chave do usuário que criou a tarefa.
     * @return {number} userKey
     */
    userKey: number;
    /**
     * Salva a tarefa no banco local.
     * @param {string} [userId] Nome ou e-mail do usuário que será utilizado para executar a
     * tarefa. Caso não seja informado, será utilizado o usuário corrente da sessão.
     * @param {string} [password] Senha do usuário que será utilizada para executar a tarefa.
     */
    saveLocally(userId?: string, password?: string): void;
    /**
     * Deleta a tarefa criada.
     */
    del(): void;
    /**
     * Inicia a execução da tarefa.
     */
    start(): void;
    /**
     * Aborta a execução de uma tarefa. A execução do stop é assíncrona, ou seja, o
     * método retorna sem ter garantia que a tarefa foi abortada.
     */
    stop(): void;
    /**
     * Define os parâmetros que serão passados para o script executado pela tarefa.
     * Caso seja passado um parâmetro de mesmo nome na função setTextParameters, o valor será
     * sobrescrito pelo informado pela setParameters. Com essa função é possível passar
     * parâmetros que podem ser serializados como, por exemplo, um DataSet. Não há limite
     * para o número de parâmetros, desde que,
     * passando-se nome e valor, respectivamente, como no exemplo.
     * @param {string} name Nome do parâmetro.
     * @param {...(string|number|boolean|Record<*,*>)} value Valor relativo ao parâmetro antecedente.
     * @return {number} Quantidade de bytes utilizados para armazenar os parâmetros na tarefa.
     * @example
     * task.setParameters('empresa', 'MyCompany');
     * task.setParameters('empresa', 'MyCompany', 'cnpj', 123456, 'idade', 21, 'dataSet', ds);
     * @see #setTextParameters
     */
    setParameters(name: string, value: Array<string | number | boolean | Record<any, any>>): number;
}
