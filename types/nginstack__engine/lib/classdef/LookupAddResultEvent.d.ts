export = LookupAddResultEvent;
/**
 * Evento emitido para cada registro que satisfaz uma pesquisa lookup, permitindo ao desenvolvedor
 * decidir se o registro deve ou não ser incluído no resultado da pesquisa.
 * @param {string} type Tipo do evento que será criado.
 * @constructor
 * @extends FieldEvent
 * @example
 *  field.on('lookupAddResult', function (evt) {
 *    return !evt.data.uf || evt.key.uf === evt.data.uf;
 *  })
 */
declare function LookupAddResultEvent(type: string): void;
declare class LookupAddResultEvent {
    /**
     * Evento emitido para cada registro que satisfaz uma pesquisa lookup, permitindo ao desenvolvedor
     * decidir se o registro deve ou não ser incluído no resultado da pesquisa.
     * @param {string} type Tipo do evento que será criado.
     * @constructor
     * @extends FieldEvent
     * @example
     *  field.on('lookupAddResult', function (evt) {
     *    return !evt.data.uf || evt.key.uf === evt.data.uf;
     *  })
     */
    constructor(type: string);
    /**
     * Chave ou identificador do registro encontrado na pesquisa lookup.
     * @type {number}
     */
    key: number;
    /**
     * Classe do registro indicado por {@link #key}.
     * @type {number}
     */
    classKey: number;
    /**
     * Informações complementares associadas à chave indicada por {@link #key}. Essas informações
     * são geradas pelos scripts de x-finder e constam na emissão do evento apenas para consulta
     * e geração de logs. Alterar o valor desta propriedade não irá modificar o valor apresentado
     * ao usuário. Modificações neste valor podem ser realizadas apenas pelos scripts de x-finder.
     * @type {string}
     */
    complement: string;
    /**
     * Indica se o registro deve ser exibido na pesquisa lookup realizada. Utilizado apenas para
     * compatibilizar a nova API de eventos com a antiga.<br>
     * Na nova API de eventos, prefira utilizar o método
     * {@link module:@nginstack/engine/lib/event/Event#preventDefault} para indicar que o registro deve
     * ser filtrado, ou retorne false.
     * @type {boolean}
     */
    mustAdd: boolean;
    /**
     * Estrutura do parâmetro findResult da API antiga de eventos. Utilizado apenas para compatibilizar
     * a nova API de eventos com a antiga.
     * @type {{key: number, classKey: number, complement: string}}
     * @deprecated Utilize {@link #key}, {@link #classKey} e {@link #complement}.
     * @private
     */
    private findResult_;
}
