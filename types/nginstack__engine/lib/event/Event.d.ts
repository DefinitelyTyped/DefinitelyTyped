export = Event;
/**
 * Cria um novo evento do tipo informado.
 * @param {string} type Tipo do evento que será criado.
 * @param {{cancelable: boolean}} [opt_options] Opções do evento a ser criado. Atualmente,
 * é permitido apenas informar a opção <em>cancelable</em> para indicar se o evento pode
 * ser cancelado pelo método {@link #preventDefault}.
 * @constructor
 */
declare function Event(
    type: string,
    opt_options?: {
        cancelable: boolean;
    }
): void;
declare class Event {
    /**
     * Cria um novo evento do tipo informado.
     * @param {string} type Tipo do evento que será criado.
     * @param {{cancelable: boolean}} [opt_options] Opções do evento a ser criado. Atualmente,
     * é permitido apenas informar a opção <em>cancelable</em> para indicar se o evento pode
     * ser cancelado pelo método {@link #preventDefault}.
     * @constructor
     */
    constructor(
        type: string,
        opt_options?: {
            cancelable: boolean;
        }
    );
    /** @private */
    private type_;
    /** @private */
    private timeStamp_;
    /** @private */
    private cancelable_;
    /**
     * Índice do próximo listener a ser executado pelo {@link module:@nginstack/engine/lib/event/Emitter}.
     * @type {number}
     */
    listenerIndex: number;
    /**
     * Objeto que emitiu originalmente este evento. Em um borbulhamento de evento, será o primeiro
     * elemento da borbulha.
     * @type {Object}
     */
    target: any;
    /**
     * Objeto cujos listeners estão sendo processados. Em um borbulhamento de evento, será o elemento
     * atual dentro borbulha.
     * @type {Object}
     */
    currentTarget: any;
    /**
     * Tipo do evento desta instância.
     * @type {string}
     */
    type: string;
    /**
     * Instante em que este evento foi criado. Será a quantidade de milissegundos a partir de
     * 01/01/1970.
     * @type {number}
     */
    timeStamp: number;
    /**
     * Determina se o evento pode ser cancelado por meio da execução do método
     * {@link #preventDefault}.
     * @type {boolean}
     */
    cancelable: boolean;
    /**
     * Determina se a emissão do evento foi interrompida por meio da execução do método
     * {@link #stopImmediatePropagation}.
     * @type {boolean}
     */
    immediateStopped: boolean;
    /**
     * Indica que o método {@link #preventDefault} foi executado durante a emissão de um evento
     * cancelável.
     * @type {boolean}
     */
    defaultPrevented: boolean;
    /**
     * Interrompe a emissão do evento imediatamente, não executando os listeners adicionados
     * no mesmo emissor e o borbulhamento do evento para outros elementos.
     */
    stopImmediatePropagation(): void;
    /** @private */
    private immediateStopped_;
    /**
     * Indica que a ação padrão associada ao evento não deve ser realizada pelo componente que
     * disparou o evento. Apenas alguns eventos utilizam o conceito de ação padrão. Para ver
     * se o evento possui uma ação padrão associada, veja a documentação das classes especializadas
     * de eventos.
     */
    preventDefault(): void;
    /** @private */
    private defaultPrevented_;
}
