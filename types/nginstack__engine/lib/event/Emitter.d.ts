export = Emitter;
/**
 * Todos os elementos que podem disparar eventos precisam obrigatoriamente ser uma especialização
 * desta nova implementação.
 * @param {string} [opt_parentProperty] Indica qual é a propriedade desta instância
 * que deverá ser utilizada para obter o próximo emitter que receberá o evento, mecanismo
 * conhecido borbulha de eventos. O objeto indicado deverá ser uma instância de
 * {@link Emitter}.
 * @constructor
 */
declare function Emitter(opt_parentProperty?: string): void;
declare class Emitter {
    /**
     * Todos os elementos que podem disparar eventos precisam obrigatoriamente ser uma especialização
     * desta nova implementação.
     * @param {string} [opt_parentProperty] Indica qual é a propriedade desta instância
     * que deverá ser utilizada para obter o próximo emitter que receberá o evento, mecanismo
     * conhecido borbulha de eventos. O objeto indicado deverá ser uma instância de
     * {@link Emitter}.
     * @constructor
     */
    constructor(opt_parentProperty?: string);
    /** @private */
    private parentProperty_;
    /** @private */
    private registeredEventTypes_;
    /** @private */
    private listenersByType_;
    /**
     * Indica como devem ser comparados dois listeners para determinar se eles são iguais. Valores
     * possíveis: ListenerCompareFunctions.STRICT e ListenerCompareFunctions.SOURCE. O tratamento do
     * registro de um listener duplicado é determinada pela propriedade
     * {@link Emitter#DuplicationHandling}.
     * @type {function(function(...*):*, function(...*):*):boolean}
     * @see ListenerCompareFunctions
     * @see #DuplicationHandling
     */
    listenerCompareFunction: (
        arg0: (...args: any[]) => any,
        arg1: (...args: any[]) => any
    ) => boolean;
    /**
     * Indica como deve ser tratada a tentativa de registrar uma função de listener duplicada
     * neste Emitter. Valores possíveis: DuplicationHandling.IGNORE (padrão),
     * DuplicationHandling.ACCEPT e DuplicationHandling.REMOVE.
     * @type {module:@nginstack/engine/lib/event/DuplicationHandling}
     */
    duplicationHandling: any;
    private listeners_;
    /**
     * Registra uma função que deverá ser executada quando o evento indicado por <em>type</em>
     * for emitido. Por padrão, a função será adicionada no final da fila de listeners, sendo executada
     * após a execução dessas funções previamente registradas.
     *
     * Se o <em>listener</em> for adicionado durante a emissão de um evento, ele será desconsiderado
     * nesta emissão e será executado apenas nas emissões seguintes.<br>
     *
     * O comportamento deste emitter ao tentar registrar uma função de listener mais de uma vez é
     * determinado pela propriedade {@link #duplicationHandling}.
     *
     * @param {string} type Tipo de evento que será registrado.
     * @param {function(Event):*} listener Função que será executada quando
     * ocorrer a emissão do evento.
     * @return {Emitter} Esta instância de Emitter, permitindo encadeamento de chamadas.
     * @see #off
     * @see #replaceListeners
     * @example
     * modelDef.on('afterInsert', function (event) {
     *   event.data.setField('codigo', 'Novo cliente');
     * }).on('beforePost', function (event) {
     *   if (event.data.str('codigo').trim() == '') {
     *     throw new Error('O campo código é obrigatório.');
     *   }
     * });
     */
    on(type: string, listener: (arg0: Event) => any): Emitter;
    /**
     * Registra uma função de listener que irá substituir todos os listeners registrados para o tipo
     * de evento indicado por <em>type</em>. A função informada receberá, além do parâmetro
     * <em>event</em>, um segundo parâmetro que será uma função, que ao ser invocada, emitirá o
     * o evento informado para os listeners que foram substituídos.<br>
     *
     * O comportamento deste emitter ao tentar registrar uma função de listener mais de uma vez é
     * determinado pela propriedade {@link #duplicationHandling}.<br>
     *
     * <b>Importante</b>: o uso deste método não é recomendado. Ignorar os listeners registrados
     * previamente por outros desenvolvedores é uma má prática de desenvolvimento e pode gerar
     * inconsistências de dados. Seu uso deve ser restrito à compatibilização de eventos antigos
     * que dependem deste comportamento, que antes eram declarados pelo método "set" da antiga
     * API de Eventos do Engine (classe global Event).
     *
     * @param {string} type Tipo de evento que será registrado.
     * @param {Listener|function(Event, function(Event):*):*} listener
     * Função que será executada quando ocorrer a emissão do evento.
     * @see #off
     * @see #on
     * @example
     *  this.replaceListeners('beforePost', function (event, emit) {
     *    event.data.codigo = 'Novo cliente';
     *    emit(event);
     *  });
     */
    replaceListeners(
        type: string,
        listener: Listener | ((arg0: Event, arg1: (arg0: Event) => any) => any)
    ): void;
    /**
     * Registra um novo tipo de evento, permitindo que ele possa ser utilizado por esta
     * instância de {@link Emitter}. A tentativa de emitir um evento ou listener de
     * um tipo não registrado provocará um erro.
     * @param {string|Array<string>} type Tipo do evento a ser registrado. Também pode ser informado
     * um array de tipos.
     */
    registerEventType(type: string | string[]): void;
    /**
     * Remove o registro de um tipo de evento, bloqueando a utilização nesta
     * instância de {@link Emitter}. A tentativa de emitir um evento ou listener de
     * um tipo não registrado provocará um erro.
     * @param {string|Array<string>} type Tipo do evento a ser bloqueado. Também pode ser informado
     * um array de tipos.
     */
    unregisterEventType(type: string | string[]): void;
    /**
     * Obtém todos os listeners registrados para o tipo de evento informado. O array
     * retornado é uma cópia dos listeners registrados e sua manipulação não alterará a
     * instância desta classe. Para adicionar ou remover uma nova função de listener, utilize
     * os métodos {@link #on} ou {@link #off}.
     * @param {string} [opt_type] Tipo de evento ao qual serão obtidos os EventListeners registrados.
     * @return {Array<Listener>} Todos os listeners registrados neste emitter para o tipo
     * informado. Sempre serão retornadas instâncias de {@link Listener}, por mais que
     * tenham sido registradas funções de listeners nos métodos {@link #on} ou
     * {@link #replaceListeners}. Para obter as funções, acesse a propriedade
     * {@link Listener#handler} dos elementos retornados ou utilize o método
     * {@link #listenerHandlers} para obter a relação de funções. Caso não seja informado,
     * serão retornados todos os listeners.
     * @throws {EventTypeException} Será disparado um erro caso o tipo informado não tenha
     * sido registrado previamente pelo método {@link #registerEventType}.
     * @see #on
     * @see #off
     * @see #listenerHandlers
     */
    listeners(opt_type?: string): Listener[];
    /**
     * Obtém todas as funções de listeners registradas para o tipo de evento informado. O array
     * retornado é uma cópia dos listeners registrados e sua manipulação não alterará a
     * instância desta classe. Para adicionar ou remover uma nova função de listener, utilize
     * os métodos {@link #on} ou {@link #off}.
     * @param {string} type Tipo de evento ao qual serão obtidos os EventListeners registrados.
     * @return {Array<function(Event)>} Todas as funções de listeners registradas
     * neste emitter para o tipo informado.
     * @throws {EventTypeException} Será disparado um erro caso o tipo informado não tenha
     * sido registrado previamente pelo método {@link #registerEventType}.
     * @see #on
     * @see #off
     * @see #listeners
     */
    listenerHandlers(type: string): Array<(arg0: Event) => any>;
    /**
     * Remove uma função de listener previamente adicionada por meio do método
     * {@link #on}.
     *
     * Se uma função de listener for removida durante a emissão de um evento, ela será executada
     * por mais que tenha sido removida. Ou seja, a remoção valerá para as emissões seguintes.
     * @param {string} type Tipo do evento que será removido.
     * @param {Listener|function(Event):*} listener Indica a função de listener
     * a ser removida.
     * @return {Emitter} Esta instância de Emitter, permitindo encadeamento de chamadas.
     * @see #on
     */
    off(type: string, listener: Listener | ((arg0: Event) => any)): Emitter;
    /**
     * Remove todas as funções de listener associadas ao tipo informado. Caso o tipo não seja
     * informado, serão removidas todas as funções de listeners de todos os tipos de eventos.
     * @param {string} [opt_type] Tipo de evento que deverá ter os listeners removidos.
     * @return {Emitter} Esta instância de Emitter, permitindo encadeamento de chamadas.
     */
    offAll(opt_type?: string): Emitter;
    /**
     * Emite o evento informado, executando todas as funções de listeners previamente registradas
     * para o tipo do evento emitido.
     * @param {Event} event Evento a ser emitido.
     * @return {boolean} Retorna a indicação que o evento foi emitido para todos os listeners e não
     * foi solicitado o cancelamento da ação padrão associada ao evento, por meio da execução do
     * método {@link Event#preventDefault}. Caso o evento não possa ser cancelado
     * (@link Event#cancelable}), será retornado sempre true.
     * @throws {EventTypeException} Erro que dispara caso não exista um tipo registrado para manipulação
     * do evento. Eventos aptos a serem manipulados devem ser registrados com o método
     * {@link #registerEventType}.
     */
    emit(event: Event): boolean;
    /**
     * Torna este emitter uma cópia do emitter informado. Os tipos de eventos registrados nesta
     * instância serão preservados e complementados com os existentes em <em>emitter</em>.
     * @param {Emitter} emitter Emitter que terá os eventos copiados.
     * @param {(string|Array<string>)} [opt_type] Tipo do evento a ser copiado. Caso não seja
     * informado, serão copiados os listeners de todos os tipos de evento. Também pode ser
     * informado um array de tipo de eventos a sere copiados.
     */
    assignListeners(emitter: Emitter, opt_type?: string | string[]): void;
    /**
     * Adiciona neste emitter os listeners do emitter informado.
     * @param {Emitter} emitter Emitter que terá os eventos copiados.
     * @param {string} [opt_type] Tipo do evento a ser copiado. Caso não seja informado, serão
     * copiados os listeners de todos os tipos de evento.
     */
    addListenersFromEmitter(emitter: Emitter, opt_type?: string): void;
    /**
     * Elimina os listeners que não satisfaçam a função de filtro.
     * @param {function(Listener):boolean} filterFn Função que indicará quais filtros
     * devem ser mantidos neste emitter. Deverá ser retornado true para indicar que o filtro
     * deve ser preservado.
     * @param {string} [opt_type] Tipo de evento que terá os listeners filtrados. Caso não seja
     * informado, os listeners de todos os tipos de eventos serão filtrados.
     */
    filterListeners(filterFn: (arg0: Listener) => boolean, opt_type?: string): void;
    /**
     * Verifica se há listeners registrados para o tipo de evento informado.
     * @param {string|Array<string>} type Tipo do evento a ser verificado. Também pode ser
     * informado um array de tipos. Neste caso, será retornado true se houver ao menos um listener
     * registrado para um dos tipos informados.
     * @return {boolean} True se houver listeners registrados para o tipo de evento informado.
     */
    hasListeners(type: string | string[]): boolean;
}
import Event = require('./Event.js');
import Listener = require('./Listener.js');
